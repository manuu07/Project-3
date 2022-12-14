const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema({
    bookCover:{
        type:String,
        required:true,
        trim:true
    },
    title: { 
        type: String, 
        required: true,
        trim: true, 
        lowercase: true,
        unique: true
    },

    excerpt: { 
        type: String, 
        required: true, 
        trim: true 
    },

    userId: { 
        type: ObjectId, 
        ref:"User", 
        required: true, 
        trim: true 
    },

    ISBN: { 
        type: String, 
        required: true, 
        trim: true 
    },

    category: { 
        type: String, 
        required: true, 
        trim: true 
    },

    subcategory: { 
        type:String, 
        required: true, 
        trim: true 
    },

    reviews: {
         type: Number, 
         default: 0 
        },

    deletedAt: { 
        type: Date, 
        default: null },

    isDeleted: { 
        type: Boolean, 
        default: false 
    },

    releasedAt: { 
        type: String,
        required:true
    } 

}, { timestamps: true })

module.exports = mongoose.model("Book", bookSchema)