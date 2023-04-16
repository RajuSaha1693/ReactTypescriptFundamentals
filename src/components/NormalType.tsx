import { NormalProps } from "./NormalType.types"
export const NormalType = (props:NormalProps) => {
  return (
    <>
      Welcome {props.name} {props.message}
      <span>You are now {props.age}</span>
    </>
  )
}

