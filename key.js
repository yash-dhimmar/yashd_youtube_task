const openpgp = require("openpgp");

generate();
async function generate() {
  const { privateKeyArmored, publicKeyArmored } = await openpgp.generateKey({
    curve: "ed25519",
    passphrase: "qwerty",
  });
  console.log(privateKeyArmored);
  console.log(publicKeyArmored);
}