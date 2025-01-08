import { Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowCases from '@/app/components/ArrowCases';

interface FaqPartProps {
  id: number;
  title: string;
  description: string;
  expandedId: number | false;
  onAccordionChange: (itemId: number) => void;
}

const FaqPart: React.FC<FaqPartProps> = ({ title, description, id, expandedId, onAccordionChange }) => {
  return (
    <div>
      <Accordion
        expanded={expandedId === id}
        onChange={() => onAccordionChange(id)}
        sx={{
          width: '100%',
          backgroundColor: 'transparent',
          boxShadow: 'none',
          '::before': {
            display: 'none',
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ArrowCases />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
            component="span"
            className="text-xl w-[330px] text-white font-medium"
          >
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-base text-white">
            {description}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FaqPart;
