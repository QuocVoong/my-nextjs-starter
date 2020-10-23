import Router from 'next/router'

export const redirect = (ctx, url) => {
  if (ctx && ctx.req) {
    ctx.res.writeHead(302, { Location: url, previousUrl: ctx.pathname })
    ctx.res.end()
  } else if (process.browser) {
    Router.push(url || '/')
  }
}
