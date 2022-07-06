import { SyntheticEvent, useState } from 'react'

export const useInputValue = (initialValue:string, maxCharter = -1) => {
  const [value, setValue] = useState(initialValue)
  const onChange = (e:SyntheticEvent | string) => {
    if(typeof e === 'string'){
      setValue(e);
    }else{
      const target = e.target as typeof e.target & {
        value:string
      }
      if(maxCharter>-1){
        if(maxCharter>=value.length){
          setValue(target.value);
        }
      }else{
        setValue(target.value);
      }
    }
    

  }
  return { value, onChange }
}
