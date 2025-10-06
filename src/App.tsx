import Timer from './components/Timer/Timer.tsx'
import './App.css'
import { useState } from 'react';
import SearchBar from './components/search/search.tsx';

function App() {
  const [interval, setInterval] = useState<number>(1000);
  return (
    <>
      <input type="number" value={interval} onChange={(e) => setInterval(Number(e.target.value))} />
      <Timer interval={interval} />
      <SearchBar />
    </>
  )
}

export default App
