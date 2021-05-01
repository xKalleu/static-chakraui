import { Flex, Text, Grid } from '@chakra-ui/react';

interface CitiesProps {
	children: React.ReactNode;
}

export function Cities({ children }: CitiesProps) {
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
				{children}
			</Grid>
		</Flex>
	);
}
