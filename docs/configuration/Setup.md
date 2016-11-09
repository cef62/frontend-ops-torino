# Setup

After cloning the repository install all required dependencies:

```
$ npm install
```

Once `npm` deps are downloaded the project is ready to be used.

## Git hooks local configuration

The project define 2 git hooks:

* `pre-commit` (default: disabled) will run the linter before applying the commit
* `pre-push` (default: enabled) will run tests and linter before pushing to the remote origin

Both hooks can be enabled and/or disabled using a local, non-versioned, configuration.
To configure the hooks status it's been used [opt-cli](https://www.npmjs.com/package/opt-cli).

To enable the `pre-commit` hook is required a file named `.opt-in` containing the word `pre-commit`.

To disable the `pre-push` hook is required a file named `.opt-out` containing the word `pre-push`.

These 2 files are ignored by git and just local for the current project installation.


