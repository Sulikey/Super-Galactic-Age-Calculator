export default class Age {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.mercuryAge = 0;
    this.venusAge = 0;
    this.marsAge = 0;
    this.jupiterAge = 0;
    
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

}