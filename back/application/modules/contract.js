const fs = require("fs");
const path = require("path");

const { FileSystemWallet, Gateway } = require("fabric-network");
const walletPath = path.join(process.cwd(), "wallet");
const wallet = new FileSystemWallet(walletPath);
console.log(`Wallet path: ${walletPath}`);
