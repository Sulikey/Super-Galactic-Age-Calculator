/* eslint-disable no-undef */
import Age from "../src/super.js";

describe("Age", () => {
  let planetAge;
  beforeEach ( ()=> {
    planetAge = new Age(32,10);
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
    expect(planetAge.showPastBirthday()).toEqual("If a user is 32 and we want to calculate how many years have passed since their 10th birthday. Earth: 22 years have passed, Mercury: 91 years have passed, Venus: 35 years have passed, Mars: 11 years have passed, Jupiter: 1 years have passed");
  });

  test("should return how many years have yet to pass until  future birthday", () => {
    expect(planetAge.showFutureBirthdate()).toEqual("If a user is 32 and we want to calculate how many years have yet to pass until they are 102, we would find the following: Earth: 70 years have yet to pass, Mercury: 292 years have yet to pass, Venus: 113 years have yet to pass, Mars: 37 years have yet to pass, Jupiter: 6 years have yet to pass");
  });
});