const router = require("express").Router()
const fs = require("fs")
const db = require("../db/db.json")
const { v1:uuidv1} = require("uuid")

// GET /api/notes should read the db.json file and return all saved notes as JSON
// POST /api/notes should recieve a new note to save on the request body, add i tto tthe db.json file, and then return the ndew note to the client. find a way to give each note a unique id when it's saved (look into npm packages that could do this for you )


// get the notes
router.get("/api/notes", (req, res) => {
    res.json(db)
})

// add a note
router.post("/api/notes", (req, res) => {
    console.log('recieved')

    // deconstruct response
    const { title, text} = req.body;

    console.log(title, text)

    // // if it's all there
    // if(title && text){
    //     // create a new note
    //     const newNote = {
    //         title,
    //         test,
    //         noteId: uuidv1()
    //     }

    //     const response = {
    //         status: 'success',
    //         body: newNote
    //     }

    //     console.log(response)

    //     // show success
    //     res.status(201).json(response)
    // }
    // // if not, throw error
    // else{
    //     res.status(500).json('error')
    // }
})

module.exports = router