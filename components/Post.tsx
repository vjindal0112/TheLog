import styled from "styled-components";
import {Button} from './Button';
import {Card} from './Card';
import { FEED_WIDTH } from '../constants';
import { db } from '../firebase';

interface PostProps {
  content?: string
}

const Post: React.FC<PostProps> = ({ children, content }) => {
  const addPost = (content: string) => { 
    try {
      const userId = localStorage.getItem('userId');
      if (!userId) throw new Error('invalid userId');

      db.ref('posts/').set({
        createdAt: Date.now(),
        userId,
        content,
      });
    } catch (err) {
      console.log(`Error in /post: ${err}`)
    }
  }

  return (
    <Card style={{display: 'flex', flexDirection: 'column', width: FEED_WIDTH }}>
      <h1> What did you do today? </h1>
      <form>
        <label>
          <input type="text" name="name" />
        </label>
      </form>      
      {addPost(content)}
      <Button>Post</Button>
    </Card>
  );
};

export { Post };
