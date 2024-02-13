import React from 'react'
import logo from '../assets/logo.png';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import Badge from '@mui/material/Badge';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
function Header() {
    const profilepic = "https://s3-alpha-sig.figma.com/img/95bc/a3ec/af6d28d115834f85b6163b6e58e91c7c?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z-fw5UP7S7swTLatZd9~V1FCqj9qvvDrdB0Mxxwp-GNX0KWWmt2ov6WG8dG2L4OGLYtc1Fi6Ih1Nk1PaM1A6Qxw8WDmzNxbBb4I8jqvyHOiamm6Svk830s1Pb9QMnA15I1Oq998O5NbA8rOnfI8ktfDjWph57u9nuD3jK9i~1v88YfizCDFr-eM4~RlERnfLpECqvS71b34wsc~OYr2rCeVdOp6Surx2oP6-flhLCQzJ2DWTEsfJPSSLH4Reo8bIqjqRoLApNVjk2VmP42HrlnsgdSgSiSGg4gHMxn09ROtYJ9haQu-kWgT-r92GeNlR0gkSbgihpJY7Zooe3tuh4g__"
  return (
      <div className='h-1/12 w-11/12 p-2 mr-5 items-center flex-row flex mt-4'>
        <div className=' h-[71px] w-4/12' >
              <img src={logo} alt="" className='h-[71px] w-[414px]' style={{
                objectFit:'cover'
              }}/>

        </div>
        <div className='w-11/12 h-[70px] justify-between items-center h-full rounded-[19px] flex-row flex' style={{
              backgroundColor:'#181818'
        }}>
              <div className='w-3/12 h-[30px] items-center ml-4 bg-[#F5F6FA]  rounded-[19px] flex-row flex p-2'>
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g opacity="0.5">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.69353 12.5352C12.4234 11.375 13.6959 8.22157 12.5357 5.49174C11.3755 2.7619 8.22208 1.48942 5.49225 2.64957C2.76241 3.80972 1.48993 6.96318 2.65008 9.69302C3.81024 12.4229 6.9637 13.6953 9.69353 12.5352Z" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M11.3902 11.3896L15.5555 15.5555" stroke="black" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                  </svg>

                  <input className='appearance-none bg-transparent w-full h-full ml-0  p-2' placeholder='Search' style={{
                      fontFamily: "Nunito Sans",
                      fontWeight:400,
                      fontSize:14,
    outline:'none'
}}/>
              </div>
              <div className='w-full h-[65px]'>
                  <div className='w-12/12 mr-4 h-[44px] rounded-full flex-row flex m-2 justify-end items-center space-x-4' style={{
                     
}}>
                      <Badge badgeContent={6} color='success' className='mr-5 mt-2 items-center justify-center text-center' style={{
                          fontFamily: "Nunito Sans",
                          fontSize: 18,
                          fontWeight: 700,
                          textAlign:'center'

                      }}>
                          <svg width="26" height="27" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0277 0C7.73472 0 5.80843 1.72411 5.55522 4.00306L4.5 13.5H1.5C0.671573 13.5 0 14.1716 0 15V16.5C0 17.3284 0.671573 18 1.5 18H22.5C23.3284 18 24 17.3284 24 16.5V15C24 14.1716 23.3284 13.5 22.5 13.5H19.5L18.4448 4.00306C18.1916 1.72411 16.2653 0 13.9723 0H10.0277Z" fill="#554DB7" />
                              <rect opacity="0.3" x="9" y="19.5" width="6" height="6" rx="2.25" fill="#554DB7" />
                          </svg>

                      </Badge>
                      <img src={profilepic} alt="" className='w-[40px] h-[40px] rounded-full' style={{
                          objectFit: 'cover',
                          backgroundColor:'white'
                      }} />
                      <div className='flex-col flex items-start ml-2 p-1'>
                        <span style={{
                              fontFamily:"Nunito Sans",
                              fontSize:18,
                              fontWeight:700,
                              color:"#404040"
                        }}>Moni Roy</span>
                          <span style={{
                              fontFamily: "Nunito Sans",
                              fontSize: 14,
                              fontWeight: 600,
                              color: "#404040"
                          }}>Admin</span>

                      </div>
                      <div className='w-7 h-7 ml-8 rounded-full border border-[#5C5C5C] items-center justify-center' >
                          <ExpandMoreSharpIcon color='#5C5C5C' style={{
                              color:"#5C5C5C"
                          }}/>
                      </div>
</div>
              </div>
            <div></div>
        </div>

    </div>
  )
}

export default Header