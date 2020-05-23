import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import CssBaseline from "@material-ui/core/CssBaseline"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Box from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles({
  appBar: {
    backgroundColor: "black",
  },
  toolbar: {
    flexGrow: 1,
  },
})

function ElevationScroll(props) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
}

export default function ElevateAppBar(props) {
  const classes = useStyles()

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Grid container spacing={1}>
              <Grid container direction={"column"} item xs={6} spacing={1}>
                <Typography variant="h6">Blast-Off Surface Cleaning</Typography>
                <Typography>
                  Environmentally Responsible Multimedia Blasting
                </Typography>
              </Grid>
              <Grid
                container
                item
                xs={6}
                spacing={1}
                style={{ alignContent: "center" }}
              >
                <div style={{ width: "-moz-available", textAlign: "end" }}>
                  <Typography variant="h6">
                    COVID-19 Disinfecting Service (519) 123-1234
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  )
}
