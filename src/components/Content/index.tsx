import { Flex, Text, Grid, Image } from '@chakra-ui/react';

interface ContentProps {
	description: string;
	countries: string;
	languages: string;
	cities: string;
}

export function Content({
	description,
	countries,
	languages,
	cities
}: ContentProps) {
	return (
		<Flex
			as="section"
			w="100%"
			mx="auto"
			mt="80px"
			align="center"
			justify="center"
			maxWidth={1160}>
			<Grid w="100%" templateColumns="repeat(2, 1fr)" gap="60px">
				<Flex w="100%" align="center" justify="center" direction="column">
					<Text
						fontWeight="400"
						color="gray.700"
						fontSize="24px"
						textAlign="justify">
						{description}
					</Text>
				</Flex>

				<Grid w="100%" templateColumns="repeat(3, 1fr)" gap={6}>
					<Flex align="center" justify="center" direction="column">
						<Text fontWeight="600" color="yellow.900" fontSize="48px">
							{countries}
						</Text>
						<Text fontWeight="600" color="gray.700" fontSize="24px">
							países
						</Text>
					</Flex>
					<Flex align="center" justify="center" direction="column">
						<Text fontWeight="600" color="yellow.900" fontSize="48px">
							{languages}
						</Text>
						<Text fontWeight="600" color="gray.700" fontSize="24px">
							línguas
						</Text>
					</Flex>
					<Flex align="center" justify="center" direction="column">
						<Text fontWeight="600" color="yellow.900" fontSize="48px">
							{cities}
						</Text>
						<Text fontWeight="600" color="gray.700" fontSize="24px">
							cidades +100
						</Text>
					</Flex>
				</Grid>
			</Grid>
		</Flex>
	);
}
