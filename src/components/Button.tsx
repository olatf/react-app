
import { ReactNode } from "react"

interface Props{
    title: string;
    color: string
    onClick: ()=> void
}

const Button = ({title, color, onClick}: Props) => {
  return (
    <div>
        <button type="button" className={"btn btn-" + color} onClick={onClick}>{title}</button>
    </div>
  )
}

export default Button