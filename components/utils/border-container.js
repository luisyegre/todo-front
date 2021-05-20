
export function BorderContainer(props){
  return (
    <>
      <div {...props}/>
      <style jsx>{`
        div{
          margin:20px;
          border-radius:10px;
          padding:5px;
          text-align:center;
          box-shadow:1px 1px 8px 0px rgba(0,0,0,.25);
        }
      `}</style>
    </>
  )
}