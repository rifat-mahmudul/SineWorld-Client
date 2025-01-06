import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../assets/Home/12th-fail.jpg';
import img2 from '../../assets/Home/three-idiots.jpg';
import img3 from '../../assets/Home/kGF.jpg';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
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
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper mx-auto mb-10 h-[30%]"
        >
            <SwiperSlide>
                <div>
                    <img className='h-[calc(70vh)] w-full' src={img1} alt="" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div>
                    <img className='h-[calc(70vh)] w-full' src={img2} alt="" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div>
                    <img className='h-[calc(70vh)] w-full' src={img3} alt="" />
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Banner