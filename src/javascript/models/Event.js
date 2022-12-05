export class Event {
  date;
  name;
  description;
  constructor(date, name, description) {
    this.date = date;
    this.name = name;
    this.description = description;
  }
  getDateDay() {
    return this.date.getDate();
  }
}
