import React from "react";
import { render } from "@testing-library/react";

import { toBeInTheDocument } from "@testing-library/jest-dom";
import Navbar from "../components/Navbar";

import Blogposts from "../pages";
import { mockPosts } from "./index.mock.js";

describe("Navbar", () => {
  // this test checks if the text Gemeente Rotterbosch gets rendered within the navbar component
  it("renders the navbar with correct title", () => {
    // here I set the const to render the component
    const { getByText } = render(<Navbar />);
    // here I define which text it should look for
    const element = getByText("Gemeente Rotterbosch");
    expect(element).toBeInTheDocument();
  });
});

describe("Index", () => {
  // this test checks if the title of a specific blog gets rendered
  it("renders the blog overview with a correct title", () => {
    // the test uses the render function to render the blogpost within the blogpost function
    const { getByText } = render(<Blogposts posts={mockPosts} />);
    // here I define which text it should look for
    const element = getByText(
      "Nieuwe kenniswerkplaats Onbegrepen Gedrag wil het onbegrijpelijke omarmen"
    );
    expect(element).toBeInTheDocument();
  });
});
