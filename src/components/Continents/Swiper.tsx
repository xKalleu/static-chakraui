// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';

export default () => {
	return (
		<Swiper
			spaceBetween={50}
			slidesPerView={1}
			navigation
			pagination
			onSwiper={(swiper) => console.log(swiper)}
			onSlideChange={() => console.log('slide change')}>
			<SwiperSlide>
				teste
				{/* <Image src="./images/africa.jpg" alt="Airplane" /> */}
			</SwiperSlide>
			<SwiperSlide>
				<Image src="./images/antarctica.jpg" alt="Airplane" />
			</SwiperSlide>
			<SwiperSlide>
				<Image src="./images/asia.jpg" alt="Airplane" />
			</SwiperSlide>
			<SwiperSlide>
				<Image src="./images/europe.jpg" alt="Airplane" />
			</SwiperSlide>
			<SwiperSlide>
				<Image src="./images/north-america.jpg" alt="Airplane" />
			</SwiperSlide>
			<SwiperSlide>
				<Image src="./images/oceania.jpg" alt="Airplane" />
			</SwiperSlide>
			<SwiperSlide>
				<Image src="./images/south-america.jpg" alt="Airplane" />
			</SwiperSlide>
		</Swiper>
	);
};
