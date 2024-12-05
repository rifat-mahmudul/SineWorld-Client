import { useEffect } from 'react';
import img from '../assets/Upcoming-Events.gif'
import img2 from '../assets/stay-with-us.png'
import Title from '../components/Shared/Title'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet-async';

const UpcomingShow = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section>

            <Helmet>
                <title>Upcoming Show - SineWorld</title>
            </Helmet>
            
            <div className='mt-16 mb-10'>
                <img className='xl:w-[1200px] w-[90%] h-[150px] mx-auto rounded-lg' src={img} alt="" />
            </div>

            <div className='mb-14'>
                <Title title="Best of Shakib Khan" heading="Shakib Khan's New"></Title>

                <div className='xl:w-[1200px] w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8'>

                    <div data-aos="zoom-in-up" className='border border-gray-400 p-3 rounded-lg shadow-xl'>
                        <iframe className='w-full rounded-lg h-[300px]' src="https://www.youtube.com/embed/wecVphaD9_k?si=CQQ618ecS5iBWien" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                    <div data-aos="zoom-in-up" className='border border-gray-400 p-3 rounded-lg shadow-xl'>
                        <iframe className='w-full rounded-lg h-[300px]' src="https://www.youtube.com/embed/T_3SjswyUcs?si=P9aDx5wunIO71mz-"  title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                    <div data-aos="zoom-in-up" className='border border-gray-400 p-3 rounded-lg shadow-xl'>
                        <iframe className='w-full rounded-lg h-[300px]' src="https://www.youtube.com/embed/oy7FY3k3TJc?si=VshOAV1CLfwmwrE8"   title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                </div>

            </div>

            <div className='mb-8'>
                <Title title="Best of Bangla Movies" heading="Upcoming Movie's"></Title>

                <div className='xl:w-[1200px] w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8'>

                    <div data-aos="zoom-in-up" className=' border border-gray-400 p-3 rounded-lg shadow-xl'>
                        <iframe className='w-full rounded-lg h-[300px]' src="https://www.youtube.com/embed/1FwI5RMbIcI?si=PKsyFW9LCG5-HbnU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                    <div data-aos="zoom-in-up" className=' border border-gray-400 p-3 rounded-lg shadow-xl'>
                        <iframe className='w-full rounded-lg h-[300px]' src="https://www.youtube.com/embed/NOvkZjbub4s?si=EUV3O7wTAc9Ch9Af" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                    <div data-aos="zoom-in-up" className=' border border-gray-400 p-3 rounded-lg shadow-xl'>
                        <iframe className='w-full rounded-lg h-[300px]' src="https://www.youtube.com/embed/LCCcDEZUxZU?si=FK0j3134aetCk6J3"  title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                    <div data-aos="zoom-in-up" className=' border border-gray-400 p-3 rounded-lg shadow-xl'>
                        <iframe className='w-full rounded-lg h-[300px]' src="https://www.youtube.com/embed/SN8WGao_UPY?si=a7LT65n7B3GwFw32" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                    <div data-aos="zoom-in-up" className=' border border-gray-400 p-3 rounded-lg shadow-xl'>
                        <iframe className='w-full rounded-lg h-[300px]' src="https://www.youtube.com/embed/3e808XLhbfc?si=AevMMkybVGDyRHb2" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                    <div data-aos="zoom-in-up" className=' border border-gray-400 p-3 rounded-lg shadow-xl'>
                        <iframe className='w-full rounded-lg h-[300px]' src="https://www.youtube.com/embed/pJ817m2yJAQ?si=Bnbcieu6GStFdsKR" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>


                </div>
            </div>

            <div className='mb-10'>
                <img className='xl:w-[500px] w-[90%] h-[100px] mx-auto' src={img2} alt="" />
            </div>

        </section>
    )
}

export default UpcomingShow
