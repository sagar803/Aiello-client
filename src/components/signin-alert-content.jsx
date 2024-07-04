import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "../components/ui/alert-dialog"
import SignInGoogle from './SignInGoogle'

const SigninAlertContent = ({children}) => {
  return (
    <AlertDialog>
        <AlertDialogTrigger>
            {children}
        </AlertDialogTrigger>
        <AlertDialogContent className='bg-white'>
            <AlertDialogHeader>
                <AlertDialogTitle>You need to sign in first</AlertDialogTitle>
                <AlertDialogDescription>
                    Please sign in with using you goole account to continue.
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel className='border-0 rounded-xl hover:bg-gray-200'>Cancel</AlertDialogCancel>
                <AlertDialogAction className='hover:bg-gray-200 p-0'><SignInGoogle /></AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
  )
}

export default SigninAlertContent