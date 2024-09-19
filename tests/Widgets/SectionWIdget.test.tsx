import "@testing-library/jest-dom";
import * as Scrivito from "scrivito";
import { screen } from "@testing-library/react";
import { SectionWidget } from "../../src/Widgets/SectionWidget/SectionWidgetClass";
import { TextWidget } from "../../src/Widgets/TextWidget/TextWidgetClass";
import PageRenderer from "../helpers/pageRenderer";
import "../../src/Widgets/SectionWidget/SectionWidgetComponent";
import "../../src/Widgets/TextWidget/TextWidgetComponent";

Scrivito.configure({ tenant: "inMemory" });

const pageRenderer = new PageRenderer();

describe("SectionWidget", () => {
  describe("initial render", () => {
    const text = "Text Content";
    beforeEach(async () => {
      const textWidgetProps = {
        alignment: "left",
        text: text,
      };

      const sectionWidgetProps = {
        content: [new TextWidget(textWidgetProps)],
      }
  
      pageRenderer.render({
        body: [new SectionWidget(sectionWidgetProps)]
      });
    });

    test("shows the text content", () => {
      expect(
          screen.queryByText(text)
        ).toBeInTheDocument();
    });
  });
});
