
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import * as Scrivito from "scrivito";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

const PageDummy = Scrivito.provideObjClass("PageDummy", {
  attributes: {
    body: "widgetlist"
  }
});

class PageRenderer {
  private _pageClass;
  constructor(pageClass = PageDummy) {
    this._pageClass = pageClass;
  }

  private _getContentTag(configuration: any = {}, dataScope: Scrivito.DataScope | undefined = undefined) {
    const page = this._pageClass.create(configuration);
    (Scrivito as any).__setCurrentPage(page);

    return <Scrivito.ContentTag tag="div" content={page} attribute="body" dataContext={dataScope}/>;
  }

  render(configuration: any = {}, dataScope: Scrivito.DataScope | undefined = undefined) {
    const content = this._getContentTag(configuration, dataScope);

    return render(content);
  }

  getAsJSON(configuration: any = {}, dataScope: Scrivito.DataScope | undefined = undefined) {
    const content = this._getContentTag(configuration, dataScope);

    return renderer.create(content).toJSON();
  }
}

export default PageRenderer;
