import React from "react";
import { render } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import Navbar from "../components/Navbar";

describe("Navbar", () => {
  it("renders the component", () => {
    const { getByText } = render(<Navbar />);
    const element = getByText("Gemeente Rotterbosch");
    expect(element).toBeInTheDocument();
  });
});
