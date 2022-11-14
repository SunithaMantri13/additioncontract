const {ethers} = require("hardhat");
async function main(){
    const Greeting = await ethers.getContractFactory("Addition");
    const greet = await Greeting.deploy();
    const result = await greet.deployed();
    console.log("Greeting contract deployed at: ", result.address);
  
}
main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});