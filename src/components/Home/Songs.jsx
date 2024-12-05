import { useEffect } from "react";
import Title from "../Shared/Title"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Songs = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section>

        <div className='mb-16'>
            <Title title="Enjoy Lates Bangla Songs" heading="Latest Bangla Song"></Title>

            <div className='xl:w-[1200px] w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8'>

                <div data-aos="zoom-in-up" className=' border border-gray-400 p-3 rounded-lg shadow-xl'>
                    <iframe className='w-full rounded-lg h-[300px]' src="https://www.youtube.com/embed/vUPgAUEUQw8?si=x1QLgNSL3ZCJLN-Z" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <div data-aos="zoom-in-up" className=' border border-gray-400 p-3 rounded-lg shadow-xl'>
                    <iframe className='w-full rounded-lg h-[300px]' src="https://www.youtube.com/embed/hjBMTHOj00M?si=r8UyC8sqQWDOG5Ss" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <div data-aos="zoom-in-up" className=' border border-gray-400 p-3 rounded-lg shadow-xl'>
                    <iframe className='w-full rounded-lg h-[300px]' src="https://www.youtube.com/embed/5w-tBB-qxDk?si=w01AhNdW5wAdtOhL"  title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <div data-aos="zoom-in-up" className=' border border-gray-400 p-3 rounded-lg shadow-xl'>
                    <iframe className='w-full rounded-lg h-[300px]' src="https://www.youtube.com/embed/wF9oo8dJ5t4?si=-ug0ekCtxYFC69fM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <div data-aos="zoom-in-up" className=' border border-gray-400 p-3 rounded-lg shadow-xl'>
                    <iframe className='w-full rounded-lg h-[300px]' src="https://www.youtube.com/embed/f53nqIBzii8?si=01d8PKig5QJ3YDH9" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <div data-aos="zoom-in-up" className=' border border-gray-400 p-3 rounded-lg shadow-xl'>
                    <iframe className='w-full rounded-lg h-[300px]' src="https://www.youtube.com/embed/22TnLEK0MJo?si=RokKDpFJHszwKIIE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>


            </div>
        </div>

    </section>
    )
}

export default Songs
