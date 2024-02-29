import { useState } from "react"

export const useCounter = (initial = 0) => {

  const [counter, setCounter] = useState(initial)

  const addOne = () => {
    setCounter(counter + 1)
  }

  const susOne = () => {
    if(initial > 0)
    setCounter(counter - 1)
  }

  const reset = () => {
    setCounter(initial)
  }
  
}