//import assertRevert from '../helpers/assertRevert.js';
const SBCE = artifacts.require('SBCE');

//contract('SBCE', function ([_, owner, recipient, anotherAccount]) {

contract('SBCE', function(accounts) {
  it("should put 12754630 SBCE coin in the first account", function() {
    return SBCE.deployed(12754630,0).then(function(instance) {
      return instance.balanceOf.call(accounts[0]);
    }).then(function(balanceOf) {
      assert.equal(balanceOf.valueOf(), 12754630 * 100000000, "12754630 SBCE wasn't in the first account");
    });
  });
});
