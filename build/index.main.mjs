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
  const ctc3 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2],
      2: [ctc0, ctc1, ctc2],
      3: [ctc0, ctc1, ctc2, ctc0, ctc3]
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
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v165], secs: v167, time: v166, didSend: v59, from: v164 } = txn3;
  ;
  stdlib.protect(ctc5, await interact.displayWinningNumber(v130), {
    at: './index.rsh:69:34:application',
    fs: ['at ./index.rsh:66:9:application call to [unknown function] (defined at: ./index.rsh:66:13:function exp)'],
    msg: 'displayWinningNumber',
    who: 'Alice'
    });
  
  const txn4 = await (ctc.sendrecv({
    args: [v134, v135, v137, v164, v165, v131, v130],
    evt_cnt: 2,
    funcNum: 3,
    lct: v166,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:72:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v171, v172], secs: v174, time: v173, didSend: v69, from: v170 } = txn4;
      
      ;
      let v178;
      const v179 = stdlib.eq(v172, v165);
      if (v179) {
        v178 = stdlib.checkedBigNumberify('./index.rsh:8:12:decimal', stdlib.UInt_max, '0');
        }
      else {
        v178 = stdlib.checkedBigNumberify('./index.rsh:10:12:decimal', stdlib.UInt_max, '1');
        }
      const v180 = stdlib.eq(v178, stdlib.checkedBigNumberify('./index.rsh:76:39:decimal', stdlib.UInt_max, '0'));
      const v181 = v180 ? v164 : v134;
      sim_r.txns.push({
        kind: 'from',
        to: v181,
        tok: v135
        });
      
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
    tys: [ctc6, ctc0, ctc4, ctc6, ctc1, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v171, v172], secs: v174, time: v173, didSend: v69, from: v170 } = txn4;
  ;
  const v175 = stdlib.addressEq(v134, v170);
  stdlib.assert(v175, {
    at: './index.rsh:72:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v176 = stdlib.digest(ctc3, [v171, v172]);
  const v177 = stdlib.digestEq(v137, v176);
  stdlib.assert(v177, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:73:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  let v178;
  const v179 = stdlib.eq(v172, v165);
  if (v179) {
    v178 = stdlib.checkedBigNumberify('./index.rsh:8:12:decimal', stdlib.UInt_max, '0');
    }
  else {
    v178 = stdlib.checkedBigNumberify('./index.rsh:10:12:decimal', stdlib.UInt_max, '1');
    }
  const v180 = stdlib.eq(v178, stdlib.checkedBigNumberify('./index.rsh:76:39:decimal', stdlib.UInt_max, '0'));
  const v181 = v180 ? v164 : v134;
  ;
  stdlib.protect(ctc5, await interact.seeOutcome(v178), {
    at: './index.rsh:79:24:application',
    fs: ['at ./index.rsh:78:7:application call to [unknown function] (defined at: ./index.rsh:78:18:function exp)'],
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
  const v163 = stdlib.protect(ctc1, await interact.getRandomNumber(v136), {
    at: './index.rsh:60:64:application',
    fs: ['at ./index.rsh:59:9:application call to [unknown function] (defined at: ./index.rsh:59:13:function exp)'],
    msg: 'getRandomNumber',
    who: 'Bob'
    });
  stdlib.protect(ctc3, await interact.showBobRaffleNumber(v163), {
    at: './index.rsh:61:33:application',
    fs: ['at ./index.rsh:59:9:application call to [unknown function] (defined at: ./index.rsh:59:13:function exp)'],
    msg: 'showBobRaffleNumber',
    who: 'Bob'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v134, v135, v137, v163],
    evt_cnt: 1,
    funcNum: 2,
    lct: v149,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:63:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v165], secs: v167, time: v166, didSend: v59, from: v164 } = txn3;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc0, ctc2, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v165], secs: v167, time: v166, didSend: v59, from: v164 } = txn3;
  ;
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 3,
    out_tys: [ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v171, v172], secs: v174, time: v173, didSend: v69, from: v170 } = txn4;
  ;
  const v175 = stdlib.addressEq(v134, v170);
  stdlib.assert(v175, {
    at: './index.rsh:72:5:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v176 = stdlib.digest(ctc4, [v171, v172]);
  const v177 = stdlib.digestEq(v137, v176);
  stdlib.assert(v177, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:73:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Bob'
    });
  let v178;
  const v179 = stdlib.eq(v172, v165);
  if (v179) {
    v178 = stdlib.checkedBigNumberify('./index.rsh:8:12:decimal', stdlib.UInt_max, '0');
    }
  else {
    v178 = stdlib.checkedBigNumberify('./index.rsh:10:12:decimal', stdlib.UInt_max, '1');
    }
  const v180 = stdlib.eq(v178, stdlib.checkedBigNumberify('./index.rsh:76:39:decimal', stdlib.UInt_max, '0'));
  const v181 = v180 ? v164 : v134;
  ;
  stdlib.protect(ctc3, await interact.seeOutcome(v178), {
    at: './index.rsh:79:24:application',
    fs: ['at ./index.rsh:78:7:application call to [unknown function] (defined at: ./index.rsh:78:18:function exp)'],
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
  appApproval: `BiAIAAECAwQIIKCNBiYCAQAAIjUAMRhBAkkpZEkiWzUBIQVbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSQMQAEBSSUMQAChJRJEJTQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/IQZbNf5JNQVJIls1/SEFWzX8gASkpfCINP0WUDT8FlCwNP8xABJENANXKCA0/RY0/BZQARJENPw0A4FoWxJBAAYiNftCAAMjNfuxIrIBI7ISIQSyEDT/NANXSCA0+yISTbIUNP6yEbOxIrIBIrISIQSyEDIJshUyCrIUNP6yEbNCASRIJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yEGWzX+VyggNf1JNQUXNfyABJdO9xc0/BZQsDT/NP4WUDT9UDEAUDT8FlAoSwFXAHBnSCU1ATIGNQJCAOZJIwxAAFVIIzQBEkQ0BEkiEkw0AhIRRChkSTUDSUlXACA1/yEGWzX+VyggNf2ABJqLkXSwIzT+iAEVNP8xABJENP80/hZQNP1QKEsBVwBIZ0gkNQEyBjUCQgCLSCEHiADWIjQBEkQ0BEkiEkw0AhIRREk1BUlJIls1/yEFWzX+VxAgNf2ABBYtKDs0/xZQNP4WUDT9ULAhB4gAnLEisgEishIhBLIQMgqyFDT/shGzMQA0/xZQNP1QKEsBVwBIZ0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCQxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQIQQSRDgRTwISRDgSEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 112,
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
                "name": "v165",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
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
                "name": "v171",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v172",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
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
                "name": "v165",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
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
                "name": "v171",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v172",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
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
  Bytecode: `0x60806040526040516200101038038062001010833981016040819052620000269162000232565b60008055436003556040805133815282516020808301919091528084015180516001600160a01b031683850152908101516060830152820151608082015290517fb77e0b7275941fdbf00765e1e98b79777de983c0eaec6159504ea2e32b7160649181900360a00190a16200009e341560076200012b565b604080516060808201835260006020808401828152848601838152338087528884018051516001600160a01b0390811685529051890151835260019586905543909555875193840152905190921694810194909452519083015290608001604051602081830303815290604052600290805190602001906200012292919062000155565b5050506200031b565b81620001515760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200016390620002de565b90600052602060002090601f016020900481019282620001875760008555620001d2565b82601f10620001a257805160ff1916838001178555620001d2565b82800160010185558215620001d2579182015b82811115620001d2578251825591602001919060010190620001b5565b50620001e0929150620001e4565b5090565b5b80821115620001e05760008155600101620001e5565b604051606081016001600160401b03811182821017156200022c57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200024657600080fd5b604080519081016001600160401b03811182821017156200027757634e487b7160e01b600052604160045260246000fd5b604052835181526060601f19830112156200029157600080fd5b6200029b620001fb565b60208501519092506001600160a01b0381168114620002b957600080fd5b8252604084810151602080850191909152606090950151908301529283015250919050565b600181811c90821680620002f357607f821691505b602082108114156200031557634e487b7160e01b600052602260045260246000fd5b50919050565b610ce5806200032b6000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780632c10a1591461008357806345f703961461009657806383230757146100a9578063ab53f2c6146100be578063ad2d91d1146100e157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d610091366004610a44565b6100f4565b61005d6100a4366004610a44565b6102c8565b3480156100b557600080fd5b50600154610070565b3480156100ca57600080fd5b506100d361047b565b60405161007a929190610a8c565b61005d6100ef366004610ac6565b610518565b610104600160005414600b61071a565b61011e8135158061011757506001548235145b600c61071a565b60008080556002805461013090610ad8565b80601f016020809104026020016040519081016040528092919081815260200182805461015c90610ad8565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c19190610b29565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516101f4929190610bad565b60405180910390a16102083415600861071a565b61022261021b3383602001516001610744565b600961071a565b805161023a906001600160a01b03163314600a61071a565b60408051606080820183526000808352602080840182815284860183815287516001600160a01b0390811680885289850151821684528989015183526002909555436001558751938401949094529051909216948101949094525190830152906080015b604051602081830303815290604052600290805190602001906102c2929190610956565b50505050565b6102d8600260005414600e61071a565b6102f2813515806102eb57506001548235145b600f61071a565b60008080556002805461030490610ad8565b80601f016020809104026020016040519081016040528092919081815260200182805461033090610ad8565b801561037d5780601f106103525761010080835404028352916020019161037d565b820191906000526020600020905b81548152906001019060200180831161036057829003601f168201915b50505050508060200190518101906103959190610b29565b6040805133815284356020808301919091528501358183015290519192507f263ae805ef0ac75eacb24e0a5ab78e31f247f0b08fe9d5cbf5188647933698b8919081900360600190a16103ea3415600d61071a565b6040805160a0808201835260008083526020808401828152848601838152606080870185815260808089018781528b516001600160a01b03908116808c528d890151821688528d8d015187523385528e89013583526003909955436001558b51978801989098529451871699860199909952915190840152519092169481019490945251908301529060c00161029e565b60006060600054600280805461049090610ad8565b80601f01602080910402602001604051908101604052809291908181526020018280546104bc90610ad8565b80156105095780601f106104de57610100808354040283529160200191610509565b820191906000526020600020905b8154815290600101906020018083116104ec57829003601f168201915b50505050509050915091509091565b610528600360005414601361071a565b6105428135158061053b57506001548235145b601461071a565b60008080556002805461055490610ad8565b80601f016020809104026020016040519081016040528092919081815260200182805461058090610ad8565b80156105cd5780601f106105a2576101008083540402835291602001916105cd565b820191906000526020600020905b8154815290600101906020018083116105b057829003601f168201915b50505050508060200190518101906105e59190610be5565b90506105fd6040518060200160405280600081525090565b604080513381528435602080830191909152850135818301529084013560608201527f85f73e284b1b1aeb266b14c389a29537c9fdd9a589649702abee8564ab4d16349060800160405180910390a16106583415601061071a565b8151610670906001600160a01b03163314601161071a565b604080516106bc9161069691602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c836040015114601261071a565b6080820151604084013514156106d557600081526106da565b600181525b602082015181516106ff9190156106f25783516106f8565b83606001515b600161075c565b60008080556001819055610715906002906109da565b505050565b816107405760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b600061075283853085610770565b90505b9392505050565b61076783838361084a565b61071557600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916107d791610c76565b60006040518083038185875af1925050503d8060008114610814576040519150601f19603f3d011682016040523d82523d6000602084013e610819565b606091505b509150915061082a8282600161091b565b508080602001905181019061083f9190610c92565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1790529151600092839283929188169183916108a991610c76565b60006040518083038185875af1925050503d80600081146108e6576040519150601f19603f3d011682016040523d82523d6000602084013e6108eb565b606091505b50915091506108fc8282600261091b565b50808060200190518101906109119190610c92565b9695505050505050565b6060831561092a575081610755565b82511561093a5782518084602001fd5b60405163100960cb60e01b815260048101839052602401610737565b82805461096290610ad8565b90600052602060002090601f01602090048101928261098457600085556109ca565b82601f1061099d57805160ff19168380011785556109ca565b828001600101855582156109ca579182015b828111156109ca5782518255916020019190600101906109af565b506109d6929150610a17565b5090565b5080546109e690610ad8565b6000825580601f106109f6575050565b601f016020900490600052602060002090810190610a149190610a17565b50565b5b808211156109d65760008155600101610a18565b600060408284031215610a3e57600080fd5b50919050565b600060408284031215610a5657600080fd5b6107558383610a2c565b60005b83811015610a7b578181015183820152602001610a63565b838111156102c25750506000910152565b8281526040602082015260008251806040840152610ab1816060850160208701610a60565b601f01601f1916919091016060019392505050565b600060608284031215610a3e57600080fd5b600181811c90821680610aec57607f821691505b60208210811415610a3e57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610b2457600080fd5b919050565b600060608284031215610b3b57600080fd5b6040516060810181811067ffffffffffffffff82111715610b6c57634e487b7160e01b600052604160045260246000fd5b604052610b7883610b0d565b8152610b8660208401610b0d565b6020820152604083015160408201528091505092915050565b8015158114610a1457600080fd5b6001600160a01b038316815281356020808301919091526060820190830135610bd581610b9f565b8015156040840152509392505050565b600060a08284031215610bf757600080fd5b60405160a0810181811067ffffffffffffffff82111715610c2857634e487b7160e01b600052604160045260246000fd5b604052610c3483610b0d565b8152610c4260208401610b0d565b602082015260408301516040820152610c5d60608401610b0d565b6060820152608083015160808201528091505092915050565b60008251610c88818460208701610a60565b9190910192915050565b600060208284031215610ca457600080fd5b815161075581610b9f56fea264697066735822122092d233b304f92addab5d83202c92d35a1f0ec1bb5e48fb7a382fb20bf93263cf64736f6c634300080c0033`,
  BytecodeLen: 4112,
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
    at: './index.rsh:55:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:64:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:82:3:after expr stmt',
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
