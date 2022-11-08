import { render,screen } from "@testing-library/react"
import ForgotPassword from "./ForgotPassword"


describe('ForgotPassword component', () => {
    test(' renders a form with one button' , async() =>{

        //Arrange
        render(<ForgotPassword/>)

        //Act
        //.....nothing

        //Assert
        const buttonList = await screen.findAllByRole('Button',{exact: false})
        expect(buttonList).toHaveLength(1)
    })
})