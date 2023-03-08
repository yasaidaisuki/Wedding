import { AppProps } from 'next/app';
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import '../styles/index.css';

export default function MyApp({ Component, pageProps }: AppProps) {
    const [nonce, setNonce] = useState<string>();

    useEffect(() => {
      // Fake nonce generation for purposes of demonstration
      const uuid = uuidv4();
      console.log('uuid:', uuid);
      setNonce(`nonce-${uuid}`);
    }, []);
    
	return <Component {...pageProps} />;
}
