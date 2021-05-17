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
			minHeight={['163', '335']}>
			<Grid
				w="100%"
				maxWidth={1240}
				templateColumns={['1fr', 'repeat(2, 1fr)']}
				gap={6}>
				<Flex w="100%" justify="center" ml={['16px', '0']} direction="column">
					<Text fontWeight="400" color="gray.50" fontSize={['20px', '4xl']}>
						5 Continentes,
						<br /> infinitas possibilidades.
					</Text>
					<Text
						fontWeight="400"
						color="gray.100"
						mr={['16px', '0']}
						fontSize={['14px', 'xl']}
						mt="20px">
						Chegou a hora de tirar do papel a viagem que você sempre sonhou.
					</Text>
				</Flex>
				<Flex w="100%" align="center" d={['none', 'flex']} justify="center">
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
