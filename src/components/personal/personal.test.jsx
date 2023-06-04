import { MemoryRouter } from "react-router-dom";
import Personal from "./personal";
import { render,screen } from "@testing-library/react";
import '@testing-library/jest-dom'

test('all props are displayed correctly',()=>{
    render(
        <MemoryRouter >
            <Personal avatar='https://avatars.githubusercontent.com/u/118050340?v=4' login = 'KirillMV' reps = '10'/>
        </MemoryRouter>
    )
expect(screen.getByRole('img')).toHaveAttribute('src','https://avatars.githubusercontent.com/u/118050340?v=4')

expect(screen.getByText(/KirillMv/i)).toBeInTheDocument()

expect(screen.getByText(/10/i)).toBeInTheDocument()

})