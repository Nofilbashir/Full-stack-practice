const express  = require('express')
const router  =express.Router()

router.get('/',function (req,res){
    res.send('Get API  user')
})

router.post('/',(req, res)=>{
    res.send('Post APi user')

})
router.delete('/',(req, res)=>{
    res.send('delete APi user')
})

router.put('/',(req, res)=>{
    res.send('update complete object APi user')
})

module.exports = router