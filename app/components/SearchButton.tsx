'use client'
import React from 'react'

function SearchButton() {

   const reset=()=> {
      let form = document.querySelector('.search-form') as HTMLFormElement;
      {form && form.reset()}
   }
  return (
   <div className='text-white flex gap-2'>
         <button className='search-btn' onClick={reset}>X</button>
         <button className='search-btn'>S</button>
    </div>
  )
}

export default SearchButton
