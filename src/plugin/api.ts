import { $fetch } from 'ofetch'

import { useStore } from '~/store'

export const FetchMethod = {
  GET: 'GET',
  POST: 'POST',
  PATCH: 'PATCH',
  PUT: 'PUT',
  DELETE: 'DELETE',
} as const

type FetchMethodType = keyof typeof FetchMethod

type FetchConfig = {
  method?: FetchMethodType
  body?: Record<string, string> | File
  query?: Record<string, string>
  headers?: Record<string, string>
  useToken?: boolean
}

const FETCH_TIMEOUT = 10_000

const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000'

const buildFetchUrl = (url: string): string => {
  return new URL(url, `${baseUrl}`).toString()
}

export const fetcher = async <T>(url: string, options: FetchConfig = {}): Promise<ReturnType<typeof $fetch<T>>> => {
  const usedOptions = { ...options, timeout: FETCH_TIMEOUT }

  if (options.useToken !== false) {
    const store = useStore()

    const token = store.$state.token
    if (token != null) {
      usedOptions.headers = { ...usedOptions.headers, authorization: token }
    }
  }

  if (options.body && options.body instanceof File) {
    const file = options.body as File
    usedOptions.headers = { ...usedOptions.headers, 'content-type': file.type }
  }

  return await $fetch<T>(buildFetchUrl(url), {
    method: usedOptions.method,
    body: usedOptions.body,
    query: usedOptions.query,
    headers: usedOptions.headers,
  })
}

export const useFetcher = () => fetcher
