import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import PublicLayout from "@/layouts/public-layout"
import AuthenticationLayout from "@/layouts/auth-layout"

import HomePage from "@/routes/HomePage"
import SignInPage from "@/routes/sign-in"
import SignUpPage from "@/routes/sign-up"
import ProtectedRoutes from "@/layouts/protected-routes"
import MainLayout from "@/layouts/main-layout"


const App = () => {
  return (
    <Router>
      <Routes>
         {/*public routes  */}
         {/* default */}
         <Route element={<PublicLayout/>}>
         <Route index element={<HomePage/>}/>
         </Route>

         {/* authemtication layout */}
         <Route element={<AuthenticationLayout/>}>
         <Route path="/signin/*" element={<SignInPage/>}/>
         <Route path="/signup/*" element={<SignUpPage/>}/>
         </Route>

         {/* protected routes */}
         <Route element={<ProtectedRoutes><MainLayout/></ProtectedRoutes>}>

         {/* add all the protect routes */}

         </Route>
      </Routes>
    </Router>
  )
}

export default App