import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";

const Home = () => {
  const apps = [
    { id: 1, name: "App 1", description: "Amazing app", image: "/app1.png" },
    { id: 2, name: "App 2", description: "Useful tool", image: "/app2.png" },
  ];

  return (
    <Grid container spacing={2}>
      {apps.map((app) => (
        <Grid item xs={12} sm={6} md={4} key={app.id}>
          <Card>
            <CardMedia component="img" height="140" image={app.image} />
            <CardContent>
              <Typography variant="h6">{app.name}</Typography>
              <Typography>{app.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
