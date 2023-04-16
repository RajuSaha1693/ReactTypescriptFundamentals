type ListProps={
    personList:{
        first:string
        last:string
    }[]
}
export const ArrayType = (props:ListProps) => {
  return (
    <div>
        {props.personList.map(name=>{
            return <h3 key={name.first}>{name.first} {name.last}</h3>
        })}
    </div>
  )
}
