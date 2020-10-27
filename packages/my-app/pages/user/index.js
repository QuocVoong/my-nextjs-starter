import { useQuery }  from 'react-query';
import { findUsers } from '../../api/query/user';
import { Text }      from 'ui-components';

const UserList = () => {
  const { status, data, error, isFetching } = useQuery('users', findUsers);
  if (isFetching) {
    return <div>Loading...</div>
  }

  return <>
    {data && data.result.items.map(item => (<div>{item.username}</div>))}
  </>
}

export default function User() {
  return <>
    <Text size="lg">User List</Text>
    <UserList />
    </>
}