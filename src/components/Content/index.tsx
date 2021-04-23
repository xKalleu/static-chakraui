import { Flex, Text, Grid, Image } from '@chakra-ui/react';

export function Content() {
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
						A Europa é, por convenção, um dos seis continentes do mundo.
						Compreendendo a península ocidental da Eurásia, a Europa geralmente
						divide-se da Ásia a leste pela divisória de águas dos montes Urais,
						o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
					</Text>
				</Flex>

				<Grid w="100%" templateColumns="repeat(3, 1fr)" gap={6}>
					<Flex align="center" justify="center" direction="column">
						<Text fontWeight="600" color="yellow.900" fontSize="48px">
							50
						</Text>
						<Text fontWeight="600" color="gray.700" fontSize="24px">
							países
						</Text>
					</Flex>
					<Flex align="center" justify="center" direction="column">
						<Text fontWeight="600" color="yellow.900" fontSize="48px">
							60
						</Text>
						<Text fontWeight="600" color="gray.700" fontSize="24px">
							línguas
						</Text>
					</Flex>
					<Flex align="center" justify="center" direction="column">
						<Text fontWeight="600" color="yellow.900" fontSize="48px">
							27
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
