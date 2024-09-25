import { mockUiContext, validationResults } from "../helpers/testData";

const originalModule = jest.requireActual("scrivito");
let mockedCurrentPage = Object.create(null);

const mockedModule = {
  ...originalModule,
  isInPlaceEditingActive: jest.fn().mockReturnValue(false),
  __setCurrentPage: (page: unknown) => (mockedCurrentPage = page),
  currentPage: jest.fn().mockImplementation(() => mockedCurrentPage),
  currentWorkspaceId: jest.fn().mockReturnValue("edit-mode"),
  urlFor: jest.fn(() => "mocked-url"),
  validationResultsFor: jest.fn().mockReturnValue(validationResults),
  uiContext: jest.fn().mockReturnValue(mockUiContext),
  canWrite: jest.fn().mockReturnValue(true),
  getInstanceId: jest.fn().mockReturnValue("123"),
  LinkTag: jest.fn().mockReturnValue(null)
}
mockedModule.Obj.getByPermalink = jest.fn().mockReturnValue(null);

module.exports = mockedModule;