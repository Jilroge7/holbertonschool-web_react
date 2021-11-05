import { Teacher } from './Teacher";

namespace Subjects {
  export class Subject implements Teacher {
    teacher = new Teacher();
    
    set setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
