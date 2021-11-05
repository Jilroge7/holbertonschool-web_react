import { Teacher } from './Teacher';
import { Subject } from './Subject';

namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class React extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

  getAvailableTeacher(): string {
    if (this.teacher.experienceTeachingJava) {
      return `Available Teacher: ${this.teacher.firstName}`;
    }
    return 'No Available Teacher';
  }
}
