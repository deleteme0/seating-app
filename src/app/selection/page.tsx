"use client"; 
import { useEffect, useState } from 'react';
import SearchBar from './searchbar';
import ShowRooms from './showrooms';
import PdfMaker from './pdfmaker';
import './homePageLooks.css';
import MatStyle from '../components/matstyle';
import { doGetRooms,doGetStudents } from '../utililties/webutils';

export default function Selection() {

    const [count,setCount] = useState(0)
    const [students,setStudents] = useState([])
    const [rooms,setRooms] = useState([])
    const [skipbench,setSkipBench] = useState(false);

    const local = false;
    //const [students,setStudents] = useState([])
    //const [rooms,setRooms] = useState([])

    useEffect(()=>{

        if (local){
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
                        capacity:20,
                        singletaken:4,
                        doublefull:10,
                        doublehalf:3,
                        doubletaken:6,
                        benches:[
                            [[{dept:"",rollno:"",selected:0}],
                            [{dept:"",rollno:"",selected:0}],
                            [{dept:"",rollno:"",selected:0}]],
                            [[{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}],
                            [{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}],
                            [{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}]],
                            [[{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}],
                            [{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}],
                            [{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}]]
                        ]
                    },
                    {
                        roomno: 105,
                        use: false,
                        single:10,
                        capacity:20,
                        singletaken:4,
                        doublefull:10,
                        doublehalf:3,
                        doubletaken:6,
                        benches:[
                            [[{dept:"",rollno:"",selected:0}],
                            [{dept:"",rollno:"",selected:0}],
                            [{dept:"",rollno:"",selected:0}]],
                            [[{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}],
                            [{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}],
                            [{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}]],
                            [[{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}],
                            [{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}],
                            [{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}]]
                        ]
                    },
                    {
                        roomno: 107,
                        use: false,
                        single:10,
                        capacity:20,
                        singletaken:4,
                        doublefull:10,
                        doublehalf:3,
                        doubletaken:6,
                        benches:[
                            [[{dept:"",rollno:"",selected:0}],
                            [{dept:"",rollno:"",selected:0}],
                            [{dept:"",rollno:"",selected:0}]],
                            [[{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}],
                            [{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}],
                            [{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}]],
                            [[{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}],
                            [{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}],
                            [{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}]]
                        ]
                    },
                    {
                        roomno: 108,
                        use: false,
                        capacity:20,
                        single:10,
                        singletaken:4,
                        doublefull:10,
                        doublehalf:3,
                        doubletaken:6,
                        benches:[
                            [[{dept:"",rollno:"",selected:0}],
                            [{dept:"",rollno:"",selected:0}],
                            [{dept:"",rollno:"",selected:0}]],
                            [[{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}],
                            [{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}],
                            [{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}]],
                            [[{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}],
                            [{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}],
                            [{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}]]
                        ]
                    },
                    ]

            )
            return;
        
        }

        async function doGet(){
            // let gstudents = await fetch(process.env.NEXT_PUBLIC_API+"/manage/student",{
            //     method:"GET"
            // })
            // const gdata = await gstudents.json();
            const gdata = await doGetStudents();
            setStudents(gdata);
        }

        async function getRooms() {

            
            
            // let grooms = await fetch(process.env.NEXT_PUBLIC_API+'/manage/hallnew',{
            //     method:"GET"
            // })

            // const data = await grooms.json();
            const data = await doGetRooms();
            console.log(data);
            setRooms(data);
        }
        doGet();
        getRooms();
    },[])
    
    //temp

    return (
        <div className=" text-black flex flex-col space-y-2 ">
            <SearchBar skipbench={skipbench} setSkipBench={setSkipBench} students={students} setStudents={setStudents} setCount={setCount} setRooms={setRooms} rooms={rooms}></SearchBar>
            
            <ShowRooms skipbench={skipbench} rooms={rooms} setRooms={setRooms}></ShowRooms>
            
            <PdfMaker rooms={rooms} students={students}></PdfMaker>
            <div>
            <a className="addDeptRoom" href="./manage">Add depts or rooms</a>
            <a href='./modify' className='goSelect'>Edit</a>
            </div>
        </div>
    );
}