import { useRouter } from 'next/router';
import { Card } from '../components';

// eventually will need to use SWR to fetch post contents from firebase

const ProfilePage = props => {
  const router = useRouter();

  return (
    <div>
      <h1>
        {router.query.handle}
      </h1>
      <Card>
        stuff
      </Card>
    </div>
  )
};


// I think it has to be a default export to work
export default ProfilePage;