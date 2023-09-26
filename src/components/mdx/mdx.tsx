import { useMDXComponent } from 'next-contentlayer/hooks';
import NextImage, { ImageProps } from 'next/image';
import Image from 'next/image';
import MdxP from './mdx-p/mdx-p';
import MdxPre from './mdx-pre/mdx-pre';
import MdxBlockquote from './mdx-blockquote/mdx-blockquote';
import MdxCode from './mdx-code/mdx-code';
import MdxH1 from './mdx-h/mdx-h1';
import MdxH2 from './mdx-h/mdx-h2';
import MdxH3 from './mdx-h/mdx-h3';
import MdxH4 from './mdx-h/mdx-h4';
import MdxH5 from './mdx-h/mdx-h5';
import MdxH6 from './mdx-h/mdx-h6';
import MdxA from './mdx-a/mdx-a';
import MdxHr from './mdx-hr/mdx-hr';
import MdxOl from './mdx-list/mdx-ol';
import MdxUl from './mdx-list/mdx-ul';
import MdxLi from './mdx-list/mdx-li';
import MdxTable from './mdx-table/mdx-table';
import MdxTr from './mdx-table/mdx-tr';
import MdxTh from './mdx-table/mdx-th';
import MdxTd from './mdx-table/mdx-td';

interface MdxProps {
  code: string;
}

const components = {
  h1: ({ ...props }) => <MdxH1 {...props} />,
  h2: ({ ...props }) => <MdxH2 {...props} />,
  h3: ({ ...props }) => <MdxH3 {...props} />,
  h4: ({ ...props }) => <MdxH4 {...props} />,
  h5: ({ ...props }) => <MdxH5 {...props} />,
  h6: ({ ...props }) => <MdxH6 {...props} />,
  p: ({ ...props }) => <MdxP {...props} />,
  pre: ({ ...props }) => <MdxPre {...props} />,
  code: ({ ...props }) => <MdxCode {...props} />,
  blockquote: ({ ...props }) => <MdxBlockquote {...props} />,
  a: ({ ...props }) => <MdxA {...props} />,
  hr: ({ ...props }) => <MdxHr {...props} />,
  ol: ({ ...props }) => <MdxOl {...props} />,
  ul: ({ ...props }) => <MdxUl {...props} />,
  li: ({ ...props }) => <MdxLi {...props} />,
  table: ({ ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <MdxTable {...props} />
  ),
  tr: ({ ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <MdxTr {...props} />
  ),
  th: ({ ...props }) => <MdxTh {...props} />,
  td: ({ ...props }) => <MdxTd {...props} />,

  img: ({ alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img style={{}} alt={alt} {...props} />
  ),

  Image: (props: ImageProps) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '14px',
        marginBottom: '14px',
      }}
    >
      <NextImage
        layout="responsive"
        style={{ maxWidth: '718px', height: '404px' }}
        {...props}
      />
    </div>
  ),
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
