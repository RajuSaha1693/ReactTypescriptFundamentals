type DestructureProps={
    message?:string
    name:string
}
export const DestructureType = ({message,name}:DestructureProps) => {
  return (
    <div>
        {name}
    </div>
  )
}
