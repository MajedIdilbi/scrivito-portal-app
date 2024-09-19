import "@testing-library/jest-dom";
import * as Scrivito from "scrivito";
import { screen } from "@testing-library/react";
import { TextWidget } from "../../src/Widgets/TextWidget/TextWidgetClass";
import PageRenderer from "../helpers/pageRenderer";
import "../../src/Widgets/TextWidget/TextWidgetComponent";

Scrivito.configure({ tenant: "inMemory" });

const pageRenderer = new PageRenderer();

describe("TextWidget", () => {
  describe("initial render", () => {
    const text = "Text Content";
    beforeEach(async () => {
      const widgetProps = {
        alignment: "left",
        text: text,
      };
  
      pageRenderer.render({
        body: [new TextWidget(widgetProps)]
      });
    });

    test("shows the text widget", () => {
      expect(
          screen.queryByText(text)
        ).toBeInTheDocument();
    });
  });
});
