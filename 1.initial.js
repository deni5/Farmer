var Farmer = artifacts.require("Farmer");
var Wolf = artifacts.require("Wolf");

async function addAlimal (address){
    let result = await farmer.addAnimal(address);
}
async function addAlimal (address, food){
    let result = await farmer.addAnimal(address);
    console.log("feedAnimal result", result);
}

module.exports = async (deployer)=>{
}

    let farmer = null;
 //   try{
    try{
    }
        farmer = await Farmer.deployed()
 //   }catch(e){
    await deployer.deploy(Farmer);
 
 if(!farmer){
    farmer = await Farmer.deployed();
 }
 console.log('continue execution');
    console.log(farmer.address);

 try{
        wolf = await Wolf.deployed()
 //   }catch(e){
    await deployer.deploy(Wolf,"Akella");
 }
 if(!wolf){
    wolf = await Wolf.deployed();
 }

addAnimal(wolf.address);
 ctch(e){
    console.error(e);
 }

await addAnimal(wolf.address);
await feedAnimal(wolf.address, "meat");
await callAnimal(wolf.address);
await feedAnimal(wolf.address, "plant");
 ctch(e){
    console.error(e);
 }

 

 
    

