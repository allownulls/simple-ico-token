var SBCE = artifacts.require("SBCE");
var SURT= artifacts.require("SURT");
var Ico = artifacts.require("Ico");

module.exports = function(deployer) {  
  deployer.deploy(SBCE, 12754630, 0/*, "TokenTokenTokenToken", 8, "TTTT", 1*/);
  //.then(function(){deployer.deploy(Ico, Token.address, 1)});
  //deployer.deploy(Ico, "0xb358c47cc57da5f563231c88135554f14af52f43");

  //deployer.deploy(SURT, 4000000000000000);
};                      

