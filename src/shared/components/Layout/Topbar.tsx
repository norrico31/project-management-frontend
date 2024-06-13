import { Box, IconButton, useTheme } from '@mui/material'
import { useThemeCtx, tokens } from '../../contexts/Themes'
import InputBase from '@mui/material/InputBase'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import SearchIcon from '@mui/icons-material/Search'

export default function Topbar() {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const { toggleColorMode } = useThemeCtx()

    return (
        <Box display='flex' justifyContent='space-between' p={2}>
            <Box display='flex' borderRadius='3px' sx={{ backgroundColor: colors.primary[400] }}>
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder='Search...' />
                <IconButton type='button' sx={{ p: 1 }}>
                    <SearchIcon />
                </IconButton>
            </Box>
            <Box display='flex'>
                <IconButton onClick={toggleColorMode}>
                    {theme.palette.mode === 'dark' ? (
                        <DarkModeOutlinedIcon />
                    ) : (
                        <LightModeOutlinedIcon />
                    )}
                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton>
            </Box>
        </Box>
    )
}
