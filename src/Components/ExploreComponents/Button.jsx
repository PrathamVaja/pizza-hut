import React from 'react'

const Button = (props) => {
  return (
      <>
          <div className='w-[160px] h-[58px] border-3 border-[#F3274C]  rounded-[12px] ml-[30px] '>
              <div className=' bg-[#F3274C] flex justify-center items-center w-[175px] h-[45px] rounded-[12px] -ml-6  mt-1'>{ props.name }</div>
          </div>
      </>
  )
}

export default Button