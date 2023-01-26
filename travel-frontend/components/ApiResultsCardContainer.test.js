jest.mock('../components/FavouritesButton.js', () => {
    return () => ({
      auth: jest.fn(),
      
     });
});
import ApiResultsDisplay from "./ApiResultsCardContainer";
import FavouritesButton from "./FavouritesButton";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("If Search Bar exsist on the page", () => {
    const {container} = render(<ApiResultsDisplay/>);
    
  });