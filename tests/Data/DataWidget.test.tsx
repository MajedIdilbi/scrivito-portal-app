import "@testing-library/jest-dom";
import * as Scrivito from "scrivito";
import { screen } from "@testing-library/react";
import { DataWidget } from "../../src/Widgets/DataWidget/DataWidgetClass";
import { TextWidget } from "../../src/Widgets/TextWidget/TextWidgetClass";
import PageRenderer from "../helpers/pageRenderer";
import "../../src/Widgets/DataWidget/DataWidgetComponent";
import "../../src/Widgets/TextWidget/TextWidgetComponent";

Scrivito.configure({ tenant: "inMemory" });

const pageRenderer = new PageRenderer();

describe("DataWidget", () => {
  describe("initial render", () => {
    const text = "Text Content";
    beforeEach(async () => {
      const textWidgetProps = {
        alignment: "left",
        text: text,
      };

      const DataWidgetProps = {
        content: [new TextWidget(textWidgetProps)],
      }
  
      pageRenderer.render({
        body: [new DataWidget(DataWidgetProps)]
      });
    });

    test.skip("shows the text content", () => {
      expect(
          screen.queryByText(text)
        ).toBeInTheDocument();
    });
  });
});
