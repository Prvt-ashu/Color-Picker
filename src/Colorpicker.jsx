import { useState } from "react"

function ColorPicker (){

    const [ color , setColor ] = useState("#FFFFFF");

    const handlecolorchange =(event)=>{
        setColor(event.target.value);
    }



    return (
        <div className = "color-picker-container">
            <h1>
                Color Picker
            </h1>
            
 

            <div className="selected-color-container" style={{backgroundColor: color}}>
              
                <p>
                    Selected Color = {color}
                </p>

            </div>

            <p> Please Select Your Color !!</p>

            <input className="color-picker" value ={color} type="color" onChange={handlecolorchange} />


        </div>
    )

} 

export default ColorPicker