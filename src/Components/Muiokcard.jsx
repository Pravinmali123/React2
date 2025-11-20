
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Link,
  Box,
  Grid,
} from "@mui/material";

export default function Cardmui() {
  const characters = [
    {
      img: "https://rickandmortyapi.com/api/character/avatar/147.jpeg",
      title: "Father Bob",
      desc: "Dead - Alien",
      man: "Last known location:",
      man1: "Nuptia 4",
      ma: "First seen in:",
      ma1: "Mortynight Run",
    },
    {
      img: "https://rickandmortyapi.com/api/character/avatar/39.jpeg",
      title: "Jan-Michael Vincent",
      desc: "Alive - Human",
      man: "Last known location:",
      man1: "Interdimensional Cable",
      ma: "First seen in:",
      ma1: "Interdimensional Cable 2: Tempting Fate",
    },
    {
      img: "https://rickandmortyapi.com/api/character/avatar/295.jpeg",
      title: "Rick K-22",
      desc: "Alive - Human",
      man: "Last known location:",
      man1: "Earth (Replacement Dimension)",
      ma: "First seen in:",
      ma1: "The Ricklantis Mixup",
    },
    {
      img: "https://rickandmortyapi.com/api/character/avatar/320.jpeg",
      title: "Biblesaurus",
      desc: "Alive - Mythological Creature",
      man: "Last known location:",
      man1: "Mr. Goldenfold's dream",
      ma: "First seen in:",
      ma1: "Lawnmower Dog",
    },
    {
      img: "https://rickandmortyapi.com/api/character/avatar/577.jpeg",
      title: "Scary Brandon",
      desc: "Dead - Humanoid",
      man: "Last known location:",
      man1: "Earth (Replacement Dimension)",
      ma: "First seen in:",
      ma1: "Rest and Ricklaxation",
    },
    {
      img: "https://rickandmortyapi.com/api/character/avatar/612.jpeg",
      title: "Toxic Morty",
      desc: "Alive - Animal",
      man: "Last known location:",
      man1: "Story Train",
      ma: "First seen in:",
      ma1: "Never Ricking Morty",
    },
  ];

  return (
    <Box sx={{ p: { xs: 2, sm: 3, md: 4 }, backgroundColor: "black" }}>
      <Grid container spacing={3} justifyContent="center">
        {characters.map((char, index) => (
          <Grid
            item
            xs={12}
            sm={10}
            md={6}
            lg={4}
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
                p: 2,
                alignItems: { xs: "center", sm: "flex-start" },
                width: "540px",
                // maxWidth: 540,
                backgroundColor: "rgb(60, 62, 68)",
                borderRadius: "20px",
              }}
            >
              <CardMedia
                component="img"
                image={char.img}
                alt={char.title}
                sx={{
                  width: { xs: "100%", sm: 230 },
                  height: { xs: "auto", sm: 230 },
                  borderRadius: 2,
                  objectFit: "cover",
                }}
              />

              <CardContent
                sx={{
                  flex: 1,
                  p: 0,
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                <Box sx={{ mb: 2 }}>
                  <Link href="/#" sx={{ textDecoration: "none" }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "white",
                        fontSize: "25px",
                        fontWeight: "900",
                        "&:hover": { color: "rgb(255, 152, 0)" },
                      }}
                    >
                      {char.title}
                    </Typography>
                  </Link>
                  <Typography
                    variant="body2"
                    color="white"
                    sx={{
                      fontSize: "16px",
                      mt: 0.5,
                      mb: 1,
                    }}
                  >
                    {char.desc}
                  </Typography>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" color="white">
                    {char.man}
                  </Typography>
                  <Link
                    href="/#"
                    sx={{
                      color: "white",
                      "&:hover": { color: "rgb(255, 152, 0)" },
                      fontSize: "16px",
                      textDecoration: "none",
                    }}
                  >
                    {char.man1}
                  </Link>
                </Box>

                <Box sx={{ mb: 1 }}>
                  <Typography variant="body2" color="white">
                    {char.ma}
                  </Typography>
                  <Link
                    href="/#"
                    sx={{
                      color: "white",
                      "&:hover": { color: "rgb(255, 152, 0)" },
                      fontSize: "16px",
                      textDecoration: "none",
                    }}
                  >
                    {char.ma1}
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

