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

  test("should return age in mars years", () => {
    planetAge.mars();
    expect(planetAge.earthAge).toEqual(17);
  });

  test("should return age in jupiter years", () => {
    planetAge.jupiter();
    expect(planetAge.earthAge).toEqual(3);
  });

  test("should return how many years have passed on each planet since past birthday", () => {
    expect(planetAge.showPastBirthday()).toEqual("10 years ago. Earth: 22 years old, mercury: 92 years old, venus: 35 years old, mars: 12 years old, jupiter: 2 years old");
  });

});