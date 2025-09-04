import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import SelectedPackageDetails from '../../components/SelectedPackageDetails'
import { Alert, Button, Card, Divider, Grid, LinearProgress, Textarea, Typography } from '@mui/joy'
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';

import { useAtom } from 'jotai';
import { mpesaCodes, subscribedPackage } from '../../state';
import HowToPayCard from '../../components/HowToPayCard'
import Tabs from '../../components/ResponsiveAppBar'




export default function ValidatePayments() {
  const navigate = useNavigate()


  const [currentPackage, setCurrentPackage] = useAtom(subscribedPackage)
  const [mpesaCodeList, setMpesaCodeList] = useAtom(mpesaCodes)


  const location = useLocation();
  const [progress, setProgress] = useState(false);
  const [packageItem, setPackageItem] = useState({});
  const [paymentDetails, setPaymentDetails] = useState({})
  const [messageError, setMessageError] = useState(false)
  useEffect(() => {
    fetch('https://gist.githubusercontent.com/kelsupdate/e851b18d6ec002920d7993da8cb4276f/raw/a605ed815aac2a17c38eb6d859dea012dc0d5b47/gistfile1.txt')
      .then(response => response.json())
      .then((data) => (
        setPackageItem(data.surveyPlans[location.state.index]), setPaymentDetails(data.mpesaPaymentDetails), setProgress(false)
      ));
  }, []);

  const [open, setOpen] = React.useState(false);

  // console.log("payment details", packageItem)
  return (
    <div>
      <Tabs />
      <Card variant="soft" sx={{ mt: 2 }} >
        {
          progress ? <LinearProgress /> : <div></div>
        }



        <Typography level="h3" fontWeight={"bold"}>Confirm Payments</Typography>
        <Divider sx={{ mb: 1 }} />
        {/* <span><Typography align="center">User Country</Typography><Typography level="title-lg" align="center">Kenya</Typography></span> */}
        <Grid xs={12}>
          <Grid container justifyContent="center" spacing={2}>
            <Grid>
              <SelectedPackageDetails data={packageItem} />
            </Grid>
            <Grid>
              <HowToPayCard data={paymentDetails} amount={packageItem.price} />
            </Grid>
          </Grid>
        </Grid>

        <Divider sx={{ mb: 2, mt: 2 }} />


        <Grid xs={12}>
          <Grid container justifyContent="center" spacing={2}>
            <Grid>
              <Button style={{ backgroundColor: '#00CC71', borderRadius: "5em" }} onClick={() => setOpen(true)}>Confirm Payments</Button>
              <React.Fragment>
                <Modal open={open} onClose={() => setOpen(false)}>
                  <ModalDialog>
                    <DialogTitle>Validate Payments</DialogTitle>
                    <DialogContent>Copy the entire confirmation message
                      you received from M-PESA after making payments and paste in the text
                      field below then click verify button</DialogContent>
                    <form
                      onSubmit={(event) => {
                        event.preventDefault();
                        const data = new FormData(event.currentTarget);
                        const mpesaMessage = data.get('message')?.trim();
                        
                        // Validate empty message
                        if (!mpesaMessage) {
                          setMessageError(true);
                          return;
                        }
                        
                        // Check if the message contains the till name "FINTECH HUB VENTURES 3"
                        if (!mpesaMessage.includes("FINTECH HUB VENTURES 3")) {
                          setMessageError(true);
                          return;
                        } else {
                          setMessageError(false);
                        }

                        setProgress(true);
                        setTimeout(() => {
                          setCurrentPackage((prev) => ({
                            ...prev,
                            planName: packageItem.planName,
                            dailySurvey: packageItem.dailySurvey,
                            monthlyIncome: packageItem.monthlyIncome,
                            dailyIncome: packageItem.dailyIncome,
                            minimumWithdrawal: packageItem.minimumWithdrawal,
                            earningPerSurvey: packageItem.earningPerSurvey,
                            price: packageItem.price
                          }));
                          setMpesaCodeList((prev) => ([...prev, mpesaMessage.split(' ')[0]]));
                          setProgress(false);
                          navigate("/home");
                        }, 5000);
                      }}
                    >
                      <Stack spacing={2}>
                        <Textarea
                          size="lg"
                          name="message"
                          placeholder="Paste M-PESA message here"
                          error={messageError}
                          helperText={messageError ? "Please paste a valid M-PESA message containing 'FINTECH HUB VENTURES 3'" : ""}
                          required
                        />
                        <Button style={{ backgroundColor: '#00CC71', borderRadius: "5em" }} type="submit">Verify</Button>
                      </Stack>
                    </form>
                    {
                      progress ? <LinearProgress /> : <div></div>
                    }

                  </ModalDialog>
                </Modal>
              </React.Fragment>
            </Grid>
          </Grid>
        </Grid>
        <Alert
          variant="soft"
          color={messageError ? "danger" : "neutral"}
          sx={{ mt: 2 }}
        >
          <Typography align="left" fontWeight="bold">NOTE</Typography>
          <Typography align="left">Payment system is selected based on user location for convenience purpose</Typography>
        </Alert>
      </Card>
    </div>
  )
}
