import { useState } from "react";
import SearchBar from "../components/search/search";
import Timer from "../components/Timer/Timer";

function Exo1() {
  const [interval, setInterval] = useState<number>(1000);
  return (
    <>
      <input type="number" value={interval} onChange={(e) => setInterval(Number(e.target.value))} />
      <Timer interval={interval} />
      <SearchBar />
    </>
  );
}

export default Exo1;