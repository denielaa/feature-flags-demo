---
to: src/pages/<%= h.inflection.camelize(name) %>//<%= h.inflection.camelize(name) %>.tsx
---
const <%= h.inflection.camelize(name) %> = () => {
  return <div>new page</div>
}

export default <%= h.inflection.camelize(name) %>
