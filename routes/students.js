var express = require("express");
var router = express.Router();
const { Student } = require("../database/models");

/* get all students in the db */
router.get("/", async(req, res, next)=> {
    try {
	const students = await Student.findAll();
	res.status(200).json(students);
    }
    catch (err) {
	next(err);
    }
});

/* get a single student by student ID */
router.get("/:id", async(req,res,next)=> {
    //collect the id from the request
    const id = req.params;

    try{
	//search the primary keys for the id from request
	const student = await Student.findByPk(id);
	
	//the data was located (200) and packed into json
	res.status(200).json(student);
    }
    catch(err) {
	next(err);
    }
});


/*add a student to the database*/
router.post("/", async(req, res, next)=> {
    const {fname, lname, email, imageURL, gpa} = req.body;

    const studObj = {
	firstName: fname,
	lastName: lname,
	email: email,
	imageUrl: imageURL,
	gpa: gpa
    };

    try {
	const newStudent = await Student.create(studObj);
	res.status(200).send(newStudent);
    }
    catch(err) {
	next(err);
    }
});


/*removing a sudent by student id*/
router.delete("/:id", async(req, res, next)=> {
    const id = req.params;
    try {
	const student = await Student.findByPk(id);

	await student.destroy();
    }
    catch(err) {
	next(err);
    }
});

module.exports = router;
