import "@testing-library/jest-dom";
import React from "react";

import { render, screen } from "@testing-library/react";
import { Loading } from "../../src/Components/Loading";

describe("<Loading />", () => {
  describe("initial render", () => {
    beforeEach(async () => {
      render(
        <Loading />
      );
    });

    test("shows the loading component", () => {
      expect(
        screen.queryByTestId("loading-skeleton")
      ).toBeInTheDocument();
    });
  });
});
