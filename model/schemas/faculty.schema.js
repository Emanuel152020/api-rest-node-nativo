/** packages */

const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

/** Scheame creation */

const facultySchema = new mongoose.Schema({

    code:{
        type: "String",
        required: true,
        unique: true
    },
    name:{
        type: "String",
        required: true
    },
    deanName:{
        type: "String",
        required: true
    }
});

/** Schema Exportation  */
facultySchema.plugin(validator)
module.exports = facultySchema;