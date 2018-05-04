12 754 630 total
4 719 213 bonus emission (airdrop)

Todo: 
		1. uncomment tokenRecipient and test the allowance
		2. review the token against the open-zeppelin examples

ToDo: 1. move constructor arguments to separate setter function with lock flag
      (reason: constructor args are put through migration file, no straightforward way to pass diff args in test)

	  2. more tests should cover both SBCE and SURT contracts, (airdrop, etc).

	  3. add functions from the constructor (requ.md file)

	  4. register github account

First when SBCE & SURT were deployed the migrations were turned off - the first js was renamed.
When SBCE was updated, the migration contract was deployed as well.

Deploying process:

1. Make sure private key for future owner MAINNET_PRIVATE_KEY in .env file has right value.
2. Make sure the migration such as "initial.js" is turned off. Just rename all the unneeded files.
3. truffle migrate --network mainnet
4. write down the contract address
5. generate ABI for constructor parameters https://abi.sonnguyen.ws/
6. verify the contract code



