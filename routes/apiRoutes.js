const router = require("express").Router()
const fs = require("fs")
const notes = require("../db/notes.json")
const { v1:uuidv1} = require("uuid")

// GET /api/notes should read the db.json file and return all saved notes as JSON
// POST /api/notes should recieve a new note to save on the request body, add i tto tthe db.json file, and then return the ndew note to the client. find a way to give each note a unique id when it's saved (look into npm packages that could do this for you )


// get the notes
router.get("/notes", (req, res) => {
    res.status(200).json(notes)
    console.log(res)
})

// add a note
router.post("/notes", (req, res) => {
    // deconstruct response
    const { title, text} = req.body;
    // if it's all there
    if(title && text){
        // create a new note
        const newNote = {
            title,
            text,
            noteId: uuidv1()
        }

        const noteLoc = './db/notes.json'

        // push it to the db file and update the db
        fs.readFile(noteLoc, 'utf8', (err, data) => {
            if (err){
                console.error(err); 
            }
            else {
                const modifiedDb = JSON.parse(data);
                modifiedDb.push(newNote)
                fs.writeFile(noteLoc, JSON.stringify(modifiedDb, null, 4), (err) => 
                err ? console.error(err) : console.info('\n data written to db.json'))
            }
        })

        const response = {
            status: 'success',
            body: notes
        }

        // show success
        res.status(201).json(response)
    }
    // if not, throw error
    else{
        res.status(500).json('error')
    }
})

module.exports = router