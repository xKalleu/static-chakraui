import { Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { Banner } from '../components/Banner';
import { Continents } from '../components/Continents/Index';
import { Header } from '../components/Header';
import { Travel } from '../components/Travel';
import api from '../services/api';

export default function Home() {
	const [continent, setContinent] = useState();

	console.log(continent);

	useEffect(() => {
		api.get('continents').then((response) => {
			setContinent(response.data);
		});
	}, []);

	return (
		<Flex align="center" direction="column" overflow="hidden">
			<Header />
			<Banner />
			<Travel />
			<Continents />
		</Flex>
	);
}
