import React, { ElementType } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import type { CodeProps } from 'react-markdown/lib/ast-to-react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import remarkGfm from 'remark-gfm';

SyntaxHighlighter.registerLanguage('js', js);

type Props = {
  content: string;
};

export default function PostContent({ content }: Props) {
  const customRenders: { [nodeType: string]: ElementType } = {
    // img(img: HTMLImageElement) {
    //   return (
    //     <Image
    //       src={
    //         img.src.startsWith('http://') || img.src.startsWith('https://')
    //           ? img.src
    //           : `/images/posts/${img.src}`
    //       }
    //       alt={img.alt}
    //       width={0}
    //       height={0}
    //       sizes="100%"
    //       style={{ width: '100%', height: 'auto' }}
    //     />
    //   );
    // },
    img(img: HTMLImageElement) {
      return (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={
            img.src.startsWith('http://') || img.src.startsWith('https://')
              ? img.src
              : `/images/posts/${img.src}`
          }
          alt={img.alt}
        />
      );
    },
    code(code: CodeProps) {
      const { className, children } = code;
      const language = className?.split('-')[1];

      return (
        <SyntaxHighlighter language={language} style={atomDark}>
          {children as string}
        </SyntaxHighlighter>
      );
    },
  };
  return (
    <div className="prose dark:prose-invert">
      <ReactMarkdown components={customRenders} remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
