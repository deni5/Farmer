var Horse = artifacts.require("Horse");
var Farmer = artifacts.require("Farmer");

let horse = null;
let farmer = null;

const Horse_Name = "Uma";
const Horse_Speak = "Igogo";
const Animal_Sleep = "Z-z-z...";
const Animal_Eats_Plant = "Animal eats plant";
const Animal_Eats_Plastic = "Animal eats plastic";
const Animal_Eats_Notfood = "Animal eats not-food";

const plant = "plant";
const meat = "meat";
const plastic = "plastic";
const notfood = "notfood";
const canEatPlant = "Can eat plant";
const canEatMeat = "Can eat meat";
const canEatPlastic = "Can eat plastic";
const canEatNotfood= "Can eat not-food";


contract("Farmer", async(accounts) => {
  let farmer=false;
  it("Farmer is deployed", async () => {
    let farmerIsDeployed = false;
    try{
      farmer = await Farmer.deployed ()
      if(farmer.address){
        farmerIsDeployed=true
      }
    }catch(e){

    }
    assert.equal(farmerIsDeployed, true,"Farmer is deployed");
  });

it("Farmer has 1 animal added", async () => {
    let animals = await farmer.getAnimal();
    assert.equal(animals.length,1, "Farmer has more or less than 1 animal");
  });


  contract("Horse", async(accounts) => {
  let horse = false;
  it("Horse is deployed", async () => {
    let horseIsDeployed = false;
    try{
      horse = await Farmer.deployed ()
      if(horse.address){
        horseIsDeployed = true
      }
    }catch(e){

    }
    assert.equal(horseIsDeployed, true,"Horse is deployed");
  });

  it("Horse is named Uma", async () => {
    let name = await horse.getName();
    assert.equal(name, Horse_Name, "Horse does not have a name as expected");
  });

    it("Horse can sleep", async () => {
    let result = await horse.sleep();
    assert.equal(result, Animal_Sleep, "Horse does not sleep as expected");
  });

    it("Horse can eat only plant", async () => {
let canEatPlant = false;
let canEatMeat = false;
let canEatPlastic = false;
let canEatNotfood = false;

    try{
        canEatPlant = await horse.eat(plant);
      }catch(e){
      }
    assert.equal(canEatPlant, Animal_Eats_Plant, "Horse can not eat plant");

      try{
        canEatMeat = await horse.eat(meat);
      }catch(e){
      }
    assert.notequal(canEatMeat, Animal_Eats_Meat, "Horse can eat meat");

      try{
        canEatPlastic = await horse.eat(plastic);
      }catch(e){
      }
    assert.notequal(canEatPlastic, Animal_Eats_Plastic, "Horse can eat plastic");

    try{
        canEatNotfood = await horse.eat(notfood);
      }catch(e){
      }
    assert.notequal(canEatNotfood, Animal_Eats_Notfood, "Horse can eat not-food");

  });

 








