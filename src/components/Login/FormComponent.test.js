import { render,screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import FormComponent from "./FormComponent"


describe('FormComponent component', () => {
    test(' renders a form with one button' , async() =>{

        //Arrange
        render(<FormComponent/>)

        //Act
        //.....nothing

        //Assert
        const buttonList = await screen.findAllByRole('Button',{exact: false})
        expect(buttonList).toHaveLength(3)
    })

})