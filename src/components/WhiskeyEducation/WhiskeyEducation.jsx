import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { Box } from '@mui/system';


export default function WhiskeyEducation() {
  return (
    <div className="question-card"
    sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2)',
        gap: 2,
      }}
    >
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
            Unique note - Ireland is home to Single Pot Still whiskey, a whiskey produced in a pot still using both malted barley
            and unmalted barley. The practice began when the British Crown increased taxes on malted barley. Irish distillers reduced the amount
            of malted barley and added in unmalted barley, thereby screwing over the English.
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
          <Typography>Bourbon</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Bourbon is a distinct product of the United States.
          It must be distilled at no higher than 165 proof from a recipe of at least 51% corn,
          placed in new charred oak containers at no higher than 125 proof,
          then finally bottled at no less than 80 proof.

          Fun fact: While Kentucky produces 90 to 95 percent of bourbon in the world
          it can be made anywhere in the United States, including Guam and Puerto Rico.

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
          <Typography>Rye</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Rye whiskey must be produced from at least 51% rye grain.
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
          <Typography>Canadian Whiskey</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The legal stuff 

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
          <Typography>Japanese Whiskey</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The legal stuff
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
          <Typography>How can I learn more?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I highly recommend 
            <a href="https://www.amazon.com/Tasting-Whiskey-Insiders-Pleasures-Spirits/dp/1612123015"> Tasting Whiskey by Lew Bryson</a>.
            This book is by far the best and most approachable introduction to the world of whiskey I have found.

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
          <Typography>Is Jack Daniel's actually Bourbon?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Technically, yes it is. Old Number 7 meets all the legal requirements for bourbon. 
            In fact, it is classified as a bourbon by the United States Tax and Trade Bureau.
            Why don't they call it bourbon? Well, because they don't want to.
            Pro tip: when visiting Tennessee DO NOT refer to Jack Daniel's as bourbon. 
            It will not go well for you. 
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

