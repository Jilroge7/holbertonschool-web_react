interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Elliott',
  lastName: 'Werner',
  age: 1,
  location: 'Tulsa'
};
let student2: Student = {
  firstName: 'TBone',
  lastName: 'Tanner',
  age: 42,
  location: 'Las Cruces'
};
const studentsList: Array<Student> = [student1, student2];
//create table
const table: HTMLTableElement = document.createElement('table');

// create table header titles
const thead: HTMLTableSectionElement = table.createTHead();
const titleRow: HTMLTableRowElement = table.insertRow();
const titleName: HTMLTableCellElement = titleRow.insertCell();
const titleLoc: HTMLTableCellElement = titleRow.insertCell();
titleName.innerHTML = 'Name';
titleLoc.innerHTML = 'Location';

// create body and append student data to table
const tbody: HTMLTableSectionElement = table.createTBody();
studentsList.forEach(function (student) {
  const newRow: HTMLTableRowElement = table.insertRow();
  const newName: HTMLTableCellElement = newRow.insertCell();
  const newLocation: HTMLTableCellElement = newRow.insertCell();
  newName.innerHTML = student.firstName;
  newLocation.innerHTML = student.location;
});
document.body.appendChild(table);
