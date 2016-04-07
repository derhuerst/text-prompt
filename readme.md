# text-prompt 💯

**A CLI prompt for text.**

todo: asciicast

[![npm version](https://img.shields.io/npm/v/text-prompt.svg)](https://www.npmjs.com/package/text-prompt)
[![dependency status](https://img.shields.io/david/derhuerst/text-prompt.svg)](https://david-dm.org/derhuerst/text-prompt)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/text-prompt.svg)

*text-prompt* uses [*cli-styles*](https://github.com/derhuerst/cli-styles) and [*prompt-skeleton*](https://github.com/derhuerst/prompt-skeleton) to have a look & feel consistent with [other prompts](https://github.com/derhuerst/prompt-skeleton#prompts-using-prompt-skeleton).


## Installing

```shell
npm install text-prompt
```


## Usage

```javascript
const textPrompt = require('text-prompt')
textPrompt('What is your name?')
.on('data', (e) => console.log('Interim value', e.value))
.on('submit', (v) => console.log('Submitted with', v))
.on('abort', (v) => console.log('Aborted with', v))
```


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/text-prompt/issues).
