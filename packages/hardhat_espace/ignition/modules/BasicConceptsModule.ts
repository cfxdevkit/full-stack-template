import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { parseEther } from "viem";

/**
 * Constants for deployment configuration
 */
const JAN_1ST_2030 = 1893456000; // Unix timestamp for January 1st, 2030
const ONE_GWEI: bigint = parseEther("0.001");
const DEFAULT_INITIAL_STRING = "Hello Solidity!";

/**
 * BasicConceptsModule - Deploys a set of educational smart contracts
 * demonstrating various Solidity concepts
 */
const BasicConceptsModule = buildModule("BasicConceptsModule", (m) => {
  // Deploy BasicCounter with configurable initial count
  const initialCount = m.getParameter("initialCount", 0);
  const basicCounter = m.contract("BasicCounter", [initialCount]);

  // Deploy DataTypesDemo with configurable initial text
  const initialText = m.getParameter("initialText", DEFAULT_INITIAL_STRING);
  const dataTypesDemo = m.contract("DataTypesDemo", [initialText]);

  // Deploy AccessControl (inherits from Ownable)
  const accessControl = m.contract("AccessControl", []);

  // Deploy Lock contract with configurable unlock time and amount
  const unlockTime = m.getParameter("unlockTime", JAN_1ST_2030);
  const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);
  const lock = m.contract("Lock", [unlockTime], {
    value: lockedAmount,
  });

  return { 
    basicCounter,
    dataTypesDemo,
    accessControl,
    lock
  };
});

export default BasicConceptsModule; 
