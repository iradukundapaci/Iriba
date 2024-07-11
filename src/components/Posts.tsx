import { FunctionComponent } from 'react';
import { Button } from '@mui/material';
import Post from './Post';
import styles from './Posts.module.css';
import { Link } from 'react-router-dom';

export type PostsType = {
  className?: string;
};

const Posts: FunctionComponent<PostsType> = ({ className = '' }) => {
  return (
    <div className={[styles.posts, className].join(' ')}>
      <div className={styles.postsHeader}>
        <b className={styles.latestPost}>Latest Post</b>
        <a href="https://iribacreatives.blogspot.com/">
          <Button
            className={styles.postsBtn}
            disableElevation
            variant="outlined"
            href="/contact-us"
            sx={{ borderRadius: '0px 0px 0px 0px', width: 163, height: 48 }}
          >
            All posts
          </Button>
        </a>
      </div>
      <div className={styles.recentPosts}>
        <Post
          rectangle1="/rectangle-1@2x.png"
          userIcon1="/user-icon-1.svg"
          christellaI="Christella .I"
          addressingThePhysicalAndM="Addressing the Physical and Mental Health Needs of Street Children in Rwanda"
        />
        <Post
          rectangle1="/rectangle-11@2x.png"
          userIcon1="/user-icon-11.svg"
          christellaI="Palvis . N"
          addressingThePhysicalAndM="Unstoppable Africa 2023: Shaping a Future of Prosperity and Innovation"
        />
        <Post
          rectangle1="/rectangle-12@2x.png"
          userIcon1="/user-icon-11.svg"
          christellaI="Kenny .N"
          addressingThePhysicalAndM="KWIBUKA 30: April 7, 2024 – the 30th Anniversary of the Genocide against Tusti"
        />
      </div>
    </div>
  );
};

export default Posts;
