# Exercise 23 - Speech Synthesis

Explore the speechSynthesis of the Web Speech API

## About this exercise ...

:laughing: :laughing: :laughing:

Haha, what a fun exercise. Not a lot to mention however, it's worth making note
that since starting this challenge I have learn't some really useful tid-bits.

Most useful is perhaps the chaining together of the Array method to write
elegant solutions, such as:

```
this._voicesDropdown.innerHTML += this._voices
	.filter((voice: SpeechSynthesisVoice): boolean =>
		voice.lang.includes('en'))
	.map((voice: SpeechSynthesisVoice): string =>
		`<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
	.join('');
```

:diamonds: :diamonds: :diamonds:

## Tooling

Serve:

`npm run exercise-23`

Build:

`npm build exercise-23`
