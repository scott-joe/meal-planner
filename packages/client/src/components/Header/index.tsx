// HOOKS
import { useDispatch, useSelector } from 'react-redux'
// TYPES
// import { RootState } from '../../store'
// STATE
import { selectDrawerOpen, drawerOpen } from '../../store/slices/ui'
// STYLES
import { styled } from '@mui/material/styles'
// COMPONENTS
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'

const drawerWidth = 180

interface AppBarProps extends MuiAppBarProps {
  open: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

export default function Header() {
  const dispatch = useDispatch()
  const open = useSelector(selectDrawerOpen)

  const handleDrawerOpen = () => {
    dispatch(drawerOpen(true))
  }

  return (
    <AppBar position='fixed' open={open}>
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={handleDrawerOpen}
          edge='start'
          sx={{
            marginRight: 5,
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' noWrap component='div'>
          Meal Planner
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
