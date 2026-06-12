import Button from './components/Button/Button'
import Badge from './components/Badge/Badge'

function App() {
  return (
    <div>
      <h1>Component Library</h1>
      <Button label="Click Me" variant="primary" />
      <Button label="Cancel" variant="secondary" />
      <Button label="Delete" variant="danger" />
      <Button label="Disabled" variant="primary" disabled={true} /> 

      <Badge label="Test" variant="primary" size="small" />
      <Badge label="Test2" variant="secondary" size="large" />
      <Badge label="Test3" variant="primary" size="medium" />
    </div>
  )
}

export default App