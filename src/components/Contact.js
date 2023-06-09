import { Typography } from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";



export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  };

  return (
    <>
      <Box sx={{ marginLeft: "50px", marginTop: "5rem" }}>
        <Box sx={{ mt: 8 }}>
          <Typography variant="h3" sx={{fontFamily:"'Courgette', cursive",}}>Contact</Typography>
        </Box>
        <Typography variant="h4" sx={{ mt: 2 , fontFamily: "'Courgette', cursive",}}>
          Get in touch
        </Typography>
        <Typography variant="h5" sx={{ mt: 2 }}>
          Please fill out the form on this section to contact with me.
          <br /> Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through
          Friday
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            name="name"
            label="Name"
            sx={{ width: "30%", fontSize: "1.2rem" }}
          />
          <Box sx={{ mt: 2 }}>
            <TextField
              name="email"
              label="Email"
              sx={{ width: "30%", fontSize: "1.2rem" }}
            />
          </Box>
          <Box sx={{ mt: 2 }}>
            <TextField
              name="message"
              label="Message"
              multiline
              rows={4}
              sx={{ width: "30%", fontSize: "1.2rem" }}
            />
          </Box>
          <Box sx={{ mt: 2 }}>
            <Button type="submit" variant="contained">
              Send Message
            </Button>
          </Box>
        </Box>
      </Box>




    </>
  );
}
