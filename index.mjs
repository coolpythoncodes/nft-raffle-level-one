import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

// constants
const numberOfTickets = 10
const OUTCOME = ["Bob wins the Raffle ", "Bob lost the raffle"]


// helper functions
const getRandomNumber = (number) => {
  const randomNumber = Math.floor((Math.random() * number) + 1);
  return randomNumber;
}

const [accAlice, accBob] =
  await stdlib.newTestAccounts(2, startingBalance);
console.log('Hello, Alice and Bob!');

console.log('Launching...');
const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

// nft creation by Alice
console.log("Alice is creating the nft")
const nftAlice = await stdlib.launchToken(accAlice, "Goodness Baby", "GNB", { supply: 1 })
const raffleParameters = {
  nftId: nftAlice.id,
  numberOfTickets,
}
// Bob accepts the token id
await accBob.tokenAccept(raffleParameters.nftId)
const commonInteract = {
  getRandomNumber,
  seeOutcome: (outcome) => {
    const raffleOutcome = parseInt(outcome)
    console.log(`${raffleOutcome === 0 ? OUTCOME[0] : OUTCOME[1]}`)
  }
}

const AliceInteract = {
  ...commonInteract,
  ...stdlib.hasRandom,
  raffleHasStarted: () => {
    console.log("Alice has started the raffle")
    return raffleParameters;
  },
  raffleParameters,
  displayHashValue: (hash) => {
    console.log(`Winning hash value is ${hash}`)
  },
  displayWinningNumber: (winningNumber) => {
    console.log(`Winning raffle number is ${winningNumber}`)
  }

}

const BobInteract = {
  ...commonInteract,
  ...stdlib.hasRandom,
  showBobRaffleNumber: (number) => {
    console.log(`Bob's raffle number: ${number}`)
  }

}

console.log('Starting backends...');
await Promise.all([
  backend.Alice(ctcAlice, AliceInteract),
  backend.Bob(ctcBob, BobInteract),
]);

console.log('Goodbye, Alice and Bob!');
