import React from 'react';
import styles from './latest-posts.module.css';
import PostCard from '@/components/common/post-card/post-card';
import * as Local from 'contentlayer/source-files';
import type { MDX, IsoDateTimeString } from 'contentlayer/core';
import PostCardMini from '@/components/common/post-card-mini/post-card-mini';

/** Nested types */
export type Tag = {
  /** File path relative to `contentDirPath` */
  _id: string;
  _raw: Local.RawDocumentData;
  type: 'Tag';
  title: string;
};

/** Document types */
export type Post = {
  /** File path relative to `contentDirPath` */
  _id: string;
  _raw: Local.RawDocumentData;
  type: 'Post';
  title: string;
  description?: string | undefined;
  date: IsoDateTimeString;
  published: boolean;
  image: string;
  tags?: Tag[] | undefined;
  author: string;
  /** MDX file body */
  body: MDX;
  slug: string;
  slugAsParams: string;
};

export type PostType = Post;

const LatestPosts = ({ allPosts }: { allPosts: PostType[] }) => {
  return (
    <>
      <div className={styles.title}>
        <h3>En son eklenen yazılar</h3>
      </div>
      <div className={styles.container}>
        {allPosts.map((post, index) => (
          // <PostCard key={index} post={post} />
          <PostCardMini key={index} post={post} />
        ))}
      </div>
    </>
  );
};

export default LatestPosts;
