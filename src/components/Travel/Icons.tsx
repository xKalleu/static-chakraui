import { Text, Flex, Image } from '@chakra-ui/react';

interface IconsProps {
	children: string;
	src: string;
}

export function Icons({ children, src }: IconsProps) {
	return (
		<Flex w="100%" align="center" justify="center" direction="column">
			<Image src={src} alt={children} />
			<Text fontWeight="600" color="gray.700" fontSize="24px" mt="20px">
				{children}
			</Text>
		</Flex>
	);
}
