import EventCard from "./EventCard"
import logo from '../../assets/logo.webp'
import dsai from "../../assets/images/dsa.png"
import analogi from "../../assets/images/analog.jpeg"
import mli from "../../assets/images/ml.png"
import webi from "../../assets/images/web.png"
import roboticsi from "../../assets/images/robotics.png"
import datai from "../../assets/images/data.webp"
import designi from "../../assets/images/design.jpeg"
import basici from "../../assets/images/basic.jpeg"
import androidi from "../../assets/images/android.jpeg"
const EventList = () => {
    return (
        <div className='text-white w-full bg-[#1B1B1B]' id='events'>
            <div className='flex flex-col items-center pt-10 '>
                <h2 className='text-5xl font-bold bg-gradient-to-tl from-[#3376BD] to-[#08D4F8] inline-block text-transparent bg-clip-text font-prompt'>
                    Events
                </h2>
                <div className='h-2 w-10 bg-gradient-to-tl from-[#3376BD] to-[#08D4F8] rounded-full mt-2 mb-5'>
                </div>
                <p className='text-xl px-8 pb-8 md:px-0 justify'>
                    With a wide range of workshops from Web Design to Robotics, Programming to data Analytics, there&apos;s something for everyone with a passion for technology.
                </p>
            </div>
            <div className='hidet h-screen w-4/5 mx-auto overflow-y-scroll snap-y snap-mandatory rounded-xl scrollbar-hide mb-20'>

                <div className='snap-start h-full w-full'>
                    <EventCard title="Basic Programming" img={basici} date="05 Oct 2023" link="" />
                </div>
                <div className='h-screen w-full snap-start'>
                    <EventCard title="Web Development" img={webi} date="6 Oct 2023" link="" />
                </div>
                <div className='h-screen w-full snap-start'>
                    <EventCard title="Analog+Digital Electronics" img={analogi} date="17 Oct 2023" link="" />
                </div>
                <div className='h-screen w-full snap-start'>
                    <EventCard title="Android Development" img={androidi} date="18 Oct 2023" link="" />
                </div>
                <div className='h-screen w-full snap-start'>
                    <EventCard title="Data Analytics" img={datai} date="18 Oct 2023" link="" />
                </div>
                <div className='h-screen w-full snap-start'>
                    <EventCard title="ML/AI" img={mli} date="19 Jan 2023" link="" />
                </div>
                <div className='h-screen w-full snap-start'>
                    <EventCard title="Data Structures and Algorithms" img={dsai} date="19 Jan 2023" link="" />
                </div>
                <div className='h-screen w-full snap-start'>
                    <EventCard title="Graphic Design" img={designi} date="20 Jan 2023" link="" />
                </div>
                <div className='h-screen w-full snap-start'>
                    <EventCard title="Robotics" img={roboticsi} date="20 Jan 2023" link="" />
                </div>
            </div>
            <div className={` hidet2 grid-container mx-[20px] my-[10px] `} >
                <div className="item1 des">1</div>
                <div className="item2 des"
                    style={{
                        background: `url(${analogi})`,
                    }}
                >
                    <div className="card-main backbox card1 mx-[100px] ">
                        <div className="card-sub">
                            <div className="name boldname">
                                <p className="namesub">
                                    Analog + Digital Electronics
                                </p>
                            </div>
                            <div className="date">
                                <p className="datesub">
                                    12 Oct 2024
                                </p>
                            </div>
                            <a href="" target="_blank" className='btn2' aria-label="link1">
                                <button className="btn">
                                    Join Group
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="item3 des">3</div>
                <div className="item4 des2">
                    <div className={`imgcen text-center flex justify-center `}>
                        <img src={logo} alt='logo' className="h-[500px] w-[500px]" />
                    </div>

                </div>
                <div className="item5 des" style={{
                    background: `url(${dsai})`,
                }}
                >
                    <div className="card-main backbox backbox" >
                        <div className="card-sub "

                        >
                            <div className="name boldname">
                                <p className="namesub ">
                                    DSA
                                </p>
                            </div>
                            <div className="date">
                                <p className="datesub">
                                    12 Oct 2024
                                </p>
                            </div>
                            <a href="" target="_blank" className='btn2' aria-label="link6">
                                <button className="btn">
                                    Join Group
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="item6 des"
                    style={{
                        background: `url(${mli})`,
                    }}
                >
                    <div className="card-main backbox">
                        <div className="card-sub">
                            <div className="name boldname">
                                <p className="namesub">
                                    AI/ML
                                </p>
                            </div>
                            <div className="date">
                                <p className="datesub">
                                    12 Oct 2024
                                </p>
                            </div>
                            <a href="" target="_blank" className='btn2' aria-label="link2">
                                <button className="btn">
                                    Join Group
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="item7 des"
                    style={{
                        background: `url(${roboticsi})`,
                    }}
                >
                    <div className="card-main backbox">
                        <div className="card-sub">
                            <div className="name boldname">
                                <p className="namesub">
                                    Robotics
                                </p>
                            </div>
                            <div className="date">
                                <p className="datesub">
                                    12 Oct 2024
                                </p>
                            </div>
                            <a href="" target="_blank" className='btn2' aria-label="link8">
                                <button className="btn">
                                    Join Group
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="item8 des"
                    style={{
                        background: `url(${webi})`,
                    }}
                >
                    <div className="card-main backbox">
                        <div className="card-sub">
                            <div className="name boldname">
                                <p className="namesub">
                                    Web Development
                                </p>
                            </div>
                            <div className="date">
                                <p className="datesub">
                                    12 Oct 2024
                                </p>
                            </div>
                            <a href="" target="_blank" className='btn2' aria-label="link3">
                                <button className="btn">
                                    Join Group
                                </button>
                            </a>
                        </div>
                    </div></div>
                <div className="item9 des"
                    style={{
                        background: `url(${basici})`,
                    }}
                >
                    <div className="card-main backbox">
                        <div className="card-sub">
                            <div className="name boldname">
                                <p className="namesub">
                                    Basic <br />Programming
                                </p>
                            </div>
                            <div className="date">
                                <p className="datesub">
                                    12 Oct 2024
                                </p>
                            </div>
                            <a href="" target="_blank" className='btn2' aria-label="link7">
                                <button className="btn">
                                    Join Group
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="item10 des"
                    style={{
                        background: `url(${androidi})`,
                    }}
                >
                    <div className="card-main backbox">
                        <div className="card-sub">
                            <div className="name boldname">
                                <p className="namesub">
                                    Android<br />Development
                                </p>
                            </div>
                            <div className="date">
                                <p className="datesub">
                                    12 Oct 2024
                                </p>
                            </div>
                            <a href="" target="_blank" className='btn2' aria-label="link4">
                                <button className="btn">
                                    Join Group
                                </button>
                            </a>
                        </div>
                    </div></div>
                <div className="item11 des">11</div>
                <div className="item12 des"
                    style={{
                        background: `url(${designi})`,
                    }}
                >

                    <div className="card-main backbox">
                        <div className="card-sub">
                            <div className="name boldname">
                                <p className="namesub">
                                    Graphics Design
                                </p>
                            </div>
                            <div className="date">
                                <p className="datesub">
                                    12 Oct 2024
                                </p>
                            </div>
                            <a href="" target="_blank" className='btn2' aria-label="link9">
                                <button className="btn">
                                    Join Group
                                </button>
                            </a>
                        </div>
                    </div></div>
                <div className="item13 des"
                    style={{
                        background: `url(${datai})`,
                    }}
                >
                    <div className="card-main backbox">
                        <div className="card-sub">
                            <div className="name boldname">
                                <p className="namesub">
                                    Data Analytics
                                </p>
                            </div>
                            <div className="date">
                                <p className="datesub">
                                    12 Oct 2024
                                </p>
                            </div>
                            <a href="" target="_blank" className='btn2' aria-label="link5">
                                <button className="btn">
                                    Join Group
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="item14 des">14</div>
            </div>

        </div>
    )
}

export default EventList