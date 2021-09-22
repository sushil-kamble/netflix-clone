import { Backdrop, Fade, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import "../css/row.css";

const base_url = "https://image.tmdb.org/t/p/original";

function Model({ large, poster, backdrop, title, overview, rating, count }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <img
        src={base_url + (large ? poster : backdrop)}
        alt={title}
        onClick={handleOpen}
        className={`row__poster ${large && "row__posterLarge"}`}
      />

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <Box
            sx={style}
            style={{
              background: `linear-gradient(
                60deg,
                rgba(17, 17, 17, 0.9) 38%,
                rgba(22, 22, 22, 0.4) 100%
              ),
              url(${base_url + poster}) no-repeat center`,
              backgroundSize: "cover"
            }}
          >
            <Typography id="transition-modal-title" variant="h5" component="h2">
              {title}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {overview}
            </Typography>
            <Typography sx={{ mt: 2 }}>Rating: {rating}</Typography>
            <Typography sx={{ mt: 2 }}>No. of Rating: {count}</Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  color: "white",
  transform: "translate(-50%, -50%)",
  width: "clamp(250px, 600px, 50vw)",
  minHeight: 400,
  boxShadow: 24,
  p: 4
};

export default Model;
