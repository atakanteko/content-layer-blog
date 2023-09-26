import React from 'react';
import { notFound } from 'next/navigation';
import { allPosts } from 'contentlayer/generated';
import { Metadata } from 'next';
import { absoluteUrl } from '@/helpers/Utils';
import styles from './blog-detail.module.css';
import { DateHelper } from '@/helpers/DateHelper';
import Image from 'next/image';
import { Mdx } from '@/components/mdx/mdx';

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

async function getPostFromParams(params: { slug: string }) {
  const post = allPosts.find((post) => post.slugAsParams === params?.slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  const url = process.env.NEXT_PUBLIC_APP_URL;

  const ogUrl = new URL(`${url}/api/og`);
  ogUrl.searchParams.set('heading', post.title);
  ogUrl.searchParams.set('type', 'Blog Post');
  ogUrl.searchParams.set('mode', 'dark');

  return {
    title: post.title,
    description: post.description,
    publisher: post.author,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: absoluteUrl(post.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [ogUrl.toString()],
    },
  };
}

export async function generateStaticParams(): Promise<
  BlogDetailPageProps['params'][]
> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams,
  }));
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <div className={styles.container}>
        <div className={styles.post_title}>
          <span>{post.title}</span>
          {post.date && (
            <time dateTime={post.date} className={styles.post_date}>
              {DateHelper.formatDate(post.date)}
            </time>
          )}
        </div>
        <div className={styles.post_image}>
          {post.image && (
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className={styles.image}
            />
          )}
        </div>
        <Mdx code={post.body.code} />
      </div>
    </article>
  );
}
