import { Flex, Text, Image, Box } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

SwiperCore.use([Navigation, Pagination]);

import { SliderSwiper } from './SliderSwiper';

export function Continents() {
	return (
		<Flex
			as="section"
			w="100%"
			padding="40px 0"
			mx="auto"
			mt="100px"
			align="center"
			justify="center"
			maxWidth={1240}>
			<Flex align="center" justify="center" direction="column" maxWidth="100%">
				<Box>
					<svg
						width="90"
						height="2"
						viewBox="0 0 90 2"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<line y1="1" x2="90" y2="1" stroke="#47585B" stroke-width="2" />
					</svg>
				</Box>
				<Text
					fontWeight="500"
					color="gray.700"
					fontSize="36px"
					mt="50px"
					textAlign="center">
					Vamos nessa?
					<br /> Então escolha seu continente
				</Text>
				<Box maxWidth="100%" mt="50px">
					<Swiper
						id="main"
						tag="section"
						wrapperTag="ul"
						navigation
						pagination
						spaceBetween={0}
						slidesPerView={1}
						onInit={(swiper) => console.log('Swiper initialized!', swiper)}
						onSlideChange={(swiper) => {
							console.log('Slide index changed to: ', swiper.activeIndex);
						}}
						onReachEnd={() => console.log('Swiper end reached')}>
						<SwiperSlide>
							<SliderSwiper name="África" src="url('./images/africa.jpg')">
								30 milhões de quilômetros quadrado
							</SliderSwiper>
						</SwiperSlide>

						<SwiperSlide>
							<SliderSwiper
								name="Antártida"
								src="url('./images/antarctica.jpg')">
								É o continente mais frio e mais seco
							</SliderSwiper>
						</SwiperSlide>

						<SwiperSlide>
							<SliderSwiper name="Ásia" src="url('./images/asia.jpg')">
								O maior dos continentes, tanto em área como em população
							</SliderSwiper>
						</SwiperSlide>

						<SwiperSlide>
							<SliderSwiper name="Europa" src="url('./images/europe.jpg')">
								O Continente mais antigo.
							</SliderSwiper>
						</SwiperSlide>

						<SwiperSlide>
							<SliderSwiper
								name="América do Norte"
								src="url('./images/north-america.jpg')">
								Compreende o Canadá, México, Groenlândia e os Estados Unidos da
								América
							</SliderSwiper>
						</SwiperSlide>

						<SwiperSlide>
							<SliderSwiper name="Oceânia" src="url('./images/oceania.jpg')">
								Composta por vários grupos de ilhas do oceano Pacífico
							</SliderSwiper>
						</SwiperSlide>

						<SwiperSlide>
							<SliderSwiper
								name="América do Sul"
								src="url('./images/south-america.jpg')">
								Abrangendo 12% da superfície terrestre e 6% da população mundial
							</SliderSwiper>
						</SwiperSlide>
					</Swiper>
				</Box>
			</Flex>
		</Flex>
	);
}
