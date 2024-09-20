import "@testing-library/jest-dom";
import * as Scrivito from "scrivito";
import { act, screen } from "@testing-library/react";
import { DataWidget } from "../../src/Widgets/DataWidget/DataWidgetClass";
import { TextWidget } from "../../src/Widgets/TextWidget/TextWidgetClass";
import PageRenderer from "../helpers/pageRenderer";
import "../../src/Widgets/DataWidget/DataWidgetComponent";
import "../../src/Widgets/TextWidget/TextWidgetComponent";
import { Employee } from "../../src/Data/Employee/EmployeeDataClass"

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
  
      await act(async () => {
        pageRenderer.render({
          body: [new DataWidget(DataWidgetProps)]
        }, Employee.all());
      });

      await act(() => new Promise((resolve) => setTimeout(resolve, 1000)));
      console.log(document.documentElement.outerHTML); // Log the entire HTML document to the console
    });

    test("shows the text content", () => {
      expect(
          screen.queryAllByText(text)[0]
        ).toBeInTheDocument();
    });
  });
});
