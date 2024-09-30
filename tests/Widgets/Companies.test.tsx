import "@testing-library/jest-dom";
import * as Scrivito from "scrivito";
import { screen, fireEvent } from "@testing-library/react";
import { DataGroupWidget } from "../../src/Widgets/DataGroupWidget/DataGroupWidgetClass";
import { DXPCompaniesWidget } from "../../src/Widgets/DXPCompaniesTable/DXPCompaniesTableWidgetClass";
import { DataLoadMoreButtonWidget } from "../../src/Widgets/DataLoadMoreButtonWidget/DataLoadMoreButtonWidgetClass"
import { Company, TEST_NAME_1, TEST_NAME_3, TEST_NAME_20, TEST_NAME_21 } from "../Data/Company/CompanyDataClass"
import PageRenderer from "../helpers/pageRenderer";
import "../../src/Widgets/DataGroupWidget/DataGroupWidgetComponent";
import "../../src/Widgets/DXPCompaniesTable/DXPCompaniesTableWidgetComponent";
import "../../src/Widgets/DataLoadMoreButtonWidget/DataLoadMoreButtonWidgetComponent";

Scrivito.configure({ tenant: "inMemory" });

const pageRenderer = new PageRenderer();

describe("Companies", () => {
  describe("initial render", () => {
    const loadMoreButtonTitle = "Load more";
    beforeEach(async () => {
      const LoadMoreButtonWidgetProps = {
        title: loadMoreButtonTitle
      }

      const DataGroupWidgetProps = {
        content: [new DXPCompaniesWidget(), new DataLoadMoreButtonWidget(LoadMoreButtonWidgetProps)],
      }

      pageRenderer.render({
        body: [new DataGroupWidget(DataGroupWidgetProps)]
      }, Company.all());
    });

    test("shows the company names and load more button", async () => {
      expect(
        await screen.findByText(TEST_NAME_1)
      ).toBeInTheDocument();

      expect(
        await screen.findByText(TEST_NAME_3)
      ).toBeInTheDocument();

      expect(
        await screen.findByText(TEST_NAME_20)
      ).toBeInTheDocument();

      expect(
        await screen.findByText(loadMoreButtonTitle)
      ).toBeInTheDocument();
    });
  });

  describe("load more render", () => {
    const loadMoreButtonTitle = "Load more";
    beforeEach(async () => {
      const LoadMoreButtonWidgetProps = {
        title: loadMoreButtonTitle
      }

      const DataGroupWidgetProps = {
        content: [new DXPCompaniesWidget(), new DataLoadMoreButtonWidget(LoadMoreButtonWidgetProps)],
      }

      pageRenderer.render({
        body: [new DataGroupWidget(DataGroupWidgetProps)]
      }, Company.all());

      fireEvent(
        await screen.findByText(loadMoreButtonTitle),
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true
        })
      );
    });

    test("shows the company names and no load more button", async () => {
      expect(
        await screen.findByText(TEST_NAME_21)
      ).toBeInTheDocument();

      expect(
        screen.findByText(loadMoreButtonTitle)
      ).rejects.toThrow('Unable to find an element');
    });
  });
});
