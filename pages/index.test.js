import React from "react";
import { render, expect } from "@testing-library/react";
import { toBeInTheDocument } from "@testing-library/jest-dom";
import Navbar from "../components/Navbar";

import Blogposts from ".";
import { mockPosts } from "./index.mock.js";

describe("Navbar", () => {
  it("renders the navbar with correct title", () => {
    const { getByText } = render(<Navbar />);
    const element = getByText("Gemeente Rotterbosch");
    expect(element).toBeInTheDocument();
  });
});

describe("Index", () => {
  it("renders the blog overview with a correct title", () => {
    const { getByText } = render(<Blogposts posts={mockPosts} />);
    const element = getByText(
      "Nieuwe kenniswerkplaats Onbegrepen Gedrag wil het onbegrijpelijke omarmen"
    );
    expect(element).toBeInTheDocument();
  });
});
