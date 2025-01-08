import { createTheme, ThemeProvider, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowCases from '@/app/components/ArrowCases';
import React from 'react';

interface FaqPartProps {
  id: number;
  title: string;
  description: string;
  expandedId: number | false;
  onAccordionChange: (itemId: number) => void;
}

const theme = createTheme({
  typography: { fontFamily: 'Poppins, Poppins Fallback' },
});

const FaqPart: React.FC<FaqPartProps> = ({
  title,
  description,
  id,
  expandedId,
  onAccordionChange,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Accordion
        expanded={expandedId === id}
        onChange={() => onAccordionChange(id)}
        sx={{
          '&.MuiTypography-root': {
            fontFamily: "'Poppins', 'Poppins Fallback'",
          },
          width: '100%',
          backgroundColor: 'transparent',
          boxShadow: 'none',
          '::before': {
            display: 'none',
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ArrowCases className={'scale-75'} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            '&.MuiTypography-root': {
              fontFamily: "'Poppins', 'Poppins Fallback'",
            },
          }}
        >
          <Typography
            component="span"
            className="text-xl w-[330px] text-white font-medium"
          >
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-base text-white max-w-[85%]">
            {description}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </ThemeProvider>
  );
};

export default FaqPart;
