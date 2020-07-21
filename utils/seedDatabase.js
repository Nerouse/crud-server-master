const { Campus, Student } = require("../database/models");

const seedDatabase = async () => {
  await Promise.all([
    Campus.create({
      name: "Brooklyn College",
      address: "Brooklyn",
      imageUrl: "",
      description: "A college in Brooklyn",
    }),
    Campus.create({
      name: "College of Staten Island",
      address: "Staten Island",
      imageUrl: "",
      description: "A college on Staten Island",
    }),
    Campus.create({
      name: "John Jay College",
      address: "Manhattan",
      imageUrl: "",
      description: "A college in Manhattan",
    }),
    Student.create({
      firstName: "Bob",
      lastName: "LeBlaw",
      studentEmail: "blaw@aol.com",
      studentGPA: "3.21",
    }),
    Student.create({
      firstName: "John",
      lastName: "Jingleheimer",
      studentEmail: "jingle0@gmail.com",
      studentGPA: "4.00",
    }),
    Student.create({
      firstName: "Jacob",
      lastName: "Schmidt",
      studentEmail: "jash@gmail.com",
      studentGPA: "1.00",
    }),
  ]);
};

module.exports = seedDatabase;
