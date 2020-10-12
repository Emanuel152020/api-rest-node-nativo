/** packages */

const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

/** Scheame creation */

const departmentSchema = new mongoose.Schema({

    code:{
        type: "String",
        required: true,
        unique: true
    },
    name:{
        type: "String",
        required: true
    },
    directorName:{
        type: "String",
        required: true
    },
    idFaculty:{
        type: "String",
        required: true
    }

});

/** Schema Exportation  */
departmentSchema.plugin(validator)
module.exports = departmentSchema;