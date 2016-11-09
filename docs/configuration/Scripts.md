# NPM Scripts

The project offers several commands via `npm scripts`.
To have a complete list of the available commands on the project root run `npm run info` and `npm run`.

Some command are meant to be invoked only from other commands here will be presented the command meant to be directly used by the user.


* `npm run test` It will execute once the test suite.
* `npm run lint` It will lint the source code and the tests
* `npm run validate` It will run the linter and the unit tests
* `npm run docs:watch` Run gitbook documentation in a local live server.
* `npm run docs:publish` Build gitbook documentation and publish it to github pages. **warning** this command will replace online documentation pushing to github.
* `npm run release:major` Bump the project version, create a git tag, update the changelog and **push all** in a new commit to github.
* `npm run release:minor` Bump the project version, create a git tag, update the changelog and **push all** in a new commit to github.
* `npm run release:patch` Bump the project version, create a git tag, update the changelog and **push all** in a new commit to github.
