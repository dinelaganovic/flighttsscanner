const router = require('express').Router()
const auth = require('../middleware/auth')
const notesCtrl = require('../controllers/notesCtrl')

router.route('/')
    .get(auth, notesCtrl.getNotes)
    .post(auth, notesCtrl.createNote)

router.route('/:id')
    .get(auth, notesCtrl.getNote)
    .put(auth, notesCtrl.updateNote)
    .delete(auth, notesCtrl.deleteNote)


module.exports = router