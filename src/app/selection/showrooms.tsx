import { useRef, useState } from "react";
import DisplayRoom from "./displayroom";
import "./select.css"
import ReactDOM from "react-dom";
import jsPDF from "jspdf";
//const fs = require('browserify-fs');


export default function ShowRooms({skipbench,rooms,setRooms}:{skipbench:any,rooms:any,setRooms:any}) {

    const [activeRoom,setActiveRoom] = useState("");

    const handlechange = (event:any) =>{
        setActiveRoom(event.target.value)
    }

    const reportTemplateRef = useRef(null);

	const handleGeneratePdf = () => {
		const doc = new jsPDF({
			format: 'a4',
			unit: 'px',
		});

		// Adding the fonts.
        console.log(doc.getFontList())
        doc.setFont('times','bold',50)

        var img = new Image();
        img.src = '/image2.png';

        img.onload = function() {
            doc.addImage(img, 'PNG', 0,0, 450, 50);
        }

		doc.html(reportTemplateRef.current, {
			async callback(doc) {
				await doc.save('document');
			},
            
            y:60,
            width: 450,
            windowWidth: 775
		});
	};

    return (
        <div style={{ background: 'white' }} className="flex flex-col">
            <div className="bg-azure-500 grid grid-cols-5 space-x-4">
                <p>Rooms:
                    <select onChange={handlechange} value={activeRoom}className="selections" name="selectedroom" id="roomselect">
                        <option value="" disabled hidden>--Select--</option>
                        {rooms.map(
                            (each: any, i: any) => (
                                <option key={"somekey"+i} hidden={each.use === false} value={i}>{each.roomno}</option>
                            )
                        )}
                    </select>
                </p>
            </div>
            <div ref={reportTemplateRef}>
            <DisplayRoom  skipbench={skipbench} rooms={rooms} activeRoom={activeRoom} setRooms={setRooms}></DisplayRoom>
            </div>
            <button className="button" onClick={handleGeneratePdf}>
				Generate PDF
			</button>
        </div>
    );
    
}