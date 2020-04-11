import styled from "styled-components";
import { Card } from './Card';
import { Button } from "./Button";
import { FEED_WIDTH } from '../constants';


interface FeedItemProps {
  name?: string;
  handle?: string;
  tasks?: Array<String>;
  date?: string;
  time?: string;
  streakCount?: number;
}

const ProfilePic = styled.div`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background-color: #999;
  display: flex;
`;

interface DivisionProps {
  width: string;
}

const Division = styled.div<DivisionProps>`
  width: ${({width}) => width};
  display: flex;
`
const Name = styled.div`
  display:flex;
  flex-direction: column;
`;

const Content = styled.div`
  display:flex;
`;

const Streak = styled.span`
  padding-top: 0.75rem;
  font-weight: bold;
`;

const FeedItem: React.FC<FeedItemProps> = ({name, handle, date, tasks, time, streakCount})  => {
  return (
    <Card style={{display: 'flex', flexDirection: 'row', width: FEED_WIDTH }}>
      <Division width='14%' style={{flexDirection: 'column'}}>
        <ProfilePic/>
        {streakCount ? <Streak role='img'>🔥{streakCount}</Streak> : <> </>}
      </Division>
      <Division width='50%' style={{flexDirection: 'column'}}>
        <Name>
            <h2 style={{marginBottom: '2px'}}>{name}</h2>
            @{handle}
        </Name>
        <Content>
          <ul>
            {
              tasks.map((item, index) => {
                return( 
                  <li key = {index}>
                    {item}
                  </li>
                )
              })
            }
          </ul>
        </Content>
      </Division>
      <Division width='36%' style={{flexDirection: 'column', textAlign: 'right'}}>
        <div style={{justifySelf: 'flex-start'}}>
          {date}
        </div>
          <div style={{marginTop: 'auto'}}>
            {time}
        </div>
      </Division>
    </Card>
  );
}

export { FeedItem };
