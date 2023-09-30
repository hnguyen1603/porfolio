import '../styles/globals.css';
import { Arvo } from 'next/font/google';

const arvo = Arvo({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});
export default function App({ Component, pageProps }) {
  return (
    <main className={arvo.className}>
      <Component {...pageProps} />
    </main>
  );
}
