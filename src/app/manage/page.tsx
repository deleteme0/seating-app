
'use client';
import { useState } from "react";
import '../login/loginpage.css';
import './room.css';
function Room() {

    const [room,setRoom]=useState("");
    const [ds,setds]=useState("");
    const [ss,setss]=useState("");

    const handleClick = () => {
        console.log(room,ss,ds);
        // username = "abv";
        //history.push('/selectpage'); // Redirect to the selectpage route
      }
    


    return (
        <div className="body">
        <div className="container">
            <div>
            <h1>Room Allocation</h1>
            </div>
            <div className="room">
                <label>Rooms:</label>
                <input type="text" name="room" id="room" value={room} onChange={event=>{setRoom(event.target.value)}} />
            </div>
            <div className="seat">
                <label>Double Seat:</label>
                <input type="text" name="Double" id="double" value={ds} onChange={event=>{setds(event.target.value)}} />
                <label>Single Seat:</label>
                <input type="text" name="Single" id="single" value={ss} onChange={event=>{setss(event.target.value)}} />
            </div>
            <button onClick={handleClick}>Submit</button>
        </div>
        </div>
    );
}

export default Room;
