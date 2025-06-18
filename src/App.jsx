import { useState } from 'react'









function App() {
  let  [counter, setCounter] = useState(0)
  const dec = () =>{
    setCounter(counter-1);
  }
 
const addValue = () => {
  console.log(counter);
  setCounter(counter+1);
}
  return (
    <>
        <h1>hello world</h1>
        <h2 className='bg-green-400 text-black'>set counter : {counter}</h2>
        <button onClick={addValue}>increase {counter}</button>
        <button onClick={dec}> decrease {counter}</button>
    </>
    
    
  )
}

export default App
