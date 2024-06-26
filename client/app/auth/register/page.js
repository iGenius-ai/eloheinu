import SignUp from '@/components/auth/SignUp'
import PropNavbar from '@/components/property/PropNavbar'
import React from 'react'

export const metadata = {
  title: 'Eloheinu - Create Account',
  description: 'Generated by create next app',
}

const Register = () => {
  return (
    <>
      <PropNavbar />
      <SignUp />
    </>
  )
}

export default Register