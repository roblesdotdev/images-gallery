export async function request<TResponse>(
  url: string,
  config: RequestInit = {},
): Promise<TResponse> {
  const response = await fetch(url, config)
  if (response.ok) {
    const data = await response.json()
    return data as TResponse
  }
  return Promise.reject('Error to fetch')
}
