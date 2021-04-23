import { Flex } from '@chakra-ui/react';

import { SingleBanner } from '../components/SingleBanner';
import { Header } from '../components/Header';
import { Content } from '../components/Content';
import { Cities } from '../components/Cities';

export default function Home() {
	return (
		<Flex align="center" direction="column" overflow="hidden">
			<Header />
			<SingleBanner />
			<Content />
			<Cities />
		</Flex>
	);
}
