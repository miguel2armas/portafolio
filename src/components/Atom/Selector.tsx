import { useEffect, useState, useRef, RefObject } from 'react';
import {ReactComponent as Arrow} from "../../../assets/img/icons/arrow_select_down.svg";

export const useOutsideClick = (
  ref: RefObject<HTMLDivElement>,
  callback: Function
) => {
  const handleClick = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}
interface List {
  value: string
  text: string
}
interface Props {
  list: List[]
  onSelect: Function
  select: string
  text:string
  disabled:boolean
}

export const Selector = ({list, select, onSelect, text, disabled}:Props) => {
  const [show, setShow] = useState(false)
  const refOutside= useRef<HTMLDivElement>(null)

  useOutsideClick(refOutside, () => {
    setShow(false)
  })
  const onSelectItem = (select:string) =>{
    onSelect(select)
    setShow(false)
  }
  return (
    <div ref={refOutside} className="selector">
      <button className="selector__btn" type='button' onClick={() => setShow(!show)} disabled={disabled}>
        {text} {select} <Arrow width={12} height={12}/>
      </button>
      <div
        className={`selector__list selector__list${show ? '--show':''}`}
      >
        <ul className="selector__list--ul">
          {list.map((li)=>{
            return <li key={li.value} className="selector__list--li" onClick={() => onSelectItem(li.value)}>
                    {li.text}
                  </li>
          })}
          
        </ul>
      </div>
    </div>
  )
}
