import React, { Component } from 'react';
import { Skeleton } from '@chakra-ui/react'
import Link from 'next/link';
import Image from 'next/image';
import axios from 'axios';

import { formatRupiah } from '../../lib/helper';

import Header from '../../component/headerBack';
import Navbar from '../../component/navbar';

import styles from '../../styles/Home.module.css';

class ListProduct extends Component {
   constructor(props) {
      super(props);
      this.state = {
         filterData: false,
         isLoading: false,
      }
   }

   componentDidMount = () => {
      this._handlerFilterDataProduct();
   }

   _handlerFilterDataProduct = () => {
      const { productData, categoryId } = this.props;
      const data = productData.data;
      let filterData = [];

      try {
         if (data) {
            data.map(item => {
               if (item.category.id == categoryId) {
                  filterData.push(item);
               }
            })
            this.setState({
               filterData: filterData,
               isLoading: true
            })
         }
      } catch (error) {
         console.log(error)
      }

   }

   render() {
      const { categoryData } = this.props;
      const { filterData, isLoading } = this.state;

      return (
         <main className={styles.container}>
            <Header
               urlPage="/"
               titlePage={categoryData.data.name}
            />
            <div className="container min-h-screen">
               <div className="pt-6 grid grid-cols-2 gap-3 pl-3 pr-3">
                  {
                     isLoading ?
                        <>
                           {
                              filterData &&
                              filterData.map(item => {
                                 const product = item.product;
                                 return (
                                    <>
                                       <Skeleton isLoaded={isLoading}>
                                          <Link href={`/detail/${item.id}`}>
                                             <a>
                                                <div className="rounded-xl bg-neutral-200">
                                                   <div className="text-center m-auto mb-3 rounded-t-xl">
                                                      <Image height="0" width="0" layout={`responsive`} className="m-auto rounded-t-xl w-auto h-full object-cover" src={product.urlPath} />
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
            <Navbar />
         </main>
      );
   }
}

const fetchData = async () => await axios.get(`https://62982b718d77ad6f750d8168.mockapi.io/product`)
   .then(res => ({
      error: false,
      data: res.data,
   }))
   .catch(() => ({
      error: true,
      data: null,
   }),
);

const fetchDataCategory = async (id) => await axios.get(`https://62982b718d77ad6f750d8168.mockapi.io/menu/${id}`)
   .then(res => ({
      error: false,
      data: res.data,
   }))
   .catch(() => ({
      error: true,
      data: null,
   }),
);

export async function getServerSideProps(context) {
   const productData = await fetchData();
   const categoryData = await fetchDataCategory(context.query.id)
   const categoryId = context.query.id;

   return {
      props: {
         categoryId,
         productData,
         categoryData
      },
   };
}


export default ListProduct;