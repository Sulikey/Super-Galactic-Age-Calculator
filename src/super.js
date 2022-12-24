export default class Age {
  constructor(earthAge, pastBirthday, futureBirthday) {
    this.earthAge = earthAge;
    this.mercuryAge = 0;
    this.venusAge = 0;
    this.marsAge = 0;
    this.jupiterAge = 0;
    this.pastBirthday = pastBirthday;
    this.futureBirthday = futureBirthday;
    
  }

  mercury() {
    this.earthAge = parseInt((this.earthAge / 0.24).toFixed());
    this.mercuryAge = parseInt((this.earthAge / 0.24).toFixed());
  }

  venus() {
    this.earthAge = parseInt((this.earthAge / 0.62).toFixed());
    this.venusAge = parseInt((this.earthAge / 0.62).toFixed());
  }

  mars() {
    this.earthAge = parseInt((this.earthAge / 1.88 ).toFixed());
    this.marsAge = parseInt((this.earthAge / 1.88 ).toFixed());
  }

  jupiter() {
    this.earthAge = parseInt((this.earthAge / 11.86).toFixed());
    this.jupiterAge = parseInt((this.earthAge / 11.86).toFixed());
  }

  showPastBirthday() {
    let pastEarthAge = this.earthAge - this.pastBirthday;
    let pastMercuryAge = parseInt((this.earthAge - this.pastBirthday) / .24);
    let pastVenusAge = parseInt((this.earthAge - this.pastBirthday) / .62);
    let pastMarsAge = parseInt ((this.earthAge - this.pastBirthday) / 1.88);
    let pastJupiterAge = parseInt ((this.earthAge - this.pastBirthday) / 11.86);
    let youWouldBe = `If a user is 32 and we want to calculate how many years have passed since their 10th birthday. Earth: ${pastEarthAge} years have passed, Mercury: ${pastMercuryAge} years have passed, Venus: ${pastVenusAge} years have passed, Mars: ${pastMarsAge} years have passed, Jupiter: ${pastJupiterAge} years have passed`;
    return youWouldBe;
  }

  showFutureBirthday() {
    let futureEarthAge = this.futureBirthday - this.earthAge;
    let futureMercuryAge = parseInt((this.futureBirthday - this.earthAge) / .24);
    let futureVenusAge = parseInt((this.futureBirthday - this.earthAge) / .62);
    let futureMarsAge = parseInt ((this.futureBirthday - this.earthAge) / 1.88);
    let futureJupiterAge = parseInt ((this.futureBirthday - this.earthAge) / 11.86);
    let youWouldBe = `If a user is 32 and we want to calculate how many years have yet to pass until they are 102, we would find the following. Earth: ${futureEarthAge} years have yet to pass, Mercury: ${futureMercuryAge} years have yet to pass, Venus: ${futureVenusAge} years have yet to pass, Mars: ${futureMarsAge} years have yet to pass, Jupiter: ${futureJupiterAge} years have yet to pass`;
    return youWouldBe;
  }

}