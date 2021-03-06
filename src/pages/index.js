import React, { useEffect, useState } from 'react';
import { Skeleton } from '@chakra-ui/react'
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Slider from "react-slick";
import axios from 'axios';

import Header from '../component/header';
import Navbar from '../component/navbar';

import { formatRupiah } from '../lib/helper';

import styles from '../styles/Home.module.css';

export default function Home() {
   const [state, setState] = useState(typeof window === "undefined" && {
      isLoading: false,
      dataMenu: false,
   });
   const [stateBanner, setStateBanner] = useState(typeof window === "undefined" && {
      dataBanner: false,
      isLoading: false
   })
   const [stateProduct, setStateProduct] = useState(typeof window === "undefined" && {
      dataProduct: false,
      isLoading: false
   })

   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows: false,
      slidesToScroll: 1
   };

   const _handlerGetDataBanner = () => {
      try {
         axios
            .get(`https://62982b718d77ad6f750d8168.mockapi.io/banner`)
            .then((response) => {
               setStateBanner({
                  dataBanner: response.data,
                  isLoading: true

               })
            })
            .catch((error) => console.log(error));
      } catch (error) {
         console.log(error);
      }
   }

   const _handlerGetDataMenu = () => {
      try {
         axios
            .get(`https://62982b718d77ad6f750d8168.mockapi.io/menu`)
            .then((response) => {
               setState({
                  dataMenu: response.data,
                  isLoading: true
               })
            })
            .catch((error) => console.log(error));
      } catch (error) {
         console.log(error);
      }
   }

   const _handlerGetProduct = () => {
      try {
         axios
            .get(`https://62982b718d77ad6f750d8168.mockapi.io/product`)
            .then((response) => {
               const limitData = response.data.slice(0, 6);
               setStateProduct({
                  dataProduct: limitData,
                  isLoading: true
               })
            })
            .catch((error) => console.log(error));
      } catch (error) {
         console.log(error);
      }
   }

   useEffect(() => {
      _handlerGetDataMenu();
      _handlerGetDataBanner();
      _handlerGetProduct();

   }, []);

   return (
      <div className={styles.container}>
         <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <main className="container">
            <Header />
            <div className="pt-3 pr-3 pl-3">
               <div className="w-full pt-3">
                  {
                     stateBanner.isLoading ?
                        <Slider {...settings}>
                           {
                              stateBanner.dataBanner &&
                              stateBanner.dataBanner.map(item => {
                                 return (
                                    <>
                                       <Skeleton isLoaded={stateBanner.isLoading}>
                                          <div>
                                             <img className="w-full" src={item.urlPath} />
                                          </div>
                                       </Skeleton>
                                    </>
                                 )
                              })
                           }
                        </Slider> :
                        <div>
                           <Skeleton className="rounded-xl" height="125px" />
                        </div>
                  }
               </div>
               <div className="grid grid-cols-4 gap-3 pt-6">
                  {
                     state.isLoading ?
                        <>
                           {
                              state.dataMenu &&
                              state.dataMenu.map(item => {
                                 return (
                                    <>
                                       <Skeleton className="rounded-xl" isLoaded={state.isLoading}>
                                          <Link href={`/product/${item.id}`}>
                                             <a>
                                                <div className="text-center m-auto rounded-xl p-3 w-20" style={{ backgroundColor: '#FFF6E4' }}>
                                                   <div className="mb-2">
                                                      <img className="m-auto" src={item.urlImage} />
                                                   </div>
                                                   <h4 className="font-bold text-xs">{item.name}</h4>
                                                </div>
                                             </a>
                                          </Link>
                                       </Skeleton>
                                    </>
                                 )
                              })
                           }
                        </> :
                        <>
                           <Skeleton className="rounded-xl" height="72px" width="80px" />
                           <Skeleton className="rounded-xl" height="72px" width="80px" />
                           <Skeleton className="rounded-xl" height="72px" width="80px" />
                           <Skeleton className="rounded-xl" height="72px" width="80px" />
                        </>
                  }
               </div>
               <div className="pt-6">
                  <h3 className="font-bold text-md">Made For You</h3>
                  <div className="pt-6 grid grid-cols-2 gap-3">
                     {
                        stateProduct.isLoading ?
                           <>
                              {
                                 stateProduct.dataProduct &&
                                 stateProduct.dataProduct.map(item => {
                                    const product = item.product;
                                    return (
                                       <>
                                          <Skeleton isLoaded={stateProduct.isLoading}>
                                             <Link href={`/detail/${item.id}`}>
                                                <a>
                                                   <div className="rounded-xl bg-neutral-200">
                                                      <div className="text-center m-auto mb-3 rounded-t-xl">
                                                         <Image height="0" width="0" layout={`responsive`}  className="m-auto rounded-t-xl w-auto h-full object-cover" src={product.urlPath} />
                                                      </div>
                                                      <div className="p-3">
                                                         <h4 className="font-semibold text-xs">{product.name}</h4>
                                                         <span className="font-normal text-xs block mt-1">{product.weight}</span>
                                                         <div className>
                                                            <span className="font-semibold text-sm text-green-500 mt-3 block">
                                                               {formatRupiah(product.price)}
                                                            </span>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </a>
                                             </Link>

                                          </Skeleton>
                                       </>
                                    )
                                 })
                              }
                           </> :
                           <>
                              <Skeleton height="290" className="rounded-xl" />
                              <Skeleton height="290" className="rounded-xl" />
                              <Skeleton height="290" className="rounded-xl" />
                              <Skeleton height="290" className="rounded-xl" />
                              <Skeleton height="290" className="rounded-xl" />
                           </>
                     }

                  </div>
               </div>
            </div>
            <Navbar />
         </main>
      </div>
   )
}
