import Title from "../Shared/Title"
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard, FreeMode } from 'swiper/modules';
import { Link } from "react-router";

const Featured = () => {

    const axiosPublic = useAxiosPublic();

    const {data : movies = []} = useQuery({
        queryKey : ['movies'],
        queryFn : async () => {
            const {data} = await axiosPublic('/movies');
            return data;
        }
    })

    const recentAdded = movies.filter(movie => movie.category === 'recentlyAdded')

    return (
        <section className="pb-24">
            

            <div className="mt-10 max-w-[90%] xl:max-w-[1200px] mx-auto">

                <div className="mb-5">
                    <Title title="Enjoy some amazing movies" heading="Recently Added"></Title>
                </div>

                <Swiper
                slidesPerView={6}
                spaceBetween={70}
                freeMode={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Keyboard, Navigation]}
                className="mySwiper  h-[280px]"
                >

                    {
                        recentAdded.map(item => (
                            <SwiperSlide key={item.key} className="h-[250px] w-[180px] ">
                                <Link to={`/Details/${item?._id}`}>
                                    <div className="h-[250px] w-[200px]  rounded-lg ">
                                        <div>
                                            <img className="rounded-lg w-full h-[250px]" src={item?.MoviePoster} alt="img" />
                                        </div>

                                        <h1 className='mt-2 text-gray-300'>{item?.MovieTitle}</h1>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
        
        </section>
    )
}

export default Featured
