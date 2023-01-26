import SearchBar from "./SearchBar";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("If Search Bar exsist on the page", () => {
  const {container} = render(<SearchBar  />);
  const element = container.querySelector(".search-bar-container")
  expect(element).toBeTruthy();
});

test("if input field exsist on the page",  () => {
    
    const {container} = render(<SearchBar  />)
    const input = container.querySelector(".search-bar")
    expect(input).toBeTruthy();
    
    
  } )

  test("if Search button exsist on the page",  () => {
    const {container} = render(<SearchBar  />)
    const button = container.querySelector("button")
    expect(button).toBeTruthy();
    
    
  } )

  test("the value in the input field to be true",  async() => {
    const {container} = render(<SearchBar  />)
    const input = container.querySelector(".search-bar")
    await userEvent.type(input, "23");
    expect(input.value).toBe("23");
    
    
  } )

  test("function to be called when search button is pressed ",  async() => {
    const onClick=jest.fn();
    const {container} = render(<SearchBar handleClick={onClick} />);
    const button = container.querySelector("button")
    expect(button).toBeTruthy();
    const event = await userEvent.click(button)
    expect(onClick).toBeCalled();
    
    
  } )