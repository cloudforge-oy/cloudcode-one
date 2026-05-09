// Coexistence shim: CLOUDCODE_<X> env vars take precedence over OPENCODE_<X>.
// Runs as a side-effect import before any other module reads process.env.
for (const key of Object.keys(process.env)) {
  if (!key.startsWith("CLOUDCODE_")) continue
  const opencodeKey = "OPENCODE_" + key.slice("CLOUDCODE_".length)
  const value = process.env[key]
  if (value !== undefined) process.env[opencodeKey] = value
}
