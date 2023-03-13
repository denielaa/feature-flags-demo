---
to: src/pages/<%= h.inflection.camelize(page) %>/<%= h.inflection.camelize(name) %>/<%= h.inflection.camelize(name) %>.tsx
---
import { FC } from 'react'

const <%= h.inflection.camelize(name) %> = () => {
  return <div>new components</div>
}

export default <%= h.inflection.camelize(name) %>
