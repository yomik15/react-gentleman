import { useEffect, useState } from "react"

type Data<T> = T | null
type ErrorT = Error | null

interface Response<T> {
  data: Data<T>
  loading: boolean
  error: ErrorT
}

export const useFetch = <T>(url: string): Response<T> => {
  const [data, setData] = useState<Data<T>>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<ErrorT>(null)

  useEffect(() => {
    const abortController = new AbortController()
    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal: abortController.signal })

        if (!response.ok) throw new Error(`Error status ${response.status}`)

        const jsonData: T = await response.json()

        setData(jsonData)
      } catch (error) {
        if (abortController.signal.aborted) return
        // if((error as Error).name ==='AbortError')return
        setError(error as Error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
    // cleanup: abort previous fetch when url changes or component unmount
    return () => {
      console.log(
        "handle abort fetch when url changes or component unmount(nav other tabs/views)",
      )
      abortController.abort()
    }
  }, [url])

  return { data, loading, error }
}
