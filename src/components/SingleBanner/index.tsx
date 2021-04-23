import { Flex, Text, Grid, Image } from '@chakra-ui/react';

export function SingleBanner() {
	return (
		<Flex
			as="section"
			w="100%"
			mx="auto"
			align="flex-end"
			justify="center"
			bgPosition="center"
			bgRepeat="no-repeat"
			bgSize="cover"
			bgImage="url('/images/single/europa.png')"
			minHeight="500">
			<Flex w="100%" maxWidth={1240}>
				<Flex w="100%" justify="center" direction="column">
					<Text fontWeight="600" color="gray.50" mb="60px" fontSize="48">
						Europa
					</Text>
				</Flex>
			</Flex>
		</Flex>
	);
}
