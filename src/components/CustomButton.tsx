//TODO - have we interavted with the button?
//Check for states, for hover, clicked and idle
//Classname TEST

import { useState } from "react"

//ENUM
//IDLE HOVER CLICKED
export enum ButtonState {
    idle = "idle",
    hover ="hover",
    clicked = "clicked",
}

// You lose on: refactor capabilities, immutability - gain speed
type ButtonStateTwo = "idle" | "hover" | "clicked"

interface CustomButtonProps {
    buttonText: string
}

export function CustomButton(props: CustomButtonProps){
    const [buttonState, setButtonState] = useState<ButtonState>(ButtonState.idle)
    const [buttonStateTwo, setButtonStateTwo] = useState<ButtonStateTwo>("idle")
    
    return (
    <input 
        type="button" 
        value={props.buttonText} 
        className={buttonState}
        onMouseLeave={() => {setButtonState(ButtonState.idle)}}
        onClick={() => {setButtonState(ButtonState.clicked)}}
        onMouseEnter={() => {setButtonState(ButtonState.hover)}}/>
    )
}