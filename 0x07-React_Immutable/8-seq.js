const { Seq } = require('immutable');

function printBestStudents(obj) {
  const studentSeq = Seq(obj)
    .filter((x) => x.score >= 70)
    .map((x) => x.toUpperCase());
  console.log(studentSeq.toObject());
}

module.exports = printBestStudents;
