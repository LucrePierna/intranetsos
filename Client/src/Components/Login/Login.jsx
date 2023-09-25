import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    SignIn,
} from '@clerk/clerk-react'
import React from 'react';
import Landing from '../Landing/Landing'


export default function Login() {
    const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY

    return (
        <ClerkProvider publishableKey={clerkPubKey}>
            <SignedIn>
                <Landing />
            </SignedIn>
            <SignedOut>
                <SignIn />
            </SignedOut>
        </ClerkProvider>
    );
};

