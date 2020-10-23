export const enumKeys = (enums) => Object.keys(enums).reduce((a, b) => ({ ...a, [enums[b]]: enums[b] }), {})

export const objectKeys = (obj) => Object.keys(obj).reduce((a, b) => ({ ...a, [b]: b }), {})

export const buildInfo = ({ name, version, linkUI, status, type, author, created, updated }) => `
  [${name} UI/UX Guidelines - ${version}](${linkUI})

  Status: **${status}**

  Type: **${type}**

  Author: **${author}**

  Created: **${created}**

  Updated: **${updated}**
`
