"use client";
import { useState } from 'react';
const axios = require('axios').default;
//import { useHistory } from 'react-router-dom'; // Assuming you are using React Router

export default function About() {

    

    return (
        <div className=' flex flex-col align-middle text-center'>
        <a className=" goSelect bg-red-600 " href="./modify/rooms">Modify Rooms</a>
        <a className=" goSelect bg-blue-500 " href="./modify/depts">Modify Depts</a>
        <a className=" goSelect bg-green-500 " href="./selection">Goto Selection</a>
        </div>
  );
}