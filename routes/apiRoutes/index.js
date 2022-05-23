
// Used to create router object requiring express to return 

const router = require('express').Router();


const notesRoutes = require('./noteRoutes')

// Uses specified middleware functions
router.use(notesRoutes);



module.exports = router;

