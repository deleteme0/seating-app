"use client"; 
import { useEffect, useState } from 'react';
import SearchBar from './searchbar';
import ShowRooms from './showrooms';


export default function Selection() {

    const [count,setCount] = useState(0)
    const [students,setStudents] = useState([])
    const [rooms,setRooms] = useState([])

    const local = true;
    //const [students,setStudents] = useState([])
    //const [rooms,setRooms] = useState([])

    useEffect(()=>{

        if (local == true){
            setStudents([
                {
                    dept: "3CSE",
                    use:false,
                    rollnos: [1,2,3,4,5,6,7,8,9,10]
                },
                {
                    dept: "3ECE",
                    use:false,
                    rollnos: [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
                },
                {
                    dept: "3ADS",
                    use:false,
                    rollnos: [2,3,4,5,6,7,8,9,10]
                }
            ]
            )
            setRooms(
                [
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
                            [{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}]
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
            return;
        
        }

        async function doGet(){
            let gstudents = await fetch(process.env.NEXT_PUBLIC_API+"/manage/student",{
                method:"GET"
            })
            const gdata = await gstudents.json();
            
            setStudents(gdata);
        }

        async function doGetRooms() {

            
            
            let grooms = await fetch(process.env.NEXT_PUBLIC_API+'/manage/hall',{
                method:"GET"
            })

            const data = await grooms.json();
            setRooms(data);
        }
        doGet();
        doGetRooms();
    },[])
    
    //temp

    return (
        <div className=" bg-white text-black align-bottom space-y-5">
            <SearchBar students={students} setStudents={setStudents} setCount={setCount}  setRooms={setRooms} rooms={rooms}></SearchBar><br></br>
            <p>Students count {count}</p>
            <div>
            <ShowRooms rooms={rooms} setRooms={setRooms}></ShowRooms>
            </div>
            <a className=" bg-azure-500 size-4" href="./manage">Add depts or rooms</a>
        </div>
    )
}