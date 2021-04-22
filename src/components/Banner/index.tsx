import { Flex, Text, Grid, Image } from '@chakra-ui/react';

export function Banner() {
	return (
		<Flex
			as="section"
			w="100%"
			mx="auto"
			align="center"
			justify="center"
			bgPosition="center"
			bgRepeat="no-repeat"
			bgSize="cover"
			bgImage="url('/images/background.png')"
			minHeight="335">
			<Grid w="100%" maxWidth={1240} templateColumns="repeat(2, 1fr)" gap={6}>
				<Flex w="100%" justify="center" direction="column">
					<Text fontWeight="400" color="gray.50" fontSize="4xl">
						5 Continentes,
						<br /> infinitas possibilidades.
					</Text>
					<Text fontWeight="400" color="gray.100" fontSize="xl" mt="20px">
						Chegou a hora de tirar do papel a viagem que você
						<br /> sempre sonhou.
					</Text>
				</Flex>
				<Flex w="100%" align="center" justify="center">
					<Image
						pos="relative"
						top="50px"
						src="./images/airplane.png"
						alt="Airplane"
					/>
				</Flex>
			</Grid>
		</Flex>
	);
}
