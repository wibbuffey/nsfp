function parse (array, registry) {
  const flags = []
  const other = []
  array.forEach((item, index) => {
    if (item.startsWith("--")) {
      flags.push(item.slice(2))
    } else if (item.startsWith("-")) {
      if (registry[item.slice(1)]) {
        flags.push(registry[item.slice(1)])
      } else {
        flags.push(item.slice(1))
      }
    } else {
      other.push(item)
    }
  })
  
  return flags, other;
}

// parse(process.argv.split(2), {"h": "help"})