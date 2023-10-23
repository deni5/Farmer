var Farmer = artifacts.require("Farmer");
var Wolf = artifacts.require("Wolf");

module.exports = async function(deployer) {
    let farmer = null;
    let wolf = null;

    try {
        farmer = await Farmer.deployed();
    } catch (e) {
        await deployer.deploy(Farmer);
        farmer = await Farmer.deployed();
    }

    console.log('continue execution');
    console.log('Farmer address:', farmer.address);

    try {
        wolf = await Wolf.deployed();
    } catch (e) {
        await deployer.deploy(Wolf, "Akella");
        wolf = await Wolf.deployed();
    }

    async function addAnimal(address) {
        try {
            let result = await farmer.addAnimal(address);
            console.log("addAnimal result", result);
        } catch (e) {
            console.error(e);
        }
    }

    async function feedAnimal(address, food) {
        try {
            let result = await farmer.feed(address, food);
            console.log("feedAnimal result", result);
        } catch (e) {
            console.error(e);
        }
    }

    async function callAnimal(address) {
        try {
            let result = await farmer.call(address);
            console.log("callAnimal result", result);
        } catch (e) {
            console.error(e);
        }
    }

    await addAnimal(wolf.address);
    await feedAnimal(wolf.address, "meat");
    await callAnimal(wolf.address);
    await feedAnimal(wolf.address, "plant");
}
