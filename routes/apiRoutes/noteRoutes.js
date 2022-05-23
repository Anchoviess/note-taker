//how app end points respond to client request
const router = require("express").Router();

//history of notes stored as a json object in db folder
const {
    notes
} = require('../../db/db');

//to create or delete a note

const {
    noteCreateNewNote,
    noteDeleteNote
} = require('../../lib/noteFunctions');

//save note history to json db 
//res object represents the HTTP response that an Express app sends when it gets an HTTP request.
router.get('/notes', (req, res) => {
    let saved = notes;
    res.json(saved);
})

router.post('/notes', (req, res) => {
    //req.body holds params that are sent from the client as part of a POST request
    
    req.body.id = notes.length.toString();
    let note = noteCreateNewNote(req.body, notes);
    res.json(note);
})
// deletes params that sent from the client as part of the post request
router.delete('/notes/:id', (req, res) => {
    noteDeleteNote(notes, req.params.id);
    res.json(notes);
 })

//the module.exports=router is mapping a router and the logic required to map file along with the right callbacks etc.
module.exports = router;