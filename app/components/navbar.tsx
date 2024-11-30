import { auth, signIn, signOut } from '@/auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function Navbar (){
   const session =await auth()
  return (
   <header className='flex justify-between px-5 py-2 bg-white'>
      <nav className='flex justify-between items-center'>
         <Link href='/'><Image src='/logo.png' alt='logo' width={144} height={30}/></Link>
      </nav>
      <div className='flex'>
         {session && session?.user ?
            <div className='gap-4 text-black flex font-semibold'>
               <Link href='/'> 
               <span className='text-primary' 
               >Create</span></Link>
               <form action={async ()=>{
                  'use server'
                  await signOut({ redirectTo: '/' })}}> 
                  <button className='text-pink'>Logout</button></form>
               <Link href={`/user/${session?.user?.id}`}> <span>{session?.user?.name}</span></Link>
            </div>
         :
         <div className='text-black flex'>
            <form action={async ()=>{
               'use server'
               await signIn('google')}}>
               <button type='submit'><span>Login</span></button>
            </form>
         </div>}
      </div>
   </header>
  )
}

export default Navbar
