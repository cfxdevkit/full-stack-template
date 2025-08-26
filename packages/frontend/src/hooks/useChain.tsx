import { useEffect, useState } from 'react'
import { getSelectedChainId, setSelectedChainId, subscribeChainChanged } from '../chain'

export function useChain() {
  const [chainId, setChainId] = useState<number>(getSelectedChainId())

  useEffect(() => {
    const onChange = (e: Event) => {
      // @ts-ignore
      const id = (e as CustomEvent).detail as number
      setChainId(id)
    }
    subscribeChainChanged(onChange)

    const onStorage = (e: StorageEvent) => {
      if (e.key === 'selectedChainId') setChainId(Number(e.newValue))
    }
    window.addEventListener('storage', onStorage)

    return () => {
      window.removeEventListener('storage', onStorage)
      window.removeEventListener('chainChanged', onChange as EventListener)
    }
  }, [])

  const set = (id: number) => setSelectedChainId(id)

  return { chainId, setChainId: set }
}
