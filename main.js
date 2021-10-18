module.exports = (a, r) => {
  f = [], o = [];
  a.map(e => {
    b = e.slice.bind(e);
    c = b(1);
    g = f.push.bind(f);
    h = e.startsWith.bind(e);
    h("--") ? (
      () => g(b(2))
    )() : (() => {
      h("-") ? (() => {
        d = r[c];
        d ? g(d) : g(c)
      })() : o.push(e)
    })()
  });
  return [f, o]
}
