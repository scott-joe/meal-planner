import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// STYLING
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
// CONTAINERS
import Home from './containers/Home'
import Plans from './containers/Plans'
import Meals from './containers/Meals'
import Recipes from './containers/Recipes'
// COMPONENTS
import Header from './components/Header'
import Drawer from './components/Drawer'

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}))

export default function App() {
  return (
    <div className='App'>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header />
        <Router>
          <Drawer />
          <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <Routes>
              <Route index element={<Home />} />
              <Route path='plans' element={<Plans />} />
              <Route path='meals' element={<Meals />} />
              <Route path='recipes' element={<Recipes />} />
            </Routes>
          </Box>
        </Router>
      </Box>
    </div>
  )
}
