This is a fork of [The Lounge](https://github.com/thelounge/lounge) meant to be used with [Cozy Cloud](https://cozy.io).

This repo should stay as close as possible to upstream — the actual Cozy Cloud application layer can be found [here](https://github.com/y-lohse/cozy-thelounge).

There are currently only two divergences with upstream:

- [d64c96f](https://github.com/y-lohse/lounge/commit/d64c96faeb468cdbc3b3c0153ae1535a367bd4f8) allows a config-specified user to auto-login.
- [661f705](https://github.com/y-lohse/lounge/commit/661f7056ddae857787fa61034e441f7510ba1b95) makes the package play nice with the cozy installation process. Since this package is installed via github instead of npm, the prepublish scripts don't run and some files are missing without this commit.