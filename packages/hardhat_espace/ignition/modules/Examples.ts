// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { parseEther } from "viem";

const JAN_1ST_2030 = 1893456000;
const ONE_GWEI: bigint = parseEther("0.001");
const DEFAULT_INITIAL_STRING = "Hello, Conflux!";

const ExamplesModule = buildModule("ExamplesModule", (m) => {
  const unlockTime = m.getParameter("unlockTime", JAN_1ST_2030);
  const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);

  const lock = m.contract("Lock", [unlockTime], {
    value: lockedAmount,
  });

    const initialString = m.getParameter("initialString", DEFAULT_INITIAL_STRING);
  
    const stringStorage = m.contract("StringStorage", [initialString]);

  return { lock, stringStorage };
});

export default ExamplesModule;
