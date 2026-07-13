import { Button } from '@astryxdesign/core/Button'
import { VStack } from '@astryxdesign/core/Layout'

export default function App() {
  return (
    <VStack gap={2} style={{ padding: 24 }}>
      <Button label="Hello Astryx" onClick={() => alert('Hi!')} />
    </VStack>
  )
}