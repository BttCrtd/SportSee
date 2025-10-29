import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profil from './pages/Profil'
import Seting from './pages/Seting'
import Community from './pages/Community'
import Layout from './components/Layout/Layout'
import GlobalStyle from './utils/style/GlobalStyle'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/réglage" element={<Seting />} />
          <Route path="/communauté" element={<Community />} />
        </Routes>
      </Layout>
    </Router>
  </StrictMode>
)
