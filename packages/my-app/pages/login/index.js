import React, { memo }              from 'react';
import { get }                      from 'lodash';
import { useRouter }                from 'next/router';
import Link                         from 'next/link';
import RPanel                       from 'rsuite/lib/Panel';
import Form                         from 'rsuite/lib/Form';
import RButtonToolbar               from 'rsuite/lib/ButtonToolbar';
import Button                       from 'rsuite/lib/Button';
import styled                       from 'styled-components';
import IconLogo                     from 'assets/logo.svg';
import { Form as FinalForm, Field } from 'react-final-form';
import { InputField }               from 'components/FormField';
import { getToken }                 from 'utils/auth';
import { redirect }                 from 'utils/nav';
import { required }                 from 'utils/validation';
import { Grid, GridItem }                 from 'ui-components';

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
  a {
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
  const router = useRouter();

  const redirectUrl = get(router, 'query.redirectUrl') || '/';

  const handleLogin = () => {

  };

  return (
    <LoginContainer>
      <Grid justify="center" classname="sm-3">
        <GridItem>
          <Panel header={<div>
            <img src={IconLogo} alt=""/>
            <h1>ez-POS</h1>
          </div>}>
            <FinalForm
              onSubmit={handleLogin}
              render={({ submitting, handleSubmit, submitError }) => (
                <Form>
                  <Grid gridRowGap={6}>
                    <Field
                      name="username"
                      autoFocus={true}
                      component={InputField}
                      layout="vertical"
                      inputSize="large"
                      placeholder='Email'
                      validate={required}
                      required
                    />
                    <Field
                      name="password"
                      component={InputField}
                      layout="vertical"
                      inputSize="large"
                      type='password'
                      placeholder='Password'
                      validate={required}
                    />
                    <Button appearance="primary" block>Sign In</Button>
                      <ButtonToolbar>
                        <Link href='/forgot_password'>Forgot password?</Link>
                        <Link href='/signup'>Create an Account</Link>
                      </ButtonToolbar>
                  </Grid>

                  {submitError && (
                    <Text color="red">{submitError && t(submitError)}</Text>
                  )}
                </Form>
              )}
            >
            </FinalForm>
          </Panel>
        </GridItem>
      </Grid>
    </LoginContainer>
  );
};

Login.getInitialProps = (ctx) => {
  const token       = getToken(ctx);
  const redirectUrl = get(ctx, 'query.redirectUrl');

  if (token) {
    redirect(ctx, redirectUrl || 'dashboard');
  }

  return {};
};

export default memo(Login);
