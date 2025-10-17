import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Profile from './pages/Profile'
import Layout from './components/Layout/Layout'
import GlobalStyle from './utils/style/GlobalStyle'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/*" element={<Profile />} />
        </Routes>
      </Layout>
    </Router>
  </StrictMode>
)
