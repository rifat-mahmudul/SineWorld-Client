import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../assets/Home/img1.jpg';
import img2 from '../../assets/Home/img2.jpg';
import img3 from '../../assets/Home/img3.jpg';
import img4 from '../../assets/Home/img4.jpg';
import img6 from '../../assets/Home/img5.jpg';
import img5 from '../../assets/Home/three-idiots.jpg';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import './compo.css'


const Banner = () => {
    return (
        <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop = {Infinity}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper mx-auto mb-16"
        >
            <SwiperSlide>
                <div>
                    <img className='h-[calc(100vh-30px)] w-full' src={img5} alt="" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div>
                    <img className='h-[calc(100vh-30px)] w-full' src={img6} alt="" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div>
                    <img className='h-[calc(100vh-30px)] w-full' src={img1} alt="" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div>
                    <img className='h-[calc(100vh-30px)] w-full' src={img2} alt="" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div>
                    <img className='h-[calc(100vh-30px)] w-full' src={img3} alt="" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div>
                    <img className='h-[calc(100vh-30px)] w-full' src={img4} alt="" />
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Banner