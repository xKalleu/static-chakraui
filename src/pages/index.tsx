import { Flex } from '@chakra-ui/react';

import { Banner } from '../components/Banner';
import { Continents } from '../components/Continents/Index';
import { Header } from '../components/Header';
import { Travel } from '../components/Travel';

export default function Home() {
	return (
		<Flex align="center" direction="column" overflow="hidden">
			<Header />
			<Banner />
			<Travel />
			<Continents />
		</Flex>
	);
}
