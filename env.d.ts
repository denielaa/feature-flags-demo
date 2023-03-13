interface ImportMetaEnv {
  readonly VITE_BASE_API_URL?: string
  readonly VITE_CONTRACT_ADDRESS?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
