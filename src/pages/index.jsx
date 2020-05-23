import { Typography } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import React, { useState } from "react"
import ElevateAppBar from "../components/ElevateAppBar"
import SimpleDialog from "../components/SimpleDialog"

const useStyles = makeStyles({})

const IndexPage = () => {
  const [isMoreInfoShown, setIsMoreInfoShown] = useState(false)
  const classes = useStyles()

  const handleClickOpen = () => {
    setIsMoreInfoShown(true)
  }

  const handleClose = value => {
    setIsMoreInfoShown(false)
  }

  return (
    <>
      <SimpleDialog open={isMoreInfoShown} onClose={handleClose} />
      <ElevateAppBar />
      <Grid container item xs={12}>
        <img alt="complex" src="/covid-19-bg.jpg" />
      </Grid>
      <Grid
        container
        style={{
          backgroundColor: "#259296",
          padding: "2em",
        }}
      >
        <Grid container style={{ alignContent: "center" }} item xs={8}>
          <div style={{ width: "-moz-available", textAlign: "center" }}>
            <Typography variant="h5" style={{ color: "white" }}>
              Hospital Grade COVID-19 Disinfection Service
            </Typography>
          </div>
        </Grid>
        <Grid container item xs style={{ alignContent: "center" }}>
          <div style={{ width: "-moz-available", textAlign: "center" }}>
            <Button
              onClick={handleClickOpen}
              variant="contained"
              color="primary"
            >
              Learn More
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default IndexPage
