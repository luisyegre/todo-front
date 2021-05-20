
export function FlashMessages({children}){
  return (
    <>
      <div className="flash-message">{children}</div>
      <style jsx>{`
        .flash-message{
          background:black;
          color:white;
          display:flex;
          align-items:center;
          font-size:20px;
          font-weight:400;
          justify-content:center;
        }
      `}</style>
      <style jsx global>{`

        @keyframes showFlashes{
          from{
            transform:translateX(-100vw);
          }
          to{
            transform:translateX(0vw);
          }
        }   
        @keyframes unShowFlashes{
          from{
            transform:translateX(0vw);
          }
          to{
            transform:translateX(-100vw);
          }
        }   
      `}</style>
    </>
  )
}