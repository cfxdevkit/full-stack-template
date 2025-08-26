const KEY = 'selectedChainId'

export function getSelectedChainId(): number {
  const v = localStorage.getItem(KEY)
  return v ? Number(v) : 71
}

export function setSelectedChainId(id: number) {
  localStorage.setItem(KEY, String(id))
  const evt = new CustomEvent('chainChanged', { detail: id })
  window.dispatchEvent(evt)
}

export function subscribeChainChanged(fn: (e: Event) => void) {
  window.addEventListener('chainChanged', fn as EventListener)
}
