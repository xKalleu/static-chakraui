import { Flex, Text, Grid, Image } from '@chakra-ui/react';

export function Travel() {
	return (
		<Flex
			as="section"
			w="100%"
			mx="auto"
			mt="100px"
			align="center"
			justify="center"
			maxWidth={1240}>
			<Grid w="100%" templateColumns="repeat(5, 1fr)" gap={6}>
				<Flex w="100%" align="center" justify="center" direction="column">
					<Image src="./images/cocktail.png" alt="Airplane" />
					<Text fontWeight="600" color="gray.700" fontSize="24px" mt="20px">
						vida noturna
					</Text>
				</Flex>

				<Flex w="100%" align="center" justify="center" direction="column">
					<Image src="./images/surf.png" alt="Airplane" />
					<Text fontWeight="600" color="gray.700" fontSize="24px" mt="20px">
						praia
					</Text>
				</Flex>

				<Flex w="100%" align="center" justify="center" direction="column">
					<Image src="./images/building.png" alt="Airplane" />
					<Text fontWeight="600" color="gray.700" fontSize="24px" mt="20px">
						moderno
					</Text>
				</Flex>

				<Flex w="100%" align="center" justify="center" direction="column">
					<Image src="./images/museum.png" alt="Airplane" />
					<Text fontWeight="600" color="gray.700" fontSize="24px" mt="20px">
						clássico
					</Text>
				</Flex>

				<Flex w="100%" align="center" justify="center" direction="column">
					<Image src="./images/earth.png" alt="Airplane" />
					<Text fontWeight="600" color="gray.700" fontSize="24px" mt="20px">
						e mais...
					</Text>
				</Flex>
			</Grid>
		</Flex>
	);
}
