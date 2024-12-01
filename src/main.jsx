import './index.css'
import App from './app.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <App />
    </LocalizationProvider>
  </StrictMode>
)
