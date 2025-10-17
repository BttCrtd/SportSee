import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Profile from './pages/Profile'
import HorizontalNav from './components/horizontalNav'
import GlobalStyle from './utils/style/GlobalStyle'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <GlobalStyle />
      <HorizontalNav />
      <Routes>
        <Route path="/*" element={<Profile />} />
      </Routes>
    </Router>
  </StrictMode>
)
