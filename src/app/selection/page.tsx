"use client"; 
import { useEffect, useState } from 'react';
import SearchBar from './searchbar';
import ShowRooms from './showrooms';

export default function Selection() {

    const [count,setCount] = useState(0)
    const [rooms,setRooms] = useState([
        {
            roomno: 102,
            use: false,
            single:10,
            singletaken:4,
            doublefull:10,
            doublehalf:3,
            doubletaken:6,
            benches:[
                [{dept:"",rollno:"",selected:0}],
                [{dept:"",rollno:"",selected:0}],
                [{dept:"",rollno:"",selected:0}],
                [{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}],
                [{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}],
                [{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}],
                [{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}],
                [{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}],
            ]
        },
        {
            roomno: 105,
            use: false,
            single:10,
            singletaken:4,
            doublefull:10,
            doublehalf:3,
            doubletaken:6,
            benches:[
                [{dept:"",rollno:"",selected:0}],
                [{dept:"",rollno:"",selected:0}],
                [{dept:"",rollno:"",selected:0}],
                [{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}],
                [{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}],
                [{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}],
                [{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}],
                [{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}],
            ]
        },
        {
            roomno: 107,
            use: false,
            single:10,
            singletaken:4,
            doublefull:10,
            doublehalf:3,
            doubletaken:6,
            benches:[
                [{dept:"",rollno:"",selected:0}],
                [{dept:"",rollno:"",selected:0}],
                [{dept:"",rollno:"",selected:0}],
                [{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}],
                [{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}],
                [{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}],
                [{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}],
                [{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}],
            ]
        },
        {
            roomno: 108,
            use: false,
            single:10,
            singletaken:4,
            doublefull:10,
            doublehalf:3,
            doubletaken:6,
            benches:[
                [{dept:"",rollno:"",selected:0}],
                [{dept:"",rollno:"",selected:0}],
                [{dept:"",rollno:"",selected:0}],
                [{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}],
                [{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}],
                [{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}],
                [{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}],
                [{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}],
            ]
        },
        ]
    )

    //temp

    return (
        <div className=" bg-white text-black align-bottom space-y-5">
            <SearchBar setCount={setCount}  setRooms={setRooms} rooms={rooms}></SearchBar><br></br>
            <p>Students count {count}</p>
            <div>
            <ShowRooms rooms={rooms} setRooms={setRooms}></ShowRooms>
            </div>
        </div>
    )
}