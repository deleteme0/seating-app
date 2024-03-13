const axios = require('axios').default;

const url = process.env.NEXT_PUBLIC_API


async function doGetRooms(){

    const ret = await axios.get(url+"/manage/hallnew")

    return ret.data;
}

async function doPutRooms(rno:any,rooms:any){

    console.log(url+"/manage/hallnew")

    

    const ret = await axios.post(url+"/manage/hallnew",{
        roomno: rno,
        benches: rooms.slice()
    })


    if (ret.status == 200){
        return 1
    }
    return -1;
}

async function doGetStudents(){

    const ret = await axios.get(url+"/manage/student")

    return ret.data;
}

export {doPutRooms,doGetRooms,doGetStudents}