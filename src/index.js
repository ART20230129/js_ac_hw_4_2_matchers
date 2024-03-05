export default function sortHeroes(obj) {
  obj.sort((a, b) => b.health - a.health);
  return obj;
}
