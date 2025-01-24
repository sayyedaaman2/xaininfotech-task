import Layout from "./components/Layout"
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from "./pages/Home"
import LoginPage from "./pages/Login"
import SignUpPage from "./pages/SignUp"
import Payment from "./pages/PaymentGateWay"
function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route element={<Layout/>}>
              <Route index element={<Home />} />
              <Route path="login" element={<LoginPage/>}/>
              <Route path="sign-up" element={<SignUpPage/>}/>
              <Route path="payment" element={<Payment/>}/>
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
