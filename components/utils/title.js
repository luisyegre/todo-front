
export function Title(props){
  return (
    <>
      <h1 {...props} />
      <style jsx>{`
        h1{
          font-weight:normal;
        }
      `}</style>
    </>
  )
}