// no default React import needed with the new JSX transform
import { useChain } from '../hooks/useChain'

export function ChainSelector() {
  const { chainId, setChainId } = useChain()

  return (
    <div style={{ marginBottom: 12 }}>
      <label htmlFor="chain-select">Chain: </label>
      <select id="chain-select" value={String(chainId)} onChange={(e) => setChainId(Number(e.target.value))}>
        <option value="1030">confluxESpace (1030)</option>
        <option value="71">confluxESpaceTestnet (71)</option>
        <option value="2030">confluxESpaceLocal (2030)</option>
      </select>
    </div>
  )
}
