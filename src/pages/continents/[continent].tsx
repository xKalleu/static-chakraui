import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { CardCitie } from '../../components/CardCitie';
import { Cities } from '../../components/Cities';
import { Content } from '../../components/Content';
import { Flex } from '@chakra-ui/react';
import { Header } from '../../components/Header';
import { SingleBanner } from '../../components/SingleBanner';

import { makeSlug } from '../../services/utils/makeSlug';

export default function Home({ data }) {
	const { isFallback } = useRouter();
	console.log(data);
	if (isFallback) {
		return <p>Carregando...</p>;
	}
	return (
		<Flex align="center" direction="column" overflow="hidden">
			<Header />
			<SingleBanner name={data.name} />
			<Content
				description={data.description}
				countries={data.countries}
				languages={data.languages}
				cities={data.number_cities}
			/>
			<Cities>
				{data.cities.map((cont) => (
					<CardCitie
						keygen={cont.id}
						region={cont.state}
						city={cont.city}
						src="https://cdn.diferenca.com/imagens/cidade-e-municipio-og.jpg"
					/>
				))}
			</Cities>
			{console.log(makeSlug(data.name))}
		</Flex>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const response = await fetch(`http://localhost:3333/continents`);
	const data = await response.json();

	const paths = data.map((response) => {
		return { params: { continent: response.name } };
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
			data
		},
		revalidate: 10
	};
};
