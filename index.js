import express from "express";
import cors from "cors";
import Contact from "./Model/Contact.js";
import mongoose from "mongoose";
const app = express();
app.use(cors());
app.use(express.json());

const port = 9000;

app.get("/", (req, res) => {
    return res.send(JSON.stringify(req.params));
});

app.get("/user", (req, res) => {
    return res.json([
        {
            username: "John",
        },
        {
            username: "Michael"
        }
    ]);
})

mongoose.connect("sdljsdlfsdfsdf", () => {
    console.log("Mongodb connected!");
})

// const post = {
//     one: {
//         image: "hello.png",
//         title: "Hello",
//         content: "The first post!",
//         likes: {
//             like: {
//                 counter: {
//                     user: "LKSJDFLJSDFLJSDF23",
//                     count: 1
//                 }
//             },
//             love: {
//                 counter: 0
//             }
//         },
//         comments: {
//             first: {
//                 display: {
//                     text: "this is comment",
//                     like: 
//                 }
//             }
//         }
//     }
// }

app.get("/api", (req, res) => {
    Contact.find().then(data => {
        return res.json(data);
    })
})

app.post("/api", (req, res) => {
    const postMessage = new Contact({
        username: req.body.username,
        email: req.body.email,
        message: req.body.message
    });
    postMessage.save().then(data => {
        return res.json(data);
    });
});

app.put("/api/:id", async (req, res) => {
    try {
        await Contact.findByIdAndUpdate(req.params.id, {
            username: req.body.username,
            email: req.body.email,
            message: req.body.message
        });
    } catch(err) {
        return res.status(400).json({"Error": "Can't Update Data!"});
    }
})
// axios.put("example.com/api/" + "sdfs8d9f79s8dfsf")

app.delete("/api/:id", (req, res) => {
    return Contact.findById(req.params.id).then(data => {
        return data.remove().then(() => {
            return res.status(200).json({"delete": true});
        }).catch(err => {
            return res.status(400).json({"delete": false});
        })
    })
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
