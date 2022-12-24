/* eslint-disable no-undef */
import Age from "../src/super.js";

describe("Age", () => {
  let planetAge;
  beforeEach ( ()=> {
    planetAge = new Age(32);
  });

  test("should show an Age constructor with properties", () => {
    expect(planetAge.earthAge).toEqual(32);
  });

  test("should return age in mercury years", () => {
    planetAge.mercury();
    expect(planetAge.earthAge).toEqual(133);
  });

  test("should return age in venus years", () => {
    planetAge.venus();
    expect(planetAge.earthAge).toEqual(52);
  });
});