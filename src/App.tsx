import { useFetchReducer } from "./hooks/useFetchReducer"
const url = "https://jsonplaceholder.typicode.com/todos/1"
const url2 = "https://jsonplaceholder.typicode.com/users"
function App() {
  const { loading, data, error } = useFetchReducer(url2)

  if (loading) {
    return <>Loading ...</>
  }
  if (error != null) {
    return <>{`Error ${error.message}`}</>
  }

  return (
    <>
      <>{JSON.stringify(data)}</>
    </>
  )
}

export default App
