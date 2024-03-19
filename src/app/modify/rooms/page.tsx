"use client";
import { useEffect, useState } from 'react';
const axios = require('axios').default;
//import { useHistory } from 'react-router-dom'; // Assuming you are using React Router
import { doDeleteRooms, doGetRooms, doPutRooms } from '@/app/utililties/webutils';
import createMat from '@/app/components/createmat';
import { act } from 'react-dom/test-utils';

export default function About() {

    const [rooms,setRooms] = useState([])
    const [activeRoom,setActiveRoom] = useState(-1)
    const [currRoom,setCurr] = useState({benches:[],roomno:-1})

    const handlechange = (event) =>{
        setActiveRoom(event.target.value)
    }

    useEffect(()=>{
        async function getRooms() {
            // let grooms = await fetch(process.env.NEXT_PUBLIC_API+'/manage/hallnew',{
            //     method:"GET"
            // })

            // const data = await grooms.json();
            const data = await doGetRooms();
            console.log(data);
            setRooms(data);
        }
        getRooms();
    },[])

    useEffect(()=>{
        
        if (activeRoom == -1){
            return
        }
        if (rooms.length < 1){
            return
        }

        var n = structuredClone(rooms[activeRoom])

        if (n == -1){
            n = [];
        }

        // n.benches.forEach((rows) =>{

        //     rows.forEach((bench)=>{

        //         while(bench.length < n.lim){
        //             bench.append({dept:"",rollno:"",selected:1})
        //         }
        //         console.log(bench);
        //     })
        // })
        console.log(n.benches)
        for(let i =0;i<n.benches.length;i++){
            
            for(let j=0;j<n.benches[i].length;j++){
                
                console.log(n.benches[i][j])
                
                while(n.benches[i][j].length < n.lim){
                    n.benches[i][j].push({dept:"",rollno:"",selected:0})
                    
                }
            }
        }
        console.log(n.benches)

        setCurr(n);
        console.log(currRoom)
    },[activeRoom,rooms])

    const handleClick= (i,j,k) =>{

        var myroom = structuredClone(currRoom);
        console.log(myroom)
        myroom.benches[i][j][k].selected = myroom.benches[i][j][k].selected == 1 ? 0 : 1

    

        setCurr(myroom);

        
    }

    const handleSave = () =>{

        console.log("click")
        var myrooms = rooms.slice();

        var myRoom = structuredClone(currRoom)

            for(var i =0;i<myRoom.benches.length;i++){
                for(var j=0;j<myRoom.benches[i].length;j++){
                    // var cnt = 0;
                    // for(var k=0;k<myRoom[i][j].length;j++){

                    //     if (myRoom[j][j][k].selected == 0){
                    //         cnt += 1;
                    //     }
                    // }
                    myRoom.benches[i][j] = myRoom.benches[i][j].filter((element)=> element.selected == 1).slice()
                }
            }

        console.log(myRoom)

        myrooms[activeRoom] = structuredClone(myRoom)

        setRooms(myrooms);

        if (currRoom.roomno == -1){
            alert("Select a room");
            return
        }

        doPutRooms(myRoom.roomno,myRoom.benches);


    }

    const handleDelete = async() =>{

        async function dothat() {
            await doDeleteRooms(rooms[activeRoom].roomno)
        }

        await dothat()

        async function getRooms() {
            // let grooms = await fetch(process.env.NEXT_PUBLIC_API+'/manage/hallnew',{
            //     method:"GET"
            // })

            // const data = await grooms.json();
            const data = await doGetRooms();
            console.log(data);
            setRooms(data);
        }
        await getRooms();
    }

    

    return (
        <div className=' flex flex-col align-middle text-center  text-green-500 '>
here
                    <select onChange={handlechange} value={activeRoom}className="selections" name="selectedroom" id="roomselect">
                        <option value="-1" disabled hidden>--Select--</option>
                        {rooms.map(
                            (each: any, i: any) => (
                                <option key={"somekey"+i} value={i}>{each.roomno}</option>
                            )
                        )}
                    </select>

            {
            currRoom.benches.length > 0 &&
            currRoom.benches.map((row,i) =>(
            <div key={"row"+i} className=" flex flex-row space-x-3  " ><div className=" " >{i+1}</div>
            {row.map((bench,j) =>(
                <div key={"bench"+i+j} className="flex flex-row p-1 bg-gray-600 rounded space-x-1 border-rose-600  " > 
                
                {bench.map((seat,k) =>(
                    <button className="  " onClick={()=>{handleClick(i,j,k)}}  key={"thisis"+i+j+k} style={{backgroundColor: seat.selected == 0 ? "indianred" : "powderblue" }}>seat</button>
                ))}
                </div>
            ))}
            </div>
        ))
        }
        <div>
        <button onClick={handleSave} hidden={currRoom.roomno == -1} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Save</button>
        <button onClick={handleDelete}  hidden={currRoom.roomno == -1} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Delete Room</button>
        </div>
        {activeRoom}
        </div>
  );
}