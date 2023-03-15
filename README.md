# Feature Flags Demo

This project is to showcase implementation of Feature Flags using react library and Unleash.

## Stacks

- React + Typescript
- Daisy UI + Tailwindcss
- Vite
- PNPM

## Unleash Demo

This is a hosted demo officially from Unleash for anyone to play around and access the API. https://app.unleash-hosted.com/demo

You only need to register an email address. For this specific project, search a project named [FF Demo Alchemy](https://app.unleash-hosted.com/demo/projects/ff-alchemy)

This project equipped with:

- Linter
- Prettier
- Husky with Precommit
- Command generator to generate Page and component

# Setup

### Install dependencies

```bash
pnpm install
```

### Run and serve local dev

```bash
pnpm dev
```

### Analyze build size

```bash
pnpm analyze
```

# Generator

This project has several command generators to automatically create a new component or a page. Built with [Hygen](https://hygen.io/)

### Issues

Make sure you remove and reinstall hygen.

```bash
pnpm remove hygen
// then reinstall
pnpm install hygen
```

### Create new shared component

```bash
npx hygen shared-component new ComponentName
```

### Create new page component

```bash
npx hygen page-component new --page PageName --name ComponentName
```

### Create a new Page

```bash
npx hygen page new PageName
```
