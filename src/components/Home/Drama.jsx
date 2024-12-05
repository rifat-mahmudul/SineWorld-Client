import { useEffect } from "react";
import Title from "../Shared/Title"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Drama = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section>

            <div className='mb-20'>
                <Title title="Enjoy Latest Bangla Drama" heading="Latest Bangla Drama"></Title>

                <div className='xl:w-[1200px] w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8'>

                    <div data-aos="zoom-in-up" className=' border border-gray-400 p-3 rounded-lg shadow-xl'>
                        <iframe className='w-full rounded-lg h-[300px]' src="https://www.youtube.com/embed/7yt_sOyJ9Cc?si=rE3GxdjmBXcHaNT4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                    <div data-aos="zoom-in-up" className=' border border-gray-400 p-3 rounded-lg shadow-xl'>
                        <iframe className='w-full rounded-lg h-[300px]' src="https://www.youtube.com/embed/FdxL1O-PIOU?si=nsqy5TgGpYTnqiY-" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                    <div data-aos="zoom-in-up" className=' border border-gray-400 p-3 rounded-lg shadow-xl'>
                        <iframe className='w-full rounded-lg h-[300px]' src="https://www.youtube.com/embed/3faL9-MKFbA?si=U9wX_269Y4OP4ZqB"  title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                    <div data-aos="zoom-in-up" className=' border border-gray-400 p-3 rounded-lg shadow-xl'>
                        <iframe className='w-full rounded-lg h-[300px]' src="https://www.youtube.com/embed/9rh5zf3x-ig?si=IfqeaZliJHClkadw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                    <div data-aos="zoom-in-up" className=' border border-gray-400 p-3 rounded-lg shadow-xl'>
                        <iframe className='w-full rounded-lg h-[300px]' src="https://www.youtube.com/embed/W2qbnhwkiSk?si=s1VfKiopILlSmffx" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                    <div data-aos="zoom-in-up" className=' border border-gray-400 p-3 rounded-lg shadow-xl'>
                        <iframe className='w-full rounded-lg h-[300px]' src="https://www.youtube.com/embed/-yJd59oQvpE?si=lxaFAyPvpcrOk3wq" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>


                </div>
            </div>

        </section>
    )
}

export default Drama
