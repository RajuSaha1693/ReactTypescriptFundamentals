type NormalProps={
    message:string
    name:string
    age:number
    isLogged:boolean
}
export const NormalType = (props:NormalProps) => {
  return (
    <>
      Welcome {props.name} {props.message}
      <span>You are now {props.age}</span>
    </>
  )
}

