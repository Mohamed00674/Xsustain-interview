import React from "react"
import { Box,Typography } from "@mui/material"
const Footer :React.FC = () => {
    return (
            <Box
        sx={{
          backgroundColor: '#1976d2',
          color: 'white',
          py: 3,
          mt: 6,
          textAlign: 'center',
        }}
      >
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Items Management System. All rights reserved.
        </Typography>
      </Box>
  )
}

export default Footer