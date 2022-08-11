import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/system';


export default function WhiskeyEducation() {
  return (
    <Box className="question-card"
    sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2)',
        gap: 2,
      }}
    >
      <Accordion
      sx={{
        width: "100%",
        margin: 2,
        gridRow: 1,
        gridColumn: 1 / 2,
      }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Scotch</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The legal stuff - Scotch must be distilled, aged, and botled in Scotland.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
      sx={{
        width: 500,
        margin: 2,
      }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Irish Whiskey</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The legal stuff - Irish whiskey must be distilled and aged in Ireland.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
      sx={{
        width: 500,
        margin: 2,
        gridRow: 1,
        gridColumn: 1 / 2,
      }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Scotch</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The legal stuff - Scotch must be distilled, aged, and botled in Scotland.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
      sx={{
        width: 500,
        margin: 2,
      }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Irish Whiskey</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The legal stuff - Irish whiskey must be distilled and aged in Ireland.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
      sx={{
        width: 500,
        margin: 2,
      }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Scotch</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The legal stuff - Scotch must be distilled, aged, and botled in Scotland.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
      sx={{
        width: 500,
        margin: 2,
      }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Irish Whiskey</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The legal stuff - Irish whiskey must be distilled and aged in Ireland.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
      sx={{
        width: 500,
        margin: 2,
      }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Scotch</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The legal stuff - Scotch must be distilled, aged, and botled in Scotland.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
      sx={{
        width: 500,
        margin: 2,
      }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Irish Whiskey</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The legal stuff - Irish whiskey must be distilled and aged in Ireland.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

