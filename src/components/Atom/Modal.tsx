
interface Props {
    children: React.ReactElement;
    show:boolean;
    maxWidth:number | string;
}

export const Modal = ({children, show, maxWidth}:Props) => {
  return (
    <div className={`Modal Modal${show ? '__show' : ''}`}>
        <div className={`Modal__content Modal__content${show ? '--show' : ''}`}
         style={{maxWidth:`${maxWidth}px`}}>
            {children}
        </div>
    </div>
  )
}
