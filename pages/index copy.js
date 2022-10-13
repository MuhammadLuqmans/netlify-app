import { CircularProgress, Container } from '@mui/material';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import ChartsDetails from '../components/ChartsDetails';
import NewECharts from '../components/ECharts';
import { LoadingData, RootStyle } from '../styles/MuiStyles/MainPage';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const { data: apiData, error } = useSWR('https://makeup-api.herokuapp.com/api/v1/products.json', fetcher);
  const [filteredData, setFilteredData] = useState();

  useEffect(() => {
    if (apiData) {
      const pencils = apiData?.filter((items) => items.category === 'pencil');
      const lipstick = apiData?.filter((items) => items.category === 'lipstick');
      const powder = apiData?.filter((items) => items.category === 'powder');
      const lipGloss = apiData?.filter((items) => items.category === 'lip_gloss');
      setFilteredData({ pencils, lipstick, powder, lipGloss });
    }
  }, [apiData]);

  return (
    <RootStyle>
      {apiData ? (
        <Container maxWidth='xl' sx={{ p: '0 !important' }}>
          <ChartsDetails filteredData={filteredData} />
          <NewECharts filteredData={filteredData} />
        </Container>
      ) : (
        <LoadingData>
          <CircularProgress />
        </LoadingData>
      )}
    </RootStyle>
  );
}
