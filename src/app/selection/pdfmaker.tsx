import { useRef, useState } from 'react';
import { jsPDF } from 'jspdf';
import { renderToString } from "react-dom/server";
const gimg = require("./image.png");
import "./select.css";


export default function PdfMaker({rooms,students}:{rooms: any,students:any}){

    const pdfRef = useRef(null);

    const [gdept,setGdept] = useState("");

    const handleDownload = ()=>{

        function proper(tem){
            var final=[]
            var tl=[tem[0]];
            var ind=1;
            while(ind<tem.length){
                if(tem[ind]-tl[tl.length-1]==1){
                    tl.push(tem[ind]);
                }
                else{
                    if(tl.length==1){
                        final.push(tl[0].toString()+",");
                        tl=[tem[ind]];
                    }
                    else if(tl.length==2){
                        if(tl[1]-tl[0]!=1){
                            final.push(tl[0].toString()+","+tem[1].toString()+",");
                            
                        }
                        else{
                            final.push(tl[0].toString()+"-"+tem[1].toString()+",");
                        }
                    }else{
                        final.push(tl[0].toString()+"-"+tem[ind-1].toString()+",");
                    }
                    if(ind<tem.length){
                        tl=[tem[ind]];
                    }
                }
                ind+=1;
            }
            if(tl.length>0){
                if(tl.length==1){
                    final.push(tl[0].toString());
                }
                else if(tl.length==2){
                    if(tl[1]-tl[0]!=1){
                        final.push(tl[0].toString()+","+tl[1].toString());
                    }
                    else{
                        final.push(tl[0].toString()+"-"+tl[1].toString());
                    }
                }
                else{
                    final.push(tl[0].toString()+"-"+tl[tl.length-1].toString());
                }
            }
            return final;
        }


        var generateData = function() {
            var result = [];
            //var data = {
            //  roomno: "100",
            //  rollnos: "GameGroup"
            //};
            //for (var i = 0; i < amount; i += 1) {
            //  data.id = (i + 1).toString();
            //  result.push(Object.assign({}, data));
            //}
            if (rooms.length <= 1){
                
            }
            console.log(rooms)
            console.log(gdept)
            rooms.forEach(each => {
                var temp = []

                each.benches.forEach(row => {
                    
                    row.forEach((bench)=>{

                        bench.forEach((seat)=>{
                            if (seat.dept == gdept){
                                temp.push(parseInt(seat.rollno))
                            }
                        })

                    // if (bench[0].dept == gdept){
                    //     temp.push(bench[0].rollno)
                    // }else{
                    //     if (bench.length > 1){
                    //         if (bench[1].dept == gdept){
                    //             temp.push(bench[1].rollno)
                    //         }
                    //     }
                    // }
                    })
                })
                temp.sort((a,b)=>a-b);
                console.log("before proper")
                console.log(temp)
                if (temp.length != 0){
                    result.push({
                        roomno: String(each.roomno),
                        rollnos: proper(temp)
                    })
                }
            })
            console.log(result)
            return result;
};

        function createHeaders(keys) {
            var result = [];
            for (var i = 0; i < keys.length; i += 1) {
            result.push({
                id: keys[i],
                name: keys[i],
                prompt: keys[i],
                width: 65,
                align: "center",
                padding: 20
            });
            }
            return result;
        }
        
        var headers = createHeaders([
            "roomno",
            "rollnos"
]);

        var img = new Image();
        img.src = '/image.png'; // Change this path as per your directory structure
        console.log(generateData());
        var doc = new jsPDF({ putOnlyUsedFonts: true, orientation: "portrait" });
        img.onload = function() {
            doc.addImage(img, 'PNG', 10, 10, 200, 50);
            doc.text("DEPARTMENT: " + gdept.slice(1) + "    YEAR: " + gdept.slice(0, 1), 65, 70);
            doc.table(80, 80, generateData(), headers, {autoSize: true});
            doc.save("this.pdf");
        };

        return;

        var img = new Image();
        img.src = gimg;
        console.log(img);
        var ipp = "<img src=require('./image.png')></img>";
        doc.addImage(img, 'PNG', 10, 10, 200, 50);
        doc.text("DEPARTMENT: "+gdept.slice(1)+ "    YEAR: "+gdept.slice(0,1),1,7)
        doc.table(1, 10, generateData(), headers, { autoSize: true });
        doc.save("this.pdf")
    }

    const handlechange = (event) => {

        setGdept(event.target.value);
    }   
    //console.log(students)
    
    return (
        <div className='bg-slate-500'>
            {/* <div className=' text-center '>
            <button onClick={handleDownload} hidden={gdept==null} className=" down-button">Download</button>
            </div> */}
            <div className="text-center">
            <button onClick={handleDownload} hidden={gdept==null} className="text-center align-middle bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center ">
                <svg className=" text-center fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                    Download
            </button>
            </div>
            <div className=" bg-azure-500 grid grid-cols-5 space-y-5 space-x-4 border-spacing-5">
            <p>select Dept :
                <select value={gdept} onChange={handlechange} className="DownloadSelections" name="selectedDownload" id="room">
                <option value="" disabled hidden>--Select--</option>
                {students.map(
                    (each:any,i:any)=>(
                        <option hidden={each.use === false} key={"radio"+i+"downrad"} id={each} value={each.dept}>{each.dept}</option>
                        /*<label key={"radiol"+each.dept} hidden={each.use == false}>*/
                        /*<input type="radio" name="selectedRoom" key={"radio"+each.roomno} id={each} onChange={handlechange} value={each.dept}/>*/
                        /*{each.dept}</label>*/
                    )
                )}
                </select>
                </p>
                </div>
        </div>
        
        )
}