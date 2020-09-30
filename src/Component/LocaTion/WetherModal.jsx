import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import WetherTable from "./WetherTable";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const WetherModal = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [wetherList, setWetherList] = useState([]);

  const API_KEY = "ead32199cb2793af95adbfb3cfe6474d";
  const lat = props.lat;
  const lon = props.lon;
  const 
  const fetchWetherPoint = () => {
    let url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=${}&appid=${API_KEY}`;
    axios.get(url).then((response) => {
      const wetherDatalist = response.data.list;
      setWetherList(wetherDatalist);
    });
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetchWetherPoint();
  }, []);

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">{props.name}</h2>
            <p id="transition-modal-description">{props.address}</p>
            {wetherList.map((wether, index) => (
              <WetherTable
                id="transition-modal-description"
                key={index}
                wether={wether}
              />
            ))}
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
export default WetherModal;
