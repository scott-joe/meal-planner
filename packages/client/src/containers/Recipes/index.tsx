import { useEffect, useState } from 'react'
// import { shallowEqual, useDispatch } from 'react-redux'
// import { useSelector } from 'react-redux'
// import { selectRecipeList, updateList } from '../../store/slices/recipes'

type Props = {
  myProp?: string
}

export default function Recipes({ myProp }: Props) {
  // const dispatch = useDispatch()
  // dispatch(updateList())
  // const recipeList = useSelector(selectRecipeList, shallowEqual)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:3001/recipes`)
        if (!response.ok) throw new Error(`This is an HTTP error: The status is ${response.status}`)
        const actualData = await response.json()
        setData(actualData)
        setError(null)
      } catch (err: unknown) {
        setError(err)
        setData([])
      } finally {
        setLoading(false)
      }
    }

    getData()
  }, [])

  return (
    <>
      <h1>Recipes</h1>
      {loading && <div>A moment please...</div>}
      {error && <div>{`There is a problem fetching the post data - ${error}`}</div>}
      <ul>
        {data &&
          data.map(({ id, name }) => (
            <li key={id}>
              <h3>{name}</h3>
            </li>
          ))}
      </ul>
    </>
  )
}
