export const Input = (params)=>(
  <>
    <input {...params}/>
    <style jsx>{`
      input{
        border:none;
        color:${params.TextColor || 'black'};
        border-radius:${params.borRadius || '99px'};
        border-top-left-radius:2px;
        font-size:${params.fontSize || '20px'};
        border:.5px solid white;
        box-shadow:1px 1px 3px 0px gray;
        outline:none;
        padding:5px 15px;
        width:${params.w || '100%'};
      }
    `}</style>
  </>
)
