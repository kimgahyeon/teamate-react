const express = require("express");
const router = express.Router;

router.post("/project", async (req, res) => {
  const name = req.body.name;
  const project = req.body.project;
  const score = req.body.score;

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
  await contract.submitTransaction("addRating", name, project, score);
  console.log("Addrating works well! Transaction has been submitted");
  await gateway.disconnect();

  res.status(200).send("Addrating works well! Transaction has been submitted");
});

module.export = router;
