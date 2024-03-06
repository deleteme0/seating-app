
'use client';
import { useEffect, useState } from "react";
// import '../login/loginpage.css';
import './room.css';
import createMat from "../components/createmat";
import MatStyle from "../components/matstyle";
function Room() {

    const [roomno,setRoomno]=useState("");
    const [ds,setds]=useState("");
    const [ss,setss]=useState("");
    const [lim,setlim]=useState("");

    const [room,setRoom] = useState([]);

    const [dept,setDept]=useState("");
    const [sem,setSem]=useState("");
    const [rollno,setrollno]=useState("");

    useEffect(()=>{

        const nowroom = createMat(lim,ds,ss);

        if (nowroom != -1){
            setRoom(nowroom)
        }else{
            setRoom([])
        }
    },[ds,ss,lim])

    const handleClick = () => {
        //room
        console.log(roomno,ss,ds);

        async function addRoom(){
            const ret = await fetch(process.env.NEXT_PUBLIC_API+"/manage/hall",{
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  body: JSON.stringify({
                    roomno:roomno,
                    single:ss,
                    double:ds
                  })
            })

            if (ret.status == 200){
                alert("Added succesfully");
            }else{
                alert("Alreasdy exists");
            }
        }

        addRoom();
        setRoomno("");
        setds("");
        setss("");
    }

    const add = () => {
        //students
        console.log(dept,sem,rollno);
        
        let rollnos = rollno.split(',')
        let l=[]
        
        rollnos.forEach(element => {
            let val = element.split('-');
            
            if (val.length == 1){
                l.push(parseInt(val[0]))
                return;
            }
            for(var i=parseInt(val[0]);i<=parseInt(val[1]);i++){
                l.push(i);
            }

        })
        console.log("l is")
        console.log(l);
        async function addDept(){
            var ret = await fetch(process.env.NEXT_PUBLIC_API+'/manage/student',{
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  body: JSON.stringify({
                    dept:dept,
                    rollnos:l
                  })
            })

            if (ret.status == 200){
                alert("Added successfully")
            }else{
                alert("Already exists")
            }
        }
        addDept();
        setDept("");
        setSem("");
        setrollno("");
    }

    return (
        <div className="body">
            <div className="room-allocate">
                <div className="container">
                    <div>
                    <h1>Room Allocation</h1>
                    </div>
                    <div className="room">
                        <label>Room Number</label>
                        <input type="text" name="room" id="room" value={roomno} onChange={event=>{setRoomno(event.target.value)}} />
                    </div>
                    <div className="dseat">
                        <label>Row</label>
                        <input type="number" name="Double" id="double" value={ds} onChange={event=>{setds(event.target.value)}} />
                    </div>
                    <div className="sseat">
                        <label>Col</label>
                        <input type="number" name="Single" id="single" value={ss} onChange={event=>{setss(event.target.value)}} />
                    </div>
                    <div className="sseat">
                        <label>Limit</label>
                        <input type="number" name="Single" id="single" value={lim} onChange={event=>{setlim(event.target.value)}} />
                    </div>

                    <MatStyle rooms={room} setRoom={setRoom} ></MatStyle>
                    <div className='login-form-button'>
                  <button type="submit" onClick={handleClick}><b>Submit</b></button>
                </div>
            </div>
            <div className="student">
                <div className="container2">
                <div>
                    <h1>Students Data</h1>
                    </div>
                    <div className="dept">
                        <label>Department</label>
                        <input type="text" name="dept" id="dept" value={dept} onChange={event=>{setDept(event.target.value)}} />
                    </div>
                    <div className="sem">
                        <label>Semester</label>
                        <input type="number" name="sem" id="sem" value={sem} onChange={event=>{setSem(event.target.value)}} />
                    </div>
                    <div className="rollno">
                        <label>Roll No</label>
                        <input type="text" name="rollno" id="rollno" value={rollno} onChange={event=>{setrollno(event.target.value)}} />
                    </div>
                    <div className='login-form-button'>
                  <button type="submit" onClick={add}><b>Add</b></button>
                </div>
                </div>
            </div>
        </div>
        <a className=" goSelect" href="./selection">Go to selection</a>
        </div>
    );
}

export default Room;
