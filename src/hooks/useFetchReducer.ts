import React, { useEffect, useReducer, useState } from "react"

type Data<T> = T | null
type ErrorT = Error | null

interface State<T> {
  data: Data<T>
  loading: boolean
  error: ErrorT
}
type Action<T> =
  | { type: "startFetch" }
  | { type: "successFetch"; payload: { data: Data<T> } }
  | { type: "errorFetch"; payload: { error: ErrorT } }

function reducer<T>(prevState: State<T>, action: Action<T>) {
  switch (action.type) {
    case "startFetch":
      return {
        loading: true,
        error: null,
        data: null,
      }
    case "errorFetch":
      return {
        loading: false,
        data: null,
        error: action.payload.error,
      }
    case "successFetch":
      return {
        loading: false,
        error: null,
        data: action.payload.data,
      }
    default:
      return prevState
  }
}

const initialState = {
  loading: false,
  error: null,
  data: null,
} // function useReducer<S, A extends AnyActionArg>(
//     reducer: (prevState: S, ...args: A) => S,
//     initialState: S,
// ): [S, ActionDispatch<A>];
export const useFetchReducer = <T>(url: string): State<T> => {
  const [state, dispatch] = useReducer(reducer<T>, initialState)

  // const [data, setData] = useState<Data<T>>(null)
  // const [loading, setLoading] = useState(true)
  // const [error, setError] = useState<ErrorT>(null)

  useEffect(() => {
    dispatch({ type: "startFetch" })
    const abortController = new AbortController()
    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal: abortController.signal })

        // fetch NO lanza errores para HTTP status
        // Debes verificar manualmente
        if (!response.ok) throw new Error(`Error status ${response.status}`)

        const jsonData: T = await response.json()

        // setData(jsonData)
        dispatch({ type: "successFetch", payload: { data: jsonData } })
      } catch (error) {
        // if(abortController.signal.aborted) return
        if (error instanceof DOMException && error.name === "AbortError") return

        // network internet type errros
        if (error instanceof TypeError) {
          dispatch({
            type: "errorFetch",
            payload: {
              error: new Error("Network error: check internet connections"),
            },
          })
          return
        }
        // !response.ok httpStatus error
        dispatch({ type: "errorFetch", payload: { error: error as Error } })
      } // finally {
      //  setLoading(false)
      // }
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

  // return { data, loading, error }
  return state
}
