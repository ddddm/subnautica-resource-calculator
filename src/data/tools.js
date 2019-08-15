import rawRecipes from "./recipes.json";
import materialNames from "./materials.json";

const materialTokensToNames = new Map();
const namesReversed = new Map();
const recipesFor = new Map();
const recipesFrom = new Map();

for (let item in materialNames) {
  namesReversed.set(materialNames[item], item);
  materialTokensToNames.set(item, materialNames[item]);
}

function existingMaterialsMapper(material) {
  const {
    item: { name },
    qty
  } = material;
  const token = namesReversed.get(name);
  return {
    item: token,
    qty
  };
}

for (let itemName in rawRecipes) {
  const token = namesReversed.get(itemName);
  const item = rawRecipes[itemName];
  const { materials } = item;

  if (materials) {
    const currentMaterial = {
      item: token
    };
    const mappedMaterials = materials.map(existingMaterialsMapper);
    recipesFor.set(token, mappedMaterials);
    mappedMaterials.forEach(mappedMaterial => {
      const { item } = mappedMaterial;
      const existingItems = recipesFrom.get(item) || [];
      recipesFrom.set(item, [...existingItems, currentMaterial]);
    });
  }
}
export const recipes = recipesFor;
export const materials = materialTokensToNames;
export const sources = recipesFrom;
