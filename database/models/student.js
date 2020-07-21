const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {
    firstName: {type: Sequelize.STRING, allowNull: false},
    lastName: {type: Sequelize.STRING, allowNull: false},
    studentEmail: {type: Sequelize.STRING, allowNull: false},
    studentGPA: {type: Sequelize.STRING, allowNull: false},
    imageURL: {type: Sequelize.STRING, allowNull: false},
});

module.exports = Student;

