import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ChakraProvider } from '@chakra-ui/react';

export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700;900&display=swap"
						rel="stylesheet"
					/>
					<link
						rel="stylesheet"
						href="https://unpkg.com/swiper/swiper-bundle.css"
					/>
					<link
						rel="stylesheet"
						href="https://unpkg.com/swiper/swiper-bundle.min.css"
					/>
					<link rel="shortcut icon" href="favicon.png" type="image/png" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
