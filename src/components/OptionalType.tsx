type OptionalProps={
    message?:string
    name:string
}
export const OptionalType = (props:OptionalProps) => {
  return (
    <div>
        <h3>Hello {props.name}</h3>
    </div>
  )
}
