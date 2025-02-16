export class WorkExperience {
  title;
  company;
  date;
  description;
  techstack;
  photo;

  constructor(
    _title: string,
    _company: string,
    _date: string,
    _description: string,
    _techstack: string,
    _photo: string
  ) {
    this.title = _title;
    this.company = _company;
    this.date = _date;
    this.description = _description;
    this.techstack = _techstack;
    this.photo = _photo;
  }
}
