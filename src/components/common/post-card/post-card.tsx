import React from 'react';
import styles from './post-card.module.css';
import Image from 'next/image';
import { PostType } from '@/components/home/latest-posts/latest-posts';
import Link from 'next/link';
import { DateHelper } from '@/helpers/DateHelper';

const PostCard = ({ post }: { post: Partial<PostType> }) => {
  return (
    <article>
      <Link href={post.slug!} className={styles.post_card}>
        <div className={styles.text_container}>
          <div className={styles.header}>
            <span className={styles.date}>
              {DateHelper.formatDate(post.date!)}
            </span>
            {post.tags?.map((tag, index) => (
              <span className={styles.tag} key={index}>
                {tag.title}
              </span>
            ))}
          </div>
          <div className={styles.post_text}>
            <h2 className={styles.post_title}>{post.title}</h2>
            <p className={styles.post_desc}>{post.description}</p>
          </div>
        </div>
        <div className={styles.img_container}>
          <Image
            src={post.image || `/images/home/bg-dashboard.png`}
            fill
            alt=""
            className={styles.post_card_img}
          />
        </div>
      </Link>
    </article>
  );
};

export default PostCard;
