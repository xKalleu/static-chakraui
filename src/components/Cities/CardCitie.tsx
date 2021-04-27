import { Text, Flex, Avatar, Image } from '@chakra-ui/react';

interface CardCitieProps {
	region: string;
	city: string;
	src: string;
}

export function CardCitie({ region, city, src }: CardCitieProps) {
	return (
		<Flex
			bg="#fff"
			w="100%"
			align="center"
			justify="center"
			direction="column"
			borderRadius="5px">
			<Image src="./images/antarctica.jpg" h="173px" alt="Airplane" />
			<Flex
				w="100%"
				justify="space-between"
				align="center"
				p="20px"
				borderWidth="0 1px 1px 1px"
				borderStyle="solid"
				borderColor="yellow.500">
				<Flex align="left" justify="left" direction="column">
					<Text
						fontWeight="600"
						color="gray.700"
						textAlign="left"
						fontSize="20px">
						{city}
					</Text>
					<Text
						fontWeight="500"
						color="gray.500"
						textAlign="left"
						fontSize="16px"
						mt="10px">
						{region}
					</Text>
				</Flex>
				<Avatar size="md" name={city} src="#" />
			</Flex>
		</Flex>
	);
}
