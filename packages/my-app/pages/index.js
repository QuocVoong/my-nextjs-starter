import styled     from 'styled-components';
import Router     from 'next/router';
import { Flex, Text, Input, Button } from 'ui-components';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return <>
    <Title>My Home</Title>
    <Button onClick={() => Router.push('login')}>Login</Button>
  </>;
}