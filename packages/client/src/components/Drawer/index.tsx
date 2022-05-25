// HOOKS
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'
// TYPES
// STATE
import { selectDrawerOpen, drawerOpen } from '../../store/slices/ui'
// STYLES
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles'
// COMPONENTS
import MuiDrawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined'
import SetMealIcon from '@mui/icons-material/SetMeal'
import DateRangeIcon from '@mui/icons-material/DateRange'
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined'

const drawerWidth = 180
const pages = [
  {
    name: 'Home',
    path: '/',
    icon: 'CottageOutlinedIcon',
  },
  {
    name: 'Plans',
    path: '/plans',
    icon: 'DateRangeIcon',
  },
  {
    name: 'Meals',
    path: '/meals',
    icon: 'SetMealIcon',
  },
  {
    name: 'Recipes',
    path: '/recipes',
    icon: 'AssignmentOutlinedIcon',
  },
]

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
})

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}))

const SideDrawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}))

function Drawer() {
  const dispatch = useDispatch()
  const open = useSelector(selectDrawerOpen)
  const theme = useTheme()
  const location = useLocation()

  const handleDrawerClose = () => {
    dispatch(drawerOpen(false))
  }

  const chooseIcon = (name: string) => {
    switch (name) {
      case 'CottageOutlinedIcon':
        return <CottageOutlinedIcon />
      case 'SetMealIcon':
        return <SetMealIcon />
      case 'DateRangeIcon':
        return <DateRangeIcon />
      case 'AssignmentOutlinedIcon':
        return <AssignmentOutlinedIcon />
      default:
        return <CottageOutlinedIcon />
    }
  }

  const activeRoute = (routeName: string) => {
    return location.pathname === routeName ? true : false
  }

  const getLinkColor = (path: string) => {
    if (activeRoute(path)) {
      return theme.palette.grey[300]
    } else {
      return theme.palette.common.white
    }
  }

  return (
    <SideDrawer variant='permanent' open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {pages.map((prop, key) => {
          return (
            <NavLink to={prop.path} style={{ textDecoration: 'none' }} key={key}>
              <ListItem
                disablePadding
                sx={{
                  display: 'block',
                  backgroundColor: getLinkColor(prop.path),
                  color: theme.palette.grey[800],
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {chooseIcon(prop.icon)}
                  </ListItemIcon>
                  <ListItemText primary={prop.name} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            </NavLink>
          )
        })}
      </List>
    </SideDrawer>
  )
}

export default Drawer
