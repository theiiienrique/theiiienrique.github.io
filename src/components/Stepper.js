import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import StepConnector from '@mui/material/StepConnector';

export default function StepperComponent({ children }) {
  const steps = React.Children.toArray(children);

  return (
    <Box>
      <Stepper orientation="vertical" connector={<StepConnector />}>
        {steps.map((step, index) => (
          <Step key={index} active={true}>
            <StepLabel />
            <StepContent sx={{ marginTop: '-32px' }}>
              <Box sx={{ mb: 2 }}>
                {step}
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
