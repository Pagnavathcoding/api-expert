import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    message: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: String,
        default: Date.now(),
    }
});

// [
//     {
//         username: "John",
//         email: "john@gmail.com",
//         message: "Hello!"
//     },
//     {
//         _id: "sdf97sf98s7df",
//         username: "sdfsdf",
//         email: "sdfsdf@gmail.com",
//         message: "Hi!",
//         date: "239487234987234"
//     },
// ]

export default mongoose.model("Contact", ContactSchema);
