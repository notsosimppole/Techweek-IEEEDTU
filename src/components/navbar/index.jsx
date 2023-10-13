import logo from "../../assets/logo.webp"
import logoIEEE from "../../assets/ieeelogo.png"
import ScrollToTop from "react-scroll-up";
import { AiOutlineArrowUp } from 'react-icons/ai'
const Navbar = () => {
    return (
        <>
            <ScrollToTop showUnder={160}>
                <div >
                    <AiOutlineArrowUp className="cls" />
                </div>
            </ScrollToTop>
            <div className='flex flex-row flex-nowrap w-full items-center justify-between bg-[#1B1B1B] z-10 text-[#fbf7f7] fixed top-0 ssm:my-[0px]'>
                <a href="#" className='flex'>
                    <img src={logoIEEE} alt="logo-IEEE" className='h-[50px] mt-[18px] hidden pl-[10px] sm:block  ' />
                    <img src={logo} alt="logo" className='h-[100px] w-[100px] ssm:h-[70px] ssm:w-[70px] ' />
                </a>
                <div className='flex flex-row flex-nowrap items-center justify-center gap-4 md:px-14 mx-[20px] ssm:mx-[4px] md:w-auto ssm:text-sm'>
                    <a href='#about' className='duration-[400ms] text-[#BECACA] text-lg font-bold py-2 hover:text-[#08D4F8] hover:scale-[1.05] ssm:text-sm'>
                        About
                    </a>
                    <a href='#events' className='hover:scale-[1.05] duration-[400ms] text-[#BECACA] text-lg font-bold py-2 hover:text-[#08D4F8] ssm:text-sm'>
                        Events
                    </a>
                    <a href='#footer' className='text-lg duration-[400ms] font-bold py-2 text-[#08D4F8] border-2 border-[#08D4F8] transition transform hover:scale-110 hover:bg-[#08D4F8] hover:text-[#1B1B1B] duration-150 px-2 md:px-5 my-5 md:my-0 rounded-lg ssm:text-sm ssm:my-[0px]'>
                        Contact Us
                    </a>
                </div>
            </div>
        </>
    )
}

export default Navbar
