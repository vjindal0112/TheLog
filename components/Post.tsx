import styled from "styled-components";
import {Button} from './Button';
import {Card} from './Card';
import { FEED_WIDTH } from '../constants';
import { db } from '../firebase';
import { useState } from 'react';

interface PostProps {
  content?: string
}

const Post: React.FC<PostProps> = ({ children, content }) => {
  const [postContent, setPostContent] = useState('');

  const addPost = (e: React.FormEvent) => { 
    e.preventDefault();
    try {
      const userId = localStorage.getItem('userId');
      if (!userId) throw new Error('invalid userId');
      db.ref('posts/' + userId).set({
        createdAt: Date.now(),
        content: postContent,
      });
    } catch (err) {
      console.log(`Error in /post: ${err}`)
    }
  }

  return (
    <Card style={{display: 'flex', flexDirection: 'column', width: FEED_WIDTH }}>
      <h1> What did you do today? </h1>

      {/* Figure out a way to add a bullet on each newline */}
      <form onSubmit={addPost}>
        <input type="text" onChange={(e) => setPostContent(e.target.value)}/>
        <input type="submit" value="Submit" />
      </form>
      <Button>Post</Button>
    </Card>
  );
};

export { Post };
