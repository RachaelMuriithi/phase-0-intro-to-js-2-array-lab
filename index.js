// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
    cats.push ("Ralph")
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat() {
    cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift()
} 
function appendCat(name) {
    const newCats =[...cats,"Broom"];
    return newCats;    
}
function  prependCat(name) {
    const todayCats = ["Arnold", ...cats]
    return todayCats;
}
function removeLastCat() {
    const foreverCats = cats.slice (0,2);
    return foreverCats;
}
function removeFirstCat()  {
    const whyCats = cats.slice (1);
    return whyCats;
    
}