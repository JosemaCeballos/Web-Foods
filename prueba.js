let arrayToPlay = [
  {
    a: "5",
    a: "id",
    a: "id",
    a: "id",
  },
  {
    b: "idAPi",
    b: "idAPi",
    b: "idAPi",
    b: "idAPi",
    b: "idAPi",
    b: "idAPi",
  },
  {
    a: "id",
    a: "id",
    a: "id",
    a: "id",
  },
];

prueba = (action) => {
  const pruebaFinal =
    action === "Api or DB"
      ? arrayToPlay
      : action === "idApi"
      ? arrayToPlay.filter((recipe) => recipe.hasOwnProperty("b"))
      : arrayToPlay.filter((recipe) => recipe.hasOwnProperty("a"))
    
  return pruebaFinal;
};

let id = "id";
let idApi = "idApi";
let ApiOrDb = "Api or DB";

console.log(prueba(idApi));
console.log(prueba(id));
console.log(prueba(ApiOrDb));



router.get("/pokemons", async (req, res) => {
  const { name } = req.query;
  try {
    const allPoke = await allInfo();
    if (name) {
      // verificamos si el name que esta en el query
      const poke = allPoke.filter((r) =>
        r.name.toLowerCase().includes(name)
      );
      if (poke.length) return res.json(poke);
      else
        return res.status(404).send(
          `No se ha podido encontrar una receta con el nombre ${name}`
        );
    }
    res.json(allPoke);
  } catch (error) {
    res.status(404).send(error);
  }
});