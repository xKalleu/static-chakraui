import { Flex, Text, Image, Box } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

SwiperCore.use([Navigation, Pagination]);

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
							<Flex
								align="center"
								maxHeight="100%"
								justify="center"
								direction="column"
								width="100%"
								h="450px"
								bgPosition="center"
								bgRepeat="no-repeat"
								bgSize="cover"
								boxShadow="inset 0 0 0 2000px rgba(0, 0, 0, 0.4)"
								bgImage="url('./images/africa.jpg')">
								<Text fontWeight="700" color="gray.50" fontSize="48px">
									África
								</Text>
								<Text
									fontWeight="400"
									color="gray.100"
									maxWidth="900px"
									width="100%"
									textAlign="center"
									fontSize="36px">
									30 milhões de quilômetros quadrado
								</Text>
							</Flex>
						</SwiperSlide>
						<SwiperSlide>
							<Flex
								align="center"
								maxHeight="100%"
								justify="center"
								direction="column"
								width="1240px"
								maxWidth="100%"
								h="450px"
								bgPosition="center"
								bgRepeat="no-repeat"
								bgSize="cover"
								boxShadow="inset 0 0 0 2000px rgba(0, 0, 0, 0.4)"
								bgImage="url('./images/antarctica.jpg')">
								<Text fontWeight="700" color="gray.50" fontSize="48px">
									Antártida
								</Text>
								<Text
									fontWeight="400"
									color="gray.100"
									maxWidth="900px"
									width="100%"
									textAlign="center"
									fontSize="36px">
									É o continente mais frio e mais seco
								</Text>
							</Flex>
						</SwiperSlide>
						<SwiperSlide>
							<Flex
								align="center"
								maxHeight="100%"
								justify="center"
								direction="column"
								width="100%"
								h="450px"
								bgPosition="center"
								bgRepeat="no-repeat"
								bgSize="cover"
								boxShadow="inset 0 0 0 2000px rgba(0, 0, 0, 0.4)"
								bgImage="url('./images/asia.jpg')">
								<Text fontWeight="700" color="gray.50" fontSize="48px">
									Ásia
								</Text>
								<Text
									fontWeight="400"
									color="gray.100"
									maxWidth="900px"
									width="100%"
									textAlign="center"
									fontSize="36px">
									O maior dos continentes, tanto em área como em população
								</Text>
							</Flex>
						</SwiperSlide>
						<SwiperSlide>
							<Flex
								align="center"
								maxHeight="100%"
								justify="center"
								direction="column"
								width="100%"
								h="450px"
								bgPosition="center"
								bgRepeat="no-repeat"
								bgSize="cover"
								boxShadow="inset 0 0 0 2000px rgba(0, 0, 0, 0.4)"
								bgImage="url('./images/europe.jpg')">
								<Text fontWeight="700" color="gray.50" fontSize="48px">
									Europa
								</Text>
								<Text
									fontWeight="400"
									color="gray.100"
									maxWidth="900px"
									width="100%"
									textAlign="center"
									fontSize="36px">
									O Continente mais antigo.
								</Text>
							</Flex>
						</SwiperSlide>
						<SwiperSlide>
							<Flex
								align="center"
								maxHeight="100%"
								justify="center"
								direction="column"
								width="100%"
								h="450px"
								bgPosition="center"
								bgRepeat="no-repeat"
								bgSize="cover"
								boxShadow="inset 0 0 0 2000px rgba(0, 0, 0, 0.4)"
								bgImage="url('./images/north-america.jpg')">
								<Text fontWeight="700" color="gray.50" fontSize="48px">
									América do Norte
								</Text>
								<Text
									fontWeight="400"
									color="gray.100"
									maxWidth="900px"
									width="100%"
									textAlign="center"
									fontSize="36px">
									Compreende o Canadá, México, Groenlândia e os Estados Unidos
									da América
								</Text>
							</Flex>
						</SwiperSlide>
						<SwiperSlide>
							<Flex
								align="center"
								maxHeight="100%"
								justify="center"
								direction="column"
								width="100%"
								h="450px"
								bgPosition="center"
								bgRepeat="no-repeat"
								bgSize="cover"
								boxShadow="inset 0 0 0 2000px rgba(0, 0, 0, 0.4)"
								bgImage="url('./images/oceania.jpg')">
								<Text fontWeight="700" color="gray.50" fontSize="48px">
									Oceânia
								</Text>
								<Text
									fontWeight="400"
									color="gray.100"
									maxWidth="900px"
									width="100%"
									textAlign="center"
									fontSize="36px">
									Composta por vários grupos de ilhas do oceano Pacífico
								</Text>
							</Flex>
						</SwiperSlide>
						<SwiperSlide>
							<Flex
								align="center"
								maxHeight="100%"
								justify="center"
								direction="column"
								width="100%"
								h="450px"
								bgPosition="center"
								bgRepeat="no-repeat"
								bgSize="cover"
								boxShadow="inset 0 0 0 2000px rgba(0, 0, 0, 0.4)"
								bgImage="url('./images/south-america.jpg')">
								<Text fontWeight="700" color="gray.50" fontSize="48px">
									América do Sul
								</Text>
								<Text
									fontWeight="400"
									color="gray.100"
									maxWidth="900px"
									width="100%"
									textAlign="center"
									fontSize="36px">
									Abrangendo 12% da superfície terrestre e 6% da população
									mundial
								</Text>
							</Flex>
						</SwiperSlide>
					</Swiper>
				</Box>
			</Flex>
		</Flex>
	);
}
