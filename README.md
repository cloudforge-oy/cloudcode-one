<p align="center">
  <a href="https://cloudcode.one">
    <strong>cloudcode</strong>
  </a>
</p>
<p align="center">AI coding agent for the terminal — a fork of <a href="https://github.com/anomalyco/opencode">opencode</a>.</p>
<p align="center">
  <a href="https://www.npmjs.com/package/cloudcode"><img alt="npm" src="https://img.shields.io/npm/v/cloudcode?style=flat-square" /></a>
</p>

---

### Installation

```bash
# YOLO
curl -fsSL https://cloudcode.one/install | bash

# Package managers
npm i -g cloudcode@latest          # or bun/pnpm/yarn
nix run github:cloudcode-one/cloudcode
```

#### Installation directory

The install script writes the binary to `$HOME/.cloudcode/bin/cloudcode` by default.

### Agents

cloudcode includes two built-in agents you can switch between with the `Tab` key.

- **build** — Default, full-access agent for development work
- **plan** — Read-only agent for analysis and code exploration
  - Denies file edits by default
  - Asks permission before running bash commands
  - Ideal for exploring unfamiliar codebases or planning changes

Also included is a **general** subagent for complex searches and multistep tasks. Invoke it with `@general` in messages.

### Documentation

For setup and configuration, see [https://cloudcode.one/docs](https://cloudcode.one/docs).

### Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) before submitting a pull request.

### Upstream

cloudcode is forked from [opencode](https://github.com/anomalyco/opencode). The internal `@opencode-ai/*` workspace package scope is preserved to keep upstream merges tractable.

### License

MIT — see [LICENSE](./LICENSE).
