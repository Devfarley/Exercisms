//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor(){
    this.schoolObj = {};
  }
  
  roster() {
    return JSON.parse(JSON.stringify(this.schoolObj)) 
  }

  add(student, grade) {
    this.schoolObj[grade]
    ? this.schoolObj[grade].push(student)
    : (this.schoolObj[grade] = [student]);
    this.schoolObj[grade].sort();
  }

  grade(grade) {
    return this.schoolObj[grade] ? [...this.schoolObj[grade]] : [];
  }
  
}
