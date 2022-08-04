'reach 0.1';

// constants
const amt = 1;

const computeOutcome = (winningNumber, bobRaffleNumber) => {
  if (winningNumber === bobRaffleNumber) {
    return 0;
  } else{
    return 1;
  }
}


const commonInteract = {
  getRandomNumber: Fun([UInt], UInt),
  seeOutcome: Fun([UInt], Null),
}


const AliceInteract = {
  ...commonInteract,
  ...hasRandom,
  numberOfTickets: UInt,
  raffleHasStarted: Fun([], Object(
    {
      nftId: Token,
      numberOfTickets: UInt,
    }
  )),
  displayHashValue: Fun([Digest], Null),
  displayWinningNumber: Fun([UInt], Null),
}

const BobInteract = {
  ...commonInteract,
  showBobRaffleNumber: Fun([UInt], Null),
}

export const main = Reach.App(() => {
  const A = Participant('Alice', AliceInteract);
  const B = Participant('Bob', BobInteract);
  init();
  // The first one to publish deploys the contract
  A.only(() => {
    const { nftId, numberOfTickets } = declassify(interact.raffleHasStarted())
    const _winnigNumber = interact.getRandomNumber(numberOfTickets)
    const [_commitAlice, _saltAlice] = makeCommitment(interact, _winnigNumber)
    const commitAlice = declassify(_commitAlice)
  });
  A.publish(nftId, numberOfTickets, commitAlice);
  A.interact.displayHashValue(commitAlice);
  commit();
  A.pay([[amt, nftId]])
  transfer([[amt, nftId]]).to(A);
  commit()

  unknowable(B, A(_winnigNumber, _saltAlice));

  B.only(() => {
    const bobRaffleNumber = declassify(interact.getRandomNumber(numberOfTickets))
    interact.showBobRaffleNumber(bobRaffleNumber);
  });
  B.publish(bobRaffleNumber);
  commit()

  A.only(() => {
    const saltAlice = declassify(_saltAlice)
    const winnigNumber = declassify(_winnigNumber)
    interact.displayWinningNumber(winnigNumber);
  });

  A.publish(saltAlice, winnigNumber);
  checkCommitment(commitAlice, saltAlice, winnigNumber);
  commit()

  each([A,B], () => {
    const outcome = computeOutcome(winnigNumber, bobRaffleNumber)
    interact.seeOutcome(outcome);
  });
  // write your program here
  exit();
});
