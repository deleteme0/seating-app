
'use client';
import { useState } from "react";

function Room() {

    const [room,setRoom]=useState("");
    
    return (
        
        <div className="container">
            <div className="room">
                <label>Rooms:</label>
                <input type="text" name="room" id="room" value={room} onChange={event=>{setRoom(event.target.value)}} />
            </div>
        </div>
    );
}

export default Room;
