import styles from './GetPosts.module.scss';
import { useEffect, useState } from 'react';
import { Post, IPost } from '@/components/Post/Post';
import { formatDistance } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { definePosts } from '@/actions/postsActions';
import { AppDispatch, RootState } from '@/redux/store';

export const GetPosts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const postsData = useSelector<RootState>((state) => state.posts) as IPost[];

  const threeMinutes: number = 180000;

  useEffect(() => {
    dispatch(definePosts());
    const interval = setInterval(() => {
      dispatch(definePosts());
    }, threeMinutes);

    return () => clearInterval(interval);
  }, []);

  return (
    <ul className={styles.postsList}>
      {postsData?.map((post) => {
        return (
          <li key={Math.random() * post.id}>
            <Post
              title={post.title}
              content={post.content}
              username={post.username}
              id={post.id}
              created_datetime={post.created_datetime}
            />
          </li>
        );
      })}
    </ul>
  );
};
