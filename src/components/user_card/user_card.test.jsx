import React from "react";
import { render, waitFor,screen} from "@testing-library/react";
import UserCard from "./user_card";
import { useParams, useNavigate} from "react-router-dom";
import { MemoryRouter } from "react-router-dom";
import { queryByText } from "@testing-library/react";
import "@testing-library/jest-dom";


jest.mock("react-router-dom", () => ({
  useParams: jest.fn(),
  useNavigate: jest.fn()
}));

test("displays user details after fetching data", async () => {
  const mockedUsername = "john";
  useParams.mockReturnValue({ username: mockedUsername });

  const mockedUserDetails = {
    name: "Krill",
    watchers: 10,
    private:false,
  };
  global.fetch = jest.fn().mockResolvedValueOnce({
    json: jest.fn().mockResolvedValueOnce(mockedUserDetails)
  });

render(
<MemoryRouter>
  <UserCard/>
</MemoryRouter>
);

  await waitFor(() => {

    expect(screen.getByText(`Название репозитория:${mockedUserDetails.name}`)).toBeInTheDocument();

    expect(screen.getByText(`${'Публичный репозиторий' || 'Приватный репозиторий'}:${mockedUserDetails ? "Приватный репозиторий" : "Публичный репозиторий"}`)).toBeInTheDocument();
  });
});