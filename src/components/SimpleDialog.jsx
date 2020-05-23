import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import MuiDialogActions from "@material-ui/core/DialogActions"
import DialogTitle from "@material-ui/core/DialogTitle"
import Grid from "@material-ui/core/Grid"
import Link from "@material-ui/core/Link"
import { makeStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"
import React from "react"
import SimpleList from "./SimpleList"

const useStyles = makeStyles({})

function SimpleDialog(props) {
  const classes = useStyles()
  const { onClose, open } = props

  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">
        About Sanitizer Formulation
      </DialogTitle>

      <Grid
        container
        style={{
          padding: "2em",
        }}
      >
        <Grid container item xs>
          {/* <div style={{ width: "-moz-available", textAlign: "center" }}> */}
          <SimpleList />

          {/* </div> */}
        </Grid>
        <Grid container item xs style={{ alignContent: "center" }}>
          <div style={{ width: "-moz-available", textAlign: "center" }}>
            <Link
              href="https://www.who.int/gpsc/5may/Guide_to_Local_Production.pdf"
              target="_blank"
            >
              World Health Organization PDF
            </Link>
          </div>
        </Grid>
      </Grid>

      {/* <object
        data="https://www.who.int/gpsc/5may/Guide_to_Local_Production.pdf"
        width="300"
        height="200"
      ></object> */}
      <MuiDialogActions>
        <Button
          autoFocus
          variant="contained"
          color="primary"
          onClick={handleClose}
        >
          Close
        </Button>
      </MuiDialogActions>
    </Dialog>
  )
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}

export default SimpleDialog
