// Import Swiper React components
import { Text, Flex } from '@chakra-ui/react';
import { SwiperSlide } from 'swiper/react';

interface SliderSwiperProps {
	name: string;
	children: string;
	src: string;
}

export function SliderSwiper({ name, children, src }: SliderSwiperProps) {
	return (
		<Flex>
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
				bgImage={src}>
				<Text fontWeight="700" color="gray.50" fontSize="48px">
					{name}
				</Text>
				<Text
					fontWeight="400"
					color="gray.100"
					maxWidth="900px"
					width="100%"
					textAlign="center"
					fontSize="36px">
					{children}
				</Text>
			</Flex>
		</Flex>
	);
}
