import { Flex, Text, Grid, Image, Avatar } from '@chakra-ui/react';
import { CardCitie } from './CardCitie';

export function Cities() {
	return (
		<Flex
			as="section"
			w="100%"
			mx="auto"
			align="center"
			justify="center"
			maxWidth={1160}
			direction="column"
			mb="35px">
			<Flex w="100%" direction="column" mt="80px" mb="40px">
				<Text
					fontWeight="500"
					color="gray.700"
					fontSize="36px"
					textAlign="justify">
					Cidades +100
				</Text>
			</Flex>
			<Grid w="100%" templateColumns="repeat(4, 1fr)" gap="45px">
				<CardCitie
					city="Londres"
					region="Reino Unido"
					src="./images/antarctica.jpg"
				/>
				<CardCitie
					city="Londres"
					region="Reino Unido"
					src="./images/antarctica.jpg"
				/>
				<CardCitie
					city="Londres"
					region="Reino Unido"
					src="./images/antarctica.jpg"
				/>
			</Grid>
		</Flex>
	);
}
