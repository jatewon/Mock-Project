const router = require("express").Router();
const Category = require("../models/Category")
router.post("/",async (req,res)=>{
    const newDog = new Category(req.body);
    try {
        const saveDog = await newDog.save();
        res.status(200).json(saveDog);
    } catch (err) {
        res.status(500).json(err);
    }
})
router.get("/",async (req,res)=>{
    try{
        const dogs = await Category.find();
        res.status(200).json(dogs);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
})
module.exports = router;