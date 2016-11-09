#!/usr/bin/env node

const { major, minor, patch } = require('./api/release')
const { echo, exit } = require('shelljs')
const {
  action
} = require('yargs').option('a', {
  alias: 'action',
  demand: true,
  requiresArg: true,
  describe: 'Type of action to execute ',
  choices: ['major', 'minor', 'patch'],
  type: 'string'
}).argv

const actions = new Map([
  ['major', () => major()],
  ['minor', () => minor()],
  ['patch', () => patch()]
])

if (!actions.has(action)) {
  echo(`The given action: [${action}] is not valid, see usage help.`)
  exit(1)
} else {
  actions.get(action)()
    .then(() => exit(0))
    .catch((err) => {
      echo(err)
      exit(1)
    })
}
