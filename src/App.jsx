import { Navigate, Outlet } from "react-router-dom"
import { useUser } from "@clerk/clerk-react"
import Header from "./components/custom/header"

function App() {
  const {isSignedIn, isLoaded}= useUser()

  if(!isSignedIn && isLoaded){
    return <Navigate to={'auth/signin'}/>
  }
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default App
