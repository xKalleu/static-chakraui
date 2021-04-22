import { Flex } from '@chakra-ui/react';

import { Logo } from './Logo';

export function Header() {
	return (
		<Flex
			as="header"
			w="100%"
			maxWidth={1240}
			mx="auto"
			p="27px 0"
			align="center"
			justify="center">
			<Logo />
		</Flex>
	);
}
