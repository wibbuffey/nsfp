function parse (array, registry) {
  const flags = []
  const other = []
  array.forEach((item, index) => {
    if (item.startsWith("--")) {
      flags.bind(item.slice(2))
    } else if (item.startsWith("-")) {
      if (registry[item.slice(1)]) {
        flags.bind(registry[item.slice(1)])
      } else {
        flags.bind(item.slice(1))
      }
    } else {
      other.bind(item)
    }
  })
  
  return flags, other;
}

// parse(process.argv.split(2), {"h": "help"})