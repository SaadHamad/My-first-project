import { checkForURL } from '../src/client/js/urlChecker'

describe("Testing the URL to be valid functionality", () => {
    test("Testing the  checkForURL() function", () => {
        expect(checkForURL).toBeDefined()
    });
    test("If the URL valid return true", () => {
        expect(checkForURL("www.udacity.com")).toBeTruthy();
    });
      test("Invalid URL retuen false", () => {
        expect(checkForURL("The Project Is Finished")).toBeFalsy();
    });
 });