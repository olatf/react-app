

import { useState } from "react"


const Counter = () => {

  const [count, setCount] = useState(0)
  const HandleCount = () => {setCount(count+1)}
  const ResetCount = () => {setCount(0)}
  const DeCount = () => {setCount(count-1)}
  return (
    <div className="count">
      <h1>Counter</h1>
      <h2 className={ count < 0 ? "low" : "high"}>{count}</h2>
      <button onClick={HandleCount}>Count</button>
      <button onClick={ResetCount}>Reset</button>
      <button onClick={DeCount}>De-Count</button>
    </div>
  )
}

export default Counter
