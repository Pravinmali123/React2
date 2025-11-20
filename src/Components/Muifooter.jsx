import React from "react";
import { Box, Typography, Link, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#121f2cff",
        color: "#fff",
        py: { xs: 3, sm: 4 },
        px: { xs: 2, sm: 6, md: 10 },
        textAlign: "center",
      }}
    >
    
      <Stack
        direction={{ xs: "column", sm: "column" , md: "row" }}
        spacing={{ xs: 1.5, sm: 4, md: 6 }}
        justifyContent="center"
        alignItems="center"
      >
       <Stack direction={{ xs: "column", sm: "row" , md: "row" }} spacing={{xs: 1, sm: 3, md: 5}} sx={{justifyContent: "center", alignItems: "center"  }}>
           <Link
            href="#"
            
            sx={{
              color: "#fff",
              "&:hover": { color: 'rgb(255, 152, 0)'}, fontWeight: '600', fontSize: { xs: "13px", sm: "18px" }, textDecoration: 'none', 


            }}
          >
           CHARACTERS: 826  
          </Link>
          <Link
            href="#"
           
            sx={{
              color: "#fff",
              "&:hover": { color: 'rgb(255, 152, 0)' }, fontWeight: '600', fontSize: { xs: "13px", sm: "18px" }, textDecoration: 'none'
            }}
          >
           LOCATIONS: 126
          </Link>
          <Link
            href="#"
          
            sx={{
              color: "#fff",
              "&:hover": { color: 'rgb(255, 152, 0)'}, fontWeight: '600', fontSize: { xs: "13px", sm: "18px" }, textDecoration: 'none'
            }}
          >
           
EPISODES: 51
          </Link>
        </Stack>
      </Stack>

  
      <Typography
        variant="body2"
        sx={{
          mt: { xs: 2, sm: 3 },
          fontSize: { xs: "14px", sm: "18px" },
          fontWeight: 600,
          color: "#fff",
          "&:hover": { color: "rgb(255, 152, 0)" },
        }}
      >
        SERVER STATUS
      </Typography>

  
      <Stack
        direction="row"
        spacing={{ xs: 2, sm: 3 }}
        justifyContent="center"
        alignItems="center"
        sx={{ mt: { xs: 1.5, sm: 2 } }}
      >
        {[GitHubIcon, TwitterIcon, FavoriteIcon].map((Icon, i) => (
          <Icon
            key={i}
            sx={{
              fontSize: { xs: 24, sm: 30 },
              color: "#fff",
              cursor: "pointer",
              transition: "color 0.3s",
              "&:hover": { color: "rgb(255, 152, 0)" },
            }}
          />
        ))}
      </Stack>

      <Typography
        variant="body2"
        align="center"
        sx={{
          mt: { xs: 2, sm: 3 },
          fontSize: { xs: "14px", sm: "16px" },
          fontWeight: 400,
          color: "#fff",
        }}
      >
        ❮❯ by{" "}
        <Link
          href="#"
          sx={{
            color: "#fff",
            mx: 0.5,
            textDecoration: "none",
            "&:hover": { color: "rgb(255, 152, 0)" },
          }}
        >
          Axel Fuhrmann
        </Link>{" "}
        2025
      </Typography>
    </Box>
  );
}
