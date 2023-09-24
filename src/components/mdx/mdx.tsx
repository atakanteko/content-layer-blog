import { useMDXComponent } from 'next-contentlayer/hooks';
import styles from './mdx.module.css';
import Image from 'next/image';
import MdxP from './mdx-p/mdx-p';
import MdxPre from './mdx-pre/mdx-pre';
import MdxBlockquote from './mdx-blockquote/mdx-blockquote';
import MdxCode from './mdx-code/mdx-code';
interface MdxProps {
  code: string;
}

const components = {
  h1: ({ ...props }) => <h1 {...props} />,
  h2: ({ ...props }) => <h2 {...props} />,
  h3: ({ ...props }) => <h3 {...props} />,
  h4: ({ ...props }) => <h4 {...props} />,
  h5: ({ ...props }) => <h5 {...props} />,
  h6: ({ ...props }) => <h6 {...props} />,
  a: ({ ...props }) => <a {...props} />,
  p: ({ ...props }) => <MdxP {...props} />,
  ul: ({ ...props }) => <ul {...props} />,
  ol: ({ ...props }) => <ol {...props} />,
  li: ({ ...props }) => <li {...props} />,
  pre: ({ ...props }) => <MdxPre {...props} />,
  code: ({ ...props }) => <MdxCode {...props} />,
  blockquote: ({ ...props }) => <MdxBlockquote {...props} />,
  img: ({ alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} {...props} />
  ),
  hr: ({ ...props }) => <hr {...props} />,
  table: ({ ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div>
      <table {...props} />
    </div>
  ),
  tr: ({ ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr {...props} />
  ),
  th: ({ ...props }) => <th {...props} />,
  td: ({ ...props }) => <td {...props} />,

  Image,
  // Callout,
};

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}
