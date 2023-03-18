import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ProgressBar from "@badrap/bar-of-progress";
import { Router } from 'next/router';

const progress = new ProgressBar({
  size: 4,
  color: "#FD5B61",
  className: "z-100",
  delay: 80,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
