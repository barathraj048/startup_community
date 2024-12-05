import React from 'react'
import Form from 'next/form'
import SearchButton from './SearchButton'
function SearchForm({query}:{
   query ?: string
}) {
   let search=query
  return (
   <Form action='/' scroll={false} className='search-form justify-between'>
      <input type="input" placeholder='Search For Startup' className='search-inputs focus:outline-none focus:border-transparent focus:bg-white w-full' name='search' defaultValue={search}/>
      
      <SearchButton/>
      
   </Form>
  )
}

export default SearchForm
