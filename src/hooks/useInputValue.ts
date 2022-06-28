import { SyntheticEvent, useState } from 'react'

export const useInputValue = (initialValue:string) => {
  const [value, setValue] = useState(initialValue)
  const onChange = (e:SyntheticEvent | string) => {
    if(typeof e === 'string'){
      setValue(e);
    }else{
      const target = e.target as typeof e.target & {
        value:string
      }
      setValue(target.value);
    }
    

  }
  return { value, onChange }
}
