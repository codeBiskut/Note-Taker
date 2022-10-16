const router = require("express").Router()
const fs = require("fs")
const db = require("../db/db.json")

// GET /api/notes should read the db.json file and return all saved notes as JSON
// POST /api/notes should recieve a new note to save on the request body, add i tto tthe db.json file, and then return the ndew note to the client. find a way to give each note a unique id when it's saved (look into npm packages that could do this for you )

router.get("/api/notes")