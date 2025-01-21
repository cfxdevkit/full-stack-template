import { Buffer } from 'buffer'
import { connect, disconnect, reconnect, watchAccount, getAccount, switchChain } from '@wagmi/core'
import {
  readBasicCounterGetCount,
  writeBasicCounterIncrement,
  writeBasicCounterDecrement,
  readDataTypesDemoGetFlag,
  writeDataTypesDemoToggleFlag,
  readDataTypesDemoText,
  readLockUnlockTime,
  writeLockWithdraw,
  watchBasicCounterCountChangedEvent,
  watchDataTypesDemoPersonAddedEvent,
  readLockOwner
} from './generated'
import { contractAddresses } from './generated-addresses'
import { localChain } from './wagmi'
import './style.css'
import { config } from './wagmi'

// Required for web3 functionality
globalThis.Buffer = Buffer

/**
 * Displays an error message in a toast-like notification
 * that automatically disappears after 5 seconds
 */
function showError(message: string) {
  const container = document.querySelector<HTMLDivElement>('#error-container')!
  const messagesDiv = document.querySelector<HTMLDivElement>('#error-messages')!
  
  const errorDiv = document.createElement('div')
  errorDiv.className = 'error-message'
  
  const messageSpan = document.createElement('span')
  messageSpan.textContent = message
  
  const closeButton = document.createElement('button')
  closeButton.innerHTML = '×'
  closeButton.onclick = () => {
    errorDiv.remove()
    // Hide container if no more errors
    if (messagesDiv.children.length === 0) {
      container.classList.remove('visible')
    }
  }
  
  errorDiv.appendChild(messageSpan)
  errorDiv.appendChild(closeButton)
  messagesDiv.appendChild(errorDiv)
  container.classList.add('visible')

  // Auto-hide after 5 seconds
  setTimeout(() => closeButton.click(), 5000)
}

// Initialize the main app HTML structure
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div id="account">
      <h2>Account</h2>
      <div>
        status:
        <br />
        addresses:
        <br />
        chainId:
      </div>
    </div>

    <div id="connect">
      <h2>Connect</h2>
      ${config.connectors
        .map(
          (connector) =>
            `<button class="connect" id="${connector.uid}" type="button">${connector.name}</button>`,
        )
        .join('')}
    </div>

    <div id="error-container" class="error-container">
      <h3>Errors</h3>
      <div id="error-messages"></div>
    </div>

    <div id="network-warning" style="display: none;">
      <div class="wrong-network">
        <h3>Wrong Network</h3>
        <p>Please connect to the local Conflux eSpace network to interact with the contracts.</p>
        <button id="switch-network">Switch to Local Network</button>
      </div>
    </div>

    <div id="contracts">
      <h2>Contract Interactions</h2>
      
      <div id="basicCounter">
        <h3>Basic Counter</h3>
        <div>Count: <span id="counterValue">-</span></div>
        <button id="increment">Increment</button>
        <button id="decrement">Decrement</button>
      </div>

      <div id="dataTypesDemo">
        <h3>Data Types Demo</h3>
        <div>Flag: <span id="flagValue">-</span></div>
        <div>Text: <span id="textValue">-</span></div>
        <button id="toggleFlag">Toggle Flag</button>
      </div>

      <div id="lock">
        <h3>Lock Contract</h3>
        <div>Unlock Time: <span id="unlockTime">-</span></div>
        <button id="withdraw">Withdraw</button>
      </div>
    </div>
  </div>
`

setupApp(document.querySelector<HTMLDivElement>('#app')!)

/**
 * Updates all contract data displayed in the UI
 * This includes the counter value, flag status, and lock status
 */
async function updateContractData() {
  try {
    // Update Basic Counter
    const count = await readBasicCounterGetCount(config, {
      address: contractAddresses.BasicCounter
    })
    document.querySelector('#counterValue')!.textContent = count.toString()

    // Update Data Types Demo
    const flag = await readDataTypesDemoGetFlag(config, {
      address: contractAddresses.DataTypesDemo
    })
    document.querySelector('#flagValue')!.textContent = flag.toString()

    const text = await readDataTypesDemoText(config, {
      address: contractAddresses.DataTypesDemo
    })
    document.querySelector('#textValue')!.textContent = text.toString()

    // Update Lock Contract Status
    const unlockTime = await readLockUnlockTime(config, {
      address: contractAddresses.Lock
    })
    const currentTime = Math.floor(Date.now() / 1000)
    const isUnlocked = currentTime >= Number(unlockTime)
    
    const owner = await readLockOwner(config, {
      address: contractAddresses.Lock
    })
    const account = getAccount(config)
    const isOwner = account.address?.toLowerCase() === owner.toLowerCase()
    
    const formattedUnlockTime = new Date(Number(unlockTime) * 1000).toLocaleString()
    let statusHtml = `
      <div class="status-line">
        <span>Unlock Time:</span>
        <span class="status-value">${formattedUnlockTime}</span>
        <span class="status-tag ${isUnlocked ? 'status-unlocked' : 'status-locked'}">
          ${isUnlocked ? 'Unlocked' : 'Locked'}
        </span>
      </div>
      <div class="status-line">
        <span>Owner:</span>
        <span class="status-value">${owner}</span>
        <span class="status-tag status-owner">
          ${isOwner ? 'You are the owner' : 'You are not the owner'}
        </span>
      </div>
    `

    // Add time remaining if locked
    if (!isUnlocked) {
      const timeLeft = Number(unlockTime) - currentTime
      const hoursLeft = Math.floor(timeLeft / 3600)
      const minutesLeft = Math.floor((timeLeft % 3600) / 60)
      statusHtml += `
        <div class="time-remaining">
          Time remaining: ${hoursLeft}h ${minutesLeft}m
        </div>
      `
    }

    document.querySelector('#unlockTime')!.innerHTML = statusHtml
  } catch (error) {
    console.error('Error updating contract data:', error)
  }
}

/**
 * Sets up blockchain event listeners for real-time updates
 * Returns a cleanup function to remove the listeners
 */
function setupEventListeners() {
  // Watch for BasicCounter events
  const unsubscribeCounter = watchBasicCounterCountChangedEvent(config, {
    address: contractAddresses.BasicCounter,
    onLogs: async (logs) => {
      // Update counter value when event is received
      const newCount = logs[0]?.args?.newCount
      if (typeof newCount === 'bigint') {
        document.querySelector('#counterValue')!.textContent = newCount.toString()
      }
    }
  })

  // Watch for DataTypesDemo events
  const unsubscribeDataTypes = watchDataTypesDemoPersonAddedEvent(config, {
    address: contractAddresses.DataTypesDemo,
    onLogs: async () => {
      // Since there's no direct event for flag changes, we'll fetch the current state
      const flag = await readDataTypesDemoGetFlag(config, {
        address: contractAddresses.DataTypesDemo
      })
      document.querySelector('#flagValue')!.textContent = flag.toString()
    }
  })

  return () => {
    unsubscribeCounter()
    unsubscribeDataTypes()
  }
}

/**
 * Main application setup function
 * Handles all event listeners and UI updates
 */
function setupApp(element: HTMLDivElement) {
  let unsubscribeEvents: (() => void) | undefined

  // Setup network switch button
  element.querySelector('#switch-network')?.addEventListener('click', async () => {
    try {
      await switchChain(config, { chainId: localChain.id })
    } catch (error) {
      console.error('Error switching network:', error)
      showError('Failed to switch network: ' + (error as Error).message)
    }
  })

  // Setup contract interaction buttons
  element.querySelector('#increment')?.addEventListener('click', async () => {
    try {
      await writeBasicCounterIncrement(config, {
        address: contractAddresses.BasicCounter
      })
    } catch (error) {
      console.error('Error incrementing:', error)
      showError('Failed to increment counter: ' + (error as Error).message)
    }
  })

  element.querySelector('#decrement')?.addEventListener('click', async () => {
    try {
      await writeBasicCounterDecrement(config, {
        address: contractAddresses.BasicCounter
      })
    } catch (error) {
      console.error('Error decrementing:', error)
      showError('Failed to decrement counter: ' + (error as Error).message)
    }
  })

  element.querySelector('#toggleFlag')?.addEventListener('click', async () => {
    try {
      await writeDataTypesDemoToggleFlag(config, {
        address: contractAddresses.DataTypesDemo
      })
      // Since there's no direct event for flag toggle, we'll fetch the new state
      const flag = await readDataTypesDemoGetFlag(config, {
        address: contractAddresses.DataTypesDemo
      })
      document.querySelector('#flagValue')!.textContent = flag.toString()
    } catch (error) {
      console.error('Error toggling flag:', error)
      showError('Failed to toggle flag: ' + (error as Error).message)
    }
  })

  element.querySelector('#withdraw')?.addEventListener('click', async () => {
    try {
      // Check conditions before attempting withdrawal
      const unlockTime = await readLockUnlockTime(config, {
        address: contractAddresses.Lock
      })
      const currentTime = Math.floor(Date.now() / 1000)
      if (currentTime < Number(unlockTime)) {
        const timeLeft = Number(unlockTime) - currentTime
        const hoursLeft = Math.floor(timeLeft / 3600)
        const minutesLeft = Math.floor((timeLeft % 3600) / 60)
        const message = `Cannot withdraw: Lock time has not expired yet. Time remaining: ${hoursLeft}h ${minutesLeft}m`
        console.error(message)
        showError(message)
        return
      }

      const owner = await readLockOwner(config, {
        address: contractAddresses.Lock
      })
      const account = getAccount(config)
      if (!account.address || account.address.toLowerCase() !== owner.toLowerCase()) {
        const message = `Cannot withdraw: You are not the owner. Owner is ${owner}`
        console.error(message)
        showError(message)
        return
      }

      await writeLockWithdraw(config, {
        address: contractAddresses.Lock
      })
      await updateContractData()
    } catch (error) {
      console.error('Error withdrawing:', error)
      showError('Failed to withdraw: ' + (error as Error).message)
    }
  })

  // Setup wallet connection buttons
  const buttons = element.querySelectorAll<HTMLButtonElement>('.connect')
  for (const button of buttons) {
    const connector = config.connectors.find(
      (connector) => connector.uid === button.id,
    )!
    button.addEventListener('click', async () => {
      try {
        await connect(config, { connector })
      } catch (error) {
        showError('Failed to connect: ' + (error as Error).message)
      }
    })
  }

  // Watch for account changes and update UI accordingly
  watchAccount(config, {
    onChange(account) {
      const accountElement = element.querySelector<HTMLDivElement>('#account')!
      const contractsElement = element.querySelector<HTMLDivElement>('#contracts')!
      const networkWarningElement = element.querySelector<HTMLDivElement>('#network-warning')!

      // Update account information display
      accountElement.innerHTML = `
        <h2>Account</h2>
        <div>
          status: ${account.status}
          <br />
          addresses: ${
            account.addresses ? JSON.stringify(account.addresses) : ''
          }
          <br />
          chainId: ${account.chainId ?? ''}
        </div>
        ${
          account.status === 'connected'
            ? `<button id="disconnect" type="button">Disconnect</button>`
            : ''
        }
      `

      // Handle network validation and UI visibility
      if (account.status === 'connected') {
        if (account.chainId === localChain.id) {
          // Correct network
          contractsElement.classList.add('visible')
          networkWarningElement.style.display = 'none'
          updateContractData()
          unsubscribeEvents = setupEventListeners()
        } else {
          // Wrong network
          contractsElement.classList.remove('visible')
          networkWarningElement.style.display = 'block'
        }
      } else {
        // Not connected
        contractsElement.classList.remove('visible')
        networkWarningElement.style.display = 'none'
        if (unsubscribeEvents) {
          unsubscribeEvents()
          unsubscribeEvents = undefined
        }
      }

      // Setup disconnect button
      const disconnectButton =
        element.querySelector<HTMLButtonElement>('#disconnect')
      if (disconnectButton)
        disconnectButton.addEventListener('click', () => {
          disconnect(config)
          // Cleanup event listeners when disconnecting
          if (unsubscribeEvents) {
            unsubscribeEvents()
            unsubscribeEvents = undefined
          }
        })
    },
  })

  // Initial connection attempt
  reconnect(config)
    .then(() => {})
    .catch(() => {})
}
