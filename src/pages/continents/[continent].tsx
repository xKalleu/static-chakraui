import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { Flex } from '@chakra-ui/react';
import { SingleBanner } from '../../components/SingleBanner';
import { Header } from '../../components/Header';
import { Content } from '../../components/Content';
import { Cities } from '../../components/Cities';

export default function Home({ user }) {
	const { isFallback } = useRouter();
	console.log(user);
	if (isFallback) {
		return <p>Carregando...</p>;
	}
	return (
		<Flex align="center" direction="column" overflow="hidden">
			<Header />
			<SingleBanner />
			<Content />
			<Cities />
			{/* <div>
				<img
					src={user.avatar_url}
					alt={user.name}
					width="80"
					style={{ borderRadius: 40 }}
				/>
				<h1>{user.name}</h1>
				<p>{user.bio}</p>
			</div> */}
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
