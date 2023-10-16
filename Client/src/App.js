import './App.css'
import { ClerkProvider } from '@clerk/clerk-react'
import Login from './Components/Login/Login'

const REACT_APP_CLERK_PUBLISHABLE_KEY= 'pk_test_dW5pdGVkLWNveW90ZS03Ni5jbGVyay5hY2NvdW50cy5kZXYk'

function App () {
 const clerKey = REACT_APP_CLERK_PUBLISHABLE_KEY 

  return (
    <div className='App'>
      <ClerkProvider publishableKey={clerKey}>
        <Login />
      </ClerkProvider>
    </div>
  )
}

export default App
