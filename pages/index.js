import { Box, Button, CircularProgress, Container, Typography } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import ChartsDetails from '../components/ChartsDetails';
import NewECharts from '../components/ECharts';
import { LoadingData, RootStyle } from '../styles/MuiStyles/MainPage';
// import styles from '../styles/Home.module.css';
import axios from 'axios';

// const fetcher = (...args) => fetch(...args).then((res) => res.json());
// const fetcher = (url, token) =>
//   axios
//     .get(url, { headers: { Authorization: "Bearer " + token, "Access-Control-Allow-Origin": "*"}})
//     .then((res) => res.data);
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  // const token = "test";
  // const { data: apiData, error } = useSWR(['https://postman-echo.com/get?test=123', token], fetcher);
  // const token = {
  //   method: 'GET',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  // //   }}
  // const token = {
  //   // "args": {
  //   //   "foo1": "bar1",
  //   //   "foo2": "bar2"
  //   // },
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  //   }
  // }
  // const { data: apiData, error } = useSWR(['https://postman-echo.com/get', token], fetcher);

  // const apiData = async () => await fetch('https://postman-echo.com/get?foo1=bar1&foo2=bar2', {
  //   method: 'GET',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   }},).then((res) => res.data)

  const apiData = async () => {
    // try {
    //   const data = await axios.get('https://postman-echo.com/get?foo1=bar1&foo2=bar2')
    //   console.log("🚀 ~ file: index.js ~ line 51 ~ apiData ~ data", data)
    // } catch (error) {
    //   console.log(error)
    // }

    var config = {
      method: 'get',
      url: 'https://postman-echo.com/get?foo1=bar1&foo2=bar2\n',
      headers: {
        Cookie: 'sails.sid=s%3Ant4IhbDLwuuilH3WsaARwoApk2YYy3SU.xUjB5kX44ZLe49XuZYDwkvKVcikIZTkQu%2F7cee3NjWw',
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });


    var myHeaders = new Headers();
    myHeaders.append("Cookie", "sails.sid=s%3Ant4IhbDLwuuilH3WsaARwoApk2YYy3SU.xUjB5kX44ZLe49XuZYDwkvKVcikIZTkQu%2F7cee3NjWw");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://postman-echo.com/get?foo1=bar1&foo2=bar2\n", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

  };
  useEffect(() => {
    apiData();
  }, [apiData]);

  // console.log("apiData", apiData())
  const [filteredData, setFilteredData] = useState();

  // useEffect(() => {
  //   if (apiData) {
  //     const pencils = apiData?.filter((items) => items.category === 'pencil');
  //     const lipstick = apiData?.filter((items) => items.category === 'lipstick');
  //     const powder = apiData?.filter((items) => items.category === 'powder');
  //     const lipGloss = apiData?.filter((items) => items.category === 'lip_gloss');
  //     setFilteredData({ pencils, lipstick, powder, lipGloss });
  //   }
  // }, [apiData]);

  // console.log('🚀 ~ file: index.js ~ line 22 ~ newData ~ newData', filteredData);
  // };

  return <div>Hello world</div>;
}

//RETURN API DETALS HERE AFTER SOLVING CORS ERROR

// <RootStyle>
//   {apiData ? (
//     <Container maxWidth='xl' sx={{ p: '0 !important' }}>
//       <ChartsDetails filteredData={filteredData} />
//       <NewECharts filteredData={filteredData} />
//       {/* <Button onClick={handleFilterData}>Get data</Button> */}
//     </Container>
//   ) : (
//     <LoadingData>
//       <CircularProgress />
//     </LoadingData>
//   )}
// </RootStyle>
