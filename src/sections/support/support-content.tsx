import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

// ----------------------------------------------------------------------

type Props = {
  contents: {
    id: string;
    question: string;
    answer: string;
  }[];
};

export function SupportContent({ contents }: Props) {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChangeExpanded = useCallback(
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    },
    []
  );

  return (
    <div>
      {contents.map((item) => (
        <Accordion
          key={item.id}
          expanded={expanded === item.question}
          onChange={handleChangeExpanded(item.question)}
          disableGutters
          sx={{ py: 0.5 }}
        >
          <AccordionSummary>
            <Box component="span" sx={{ typography: 'subtitle1' }}>
              {item.question}
            </Box>
          </AccordionSummary>
          <AccordionDetails sx={{ color: 'text.secondary' }}>{item.answer}</AccordionDetails>
        </Accordion>
      ))}
      <Divider />
    </div>
  );
}
