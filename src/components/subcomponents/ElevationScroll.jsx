import { useScrollTrigger } from '@mui/material';
import { cloneElement } from 'react'

export const ElevationScroll = ({ children }) => {

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 1,
    //   target: window ? window() : undefined,
    });
  
    return cloneElement(children, {
          elevation: trigger ? 4 : 0,
        });
  }
