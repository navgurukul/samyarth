import React from 'react';
import { Grid } from '@mui/material';
import Image from 'next/image';
import useMediaQuery from "@mui/material/useMediaQuery";
import { breakpoints } from "../styles/constant";

function Images() {
  const isActive = useMediaQuery("(max-width:" + breakpoints.values.sm + "px)");
  const imageUrls = [
    '/images/learning1.jpg',
    '/images/office.jpeg',
    '/images/learning4.jpg',
  ];

  // Only display images on desktop view (isActive is false)
  if (isActive) {
    return null;
  }

  return (
    <Grid container justifyContent="center" sx={{ mt: '64px', mb: "30px" }}>
      {imageUrls.map((imageUrl, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <div style={{ position: 'relative', width: '100%', height: '100px', paddingBottom: '90%' }}>
            <Image
              src={imageUrl}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </Grid>
      ))}
    </Grid>
  );
}

export default Images;