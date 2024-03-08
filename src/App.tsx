import { useState } from 'react'
import './App.css'

import Dropdown from './components/Dropdown'

const options = [
  { label: "Account", value: "account" },
  { label: "Wallet", value: "wallet" },
  { label: "Bonuses", value: "bonuses" },
  { label: "Bets", value: "bets" },
  { label: "History", value: "history" },
];

function App() {
  const [value, setValue] = useState("account");

  const handleChange = (option: string) => {
    setValue(option);
  };

  return (
    <div>
      <Dropdown onChange={handleChange} value={value} options={options} />
    </div>
  )
}

export default App
