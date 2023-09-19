import React from 'react';
import { notFound } from 'next/navigation';
import { allPosts } from 'contentlayer/generated';
import { Metadata } from 'next';
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

  // const url = env.NEXT_PUBLIC_APP_URL

  // const ogUrl = new URL(`${url}/api/og`)
  // ogUrl.searchParams.set("heading", post.title)
  // ogUrl.searchParams.set("type", "Blog Post")
  // ogUrl.searchParams.set("mode", "dark")

  return {
    title: post.title,
    description: post.description,
    publisher: post.author,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      // url: absoluteUrl(post.slug),
      images: [
        {
          url: 'http://localhost:3000/',
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
      images: ['http://localhost:3000/'],
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

  return <div>BlogDetailPage</div>;
}
