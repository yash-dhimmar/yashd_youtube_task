// const openpgp = require("openpgp");
// const fs = require("fs");

// const publicKeyArmored = "xjMEX6iKVxYJKwYBBAHaRw8BAQdANJ6JIXuMMZV3NIlwq0POS7xsF2N7+kAE7KQjAtfIuqjNHHBlcnNvbiA8cGVyc29uQHNvbWVib2R5LmNvbT7CjwQQFgoAIAUCX6iKVwYLCQcIAwIEFQgKAgQWAgEAAhkBAhsDAh4BACEJEFa2xqTRJwj1FiEEG / GESYcOw43pFOvJVrbGpNEnCPVDOwEA7 + GEWyHVNhKz3 / DKG63ni4l142Gen2rPBM1tCqE2VhEA / jRw2NmGAcjBdZlrrD5HTw6cgc6jCa5THooTM2fjxPAHzjgEX6iKVxIKKwYBBAGXVQEFAQEHQEWN + /1crOEo+g78Dek0Y8ayKojCJ4MUILzm + sIvrUMxAwEIB8J4BBgWCAAJBQJfqIpXAhsMACEJEFa2xqTRJwj1FiEEG / GESYcOw43pFOvJVrbGpNEnCPXtbQEAjky4JYeuqNJFx2MtPDFr76Ni/5jGri04OPyiHbtPzq8BAJ9veWKP0kaUgw0NCBx56i6CX4vDgZvSRAKew1BGCBMP= C6S6"

// encrypt();
// async function encrypt() {
//   const plainData = fs.readFileSync("secrets.txt");
//   console.log("plaindata======>", plainData)
//   const encrypted = await openpgp.encrypt({
//     // mess: openpgp.message.fromText(plainData),
//     publicKeys: (await openpgp.key.readArmored(publicKeyArmored)).keys,
//   });

//   fs.writeFileSync("secrets.txt", encrypted.data);
// }



// const privateKeyArmored = "xYYEX6iKVxYJKwYBBAHaRw8BAQdANJ6JIXuMMZV3NIlwq0POS7xsF2N7+kAE7KQjAtfIuqj+CQMI4CUgW9jPsGPgJvQnnCWFf1s7lO/5+D5ZQ9JK25fUtmQoWyHX0Ja1ryOoFnvq7u+7fUC0+RAzt8S1xv3eDzazfgNuLtEmufwMyR6wMi78Kc0ccGVyc29uIDxwZXJzb25Ac29tZWJvZHkuY29tPsKPBBAWCgAgBQJfqIpXBgsJBwgDAgQVCAoCBBYCAQACGQECGwMCHgEAIQkQVrbGpNEnCPUWIQQb8YRJhw7DjekU68lWtsak0ScI9UM7AQDv4YRbIdU2ErPf8MobreeLiXXjYZ6fas8EzW0KoTZWEQD + NHDY2YYByMF1mWusPkdPDpyBzqMJrlMeihMzZ + PE8AfHiwRfqIpXEgorBgEEAZdVAQUBAQdARY37 / Vys4Sj6DvwN6TRjxrIqiMIngxQgvOb6wi + tQzEDAQgH / gkDCJ2xNZ1OXxv94E8fTLQ3gYHFQuebn / PSijD8CqlvHNB //Z9sIxSFt7rzorW+9v6Awfe+pQwXW5iEyJkdiGu3BM91GMwMvMmZ+rBNlBvqiX7CeAQYFggACQUCX6iKVwIbDAAhCRBWtsak0ScI9RYhBBvxhEmHDsON6RTryVa2xqTRJwj17W0BAI5MuCWHrqjSRcdjLTwxa++jYv + Yxq4tODj8oh27T86vAQCfb3lij9JGlIMNDQgceeougl + Lw4Gb0kQCnsNQRggTDw ===yzT4"
// const passphrase = "qwerty";

//   decrypt();
//   async function decrypt() {
//   const privateKey = (await openpgp.key.readArmored([privateKeyArmored])).keys[0];
//   await privateKey.decrypt(passphrase);

//   const encryptedData = fs.readFileSync("secrets.txt");
//   console.log("encryptedData=========>",encryptedData)
//   const decrypted = await openpgp.decrypt({
//     message: await openpgp.message.readArmored(encryptedData),
//   privateKeys: [privateKey],
//   });

//   console.log(decrypted.data);
// }