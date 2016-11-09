const path = require('path')
const { exec } = require('./helpers')

const execFolder = process.cwd()
const changelogCLI = path.join(execFolder, 'node_modules', '.bin', 'changelog')

const release = (releaseType, changelogType) => exec(`npm run validate`) // eslint-disable-line no-unused-vars,max-len
  .then(() => exec(`"${changelogCLI}" ${changelogType}`))
  .then(() => exec(`git add CHANGELOG.md`))
  .then(() => exec(`git commit -m 'updated CHANGELOG.md'`))
  .then(() => exec(`npm version ${releaseType}`))
  .then(() => exec(`git push origin`))
  .then(() => exec(`git push origin --tags`))
  .then(() => exec(`npm publish`))

const major = () => release('major', '-M')
const minor = () => release('minor', '-m')
const patch = () => release('patch', '-p')

module.exports = { major, minor, patch }
