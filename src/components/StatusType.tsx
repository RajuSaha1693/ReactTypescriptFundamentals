type StatusProps={
    status:'loading'|'success'|'error'
}
export const StatusType = (props:StatusProps) => {
    let message;
    if(props.status==='loading'){
        message='Loading...'
    }else if(props.status==='success'){
        message='Data is fetched'
    }else if(props.status==='error'){
        message='Error fetching data'
    }
  return (
    <div>Status--{message}</div>
  )
}
