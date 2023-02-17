import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import '../styles/index.css';

export default function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
