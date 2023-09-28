import React from 'react';
import styles from './post-card-mini.module.css';
import { PostType } from '@/components/home/latest-posts/latest-posts';
import Link from 'next/link';
import Image from 'next/image';
import { DateHelper } from '@/helpers/DateHelper';

const PostCardMini = ({ post }: { post: Partial<PostType> }) => {
  return (
    <article>
      <Link href={post.slug!} className={styles.post_card}>
        <div className={styles.post_frame}>
          <div className={styles.img_container}>
            <Image
              src={post.image || `/images/home/bg-dashboard.png`}
              fill
              alt=""
              className={styles.post_card_img}
            />
          </div>
          <div className={styles.text_container}>
            {post.tags?.map((tag, index) => (
              <span className={styles.tag} key={index}>
                {tag.title}
              </span>
            ))}
            <div className={styles.post_text}>
              <h2 className={styles.post_title}>{post.title}</h2>
            </div>
            <div className={styles.footer}>
              <span className={styles.date}>
                {DateHelper.formatDate(post.date!)}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default PostCardMini;
