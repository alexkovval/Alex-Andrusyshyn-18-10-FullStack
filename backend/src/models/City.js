const db = require("../config/db");

class City {
  constructor(key, name, temperature, about) {
    this.key = key;
    this.name = name;
    this.temperature = temperature;
    this.about = about;
  }

  save() {
    let sql = `
    INSERT INTO cities(
        cityKey,
        cityName,
        temperature,
        about
    )
    VALUES(
        '${this.key}',
        '${this.name}',
        ${this.temperature},
        '${this.about}'
    )
    `;

    return db.execute(sql);
  }

  static findAll() {
    let sql = `SELECT * FROM cities;`;

    return db.execute(sql);
  }

  static findByKey(key) {
    let sql = `SELECT * FROM cities WHERE cityKey = ${key};`;

    return db.execute(sql);
  }
}

module.exports = City;
