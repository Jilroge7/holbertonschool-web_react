var student1 = {
    firstName: 'Elliott',
    lastName: 'Werner',
    age: 1,
    location: 'Tulsa'
};
var student2 = {
    firstName: 'TBone',
    lastName: 'Tanner',
    age: 42,
    location: 'Las Cruces'
};
var studentsList = [student1, student2];
//create table
var table = document.createElement('table');
// create table header titles
var thead = table.createTHead();
var titleRow = table.insertRow();
var titleName = titleRow.insertCell();
var titleLoc = titleRow.insertCell();
titleName.innerHTML = 'Name';
titleLoc.innerHTML = 'Location';
// create body and append student data to table
var tbody = table.createTBody();
studentsList.forEach(function (student) {
    var newRow = table.insertRow();
    var newName = newRow.insertCell();
    var newLocation = newRow.insertCell();
    newName.innerHTML = student.firstName;
    newLocation.innerHTML = student.location;
});
document.body.appendChild(table);
