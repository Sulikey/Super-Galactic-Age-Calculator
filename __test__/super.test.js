import Age from "../src/super.js";

describe("Age", () => {
  let planetAge;
  beforeEach ( ()=> {
    planetAge = new Age(32);
  });

  test("should show an Age constructor with properties", () => {
    expect(planetAge.earthAge).toEqual(32);
  });
});