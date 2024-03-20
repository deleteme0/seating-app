const axios = require('axios').default;

const url = process.env.NEXT_PUBLIC_API


async function doGetRooms(){

    const ret = await axios.get(url+"/manage/hallnew")

    return ret.data;
}

async function doDeleteRooms(rno:any){

    const ret = await axios.delete(url+"/manage/hallnew/",{
        data: {
            roomno: rno
        }
    })

    if (ret.status == 200){
        return 1;
    }
    return -1;
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

async function doDeleteStudents(gdept: string){

    const ret = await axios.delete(url+"/manage/student",{
        data:{
            dept: gdept
        }
    })
}

export {doPutRooms,doGetRooms,doGetStudents, doDeleteRooms, doDeleteStudents}