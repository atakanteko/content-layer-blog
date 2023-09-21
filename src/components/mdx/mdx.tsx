import { useMDXComponent } from 'next-contentlayer/hooks';
import styles from './mdx.module.css';

interface MdxProps {
  code: string;
}

const components = {
  h1: ({ ...props }) => <h1 style={{ fontSize: '44px' }} {...props} />,
  code: ({ ...props }) => <code {...props} className={styles.code} />,
};

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}
