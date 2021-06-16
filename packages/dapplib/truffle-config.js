require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth maze protect good kitchen obscure six'; 
let testAccounts = [
"0x4f965b713b0e3cd5d7945b9cf92894b992f3a353d4f21815557a3519662c7441",
"0x5e6c4f1f74ed253b9d665626022f3c3077d3cfacc70683713e31415c9809ef94",
"0xc510bd9b3032d8f63084577cb40b0dca91d44a486f9182bf643cbe0dd14736b5",
"0xe356d55d72f5d22a757abc8c22a313a00a4bb142cd5d9ad2324c64546cd0c463",
"0x1a1fe99dbb5f3cf48a28ae5e4797cb48f9656aeb22027e83778711fb21f47021",
"0x8d484bfc2bb18f8c3e3d28920fa94639642f104192b934deaf5203b78fb8b013",
"0x4ff4b94cfb8816416e17076f29accd15b8729aefa04b4f7bfc4b7671dcd48733",
"0xf361c1e3095d27995dcf85cbb6b7741cd62d3fadb7c150080ef77b22f32799a6",
"0x05243793d405b985970f789ff9aa2559bbd277f18a47ce833b300bd204375932",
"0x44712a7d97572407f9014deec372386c58fc6b065245fa82727ad70399107d0e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

