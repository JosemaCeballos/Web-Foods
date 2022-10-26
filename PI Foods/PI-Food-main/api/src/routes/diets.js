const { Router } = require("express");
const { Diet } = require("../db");
const router = Router();

router.get("/", async (req, res) => {
  const listDiets = [
    "gluten free",
    "dairy free",
    "ketogenic",
    "lacto ovo vegetarian",
    "vegan",
    "pescatarian",
    "paleolithic",
    "primal",
    "fodmap friendly",
    "whole 30",
  ];

  try {
    //Si lo que busco ya esta dentro de mi tabla no lo creo
    listDiets.forEach((e) => {
      Diet.findOrCreate({
        where: { name: e },
      });
    });
    const all = await Diet.findAll();
    res.status(200).send(all)
  } catch (error) {
    res.status(404).send("Error")
  }
});

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
