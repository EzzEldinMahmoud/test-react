import React from 'react'
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
import Select, { components } from "react-select";
import starticon from '../assets/starticon.svg'
import iconcontact from '../assets/iconcontact.svg'
import thirdicon from '../assets/thirdicon.svg'
import fourthicon from '../assets/fourthicon.svg'
import Divider from "@mui/material/Divider";
import bgcolor from '../assets/bgcolor.svg'


const options = [
    {
        value: "risk", label: "Low risk",
 },
    {
        value: "risk", label: "Mid-risk",
    },
    {
        value: "risk", label: "High risk",
    },
    {
        value: "risk", label: "Option text here",
    },
    
];

const { Option } = components;
const IconOption = props => (
    <Option {...props}  style={{
   
        
    }}>
        <div className='flex-row flex w-full  space-x-10 items-center'>
            <CheckCircleOutlineSharpIcon color="#887EFF" style={{
                marginRight:5
            }} />

        {props.data.label}
        </div>
      
    </Option>
);
const DropdownIndicator = props => {
    return (
        <components.DropdownIndicator {...props}>
            <svg width="20" color='#040F0F' height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 8L10 12L6 8" stroke="#040F0F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        </components.DropdownIndicator>
    );
}; 
const colourStyles = {
    control: (styles,state) => ({ ...styles, backgroundColor: "transparent", color: "#A3A3A3", borderRadius: 8, borderColor:"#FFFFFF" ,height:44}),
    option: (styles, state) => {
        return {
            ...styles,
            
            backgroundColor: '#212121',
            borderColor:"transparent",
           
            padding:'15px',
           
            
            color: state.isFocused ?"#887EFF": "#6B6B6B",
            cursor:  "default"
        };
    },
    menu: (base) => ({
        ...base,
        borderRadius: '15px',
        backgroundColor: '#212121',
        marginTop: 10
    }),
    menuList: (base,state) => ({
        ...base,
        backgroundColor: state.isSelected ? '#F1F3F5' : '#212121',
        borderRadius: '15px',
        backgroundColor: '#212121',
    })
};

function Body() {
    return (
        <div className='w-11/12 mt-5 h-11/12 rounded-[15px] bg-[#181818] flex flex-col items-center justify-start'>
            <div className='flex-row flex h-12/12 w-full  m-10 p-12 justify-start  space-x-5 '>
                <div className='w-3/12 h-11/12 rounded-[15px] bg-[#212121] items-center flex-col flex justify-start pt-8'>
                    <p style={{
                        fontFamily: 'inter',
                        fontWeight: 700,
                        fontSize: 45,
                        color: "#FFFFFF"
                    }}>Filters</p>
                    <div className='w-full h-auto p-6 flex-col flex '>
                        <p className='mb-2' style={{
                            fontFamily: 'Poppins',
                            fontWeight: 500,
                            fontSize: 18,
                            color: "#FFFFFF"
                        }}>Industry</p>

                        <Select
                        
                            styles={colourStyles}
                            defaultValue={{value:"Health Care",label:<div className='flex-row flex w-full space-x-2'>
                                <img src={starticon} alt=""  />
                                <p style={{
                                    fontFamily: 'Poppins',
                                    fontWeight: 400,
                                    fontSize: 16,
                                    color: "#A3A3A3"
                                }}>Health Care</p>
                            </div>}}
                            options={options}
                            components={{ Option: IconOption


                            , DropdownIndicator, IndicatorSeparator: () => null }}
                        />
                        <p style={{
                            fontFamily: 'Poppins',
                            fontWeight: 400,
                            fontSize: 14,
                            color: "#6B6B6B",
                            marginTop: '10px'
                        }}>Choose something.</p>
                    </div>
                    <div className='w-full h-auto p-6 flex-col flex '>
                        <p className='mb-2' style={{
                            fontFamily: 'Poppins',
                            fontWeight: 500,
                            fontSize: 18,
                            color: "#FFFFFF"
                        }}>Market Cap</p>

                        <Select
                            styles={colourStyles}
                            defaultValue={{
                                value: "Health Care", label: <div className='flex-row flex w-full space-x-2'>
                                    <img src={starticon} alt="" />
                                    <p style={{
                                        fontFamily: 'Poppins',
                                        fontWeight: 400,
                                        fontSize: 16,
                                        color: "#A3A3A3"
                                    }}>Large-cap</p>
                                </div>
                            }}
                            options={options}
                            components={{
                                Option: IconOption


                                , DropdownIndicator, IndicatorSeparator: () => null,
                            }}
                        />
                        <p  style={{
                            fontFamily: 'Poppins',
                            fontWeight: 400,
                            fontSize: 14,
                            color: "#6B6B6B",
                            marginTop: '10px'
                        }}>Press Apply to see changes.</p>
                    </div>
                    <div className='w-full h-auto p-6 flex-col flex '>
                        <p className='mb-2' style={{
                            fontFamily: 'Poppins',
                            fontWeight: 500,
                            fontSize: 18,
                            color: "#FFFFFF"
                        }}>Risk</p>

                        <Select
                            styles={colourStyles}
                            defaultValue={{
                                value: "Health Care", label: <div className='flex-row flex w-full space-x-2'>
                                    <img src={starticon} alt="" />
                                    <p style={{
                                        fontFamily: 'Poppins',
                                        fontWeight: 400,
                                        fontSize: 16,
                                        color: "#414141"
                                    }}>insert text here</p>
                                </div>
                            }}
                            options={options}
                            components={{
                                Option: IconOption,
IndicatorSeparator: () => null

                                , DropdownIndicator,
                            }}
                        />
                       
                    </div>
                    <button className='mt-28 mb-5 rounded-[14px] h-[70px] w-11/12 bg-[#554DB7] hover:cursor-pointer hover:bg-[#443d92]' >
                        <p
                            style={{
                                fontFamily: 'Poppins',
                                fontWeight: 600,
                                fontSize: 24,
                                color: "#FFFFFF"
                            }}
                        >Apply Filters</p>
                    </button>
                </div>
                <div className='w-9/12 h-9/12 rounded-[15px] bg-[#212121] p-8 items-center'>
                    <div className='w-full  p-5 h-10/12 items-center justify-between rounded-[15px] flex-col flex ' style={{
                        backgroundImage: `url(${bgcolor})`,
                        backgroundRepeat:'no-repeat',
                        backgroundSize:'cover'
                    }}>
                        <div className='w-full h-full items-center justify-around  flex-row flex '>
                            <div className='flex-row flex items-center'>
                                <svg width="43" height="34" viewBox="0 0 43 34" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                    <rect x="0.613159" y="0.155302" width="41.7974" height="33.6614" fill="url(#pattern0)" />
                                    <defs>
                                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                            <use href="#image0_15_937" transform="matrix(0.00268097 0 0 0.00332896 0 -0.0526078)" />
                                        </pattern>
                                        <image id="image0_15_937" width="373" height="332" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXUAAAFMCAMAAAADVtyfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRF////////VXz1bAAAAAJ0Uk5T/wDltzBKAAAEtklEQVR42uzdUY7kNgwFQOr+l853sNlgZ2dajyJLF+hWwbAtmXqsY9wfhYD67/7lFwZ16tSpU6dOnTp16tSpU6dOnTp16tSpU6dOnTp16tSpU6dOnTp16tSpU6dOnTp16tSpU6dOfap6UU+oF/UA+gP4g9Ub09do8670NV28pXytIO8mX2vIO8HXJvI28LWMvAd8LTTPu9dK8zR8bTWPutde86B7bTaPuddu85B7rUdPuBfzgHtBD7gX8wB7QQ+4F/Rt6rUUPape1KGvUF+MnlMv6tBXrE13o4fUizr06wgFfclOL/WCniCAfhaoF3XqmSKBcqlTVw8DfYi6+wv1JXWO0KkvUYc+QP3bP3Co/6AW9R9G/8lfO9Q/cml2Rb+onnnwUQ+9bPRDf0H9M7+9Qz38Tt0Kvb36h/7BoX7tiUc9s4rpgX5Nvc8uSQP0xupn8GirfqjfVz/U76sf6i71HeqH+n31Q506deqfUj/UqVOn/in1Q506derUqVOnTp06dask6tSpU6d+R93+OvU16r5WU1+jrh7Gxb5GXZ1jRF1Nb0Rd/XpEvahjX6Ne1BPqY93bn2innlAf6f5EZgb1CHtRT6gPc38p94t6hL2oJ9SnwL+YGEs9of6++7NJ4NQT6k/DP97hgXpC/VH4ET1kqEfYX4Mf1BuMeoT9HfhxnTapJ9SfgB/ay5d6hL2oR9g7w09W7wufanq42z3W9bA2w+ca8NVi+GAHvsXuyWZwtRY+2g1urXu2MdlW93CPrKXu8c5BK93zrYM2ujfoHbSQvcNtbp97j4fLNvYur1K73LssHHax91kmb2LvtCu0h73ZXtwS9nY7zyvcO35omc/e8rviePa2X9FHs/ctGpnM3rpGivpseOoRd+oReOoReOoReOoJeOoReOoReOoJeOoReOoReOoJeOoReOoJeOoRd+oJeOoReOoJeOoRd+oJd+oReOoJd+oJduoRd+oJd+oJduoRd+oJduoJduoT2VeoH+pPsFOnvoWd+kB26tT7sFOnvoWdOnXq1Kljp06dOnXq1KlTp06dOnXq1KlTb65+72wt9X9btEMfrn7xgAT1XykW3WDS6jcrf6j/twT1yPOtDfpg9ZuzLer/B0E9c5/tgD5V/eqMndX4E4Y0+kz1q9NueOC0eqL/4MSL+pccYuYTz5tenH7X0Ixqjf4tgMZpSNUc/W8Neid/VX/0rzu0T7mrJ9C/YPFEkGY9g/4HHs9E9dZT6L9zeS2EvV5E/+w4o9SL+n116AH1on5fHXpAvahfVy/o1KmvRL90X4fuabpG/UC3Sgqj2xEYrt7e/cxUP9Df/JY0A/2l76Zz0F+pEZiF3r8KaSJ694q7meitq0vHoretXx+N3vSsxnD0lueSxqN3PIM33rzfKd8V6L1yBLagN0oq2WPeKJVnkXmX3K9l6D0y7paZ90kW3GTeKc9xj3mvFM0t5u2ySzeQn4aJsfPJT8+c3uHkp2068mTy0zqTeir56Z4EPlG8v/o35HvP6TwwJoFPVT/U76sf6tSpU6dOnTp16tSpU6dOnTp16tSpU6dOnTp16tSpU6dOnTp16tSpU6dOnTp16tSpU6dOnTp16qvGPwIMAP0WexwcH+7sAAAAAElFTkSuQmCC" />
                                    </defs>
                                </svg>
                                <p className='ml-2' style={{
                                    fontFamily: 'Poppins',
                                    fontWeight: 400,
                                    fontSize: 24,
                                    color: "#FFFFFF"
                                }}>$TSLA</p>

                            </div>
                            <div className="w-[0.5px] ml-4 mr-4">
                                <Divider orientation="vertical" variant="middle" style={{
                                    height: 28,
                                    color: "#B9B9B9",
                                    marginTop: 20
                                }} flexItem color="#B9B9B9" />
                            </div>
                            <div className='flex-row flex items-center'>
                                <img src={iconcontact} alt="" className='w-[41] h-[33]' />
                                <p className='ml-2' style={{
                                    fontFamily: 'Poppins',
                                    fontWeight: 400,
                                    fontSize: 24,
                                    color: "#FFFFFF"
                                }}>200 Contacts</p>


                            </div>
                            <div className="w-[0.5px] ml-4 mr-4">
                                <Divider orientation="vertical" variant="middle" style={{
                                    height: 28,
                                    color: "#B9B9B9",
                                    marginTop: 20
                                }} flexItem color="#B9B9B9" />
                            </div>

                            <div className='flex-row flex items-end text-center'>
                                <img src={thirdicon} alt="" className='w-[41] h-[33]' />
                                <p className='ml-2' style={{
                                    fontFamily: 'Poppins',
                                    fontWeight: 400,
                                    fontSize: 20,
                                    color: "#FFFFFF"
                                }}>12.2%</p>

                            </div>
                            <div className="w-[0.5px] ml-4 mr-4">
                                <Divider orientation="vertical" variant="middle" style={{
                                    height: 28,
                                    color: "#B9B9B9",
                                    marginTop: 20
                                }} flexItem color="#B9B9B9" />
                            </div>
                            <div className='flex-row flex items-center'>
                                <img src={fourthicon} alt="" className='w-[41] h-[33]' />
                                <p className='ml-2' style={{
                                    fontFamily: 'Poppins',
                                    fontWeight: 400,
                                    fontSize: 24,
                                    color: "#FFFFFF"
                                }}>High risk</p>

                            </div>
                 

                        </div>           <p className=' mb-8 ml-10' style={{
                            fontFamily: 'Nunito Sans',
                                fontWeight: 600,
                                fontSize: 28,
                                color: "#FFFFFF"
                            }}>Someone Just bought xxxx contracts of $XYZ, this is notable because the relative volume on this options trade is X.X%.</p>
                    </div>
                   <div
                        className='h-auto mt-3 w-full bg-[#121213] items-start  rounded-[15px] flex-col flex border border-[#D5D5D5]'>
                        <p className='p-4 ' style={{
                            fontFamily: 'Nunito Sans',
                            fontWeight: 600,
                            fontSize: 28,
                            color: "#FFFFFF"
                        }}>X company released a short report on $XYZ, High IV option sales opps</p>
                        </div>
                    <div
                        className='h-auto mt-3 w-full bg-[#121213] items-center  rounded-[15px] flex-col flex border border-[#D5D5D5]'>
                        <p className='p-4 ' style={{
                            fontFamily: 'Nunito Sans',
                            fontWeight: 600,
                            fontSize: 28,
                            color: "#FFFFFF"
                        }}>$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.</p>
                    </div>
                    <div
                        className='h-auto mt-3 w-full bg-[#121213] items-center  rounded-[15px] flex-col flex border border-[#D5D5D5]'>
                        <p className='p-4 ' style={{
                            fontFamily: 'Nunito Sans',
                            fontWeight: 600,
                            fontSize: 28,
                            color: "#FFFFFF"
                        }}>$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.</p>
                    </div>
                    <div
                        className='h-auto mt-3 w-full bg-[#121213] items-center  rounded-[15px] flex-col flex border border-[#D5D5D5]'>
                        <p className='p-4 ' style={{
                            fontFamily: 'Nunito Sans',
                            fontWeight: 600,
                            fontSize: 28,
                            color: "#FFFFFF"
                        }}>$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Body