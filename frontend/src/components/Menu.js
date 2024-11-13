import React from 'react'

const Menu = () => {
  return (
    <div>
        <div className='Menu Box' style={{backgroundColor:"white",height:"130px",width:"200px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around"}}>
            <p style={{fontSize:"20px"}}>UserName</p>
            <hr style={{width:"100%",textAlign:"left",marginLeft:"0"}}/>
            <div style={{cursor:"pointer",backgroundColor:"yellow",width:"100%",height:"50%"}}>

            <p style={{fontSize:"20px"}} >LogOut </p>
            </div>

        </div>
    </div>
  )
}

export default Menu