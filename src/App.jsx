//Styles
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

//Libraries
import { useDispatch } from 'react-redux'
import { HashRouter, Route, Routes } from 'react-router-dom'

//Slices
import { setUser } from './store/slices/user.slice'

//Pages imports
import { Home, Login, CreateUser, User, UserPurchases, ProductDetails } from './pages'

//Components imports
import {Footer, Header, ProtectedRoutes} from './components'

function App() {

  const dispatch = useDispatch()

  dispatch(setUser(JSON.parse(window.localStorage.getItem('user'))))

  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<CreateUser />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/user' element={<User />} />
            <Route path='/purchases' element={<UserPurchases />} />
          </Route>
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App
