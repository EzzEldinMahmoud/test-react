import React from "react";
import Divider from "@mui/material/Divider";

function Appbar() {
  return (
    <div className="w-11/12 h-1/12 bg-[#181818]  mr-10 ml-10 rounded-[15px] p-1 flex-row flex  items-center justify-between">
    
          <div className="w-1/6 h-[96px] text-center flex-row flex   items-center" >
            <div className="w-full h-full flex-col flex items-center justify-center">
                  <span className=" w-[111px] h-[19px] bg-[#554DB7] rounded-full text-center text-[15px] " style={{
                      fontFamily: 'inter',
                      fontWeight: 400,
                      color: "#9089DC"
                      
                  }}>coming soon</span> 
                  <span className=" w-full lg:text-[48px] text-2xl md:text-2xl" style={{
    fontFamily:'inter',
    fontWeight:700,
   
                      color:"#4848484D"
                 
}}>Trading</span> 
            </div>
           

      </div>
      <div className="w-[0.5px]">
          <Divider orientation="vertical" variant="middle" style={{
            height:48,
                  color:"#B9B9B9",
                  marginTop:20
              }} flexItem color="#B9B9B9"/>
      </div>
       

          <div className="w-1/6 m-2 h-[96px] text-center items-center flex-row flex">
              <div className="w-full h-full flex-col flex items-center justify-center">
                  <span className=" w-[111px] h-[19px] bg-[#554DB7] rounded-full text-center text-[15px] " style={{
                      fontFamily: 'inter',
                      fontWeight: 400,
                      color: "#9089DC"

                  }}>coming soon</span>
                  <span className=" w-full lg:text-[48px] text-2xl md:text-2xl" style={{
                      fontFamily: 'inter',
                      fontWeight: 700,
                      
                      color: "#4848484D"

                  }}>Automation</span>
              </div>
      </div>
          <div className="w-[0.5px] ml-4 mr-4">
              <Divider orientation="vertical" variant="middle" style={{
                  height: 48,
                  color: "#B9B9B9",
                  marginTop: 20
              }} flexItem color="#B9B9B9" />
          </div>
          <div className="w-1/6 m-2 h-[96px] text-center items-center flex-row flex">
              <div className="w-full h-full flex-col flex items-center justify-center">
                  <span className=" w-[111px] h-[19px] bg-[#554DB7] rounded-full text-center text-[15px] " style={{
                      fontFamily: 'inter',
                      fontWeight: 400,
                      color: "#9089DC"

                  }}>coming soon</span>
                  <span className=" w-full lg:text-[48px] text-2xl md:text-2xl" style={{
                      fontFamily: 'inter',
                      fontWeight: 700,
                      
                      color: "#4848484D"

                  }}>Portfolio</span>
              </div>
      </div>
          <div className="w-[0.5px]">
              <Divider orientation="vertical" variant="middle" style={{
                  height: 48,
                  color: "#B9B9B9",
                  marginTop: 20
              }} flexItem color="#B9B9B9" />
          </div>
          <div className="w-1/6 m-2 h-[96px] text-center items-center flex-row flex">
              <span className="w-full lg:text-[48px] text-lg md:text-2xl" style={{
                  fontFamily: 'inter',
                  fontWeight: 700,
                  
                  color: "#FFFFFF"

              }}>Alerts</span>
      </div>
          <div className="w-[0.5px]">
              <Divider orientation="vertical" variant="middle" style={{
                  height: 48,
                  color: "#B9B9B9",
                  marginTop: 20
              }} flexItem color="#B9B9B9" />
          </div>
          <div className="w-1/6 m-2 h-[96px] text-center items-center flex-row flex">
              <span className="w-full lg:text-[48px] text-2xl md:text-2xl" style={{
                  fontFamily: 'inter',
                  fontWeight: 700,
                  
                  color: "#484848"

              }}>Training</span>
      </div>
       
    </div>
  );
}

export default Appbar;
