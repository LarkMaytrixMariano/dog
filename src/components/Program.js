import React from 'react';
import PhoneIcon from '../assets/img/phone.svg';


const Program = () => {
  return <div>
    {/* { FOR PHONE } */}
    <div className='flex lg:gap-x-10 items-baseline justify-end'>
      <img className='w-[28px] h-[28px] lg:w-[34px] lg:h-[34px] ' src={PhoneIcon} alt="phone" />
      <div className='lg:text-[23px] text-blue font-extrabold'>+ 1 00 10 84 000
      </div>
    </div>
    <div className='text-sm'>
    <div className='lg:flex hidden'>Opening Hours: Mon - Sun: 10am - 6pm</div>

      <div className='lg:hidden text-right'>Mon - Sun: 10am - 6pm</div>
    </div>
  </div>;
};

export default Program;
