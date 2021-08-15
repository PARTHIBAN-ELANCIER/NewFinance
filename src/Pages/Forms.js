import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import ProposalPage1 from './ProposalPage1';
import Advertisement from '../Component/Advertisement';
import Slidder1 from '../Component/Slidder1';
import Card from '@material-ui/core/Card';
import Slidder2 from '../Component/Slidder2';
import Slidder3 from '../Component/Slidder3';
import NewAppBar from '../Component/NewAppBar';
import Footer from '../Component/Footer';
import Question1 from './Question1';
import ReviewPay from './ReviewPay';
import ReviewPayPlan from '../Component/ReviewPayPlan';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
    width:'200px'
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Personal', 'Member', 'Nominee'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <div>
                <Slidder1 />
            </div>;
    case 1:
      return <div>
                <Slidder2 />
            </div>;
    case 2:
      return <div>
                <Slidder3 />
            </div>;
    default:
      return 'Unknown step';
  }
}

export default function Forms() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <React.Fragment>
    <div style={{width:'100%',height:'100px'}}>  
      <NewAppBar />
    </div>
    <Card className={classes.root} style={{width:'85%',marginLeft:'5%'}}>
      <Stepper style={{marginLeft:'7%'}} activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption">Optional</Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length  ? (
          <div>
            {/* <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button> */}
            <ReviewPayPlan />
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button style={{marginLeft:'30%'}} disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              {/* {isStepOptional(activeStep) && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                  className={classes.button}
                >
                  Skip
                </Button>
              )} */}

              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Review & Pay' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </Card>
    <div style={{marginTop:'5%'}}>
      <Advertisement />
    </div>
    <div>
      <Footer />
    </div>
    </React.Fragment>
  );
}
