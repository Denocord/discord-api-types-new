# Contributing to discord-api-types
Thank you for your interest in contributing to discord-api-types. We have some rules set in order to keep the code as clean as possible. Some of these rules are enforced automatically using [GitHub Actions](https://github.com/features/actions). 

## Code style
We use Deno's native tools to format the code. In order to lint the code, run `deno fmt .` and `deno lint --unstable .`.

## Adding/modifying typings
We **do not** accept contributions to non-high-level typings - they're suited better for our [upstream], discordjs/discord-api-types.

Before adding/modifying typings, please check whether a [pull request](https://github.com/Denocord/discord-api-types/pulls) is already present for this feature.  
When adding new typings, please check whether the typings you'd like to work on aren't already worked on. If they aren't worked on, it is recommended to consult them with us on [Discord](https://discord.gg/gS757SV).


[upstream]: https://github.com/discordjs/discord-api-types