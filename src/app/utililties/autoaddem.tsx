

/**
 * 
 * @param rooms 
 * {
 * 
 * }
 * @param students 
 * {
 * dept:
 * rollnos:
 * }
 */

export default function autoAddEm (rooms:any,students:any,skipbench:any) {

    var myRoom = rooms.slice();

    // myRoom.sort((element) => {
    //     if (element.use == false){
    //         return 9;
    //     }
    //     return -1*(element.benches.length);
    // })

    const dept = students.dept;
    //var myStudents = students.slice();
    var myStudents = structuredClone(students);

    const totalStudents = myStudents.rollnos.length;

    var seatingCapacity=0;
    var noOfBenches = 0;

    var gotLast = false;

    // myRoom.forEach((element1: any) => {

    //     if (element1.use == false){
    //         return;
    //     }

    //     element1.benches.forEach((element)=>(
    //     element.forEach((bench:any) => {
    //         var skip = false;

    //         //reset benches
    //         if (bench[0].dept == dept){
    //             bench[0].dept = "";
    //         }
    //         if (bench.length > 1){
    //             if (bench[1].dept == dept){
    //                 bench[1].dept = "";
    //             }
    //         }
            
    //         //take count
    //         if (bench[0].dept != "" ){
    //             if (bench.length == 1){
    //                 skip = true;
    //             }
    //             else if (bench[1].dept != ""){
    //                 skip= true;
    //             }
    //         }

    //         if (skipbench == true){
    //             if (gotLast == true){
    //                 gotLast = false;
    //             }else{
    //                 if (skip == false){
    //                     seatingCapacity += 1;
    //                     noOfBenches += 1;
    //                     gotLast = true;
    //                 }else{
    //                     gotLast= false;
    //                 }
    //             }
    //         }
    //         else if (!skip){
                
    //             seatingCapacity += 1;
    //             noOfBenches += 1;
    //         }
    //     })
    //     ))
    // });

    myRoom.forEach((room)=>{
        if (room.use == false){
            return;
        }
        if (myStudents.rollnos.length == 0){
            return;
        }

        for(var j=0;j<room.benches[0].length;j++){
            gotLast = false;
            for(var i=0;i<room.benches.length;i++){

                var gotthis = false;

                if (skipbench && gotLast){
                    gotLast = false;
                    continue;
                }
                
                room.benches[i][j].forEach((bench)=>{

                    if (gotthis){
                        return;
                    }

                    if (myStudents.rollnos.length == 0){
                        return;
                    }

                    if (bench.dept == dept || bench.dept == ""){
                        bench.dept = dept
                        bench.rollno = myStudents.rollnos.shift();
                        gotLast = true;
                        gotthis = true
                    }
                })
            }
        }
    })

    if (myStudents.rollnos.length != 0){
        return -1;
    }

    // console.log(totalStudents,seatingCapacity);
    // if (totalStudents > seatingCapacity){
    //     return -1;
    // }

    // //ARRANGEMENT DONE BELOW
    // else{
    // myRoom.forEach((room:any) => {
    //     if (room.use == false){
    //         return;
    //     }
    //     gotLast = false;
    //     room.benches.forEach((bench:any)=>{

    //         if (myStudents.rollnos.length == 0){
    //             return;
    //         }

    //         if (gotLast && skipbench){
    //             gotLast = false;
    //             return;
    //         }

    //         if (bench[0].dept == ''){
    //             bench[0].dept = dept;
    //             bench[0].rollno = myStudents.rollnos.shift();
    //             gotLast = true;
    //         }else{
    //             if (bench.length == 1){
    //                 return;
    //             }

    //             if (bench[1].dept == ''){
    //                 console.log('here');
    //                 bench[1].dept = dept;
    //                 bench[1].rollno = myStudents.rollnos.shift();
    //                 gotLast = true;
    //             }
    //         }
    //     })
    // })
    return myRoom;
    
    }
