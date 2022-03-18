import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import Header from "../components/Header";

test("displays the text 'please pass this test'", () => {
  render(<Article />);

  screen.debug(element);

  expect(screen.queryByText("please pass this test")).toBeInTheDocument();
});

import React from "react";

function Header(props) {
  return <h1>hello from the Header!</h1>;
}

export default Header;