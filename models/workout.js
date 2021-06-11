// DEPENDENCIES
const mongoose = require("mongoose");


// WORKOUT SCHEMA
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercises: [
            {
                name: {
                    type: String,
                    trim: true,
                    required: "What is the name of new Workout?"
                },
                type: {
                    type: String,
                    trim: true,
                    required: "What is the type of mew Workout?"
                },
                weight: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                duration: {
                    type: Number,
                    required: "What was duration of Workout?"
                },
                distance: {
                    type: Number
                }
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

// TOTAL DURATION CALCULATION
// workoutSchema.virtual("totalDuration").get(() => {
//     return this.exercises.duration.reduce((total, activity) => {
//         return total + activity.duration;
//     }, 0);
// });


// MODELS
const Workout = mongoose.model("Workout", workoutSchema);


// EXPORTS
module.exports = Workout;