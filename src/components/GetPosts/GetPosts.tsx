import styles from './GetPosts.module.scss';
import { useState, useEffect } from 'react';
import { Post, IPost } from '@/components/Post/Post';
import { formatDistance } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { definePosts } from '@/actions/postsActions';
import { RootState } from '@/redux/store';

export const GetPosts = () => {
  const dispatch = useDispatch();
  const postsData = useSelector<RootState>((state) => state.posts) as IPost[];

  function getInterval(creationDate: string): string {
    return formatDistance(new Date(creationDate), new Date(Date.now()), {
      addSuffix: true,
    });
  }

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://dev.codeleap.co.uk/careers/');
      const json = await response.json();
      const data = await json.results;
      dispatch(definePosts(data));
    }
    getData();
  }, []);

  return (
    <ul className={styles.postsList}>
      {postsData?.map((post) => {
        return (
          <Post
            key={Math.random() * post.id}
            title={post.title}
            content={post.content}
            username={post.username}
            id={post.id}
            created_datetime={getInterval(post.created_datetime)}
          />
        );
      })}
    </ul>
  );
};
