import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NewsService from '../modules/NewsService'
import { Input, Button } from 'semantic-ui-react'

const NewsSearch = () => {
  const [query, setQuery] = useState('')
  const { searchQuery, countryCode } = useSelector(state => state)
  const dispatch = useDispatch()
  useEffect(() => NewsService.index(dispatch), [])
  useEffect(() => NewsService.index(dispatch), [searchQuery])
  useEffect(() => NewsService.index(countryCode), [])
  useEffect(() => NewsService.index(countryCode), [searchQuery, countryCode])

  return (
    <Input
      action = {<Button
        type='submit'
        onClick={()=> NewsService.search(query)}
        >Search</Button>}
      data-cy="search-input"
      onChange={(event, data)=> setQuery(data.value)}
      placeholder='Search...' >
    </Input>
  )
}

export default NewsSearch
