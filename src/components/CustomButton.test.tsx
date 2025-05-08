//Important steps:
// Does: describe exists?, it exists?, test exists? getByText? render()?, expect().toBe()

import CustomButton, { ButtonState } from "./customButton"
import {fireEvent, render } from "@testing-library/react" //isnt found, must manually be imported
import "@testing-library/jest-dom"

 


//DisplayName() JUnit == collection of test, en metod med multipla asserts

describe("Easy Examples", () => {
    
    test("2 + 2 = 4", () => {
        expect(2+2).toBe(4)
    })
    test("is 2+4 greater than 0", () => {
        expect(2+4).toBeGreaterThan(0)
    })

    test("2-2 equals 0", () => {
        expect(2-2).toBe(0)
    })
})    

describe("Custom Button Component States", () => {

    test("Check if button Component starts with idle", () => {
        const buttonText: string = "signup"
        const {getByText} = render(<CustomButton buttonText={buttonText}/>)
        const customButtonComponent = getByText(buttonText)

        expect(customButtonComponent).toHaveClass(ButtonState.idle)
    })

    test("Check if Button Component on hover state changes", () => {
        const buttonText: string = "signup"
        const {getByText} = render(<CustomButton buttonText={buttonText}/>)
        const customButtonComponent = getByText(buttonText)

        expect(customButtonComponent).toHaveClass(ButtonState.idle)
        fireEvent.mouseEnter(customButtonComponent)
        expect(customButtonComponent).toHaveClass(ButtonState.hover)
    })

    test("Custom Button Component on click state change", () => {
        const buttonText: string = "signup"
        const {getByText} = render(<CustomButton buttonText={buttonText}/>)
        const customButtonComponent = getByText(buttonText)

        expect(customButtonComponent).toHaveClass(ButtonState.idle)
        fireEvent.click(customButtonComponent)
        expect(customButtonComponent).toHaveClass(ButtonState.clicked)
    })

    test("This test should fail for my github action training", ( => {
        expect(2+2).toBe(999)
    })

})






it("", () => {})
test("", () => {})

