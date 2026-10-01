const express = require('express')
const router = express.Router()

router.get('/', (req, res, next)=>{
    res.send(`Here is the list of books!`)
})

router.post('/', (req, res, next)=>{
    res.send(`Book has been added!`)
})

module.exports = router
