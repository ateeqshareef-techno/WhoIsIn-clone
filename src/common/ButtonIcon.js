import { IconButton } from '@mui/material'
import React from 'react'

const ButtonIcon = ({
    size,
    color,
    IconName,
    hoverColor,
    action,
}) => {
  return (
    <IconButton  size={size} sx={{
        color:color,
        ":hover" : {
          color:hoverColor
        }

    }}
    onClick={action}
    >
        <IconName/>
    </IconButton>
  )
}

export default ButtonIcon