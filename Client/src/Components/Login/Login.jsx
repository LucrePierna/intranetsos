import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    UserButton,
    useUser,
    RedirectToSignIn,
} from "@clerk/clerk-react";

export default function Login() {
    if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
        throw "Missing Publishable Key"
    }

    const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

    return (
        <ClerkProvider publishableKey={clerkPubKey}>
            <SignedIn>
                <h1>Bienvenidos a Intranet Operaciones</h1>
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </ClerkProvider>
    )
}
