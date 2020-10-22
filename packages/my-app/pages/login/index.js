import React, { memo } from 'react';
import FlexboxGrid     from 'rsuite/lib/FlexboxGrid';
import RPanel          from 'rsuite/lib/Panel';
import Form            from 'rsuite/lib/Form';
import FormGroup       from 'rsuite/lib/FormGroup';
import FormControl     from 'rsuite/lib/FormControl';
import RButtonToolbar  from 'rsuite/lib/ButtonToolbar';
import Button          from 'rsuite/lib/Button';
import styled          from 'styled-components';
import IconLogo        from 'assets/logo.svg';

const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0cc579;
`;

const ButtonToolbar = styled(RButtonToolbar)`
  display: flex;
  justify-content: space-between;
  button {
    color: white;
  }
`;

const Panel = styled(RPanel)`
  img {
    display: block;
    margin: auto;
    background: #0cc579;
    width: 150px;
  }
  h1 {
    color: white;
    text-align: center;
  }
`;

const Login = () => {
  return (
    <LoginContainer>
      <FlexboxGrid justify="center">
        <FlexboxGrid.Item>
          <Panel header={<div>
            <img src={IconLogo} alt=""/>
            <h1>ez-POS</h1>
          </div>}>
            <Form fluid>
              <FormGroup>
                <FormControl name="email" placeholder="Email"/>
              </FormGroup>
              <FormGroup>
                <FormControl name="password" type="password" placeholder="Password"/>
              </FormGroup>
              <FormGroup>
                <Button appearance="primary" block>Sign In</Button>
              </FormGroup>
              <FormGroup>
                <ButtonToolbar>
                  <Button appearance="link">Forgot password?</Button>
                  <Button appearance="link">Create an Account</Button>
                </ButtonToolbar>
              </FormGroup>
            </Form>
          </Panel>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </LoginContainer>
  );
};

export default memo(Login);
