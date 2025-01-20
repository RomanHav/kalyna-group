import { createTheme, ThemeProvider, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Image from 'next/image';
import { IoIosArrowForward } from 'react-icons/io';

interface CareerFaqPartProps {
  id: number;
  title: string;
  description: string;
  expandedId: number | false;
  onAccordionChange: (itemId: number) => void;
}

const theme = createTheme({
  typography: { fontFamily: 'Poppins, Poppins Fallback' },
});

const CareerFaqPart: React.FC<CareerFaqPartProps> = ({
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
          expandIcon={<IoIosArrowForward size={32} color="#38EF7D" />}
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
            className="md:text-lg lg:text-xl text-white !font-medium"
          >
            <div className="flex gap-4 uppercase items-center">
              <Image
                src={'/question.svg'}
                alt="Person Question Image"
                width={40}
                height={40}
              />
              {title}
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-base tracking-wider uppercase text-white md:w-full lg:max-w-[85%]">
            {description}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </ThemeProvider>
  );
};

export default CareerFaqPart;
