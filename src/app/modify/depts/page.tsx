"use client";
import { doDeleteStudents, doGetStudents } from '@/app/utililties/webutils';
import { stringify } from 'querystring';
import { useEffect, useState } from 'react';
import { act } from 'react-dom/test-utils';
const axios = require('axios').default;
//import { useHistory } from 'react-router-dom'; // Assuming you are using React Router

export default function About() {

    const [students,setStudents] = useState([])
    const [activeStudent,setActive] = useState(-1)

    const local = false;

    useEffect(()=>{

        async function doDat(){

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
                return;
            }
            const data1 = await doGetStudents();

            setStudents(data1)
        }

        doDat();

    },[])

    const handleDelete = async() =>{

        async function dodis(){

            const res = await doDeleteStudents(students[activeStudent].dept)

            setActive(-1)
        }

        await dodis()
        async function doDat(){
            const data1 = await doGetStudents();

            setStudents(data1)
        }

        await doDat();
    }

    return (
        <div className=' flex flex-col text-black bg-slate-50 align-middle text-center'>
            this is depts
            <select onChange={(event)=>{setActive(parseInt(event.target.value))}} value={activeStudent}className="selections" name="selectedroom" id="roomselect">
                        <option value="-1" disabled hidden>--Select--</option>
                        {students.map(
                            (each: any, i: any) => (
                                <option key={"somekey"+i} value={i}>{each.dept}</option>
                            )
                        )}
            </select>

            <p>
            {
                (activeStudent >=0)  &&
                students[activeStudent].rollnos.join(", ")
                
            }
            </p>
            <button onClick={handleDelete}  hidden={activeStudent == -1} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Delete Dept</button>
            <a className=" bg-green-500 " href="../selection">Goto Selection</a>
        </div>
  );
}