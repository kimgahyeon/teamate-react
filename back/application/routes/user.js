const express = require("express");
const router = express.Router();

// 사용자 조회
router.get("/", async (req, res) => {
  const name = req.query.name;

  const walletPath = path.join(process.cwd(), "wallet");
  const wallet = new FileSystemWallet(walletPath);
  console.log(`Wallet path: ${walletPath}`);
  const userExists = await wallet.exists("user1");
  if (!userExists) {
    console.log(
      'An identity for the user "user1" does not exist in the wallet'
    );
    console.log("Run the registerUser.js application before retrying");
    return;
  }
  const gateway = new Gateway();
  await gateway.connect(ccp, {
    wallet,
    identity: "user1",
    discovery: { enabled: false },
  });
  const network = await gateway.getNetwork("mychannel");
  const contract = network.getContract("teamate");
  const result = await contract.evaluateTransaction("readRating", name);
  console.log(
    `Transaction has been evaluated, result is: ${result.toString()}`
  );

  var obj = JSON.parse(result);
  res.status(200).json(obj);
});

// 사용자 등록
app.post("/", async (req, res) => {
  const name = req.body.name;

  const walletPath = path.join(process.cwd(), "wallet");
  const wallet = new FileSystemWallet(walletPath);
  console.log(`Wallet path: ${walletPath}`);

  const userExists = await wallet.exists("user1");
  if (!userExists) {
    console.log(
      'An identity for the user "user1" does not exist in the wallet'
    );
    console.log("Run the registerUser.js application before retrying");
    return;
  }
  const gateway = new Gateway();
  await gateway.connect(ccp, {
    wallet,
    identity: "user1",
    discovery: { enabled: false },
  });
  const network = await gateway.getNetwork("mychannel");
  const contract = network.getContract("teamate");
  await contract.submitTransaction("addUser", name);
  console.log("Transaction has been submitted");
  await gateway.disconnect();

  res.status(200).send("Transaction has been submitted");
});

module.exports = router;
