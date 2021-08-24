const express=require("express")
const router=express.Router();

const peopleController=require("../controllers/people")
const dataController=require("../controllers/films")
const filmController=require("../controllers/film")


router.get("/films",dataController.getall);
router.get("/film",filmController.getall);

router.get("/people",peopleController.getall);

module.exports=router