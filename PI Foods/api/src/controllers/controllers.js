const axios = require("axios");
const { Recipe, Diet } = require("../db");
const { API_KEY } = process.env;

const getApiInfo = async () => {
  const respAxios = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
  );
  const { results } = respAxios.data;
  if (results.length > 0) {
    let response = await results?.map((result) => {
      return {
        name: result.title,
        image: result.image,
        id: result.id,
        healthScore: result.healthScore,
        types: result.dishTypes?.map((element) => element),
        diets: result.diets?.map((element) => element),
        summary: result.summary
          .replace("<b>", " ")
          .replace("</b>", "")
          .replace("<b>", " ")
          .replace("</b>", "")
          .replace("<b>", " ")
          .replace("</b>", "")
          .replace("<b>", " ")
          .replace("</b>", "")
          .replace("<b>", " ")
          .replace("</b>", "")
          .replace("<b>", " ")
          .replace("</b>", "")
          .replace("<b>", " ")
          .replace("</b>", "")
          .replace("<b>", " ")
          .replace("</b>", "")
          .replace("<a href=", " ")
          .replace(">", " ")
          .replace("</a>", " ")
          .replace("<a href=", " ")
          .replace(">", " ")
          .replace("</a>", " ")
          .replace("<a href=", " ")
          .replace(">", " ")
          .replace("</a>", " ")
          .replace("<a href=", " ")
          .replace(">", " ")
          .replace("</a>", " "),
        steps:
          result.analyzedInstructions[0] && result.analyzedInstructions[0].steps
            ? result.analyzedInstructions[0].steps
                .map((item) => item.step)
                .join(" ")
            : "",
      };
    });
    return response;
  } else {
    throw new Error("Does not exist");
  }
};

const getDBInfo = async () => {
  const dataDB = await Recipe.findAll({
    include: {
      model: Diet,
      through: {
        attributes: [],
      },
    },
  });
  if (dataDB) {
    let response = await dataDB?.map((recipe) => {
      return {
        id: recipe.id,
        name: recipe.name,
        summary: recipe.summary,
        healthScore: recipe.healthScore,
        image:
          recipe.image === ""
            ? "https://cdn.dribbble.com/users/1012566/screenshots/4187820/topic-2.jpg"
            : recipe.image,
        steps: recipe.steps,
        diets: recipe.diets?.map((diet) => diet.name),
        createdInDb: recipe.createdInDb,
      };
    });
    return response;
  }
};

const getAllRecipes = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDBInfo();
  const allInfoRecipes = dbInfo.concat(apiInfo);
  const allInfoInOrder = allInfoRecipes.sort(function (a, b) {
    if (a.id > b.id) return 1;
    if (a.id < b.id) return -1;
    return 0;
  });
  return allInfoInOrder;
};

module.exports = { getAllRecipes };
