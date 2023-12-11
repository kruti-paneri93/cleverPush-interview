import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LogoFour, LogoOne, LogoThree, LogoTwo, Long1, Long3, short1, short2, short3, short4 } from '../../Constants/constant';

function Hero() {

    const logos = [LogoOne, LogoTwo, LogoThree, LogoFour, LogoOne, LogoTwo, LogoThree, LogoFour, LogoOne, LogoTwo, LogoThree, LogoFour, LogoOne, LogoTwo, LogoThree, LogoFour, LogoOne, LogoTwo, LogoThree, LogoFour];
    const settings = {
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 0.1,
        autoplay: true,
        autoplaySpeed: 0.005,
        cssEase: 'linear',
        pauseOnHover: false,
        pauseOnFocus: false,
        speed: 1000,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplaySpeed: 1200,
                    speed:5000,
                },
            },
        ],
    };

    return (
        <>
            <div className='container mx-auto max-w-screen-xl lg:max-w-full overflow-x-hidden'>
                <div className='mt-50 text-center'>
                    <div className='flex justify-center'>
                        <div className='bg-light-blue px-6 py-3 max-w-small-block w-full'>
                            Web Stories
                        </div>
                    </div>
                    <h1 className='lg:text-6xl md:text-5xl font-bold mt-50 max-w-mid-screen mx-auto leading-56'>
                        Onboard new users with in-app stories, excite your buyers with new products
                    </h1>
                    <div className='flex justify-center'>
                        <p className='lg:text-sub-heading md:text-lg max-w-6xl mt-6 text-gray-text'>
                            Stories on Your Website & In Your App. Google Stories. Landing Pages. Distributed ANYWHERE.
                            Excite your audience with dynamic & personalized stories, share stories via link, embeds or QR code, and track the performance - all in one powerful tool.
                        </p>
                    </div>
                    <div className='flex gap-4 justify-center mt-8'>
                        <button className='bg-theme-blue text-white px-6 py-4'>Join for Free</button>
                        <button className='border bg-white px-6 py-4'>View Pricing</button>
                    </div>
                    <div className='lg:w-10/12 mt-16 mx-auto'>
                        <div className="flex gap-4">
                            <div className="h-full">
                                <img src={Long1} alt='ladysmiling'/>
                            </div>
                            <div className="">
                                <div>
                                    <img src={short1} alt='sofa'/>
                                </div>
                                <div>
                                    <img src={short2} alt='plant'/>
                                </div>
                            </div>
                            <div className="h-full">
                                <img src={Long3} alt='shoelace'/>
                            </div>
                            <div className="">
                                <div>
                                    <img src={short3} alt='brushes'/>
                                </div>
                                <div>
                                    <img src={short4} alt='cycle'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='my-20'>
                        <Slider {...settings}>
                            {logos.map((logo, index) => (
                                <div key={index}>
                                    <img src={logo} alt={`logo-${index + 1}`} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero