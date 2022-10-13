import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import {
  Wrapper,
  RatingTextBox,
  MuiTextGray,
  MuiBox,
  Heading,
  TitleTypo,
  SubTitle,
  CssGrid,
} from '../styles/MuiStyles/MainPage';

export default function ChartsDetails({ filteredData }) {
  const lipstick = filteredData?.lipstick?.length;
  const powder = filteredData?.powder?.length;
  const pencils = filteredData?.pencils?.length;
  const lipGloss = filteredData?.lipGloss?.length;

  const API_DATA = [
    {
      title: 'lipstick',
      value:lipstick,
    },
    {
      title: 'powder',
      value: powder,
    },
    {
      title: 'pencils',
      value: pencils,
    },
    {
      title: 'Lip Gloss',
      value: lipGloss
    }
  ]

  return (
    <Wrapper>
      <Box>
        <TitleTypo>Sales Funnel</TitleTypo>
        <Typography color='gray'>Jan 1, 2022 - Jun 30, 2022</Typography>
      </Box>
      <CssGrid>

        {API_DATA.map((item, idx) =>
          <MuiBox key={item}>
            <Heading>{item.title}</Heading>
            <TitleTypo>{item.value}</TitleTypo>

            <SubTitle sx={{ mt: 4 }}>Shopping Activity</SubTitle>
            <RatingTextBox>
              <Heading>{Math.floor(item.value * Math.random())}</Heading>
              <MuiTextGray>{Math.floor(item.value * Math.random()/100 * item.value)}%</MuiTextGray>
            </RatingTextBox>
          </MuiBox>
        )}

      </CssGrid>
    </Wrapper>
  );
}

