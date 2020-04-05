import { materials, recipes, sources } from "./tools";

test("materials Map has names per token", () => {
  const token = "torpedo_system";
  const itemName = "Torpedo System";
  const { name } = materials.get(token);
  expect(name).toBe(itemName);
});

test("recipes Map has a recipe", () => {
  const token = "torpedo_system";
  const item = recipes.get(token);
  expect(item).not.toBeFalsy();
});

test("sources Map has a list of tokens", () => {
  const item = sources.get("gold");
  expect(item).not.toBeFalsy();
});

test("sources Map has a valid token for 'gold'", () => {
  const item = sources.get("gold");
  const found = item.find(i => i.item === "advanced_wiring_kit");
  expect(found).toBeTruthy();
});
