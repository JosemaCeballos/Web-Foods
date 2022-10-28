const express = require("express");
const router = express.Router();
require("dotenv").config();
const { Recipe, Diet } = require("../db");
const { getAllRecipes } = require("../controllers/controllers");

//Me traigo la info de la API y de la database, y además me lo busque por nombre
router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    const allRecipes = await getAllRecipes();
    if (name) {
      // verificamos si el name que esta en el query
      const recetas = allRecipes.filter((r) =>
        r.name.toLowerCase().includes(name.toLowerCase())
      );
      if (recetas.length) return res.json(recetas);
      else
        return res.send(
          `No se ha podido encontrar una receta con el nombre ${name}`
        );
    }
    res.json(allRecipes);
  } catch (error) {
    res.status(404).send(error);
  }
});

router.get("/:idReceta", async (req, res) => {
  const { idReceta } = req.params;

  const infoTotal = await getAllRecipes();
  let infoById = infoTotal.filter(
    (e) => e.idApi == idReceta || e.id == idReceta
  );
  if (infoById.length > 0) res.status(200).json(infoById);
  else res.status(400).send("No existe una receta con ese id");
});

router.post("/", async (req, res) => {
  let { name, summary, healthScore, image, steps, diets } = req.body;
  try {
    const newRecipe = await Recipe.create({
      name,
      image,
      summary,
      healthScore,
      steps,
      diets,
    });
    const dietsInDb = await Diet.findAll({
      where: { name: diets },
    });
    newRecipe.addDiet(dietsInDb);
    res.status(200).json(newRecipe);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
