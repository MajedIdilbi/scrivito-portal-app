import "@testing-library/jest-dom";
import * as Scrivito from "scrivito";
import { screen } from "@testing-library/react";
import { DataWidget } from "../../src/Widgets/DataWidget/DataWidgetClass";
import { TextWidget } from "../../src/Widgets/TextWidget/TextWidgetClass";
import PageRenderer from "../helpers/pageRenderer";
import "../../src/Widgets/DataWidget/DataWidgetComponent";
import "../../src/Widgets/TextWidget/TextWidgetComponent";
import { Employee } from "../Data/Employee/EmployeeDataClass"

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
      }, Employee.all());
    });

    test.skip("shows the text content", async () => {
      expect(
          (await screen.findAllByText(text))[0]
        ).toBeInTheDocument();
    });
  });
});
