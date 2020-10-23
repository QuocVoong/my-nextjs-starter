import cookies from 'next-cookies'

export const getToken = (ctx) => {
  const { Authorization: token } = cookies(ctx);
  return token;
}
