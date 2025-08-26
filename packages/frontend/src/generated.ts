import {
  createReadContract,
  createWriteContract,
  createSimulateContract,
  createWatchContractEvent,
} from '@wagmi/core/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AccessControl
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const accessControlAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OperatorAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OperatorRemoved',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'function',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'addOperator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'operators',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'removeOperator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BasicCounter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const basicCounterAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'initialCount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newCount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'CountChanged',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decrement',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'increment',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DataTypesDemo
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const dataTypesDemoAbi = [
  {
    type: 'constructor',
    inputs: [{ name: 'initialText', internalType: 'string', type: 'string' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'userAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'name', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'PersonAdded',
  },
  {
    type: 'function',
    inputs: [
      { name: '_name', internalType: 'string', type: 'string' },
      { name: '_age', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'addPerson',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getFlag',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getNumber',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'membersList',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'people',
    outputs: [
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'age', internalType: 'uint256', type: 'uint256' },
      { name: 'active', internalType: 'bool', type: 'bool' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'text',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'toggleFlag',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_number', internalType: 'uint256', type: 'uint256' }],
    name: 'updateNumber',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lock
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const lockAbi = [
  {
    type: 'constructor',
    inputs: [{ name: '_unlockTime', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'when',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Withdrawal',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address payable', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'unlockTime',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ownable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ownableAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link accessControlAbi}__
 */
export const readAccessControl = /*#__PURE__*/ createReadContract({
  abi: accessControlAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"operators"`
 */
export const readAccessControlOperators = /*#__PURE__*/ createReadContract({
  abi: accessControlAbi,
  functionName: 'operators',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"owner"`
 */
export const readAccessControlOwner = /*#__PURE__*/ createReadContract({
  abi: accessControlAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link accessControlAbi}__
 */
export const writeAccessControl = /*#__PURE__*/ createWriteContract({
  abi: accessControlAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"addOperator"`
 */
export const writeAccessControlAddOperator = /*#__PURE__*/ createWriteContract({
  abi: accessControlAbi,
  functionName: 'addOperator',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"removeOperator"`
 */
export const writeAccessControlRemoveOperator =
  /*#__PURE__*/ createWriteContract({
    abi: accessControlAbi,
    functionName: 'removeOperator',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeAccessControlTransferOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: accessControlAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link accessControlAbi}__
 */
export const simulateAccessControl = /*#__PURE__*/ createSimulateContract({
  abi: accessControlAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"addOperator"`
 */
export const simulateAccessControlAddOperator =
  /*#__PURE__*/ createSimulateContract({
    abi: accessControlAbi,
    functionName: 'addOperator',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"removeOperator"`
 */
export const simulateAccessControlRemoveOperator =
  /*#__PURE__*/ createSimulateContract({
    abi: accessControlAbi,
    functionName: 'removeOperator',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link accessControlAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateAccessControlTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: accessControlAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link accessControlAbi}__
 */
export const watchAccessControlEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: accessControlAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link accessControlAbi}__ and `eventName` set to `"OperatorAdded"`
 */
export const watchAccessControlOperatorAddedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: accessControlAbi,
    eventName: 'OperatorAdded',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link accessControlAbi}__ and `eventName` set to `"OperatorRemoved"`
 */
export const watchAccessControlOperatorRemovedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: accessControlAbi,
    eventName: 'OperatorRemoved',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link accessControlAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchAccessControlOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: accessControlAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link basicCounterAbi}__
 */
export const readBasicCounter = /*#__PURE__*/ createReadContract({
  abi: basicCounterAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link basicCounterAbi}__ and `functionName` set to `"getCount"`
 */
export const readBasicCounterGetCount = /*#__PURE__*/ createReadContract({
  abi: basicCounterAbi,
  functionName: 'getCount',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link basicCounterAbi}__ and `functionName` set to `"owner"`
 */
export const readBasicCounterOwner = /*#__PURE__*/ createReadContract({
  abi: basicCounterAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link basicCounterAbi}__
 */
export const writeBasicCounter = /*#__PURE__*/ createWriteContract({
  abi: basicCounterAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link basicCounterAbi}__ and `functionName` set to `"decrement"`
 */
export const writeBasicCounterDecrement = /*#__PURE__*/ createWriteContract({
  abi: basicCounterAbi,
  functionName: 'decrement',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link basicCounterAbi}__ and `functionName` set to `"increment"`
 */
export const writeBasicCounterIncrement = /*#__PURE__*/ createWriteContract({
  abi: basicCounterAbi,
  functionName: 'increment',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link basicCounterAbi}__
 */
export const simulateBasicCounter = /*#__PURE__*/ createSimulateContract({
  abi: basicCounterAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link basicCounterAbi}__ and `functionName` set to `"decrement"`
 */
export const simulateBasicCounterDecrement =
  /*#__PURE__*/ createSimulateContract({
    abi: basicCounterAbi,
    functionName: 'decrement',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link basicCounterAbi}__ and `functionName` set to `"increment"`
 */
export const simulateBasicCounterIncrement =
  /*#__PURE__*/ createSimulateContract({
    abi: basicCounterAbi,
    functionName: 'increment',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link basicCounterAbi}__
 */
export const watchBasicCounterEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: basicCounterAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link basicCounterAbi}__ and `eventName` set to `"CountChanged"`
 */
export const watchBasicCounterCountChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: basicCounterAbi,
    eventName: 'CountChanged',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dataTypesDemoAbi}__
 */
export const readDataTypesDemo = /*#__PURE__*/ createReadContract({
  abi: dataTypesDemoAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dataTypesDemoAbi}__ and `functionName` set to `"getFlag"`
 */
export const readDataTypesDemoGetFlag = /*#__PURE__*/ createReadContract({
  abi: dataTypesDemoAbi,
  functionName: 'getFlag',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dataTypesDemoAbi}__ and `functionName` set to `"getNumber"`
 */
export const readDataTypesDemoGetNumber = /*#__PURE__*/ createReadContract({
  abi: dataTypesDemoAbi,
  functionName: 'getNumber',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dataTypesDemoAbi}__ and `functionName` set to `"membersList"`
 */
export const readDataTypesDemoMembersList = /*#__PURE__*/ createReadContract({
  abi: dataTypesDemoAbi,
  functionName: 'membersList',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dataTypesDemoAbi}__ and `functionName` set to `"owner"`
 */
export const readDataTypesDemoOwner = /*#__PURE__*/ createReadContract({
  abi: dataTypesDemoAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dataTypesDemoAbi}__ and `functionName` set to `"people"`
 */
export const readDataTypesDemoPeople = /*#__PURE__*/ createReadContract({
  abi: dataTypesDemoAbi,
  functionName: 'people',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link dataTypesDemoAbi}__ and `functionName` set to `"text"`
 */
export const readDataTypesDemoText = /*#__PURE__*/ createReadContract({
  abi: dataTypesDemoAbi,
  functionName: 'text',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link dataTypesDemoAbi}__
 */
export const writeDataTypesDemo = /*#__PURE__*/ createWriteContract({
  abi: dataTypesDemoAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link dataTypesDemoAbi}__ and `functionName` set to `"addPerson"`
 */
export const writeDataTypesDemoAddPerson = /*#__PURE__*/ createWriteContract({
  abi: dataTypesDemoAbi,
  functionName: 'addPerson',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link dataTypesDemoAbi}__ and `functionName` set to `"toggleFlag"`
 */
export const writeDataTypesDemoToggleFlag = /*#__PURE__*/ createWriteContract({
  abi: dataTypesDemoAbi,
  functionName: 'toggleFlag',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link dataTypesDemoAbi}__ and `functionName` set to `"updateNumber"`
 */
export const writeDataTypesDemoUpdateNumber = /*#__PURE__*/ createWriteContract(
  { abi: dataTypesDemoAbi, functionName: 'updateNumber' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link dataTypesDemoAbi}__
 */
export const simulateDataTypesDemo = /*#__PURE__*/ createSimulateContract({
  abi: dataTypesDemoAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link dataTypesDemoAbi}__ and `functionName` set to `"addPerson"`
 */
export const simulateDataTypesDemoAddPerson =
  /*#__PURE__*/ createSimulateContract({
    abi: dataTypesDemoAbi,
    functionName: 'addPerson',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link dataTypesDemoAbi}__ and `functionName` set to `"toggleFlag"`
 */
export const simulateDataTypesDemoToggleFlag =
  /*#__PURE__*/ createSimulateContract({
    abi: dataTypesDemoAbi,
    functionName: 'toggleFlag',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link dataTypesDemoAbi}__ and `functionName` set to `"updateNumber"`
 */
export const simulateDataTypesDemoUpdateNumber =
  /*#__PURE__*/ createSimulateContract({
    abi: dataTypesDemoAbi,
    functionName: 'updateNumber',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link dataTypesDemoAbi}__
 */
export const watchDataTypesDemoEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: dataTypesDemoAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link dataTypesDemoAbi}__ and `eventName` set to `"PersonAdded"`
 */
export const watchDataTypesDemoPersonAddedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: dataTypesDemoAbi,
    eventName: 'PersonAdded',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockAbi}__
 */
export const readLock = /*#__PURE__*/ createReadContract({ abi: lockAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockAbi}__ and `functionName` set to `"owner"`
 */
export const readLockOwner = /*#__PURE__*/ createReadContract({
  abi: lockAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lockAbi}__ and `functionName` set to `"unlockTime"`
 */
export const readLockUnlockTime = /*#__PURE__*/ createReadContract({
  abi: lockAbi,
  functionName: 'unlockTime',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lockAbi}__
 */
export const writeLock = /*#__PURE__*/ createWriteContract({ abi: lockAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lockAbi}__ and `functionName` set to `"withdraw"`
 */
export const writeLockWithdraw = /*#__PURE__*/ createWriteContract({
  abi: lockAbi,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lockAbi}__
 */
export const simulateLock = /*#__PURE__*/ createSimulateContract({
  abi: lockAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lockAbi}__ and `functionName` set to `"withdraw"`
 */
export const simulateLockWithdraw = /*#__PURE__*/ createSimulateContract({
  abi: lockAbi,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lockAbi}__
 */
export const watchLockEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: lockAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lockAbi}__ and `eventName` set to `"Withdrawal"`
 */
export const watchLockWithdrawalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: lockAbi,
  eventName: 'Withdrawal',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const readOwnable = /*#__PURE__*/ createReadContract({ abi: ownableAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"owner"`
 */
export const readOwnableOwner = /*#__PURE__*/ createReadContract({
  abi: ownableAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const writeOwnable = /*#__PURE__*/ createWriteContract({
  abi: ownableAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeOwnableTransferOwnership = /*#__PURE__*/ createWriteContract({
  abi: ownableAbi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const simulateOwnable = /*#__PURE__*/ createSimulateContract({
  abi: ownableAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateOwnableTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: ownableAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ownableAbi}__
 */
export const watchOwnableEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ownableAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ownableAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchOwnableOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ownableAbi,
    eventName: 'OwnershipTransferred',
  })
