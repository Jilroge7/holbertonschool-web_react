import { Teacher } from './Teacher';
import { Subject } from './Subject';

namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }

  export class React extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

  getAvailableTeacher(): string {
    if (this.teacher.experienceTeachingReact) {
      return `Available Teacher: ${this.teacher.firstName}`;
    }
    return 'No Available Teacher';
  }
}
