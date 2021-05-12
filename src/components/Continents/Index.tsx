import { Flex, Text, Box } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import Link from 'next/link';

SwiperCore.use([Navigation, Pagination]);

import { SliderSwiper } from './SliderSwiper';
import { useEffect, useState } from 'react';
import api from '../../services/api';

export interface IContinent {
	id: number;
	name: string;
	description: string;
	src: string;
	slug: string;
}

export function Continents() {
	const [continent, setContinent] = useState<IContinent[]>([]);

	console.log(continent);

	useEffect(() => {
		api.get('continents').then((response) => {
			setContinent(response.data);
		});
	}, []);

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
						{continent.map((cont) => (
							<SwiperSlide key={cont.id}>
								<Link href={`/continents/${encodeURIComponent(cont.id)}`}>
									<a>
										<SliderSwiper name={cont.name} src={cont.src}>
											{cont.description}
										</SliderSwiper>
									</a>
								</Link>
							</SwiperSlide>
						))}
					</Swiper>
				</Box>
			</Flex>
		</Flex>
	);
}
