import { Flex, Text, Grid, Image } from '@chakra-ui/react';

import { Icons } from './Icons';

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
				<Icons src="./images/cocktail.png">vida noturna</Icons>
				<Icons src="./images/surf.png">praia</Icons>
				<Icons src="./images/building.png">moderno</Icons>
				<Icons src="./images/museum.png">clássico</Icons>
				<Icons src="./images/earth.png">e mais...</Icons>
			</Grid>
		</Flex>
	);
}
