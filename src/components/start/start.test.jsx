import React from "react";
import { render,waitFor ,screen, queries, queryByText} from "@testing-library/react";
import { MemoryRouter} from 'react-router-dom'
import userEvent from "@testing-library/user-event";
import Start from "./start";
import { fireEvent } from "@testing-library/react";

test("switching state on filter button",()=>{
    render(
        <MemoryRouter>
            <Start/>
        </MemoryRouter>
    );

    const filterButton = screen.getByText('По убыванию')

    fireEvent.click(filterButton)

    expect(filterButton.textContent).toBe('По возрастанию')

    fireEvent.click(filterButton)

    expect(filterButton.textContent).toBe('По убыванию')

})

