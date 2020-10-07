/** packages */

const mongoose = require("mongoose");

/** Scheame creation */

const student_groupSchema = new mongoose.Schema({
    student_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_student",
        required: true
    },
    group_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_group",
        required: true
    }
});

/** Schema Exportation  */
module.exports = student_groupSchema;