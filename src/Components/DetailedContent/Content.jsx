import React from 'react'
import { GoogleWebStories, InApp, WebStories } from '../../Constants/constant'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Content() {
    const settings = {
        infinite: true,
        slidesToShow: 1.5,
        slidesToScroll: 1.2,
        autoplay: true,
        autoplaySpeed: 1200,
        cssEase: 'linear',
        speed: 5000,
    };
    const featuresData = [
        {
            title: 'In app Stories',
            description: 'Lorem ipsum dolor sit amet consectetur. Magna urna sit phasellus luctus viverra est. Tincidunt diam sit nam.',
            image: InApp,
        },
        {
            title: 'Web Stories',
            description: 'Lorem ipsum dolor sit amet consectetur. Magna urna sit phasellus luctus viverra est. Tincidunt diam sit nam.',
            image: WebStories,
        },
        {
            title: 'Google Web Stories',
            description: 'Lorem ipsum dolor sit amet consectetur. Magna urna sit phasellus luctus viverra est. Tincidunt diam sit nam.',
            image: GoogleWebStories,
        },
    ];
    const footerList = [
        {
            id: 1,
            text: 'Lorem ipsum dolor sit amet consectetur. Eu est eget.',
        },
        {
            id: 2,
            text: 'Lorem ipsum dolor sit amet',
        },
        {
            id: 3,
            text: 'Lorem ipsum dolor sit amet',
        },
    ];
    return (
        <>
            <div className='relative'>
                <div className='bg-cream h-524'>
                    <div className='container mx-auto flex items-center justify-between lg:w-11/12'>
                        <h1 className='text-section-heading font-bold mt-50 text-left max-w-max'>
                            Share your message in a visualized, engaging way on a channel that will work best for you.
                        </h1>
                    </div>
                    <div className='container lg:w-11/12 mx-auto mt-10'>
                        <div className='flex gap-4'>
                            {featuresData.map((feature, index) => (
                                <div className='bg-white w-1/3 p-8'>
                                    <h3 className='text-left font-bold text-2.5xl'>{feature.title}</h3>
                                    <p className='text-gray-text font-normal text-left text-base mt-5'>{feature.description}</p>
                                    <div className='mx-auto flex justify-left mt-5'>
                                        <button className='text-theme-blue border-b-2 border-theme-blue p-2'>Learn More</button>
                                    </div>
                                    <div className='mx-auto flex justify-center mt-8'>
                                        <img src={feature.image} alt={feature.title} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='mx-auto mt-50'>
                        <h1 className='text-section-heading font-bold mt-52 text-center max-w-mid-screen mx-auto'>
                            Level up your brands, see massive growth, Get 4X better user engagement and increase sales.
                        </h1>
                        <div className='flex mt-40 gap-24'>
                            <div className='w-1/2 px-16'>
                                <h1 className='font-bold text-3xl text-left'>
                                    Put your products in the spotlight
                                </h1>
                                <p className='mt-10 text-gray-text text-left mb-10'>
                                    Make your products stand out. Utilize stunning full-bleed visuals to seduce your audience in a blink and watch your bounce rate drop dramatically.
                                </p>
                                <ul>
                                    {footerList.map(item => (
                                        <li key={item.id} className='flex gap-5 mb-3'>
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16 29.3333C23.3333 29.3333 29.3333 23.3333 29.3333 16C29.3333 8.66666 23.3333 2.66666 16 2.66666C8.66663 2.66666 2.66663 8.66666 2.66663 16C2.66663 23.3333 8.66663 29.3333 16 29.3333Z" stroke="#275FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M10.3334 16L14.1067 19.7733L21.6667 12.2267" stroke="#275FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p>{item.text}</p>
                                        </li>
                                    ))}
                                </ul>
                                <div className='flex justify-start'>
                                    <button className='bg-theme-blue text-white px-6 py-4'>Learn More</button>
                                </div>
                            </div>
                            <div className='w-1/2 overflow-x-hidden'>
                                <Slider {...settings}>
                                    <div>
                                        <img src={InApp} alt='slide-1' />
                                    </div>
                                    <div>
                                        <img src={WebStories} alt='slide-2' />
                                    </div>
                                    <div>
                                        <img src={GoogleWebStories} alt='slide-3' />
                                    </div>
                                    <div>
                                        <img src={InApp} alt='slide-1' />
                                    </div>
                                    <div>
                                        <img src={WebStories} alt='slide-2' />
                                    </div>
                                    <div>
                                        <img src={GoogleWebStories} alt='slide-3' />
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Content