
'use client';
import { useState } from "react";
// import '../login/loginpage.css';
import './room.css';
function Room() {

    const [room,setRoom]=useState("");
    const [ds,setds]=useState("");
    const [ss,setss]=useState("");
    const [dept,setDept]=useState("");
    const [sem,setSem]=useState("");
    const [rollno,setrollno]=useState("");

    const handleClick = () => {
        console.log(room,ss,ds);
    }

    const add = () => {
        console.log(dept,sem,rollno);
    }

    return (
        <div>
            <div className="room-allocate">
                <div className="container">
                    <div>
                    <h1>Room Allocation</h1>
                    </div>
                    <div className="room">
                        <label>Room Number</label>
                        <input type="text" name="room" id="room" value={room} onChange={event=>{setRoom(event.target.value)}} />
                    </div>
                    <div className="dseat">
                        <label>Double Seat</label>
                        <input type="number" name="Double" id="double" value={ds} onChange={event=>{setds(event.target.value)}} />
                    </div>
                    <div className="sseat">
                        <label>Single Seat</label>
                        <input type="number" name="Single" id="single" value={ss} onChange={event=>{setss(event.target.value)}} />
                    </div>
                    <div className='login-form-button'>
                  <button type="submit" onClick={handleClick}><b>Submit</b></button>
                </div>
            </div>
            <div className="student">
                <div className="container2">
                <div>
                    <h1>Student's Data</h1>
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
                        <input type="number" name="rollno" id="rollno" value={rollno} onChange={event=>{setrollno(event.target.value)}} />
                    </div>
                    <div className='login-form-button'>
                  <button type="submit" onClick={add}><b>Add</b></button>
                </div>
                </div>
            </div>
        </div>

        </div>
    );
}

export default Room;
