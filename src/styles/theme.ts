import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
	colors: {
		gray: {
			'900': '#181b23',
			'800': '#1F2029',
			'700': '#47585B',
			'600': '#4B4D63',
			'500': '#999999',
			'400': '#797D9A',
			'300': '#9699B0',
			'200': '#b3b5c6',
			'100': '#DADADA',
			'50': '#F5F8FA'
		},
		yellow: {
			'900': '#FFBA08',
			'500': 'rgba(255, 186, 8, 0.5)'
		}
	},
	fonts: {
		heading: 'Poppins',
		body: 'Poppins'
	},
	styles: {
		global: {
			body: {
				bg: 'gray.50',
				color: 'gray.700'
			}
		}
	}
});
