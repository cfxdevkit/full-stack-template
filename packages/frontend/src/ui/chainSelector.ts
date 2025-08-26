import { getSelectedChainId, setSelectedChainId, subscribeChainChanged } from '../chain'

export function mountChainSelector(container: HTMLElement) {
  const wrapper = document.createElement('div')
  wrapper.style.marginBottom = '12px'

  const label = document.createElement('label')
  label.htmlFor = 'chain-select'
  label.textContent = 'Chain: '
  wrapper.appendChild(label)

  const select = document.createElement('select')
  select.id = 'chain-select'
  ;['1030', '71', '2030'].forEach(v => {
    const opt = document.createElement('option')
    opt.value = v
    if (v === String(getSelectedChainId())) opt.selected = true
    if (v === '1030') opt.textContent = 'confluxESpace (1030)'
    if (v === '71') opt.textContent = 'confluxESpaceTestnet (71)'
    if (v === '2030') opt.textContent = 'confluxESpaceLocal (2030)'
    select.appendChild(opt)
  })

  select.addEventListener('change', () => {
    setSelectedChainId(Number(select.value))
    // emit storage event for other tabs
    try {
      localStorage.setItem('selectedChainId', String(select.value))
    } catch {}
  })

  wrapper.appendChild(select)
  // insert at top of app
  container.insertBefore(wrapper, container.firstChild)

  return {
    getChainId: () => Number(select.value),
    subscribe: (fn: (id: number) => void) => {
      const handler = (e: Event) => {
        // @ts-ignore
        fn((e as CustomEvent).detail as number)
      }
      subscribeChainChanged(handler)
      return () => window.removeEventListener('chainChanged', handler as EventListener)
    },
  }
}
