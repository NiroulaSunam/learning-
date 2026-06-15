import Button from './components/Button/Button'
import Badge from './components/Badge/Badge'
import Card from './components/Card/Card'

import { useState } from 'react'
import Input from './components/Input/Input'

function App() {

  const [inputValue, setInputValue] = useState('')
  const [inputError, setInputError] = useState('')

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

      <Card title="Flush" description="playing cards best royal flush in the game or whatever" image="https://upload.wikimedia.org/wikipedia/commons/5/58/AcetoFive.JPG" buttonLabel="Expand.." onButtonClick={() => alert('clicked')} />

      <Input
        label="Username"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter your username"
        error={inputError}
      />
      <button onClick={() => {
        if (inputValue === '') setInputError('Username is required')
        else setInputError('')
      }}>Validate</button>
    </div>
  )
}

export default App