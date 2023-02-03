import { Box, Step, StepLabel, Stepper, Typography } from '@mui/material'

type TProps = {
  step: number
  steps: number
}

export const StepperEnterData = ({ step, steps }: TProps) => {
  return (
    <Typography
      variant="body2"
      sx={{
        marginLeft: 'auto',
      }}
    >
      {step}/{steps}
    </Typography>
  )
}
