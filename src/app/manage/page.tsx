
'use client';
import { useState } from "react";
// import '../login/loginpage.css';
import './room.css';
function Room() {

    const [room,setRoom]=useState("");
    const [ds,setds]=useState("");
    const [ss,setss]=useState("");

    const handleClick = () => {
        console.log(room,ss,ds);
    }

    return (
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
        <hr></hr>
        </div>
    );
}

export default Room;
