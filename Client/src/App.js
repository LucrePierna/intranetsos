import './App.css'
import { ClerkProvider } from '@clerk/clerk-react'
import Login from './Components/Login/Login'

function App () {
  const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY

  return (
    <div className='App'>
      <ClerkProvider publishableKey={clerkPubKey}>
        <Login />
      </ClerkProvider>
    </div>
  )
}

export default App
