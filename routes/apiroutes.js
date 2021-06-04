// DEPENDENCIES
const router = require("express").Router();
const Workout = require("../models/workout");


// ==CRUD OPERATIONS==

// GET/READ WORKOUT
router.get("/api/workouts", (req,res) => {
    Workout.find({})
    // add index to sort by ascending days
    .sort({ day: 1})
    .then((data) => {
        res.json(data);
        console.log(data);
    })
    // if there is an error, display error
    .catch((err) => {
        res.status(400).json(err);
        console.log(err);
    });
});


// CREATE WORKOUT
router.post("/api/workouts", ({ body },res) => {
    Workout.create(body)
    .then((data) => {
        res.json(data);
        console.log(data);
    })
    // if there is an error, display error
    .catch((err) => {
        res.status(400).json(err);
        console.log(err);
    });
});


// UPDATE WORKOUT BY ID
router.put("/api/workouts/:id", ({ body, params },res) => {
    Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },
        { new: true, runValidators: true }
    )
    .then((data) => {
        res.json(data);
        console.log(data);
    })
    // if there is an error, display error
    .catch((err) => {
        res.status(400).json(err);
        console.log(err);
    });
});


// GET/READ STATS
router.get("/api/workouts/range", (req,res) => {
    Workout.find()
        .then((data) => {
            res.json(data);
            console.log(data);
        })
    // if there is an error, display error
        .catch((err) => {
            res.status(400).json(err);
            console.log(err);
        });
});


// POST STATS
router.post("/api/workouts/range", (req,res) => {
    Workout.create({})
        .then((data) => {
            res.json(data);
            console.log(data);
        })
        // if there is an error, display error
        .catch((err) => {
            res.status(400).json(err);
            console.log(err);
        });
});


// EXPORTS
module.exports = router;