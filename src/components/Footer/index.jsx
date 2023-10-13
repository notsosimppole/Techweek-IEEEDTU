import logo from "../../assets/logo.webp"
import { BsGithub, BsFillTelephoneFill, BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div className='mx-4 bg-[#1B1B1B] text-[#fbf7f7] flex flex-col flex-nowrap items-center justify-center mt-[100px] ' id='footer'>
            <div className='bg-[#414141] rounded-lg w-full gap-2 h-full px-[20px]'>
                <div className='content-center footer1'>
                    <div className='flex flex-col items-center justify-center flex-nowrap'>
                        <img src={logo} alt='logo' width={100} height={100} />
                        <p className='text-[#BECACA] mx-4 text-md bsh'>
                            TechWeek by IEEE-DTU
                        </p>
                    </div>
                    <div>
                        <p className='text-[#fff] text-lg font-bold py-2 bsh'>
                            Delhi Technological University
                        </p>
                        <div className='flex flex md:flex-row items-center justify-start'>
                            <a href='https://goo.gl/maps/otEPWNLtnYi928Sz6' target='_blank' rel='noreferrer'>
                                <FaMapMarkerAlt className='hover:text-[#08D4F8] text-[30px] text-[#BECACA]' />
                            </a>
                            <div className=' bscflex flex-col items-start justify-center'>
                                <p className='text-[#BECACA] mx-4 text-md bsc'>
                                    Shahbad Daulatpur, Bawana Road
                                </p>
                                <p className='text-[#BECACA] mx-4 text-md bsc'>
                                    Delhi - 110042
                                </p>
                                <p className='text-[#BECACA] mx-4 text-md'>
                                    <a href='https://www.dtu.ac.in/' target='_blank' rel='noreferrer' className='hover:text-[#08D4F8] bsc'>www.dtu.ac.in</a>
                                </p>
                                <p className='text-[#BECACA] mx-4 text-md'>
                                    <a href='https://www.ieeedtu.in' target='_blank' rel="noreferrer" className='hover:text-[#08D4F8] bsc'>
                                        IEEE-DTU: www.ieeedtu.in
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-[#fff] text-lg font-bold py-2 bsh'>
                            Contact Us
                        </p>
                        <div className='flex items-center justify-start'>
                            <div className='bg-[#7f7f7f] px-1 pt-1 rounded-lg bsc'>
                                <BsFillTelephoneFill className='bsc' />
                            </div>
                            <div>
                                <p className='text-[#BECACA] mx-4 text-md bsc'>
                                    Sidharth Kapoor
                                </p>
                                <p className='text-[#BECACA] mx-4 text-md bsc'>
                                    <a href='https://wa.me/919899133065?text=' target='_blank' rel='noreferrer' className='hover:text-[#08D4F8]'>+91 98991 33065</a>
                                </p>
                            </div>
                        </div>
                        <div className='flex items-center justify-start bsc'>
                            <div className='bg-[#7f7f7f] px-1 pt-1 rounded-lg'>
                                <BsFillTelephoneFill className='' />
                            </div>
                            <div>
                                <p className='text-[#BECACA] mx-4 text-md bsc'>
                                    Sinchan Roy
                                </p>
                                <p className='text-[#BECACA] mx-4 text-md bsc'>
                                    <a href='https://wa.me/918826978278?text=' target='_blank' rel='noreferrer' className='hover:text-[#08D4F8]'>+91 88269 78278</a>
                                </p>
                            </div>
                        </div>
                        <div className='flex items-center justify-start bsc'>
                            <div className='bg-[#7f7f7f] px-1 pt-1 rounded-lg'>
                                <BsFillTelephoneFill className='' />
                            </div>
                            <div>
                                <p className='text-[#BECACA] mx-4 text-md'>
                                    Ashna

                                </p>
                                <p className='text-[#BECACA] mx-4 text-md'>
                                    <a href='https://wa.me/919625893430?text=' target='_blank' rel='noreferrer' className='hover:text-[#08D4F8]'>+91 96258 93430</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='text-[#BECACA] mx-4 text-md flex flex-col items-start justify-start '>
                        <p className='text-[#fff] text-lg py-2 bsh'>
                            <b className=''>
                                Designed by
                            </b>
                        </p>
                        <span className='flex items-center justify-between'>
                            <p className='pr-1 bsc'>
                                Prashant
                            </p>
                            <a href='https://github.com/prashant0664' target='_blank' rel='noreferrer' className='pt-1'>
                                <BsGithub className='hover:color-white bsc' />
                            </a>
                        </span>
                        <span className='flex items-center justify-between'>
                            <p className='pr-1 bsc'>
                                Gitansh Mehta
                            </p>
                            <a href='https://www.linkedin.com/in/gitansh-mehta/' target='_blank' rel='noreferrer' className='pt-1'>
                                <BsLinkedin className='bsc' />
                            </a>
                        </span>
                    </div>

                </div>
                <div className='py-2 mb-[20px]'>
                    <hr />
                    <div className='flex justify-between items-center mx-10 text-sm pt-8 disf2   '>
                        <p >
                            ©2023 TechWeek by IEEE-DTU
                        </p>
                        <div className='flex items-center justify-center gap-[20px] margin-bottom-footer2'>
                            <a href='https://www.facebook.com/ieeedtu/' target='_blank' rel='noreferrer'>
                                <BsFacebook className='text-[23px] hover:text-[#08D4F8]' />
                            </a>
                            <a href='https://www.instagram.com/ieee.dtu/' target='_blank' rel='noreferrer'>
                                <BsInstagram className='text-[23px] hover:text-[#08D4F8]' />
                            </a>
                            <a href='https://www.linkedin.com/company/ieee-dtu/' target='_blank' rel='noreferrer'>
                                <BsLinkedin className='text-[23px] hover:text-[#08D4F8]' />
                            </a>
                            <a href='https://twitter.com/dtu_ieee' target='_blank' rel='noreferrer'>
                                <FaXTwitter className='text-[23px] hover:text-[#08D4F8]' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
