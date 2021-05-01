import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { CardCitie } from '../../components/CardCitie';
import { Cities } from '../../components/Cities';
import { Content } from '../../components/Content';
import { Flex } from '@chakra-ui/react';
import { Header } from '../../components/Header';
import { SingleBanner } from '../../components/SingleBanner';

export default function Home({ user }) {
	const { isFallback } = useRouter();
	console.log(user);
	if (isFallback) {
		return <p>Carregando...</p>;
	}
	return (
		<Flex align="center" direction="column" overflow="hidden">
			<Header />
			<SingleBanner name={user.name} />
			<Content
				description={user.description}
				countries={user.countries}
				languages={user.languages}
				cities={user.number_cities}
			/>
			<Cities>
				{user.cities.map((cont) => (
					<CardCitie key={cont.state} region={cont.state} city={cont.city} />
				))}
			</Cities>
			{console.log(user.cities)}
		</Flex>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const response = await fetch(`http://localhost:3333/continents`);
	const data = await response.json();

	const paths = data.map((member) => {
		return { params: { continent: member.name } };
	});

	return {
		paths,
		fallback: true
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const { continent } = context.params;

	const response = await fetch(`http://localhost:3333/continents/${continent}`);
	const data = await response.json();
	console.log(data);
	return {
		props: {
			user: data
		},
		revalidate: 10
	};
};
