// Automatically generated with Reach 0.1.11 (578589af)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (578589af)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2],
      2: [ctc0, ctc1, ctc2],
      3: [ctc0, ctc1, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Object({
    nftId: ctc0,
    numberOfTickets: ctc1
    });
  const ctc3 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc4 = stdlib.T_Digest;
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Address;
  
  
  const v125 = stdlib.protect(ctc2, await interact.raffleHasStarted(), {
    at: './index.rsh:46:76:application',
    fs: ['at ./index.rsh:45:9:application call to [unknown function] (defined at: ./index.rsh:45:13:function exp)'],
    msg: 'raffleHasStarted',
    who: 'Alice'
    });
  const v126 = v125.nftId;
  const v127 = v125.numberOfTickets;
  const v130 = stdlib.protect(ctc1, await interact.getRandomNumber(v127), {
    at: './index.rsh:47:51:application',
    fs: ['at ./index.rsh:45:9:application call to [unknown function] (defined at: ./index.rsh:45:13:function exp)'],
    msg: 'getRandomNumber',
    who: 'Alice'
    });
  const v131 = stdlib.protect(ctc1, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:48:54:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:45:9:application call to [unknown function] (defined at: ./index.rsh:45:13:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v132 = stdlib.digest(ctc3, [v131, v130]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v126, v127, v132],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:51:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc1, ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:51:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v135, v136, v137], secs: v139, time: v138, didSend: v39, from: v134 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v135
        });
      ;
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v135, v136, v137], secs: v139, time: v138, didSend: v39, from: v134 } = txn1;
  ;
  ;
  stdlib.protect(ctc5, await interact.displayHashValue(v137), {
    at: './index.rsh:52:30:application',
    fs: ['at ./index.rsh:52:30:application call to [unknown function] (defined at: ./index.rsh:52:30:function exp)', 'at ./index.rsh:52:30:application call to "liftedInteract" (defined at: ./index.rsh:52:30:application)'],
    msg: 'displayHashValue',
    who: 'Alice'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v134, v135, v137],
    evt_cnt: 0,
    funcNum: 1,
    lct: v138,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:54:5:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:4:13:decimal', stdlib.UInt_max, '1'), v135]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v150, time: v149, didSend: v50, from: v148 } = txn2;
      
      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:4:13:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v135
        });
      sim_r.txns.push({
        kind: 'from',
        to: v134,
        tok: v135
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc0, ctc4],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v150, time: v149, didSend: v50, from: v148 } = txn2;
  ;
  ;
  const v160 = stdlib.addressEq(v134, v148);
  stdlib.assert(v160, {
    at: './index.rsh:54:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v177], secs: v179, time: v178, didSend: v63, from: v176 } = txn3;
  ;
  stdlib.protect(ctc5, await interact.displayWinningNumber(v130), {
    at: './index.rsh:70:34:application',
    fs: ['at ./index.rsh:67:9:application call to [unknown function] (defined at: ./index.rsh:67:13:function exp)'],
    msg: 'displayWinningNumber',
    who: 'Alice'
    });
  
  const txn4 = await (ctc.sendrecv({
    args: [v134, v135, v137, v131, v130],
    evt_cnt: 2,
    funcNum: 3,
    lct: v178,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:73:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v183, v184], secs: v186, time: v185, didSend: v73, from: v182 } = txn4;
      
      ;
      sim_r.txns.push({
        kind: 'halt',
        tok: v135
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc6, ctc0, ctc4, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v183, v184], secs: v186, time: v185, didSend: v73, from: v182 } = txn4;
  ;
  const v187 = stdlib.addressEq(v134, v182);
  stdlib.assert(v187, {
    at: './index.rsh:73:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v188 = stdlib.digest(ctc3, [v183, v184]);
  const v189 = stdlib.digestEq(v137, v188);
  stdlib.assert(v189, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:74:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  let v197;
  const v198 = stdlib.eq(v184, v177);
  if (v198) {
    v197 = stdlib.checkedBigNumberify('./index.rsh:8:12:decimal', stdlib.UInt_max, '0');
    }
  else {
    v197 = stdlib.checkedBigNumberify('./index.rsh:10:12:decimal', stdlib.UInt_max, '1');
    }
  stdlib.protect(ctc5, await interact.seeOutcome(v197), {
    at: './index.rsh:79:24:application',
    fs: ['at ./index.rsh:77:7:application call to [unknown function] (defined at: ./index.rsh:77:18:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc5 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v135, v136, v137], secs: v139, time: v138, didSend: v39, from: v134 } = txn1;
  ;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v150, time: v149, didSend: v50, from: v148 } = txn2;
  ;
  ;
  const v160 = stdlib.addressEq(v134, v148);
  stdlib.assert(v160, {
    at: './index.rsh:54:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  ;
  const v175 = stdlib.protect(ctc1, await interact.getRandomNumber(v136), {
    at: './index.rsh:61:64:application',
    fs: ['at ./index.rsh:60:9:application call to [unknown function] (defined at: ./index.rsh:60:13:function exp)'],
    msg: 'getRandomNumber',
    who: 'Bob'
    });
  stdlib.protect(ctc3, await interact.showBobRaffleNumber(v175), {
    at: './index.rsh:62:33:application',
    fs: ['at ./index.rsh:60:9:application call to [unknown function] (defined at: ./index.rsh:60:13:function exp)'],
    msg: 'showBobRaffleNumber',
    who: 'Bob'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v134, v135, v137, v175],
    evt_cnt: 1,
    funcNum: 2,
    lct: v149,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:64:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v177], secs: v179, time: v178, didSend: v63, from: v176 } = txn3;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc0, ctc2, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v177], secs: v179, time: v178, didSend: v63, from: v176 } = txn3;
  ;
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 3,
    out_tys: [ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v183, v184], secs: v186, time: v185, didSend: v73, from: v182 } = txn4;
  ;
  const v187 = stdlib.addressEq(v134, v182);
  stdlib.assert(v187, {
    at: './index.rsh:73:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v188 = stdlib.digest(ctc4, [v183, v184]);
  const v189 = stdlib.digestEq(v137, v188);
  stdlib.assert(v189, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:74:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Bob'
    });
  let v201;
  const v202 = stdlib.eq(v184, v177);
  if (v202) {
    v201 = stdlib.checkedBigNumberify('./index.rsh:8:12:decimal', stdlib.UInt_max, '0');
    }
  else {
    v201 = stdlib.checkedBigNumberify('./index.rsh:10:12:decimal', stdlib.UInt_max, '1');
    }
  stdlib.protect(ctc3, await interact.seeOutcome(v201), {
    at: './index.rsh:79:24:application',
    fs: ['at ./index.rsh:77:7:application call to [unknown function] (defined at: ./index.rsh:77:18:function exp)'],
    msg: 'seeOutcome',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAIAAECAwQIIKCNBiYCAQAAIjUAMRhBAh4pZEkiWzUBIQVbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSQMQADCSSUMQABpJRJEJTQBEkQ0BEkiEkw0AhIRRChkNQNJNQVJIls1/yEFWzX+gASkpfCINP8WUDT+FlCwNANXACAxABJENANXKCA0/xY0/hZQARJEsSKyASKyEiEEshAyCbIVMgqyFDQDIQZbshGzQgExSCQ0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hBls1/lcoIDX9STUFFzX8gASXTvcXNPwWULA0/zT+FlA0/VAoSwFXAEhnSCU1ATIGNQJCAPpJIwxAAGlIIzQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yEGWzX+VyggNf2ABJqLkXSwIzT+iAEpNP8xABJEsSKyASOyEiEEshA0/7IUNP6yEbM0/zT+FlA0/VAoSwFXAEhnSCQ1ATIGNQJCAItIIQeIANYiNAESRDQESSISTDQCEhFESTUFSUkiWzX/IQVbNf5XECA1/YAEFi0oOzT/FlA0/hZQNP1QsCEHiACcsSKyASKyEiEEshAyCrIUNP+yEbMxADT/FlA0/VAoSwFXAEhnSCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJDE1EkQiMTYSRCIxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJNABJSkkjCDUAOBQyChJEOBAhBBJEOBFPAhJEOBISRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 72,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v135",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v136",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v137",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v135",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v136",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v137",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v177",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v183",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v184",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v177",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v183",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v184",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000f1238038062000f12833981016040819052620000269162000232565b60008055436003556040805133815282516020808301919091528084015180516001600160a01b031683850152908101516060830152820151608082015290517fb77e0b7275941fdbf00765e1e98b79777de983c0eaec6159504ea2e32b7160649181900360a00190a16200009e341560076200012b565b604080516060808201835260006020808401828152848601838152338087528884018051516001600160a01b0390811685529051890151835260019586905543909555875193840152905190921694810194909452519083015290608001604051602081830303815290604052600290805190602001906200012292919062000155565b5050506200031b565b81620001515760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200016390620002de565b90600052602060002090601f016020900481019282620001875760008555620001d2565b82601f10620001a257805160ff1916838001178555620001d2565b82800160010185558215620001d2579182015b82811115620001d2578251825591602001919060010190620001b5565b50620001e0929150620001e4565b5090565b5b80821115620001e05760008155600101620001e5565b604051606081016001600160401b03811182821017156200022c57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200024657600080fd5b604080519081016001600160401b03811182821017156200027757634e487b7160e01b600052604160045260246000fd5b604052835181526060601f19830112156200029157600080fd5b6200029b620001fb565b60208501519092506001600160a01b0381168114620002b957600080fd5b8252604084810151602080850191909152606090950151908301529283015250919050565b600181811c90821680620002f357607f821691505b602082108114156200031557634e487b7160e01b600052602260045260246000fd5b50919050565b610be7806200032b6000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780632c10a1591461008357806345f703961461009657806383230757146100a9578063ab53f2c6146100be578063ad2d91d1146100e157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d6100913660046109d7565b6100f4565b61005d6100a43660046109d7565b6102dc565b3480156100b557600080fd5b50600154610070565b3480156100ca57600080fd5b506100d3610466565b60405161007a929190610a1f565b61005d6100ef366004610a59565b610503565b610104600160005414600b6106ac565b61011e8135158061011757506001548235145b600c6106ac565b60008080556002805461013090610a6b565b80601f016020809104026020016040519081016040528092919081815260200182805461015c90610a6b565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c19190610abc565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516101f4929190610b40565b60405180910390a1610208341560086106ac565b61022261021b33836020015160016106d2565b60096106ac565b805161023a906001600160a01b03163314600a6106ac565b61024e8160200151826000015160016106ea565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b0390811680885289850151821684528989015183526002909555436001558751938401949094529051909216948101949094525190830152906080015b604051602081830303815290604052600290805190602001906102d69291906108e9565b50505050565b6102ec600260005414600e6106ac565b610306813515806102ff57506001548235145b600f6106ac565b60008080556002805461031890610a6b565b80601f016020809104026020016040519081016040528092919081815260200182805461034490610a6b565b80156103915780601f1061036657610100808354040283529160200191610391565b820191906000526020600020905b81548152906001019060200180831161037457829003601f168201915b50505050508060200190518101906103a99190610abc565b6040805133815284356020808301919091528501358183015290519192507f263ae805ef0ac75eacb24e0a5ab78e31f247f0b08fe9d5cbf5188647933698b8919081900360600190a16103fe3415600d6106ac565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b0390811680885289850151821684528989015183526003909555436001558751938401949094529051909216948101949094525190830152906080016102b2565b60006060600054600280805461047b90610a6b565b80601f01602080910402602001604051908101604052809291908181526020018280546104a790610a6b565b80156104f45780601f106104c9576101008083540402835291602001916104f4565b820191906000526020600020905b8154815290600101906020018083116104d757829003601f168201915b50505050509050915091509091565b61051360036000541460136106ac565b61052d8135158061052657506001548235145b60146106ac565b60008080556002805461053f90610a6b565b80601f016020809104026020016040519081016040528092919081815260200182805461056b90610a6b565b80156105b85780601f1061058d576101008083540402835291602001916105b8565b820191906000526020600020905b81548152906001019060200180831161059b57829003601f168201915b50505050508060200190518101906105d09190610abc565b604080513381528435602080830191909152850135818301529084013560608201529091507f85f73e284b1b1aeb266b14c389a29537c9fdd9a589649702abee8564ab4d16349060800160405180910390a161062e341560106106ac565b8051610646906001600160a01b0316331460116106ac565b604080516106929161066c91602080870135928701359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c82604001511460126106ac565b600080805560018190556106a89060029061096d565b5050565b816106a85760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60006106e083853085610703565b90505b9392505050565b6106f58383836107dd565b6106fe57600080fd5b505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161076a91610b78565b60006040518083038185875af1925050503d80600081146107a7576040519150601f19603f3d011682016040523d82523d6000602084013e6107ac565b606091505b50915091506107bd828260016108ae565b50808060200190518101906107d29190610b94565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161083c91610b78565b60006040518083038185875af1925050503d8060008114610879576040519150601f19603f3d011682016040523d82523d6000602084013e61087e565b606091505b509150915061088f828260026108ae565b50808060200190518101906108a49190610b94565b9695505050505050565b606083156108bd5750816106e3565b8251156108cd5782518084602001fd5b60405163100960cb60e01b8152600481018390526024016106c9565b8280546108f590610a6b565b90600052602060002090601f016020900481019282610917576000855561095d565b82601f1061093057805160ff191683800117855561095d565b8280016001018555821561095d579182015b8281111561095d578251825591602001919060010190610942565b506109699291506109aa565b5090565b50805461097990610a6b565b6000825580601f10610989575050565b601f0160209004906000526020600020908101906109a791906109aa565b50565b5b8082111561096957600081556001016109ab565b6000604082840312156109d157600080fd5b50919050565b6000604082840312156109e957600080fd5b6106e383836109bf565b60005b83811015610a0e5781810151838201526020016109f6565b838111156102d65750506000910152565b8281526040602082015260008251806040840152610a448160608501602087016109f3565b601f01601f1916919091016060019392505050565b6000606082840312156109d157600080fd5b600181811c90821680610a7f57607f821691505b602082108114156109d157634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610ab757600080fd5b919050565b600060608284031215610ace57600080fd5b6040516060810181811067ffffffffffffffff82111715610aff57634e487b7160e01b600052604160045260246000fd5b604052610b0b83610aa0565b8152610b1960208401610aa0565b6020820152604083015160408201528091505092915050565b80151581146109a757600080fd5b6001600160a01b038316815281356020808301919091526060820190830135610b6881610b32565b8015156040840152509392505050565b60008251610b8a8184602087016109f3565b9190910192915050565b600060208284031215610ba657600080fd5b81516106e381610b3256fea264697066735822122056319214b254d059223b4e7bd799b7a623e4a87e2e26a0814ca86553389f3a5964736f6c634300080c0033`,
  BytecodeLen: 3858,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:53:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:56:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:65:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:75:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
