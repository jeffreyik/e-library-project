import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Books from './pages/Books'
import Category from './pages/Category'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Book from './pages/Book'
import { useState } from 'react'
import { AuthProvider } from './context/AuthContext'
import VerifyEmail from './pages/VerifyEmail'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import PrivateRoute from './pages/PrivateRoute'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [timeActive, setTimeActive] = useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
     })
  }, [])

  return (
    <div className="App container">
      <BrowserRouter>
      <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
      <Routes>
            <Route path='/' element={
              <PrivateRoute>
                <Layout />
              </PrivateRoute>
            }>
              <Route index element={<Home />} />
              <Route path='/books' element={<Books />} />
              <Route path='/:bookid' element={<Book />} />
              <Route path='/category' element={<Category />} />
            </Route>
            <Route path='/login' element={
              !currentUser?.emailVerified ? <Login /> : <Navigate to='/' replace />
            } />
            <Route path='/sign-up' element={<Signup />} />
            <Route path='/verify-email' element={<VerifyEmail />} />
        </Routes>
      </AuthProvider>
        
      </BrowserRouter>
    </div>
  )
}

export default App
