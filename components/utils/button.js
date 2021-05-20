export const Button = (params)=>{

  return (<>
    <button {...params}/>
    <style jsx>{`
      button{
        background:${params['bg-color'] || '#242'};
        color:${params['text-color'] || 'white'};
        border-radius:${params['bor-radius'] || '0px'};
        cursor:pointer;
        font-size:${params["text-size"] || '20px'};
        box-shadow:1px 1px 3px 0px gray;
        border:none;
        padding:6px;
        width:${params.w || '100%'};
      }
    `}</style>
  </>)
}
