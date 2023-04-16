type ObjectProps={
    name:{
        first:string
        last:string
    }
}
export const ObjectType = (props:ObjectProps) => {
  return (
    <div>
        <h3>Hello {props.name.first}</h3>
    </div>
  )
}
