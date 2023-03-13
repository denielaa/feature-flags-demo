---
to: src/pages/<%= h.inflection.camelize(page) %>/<%= h.inflection.camelize(name) %>/index.tsx
---
export { default } from './<%= h.inflection.camelize(name) %>'
