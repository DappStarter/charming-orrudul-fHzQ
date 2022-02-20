require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remember unusual include private bubble sunny'; 
let testAccounts = [
"0x1b072910beb4c7aea9bbe7d10613fe1d82572ff74492b10ccde54f0ea13f0324",
"0xcf5294175f9f90fa97a24bb1cf1e5e9accfd922d5dbdd51ad25af6678822c133",
"0xb945ec0a46e412c7278e393d42d2f6383e700c33cc1455efb5deb8d646d54882",
"0xccb90495ac630cc038ea834ce2310d7566abddd93d7be725b221f6b8c06cbd0e",
"0xadfcdda17ded38a10fe563ae3f7cf800e84e6863595eb391a25cfd1afd4b4e79",
"0x6c4d33e56f1375aef41730b99d64134907dda4e6132354f28b23e92be3b867b8",
"0x79f9312118a13fbf573f2dac74bbdcba906f6f4a52843116411d49e0722f77df",
"0x0631122d93edd18e1f2e1658f0a5fec45ef2f1577e9ecacad872049ae9615096",
"0x60aa3365322529906e0bc47288e5089339eb1b35670b4196d497976d170fd65c",
"0xe73aecbbd36c900a881e9d3ea35917122da53ca8ca7e6f95d23e52ed704a521d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


