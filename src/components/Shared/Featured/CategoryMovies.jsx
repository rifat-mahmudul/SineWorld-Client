/* eslint-disable react/prop-types */
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard, FreeMode } from 'swiper/modules';
import { Link } from "react-router";
import Title from '../Title';

const CategoryMovies = ({ movies, heading }) => {
    return (
        <div className="mt-10 max-w-[90%] xl:max-w-[1200px] mx-auto">

            <div className="mb-5">
                <Title heading={heading}></Title>
            </div>

            <Swiper
                slidesPerView={6} 
                freeMode={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Keyboard, Navigation]}
                className="mySwiper h-[280px]"
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1280: {
                        slidesPerView: 6,
                        spaceBetween: 10,
                    },
                }}
            >
                {
                    movies.map(item => (
                        <SwiperSlide key={item.key} className="h-[250px] w-[180px]">
                            <Link to={`/Details/${item?._id}`}>
                                <div className="h-[260px] w-[180px] rounded-lg hover:scale-105 transition">
                                    <div>
                                        <img className="rounded-lg w-full h-[250px]" src={item?.MoviePoster} alt="img" />
                                    </div>
                                    <h1 className="mt-2 text-gray-300">{item?.MovieTitle}</h1>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default CategoryMovies;
