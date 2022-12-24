export default class Age {
  constructor(earthAge) {
    this.earthAge = earthAge;
  }

  mercury() {
    this.earthAge = parseInt((this.earthAge / 0.24).toFixed());
  }

  venus() {
    this.earthAge = parseInt((this.earthAge / 0.62).toFixed());
  }

  mars() {
    this.earthAge = parseInt((this.earthAge / 1.88 ).toFixed());
  }

  jupiter() {
    this.earthAge = parseInt((this.earthAge / 11.86).toFixed());
  }
  
}