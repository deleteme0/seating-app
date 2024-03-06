

export default function MatStyle({rooms,setRoom}){
    var edit = false
    if (setRoom){
         edit = true;
    }else{
         edit = false;
    }
    console.log(rooms.length)
    if (rooms.length == 0){
        return (
            <></>
        )
    }

    // rooms = [
    //     [[{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}],[{dept:"",rollno:"",selected:0}],[{dept:"",rollno:"",selected:0}]],
    //     [[{dept:"",rollno:"",selected:0}],[{dept:"",rollno:"",selected:0}],[{dept:"",rollno:"",selected:0}]],
    //     [[{dept:"",rollno:"",selected:0}],[{dept:"",rollno:"",selected:0}],[{dept:"",rollno:"",selected:0}]],
    //     [[{dept:"",rollno:"",selected:0}],[{dept:"",rollno:"",selected:0}],[{dept:"",rollno:"",selected:0}]]
    // ]

    const handleDaClick = (i,j,k) =>{

        var newrooms = rooms.slice();
        
        if (newrooms[i][j][k].selected == 1){
            newrooms[i][j][k].selected = 0
        } else{
            newrooms[i][j][k].selected = 1
        }
        console.log(newrooms)

        
        setRoom(newrooms)
        
    }

    return(
        <>
        <div className=" flex flex-col">

        {rooms.map((row,i) =>(
            <div className=" flex flex-row" >
            {row.map((bench,j) =>(
                <div className="flex flex-row" >
                {bench.map((seat,k) =>(
                    <button className=" w-5 h-5" onClick={()=>handleDaClick(i,j,k)} style={{backgroundColor: seat.selected == 0 ? "red" : "blue" }}>1</button>
                ))}
                </div>
            ))}
            </div>
        ))
        }
        </div>
        </>
    )
}