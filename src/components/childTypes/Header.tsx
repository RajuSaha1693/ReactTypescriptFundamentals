type HeaderProps={
    children:string
}
export const Header = (props:HeaderProps) => {
  return (
    <div>{props.children}</div>
  )
}
