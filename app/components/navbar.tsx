import { auth, signIn, signOut } from '@/auth'
import { redirect } from 'next/dist/server/api-utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function Navbar (){
   const session =await auth()
  return (
   <header className='flex justify-between px-5 py-3 bg-white'>
      <nav className='flex justify-between items-center'>
         <Link href='/'><Image src='/logo.png' alt='logo' width={144} height={30}/></Link>
      </nav>
      <div className='flex'>
         {session && session?.user ?
            <div className='gap-4'>
               <Link href='/'> <span>Create</span></Link>
               <form action={async ()=>{
                  'use server'
                  await signOut({ redirectTo: '/' })}}> <span>Logout</span></form>
               <Link href={`/user/${session?.user?.id}`}> <span>{session?.user?.name}</span></Link>
            </div>
         :
         <div className='text-black flex'>
            <form action={async ()=>{
               'use server'
               await signIn('github')}}>
               <button type='submit'><span>Login</span></button>
            </form>
         </div>}
      </div>
   </header>
  )
}

export default Navbar
