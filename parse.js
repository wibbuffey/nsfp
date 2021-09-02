function parse (array, registry) {
  const flags = []
  const other = []
  array.forEach((item, index) => {
    if (item.startsWith("--")) {
      flags.append(item.slice(2))
    } else if (item.startsWith("-")) {
      if (registry[item.slice(1)]) {
        flags.append(registry[item.slice(1)])
      } else {
        flags.append(item.slice(1))
      }
    } else {
      other.append(item)
    }
  })
  
  return flags, other;
}

// parse(process.argv.split(2), {"h": "help"})