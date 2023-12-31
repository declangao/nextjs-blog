import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head />
      <body className="bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-300">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
