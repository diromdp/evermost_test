import React, { Component } from 'react';
import { Button, IconButton, Input, Skeleton } from '@chakra-ui/react'
import { FaPlus, FaMinus } from 'react-icons/fa';
import axios from 'axios';
import Image from 'next/image';

import Header from '../../component/headerBack';
import { formatRupiah } from '../../lib/helper';
import styles from '../../styles/Home.module.css';

class Detail extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isLoading: false
      }
   }

   componentDidMount = () => {
      this._handlerRenderContent();
   }

   _handlerRenderContent = () => {
      const { productDetail } = this.props;
      if (productDetail.data) {
         this.setState({
            isLoading: true
         })
      }
   }

   render() {
      const { productDetail } = this.props;
      const { isLoading } = this.state;
      const product = productDetail.data.product;

      return (

         <main className={styles.container}>
            <Header
               urlPage="/"
            />
            <div className="relative">
               <div className="border-b border-gray-200 custom-img">
                  {
                     isLoading ?
                        <Image layout={`responsive`} height="0" width="100%" className="w-full h-full relative" src={product.urlPath} />
                        :
                        <Skeleton height="480" />
                  }

                  <div className="p-3 flex flex-row justify-between">
                     <div className="flex flex-col w-9/12">
                        <h1 className="font-bold text-md mb-1">{product.name}</h1>
                        <span className="font-normal text-xs block text-gray-400">{product.weight}</span>
                        <span className="font-semibold text-sm text-green-500 mt-3 block">{formatRupiah(product.price)}</span>
                     </div>
                     <div className="flex flex-row w-3/12 m-auto">
                        <IconButton
                           className="w-7 h-7 focus:shadow-none min-w-0"
                           variant='outline'
                           colorScheme='green'
                           fontSize='12px'
                           icon={<FaMinus />}
                        />
                        <Input className="border-0 h-7 w-7 focus:shadow-none min-w-0" placeholder="0" />
                        <IconButton
                           className="w-7 h-7 focus:shadow-none min-w-0"
                           variant='outline'
                           colorScheme='green'
                           fontSize='12px'
                           icon={<FaPlus />}
                        />
                     </div>
                  </div>
               </div>
               <div className="p-3 mb-9 block">
                  <h4 className="font-bold text-md">Produk Detail</h4>
                  <p className="font-normal text-sm pt-3">
                     {product.desc}
                  </p>
               </div>
            </div>
            <div className="relative w-full p-3">
               <Button className="w-full" colorScheme='green' variant='solid'>
                  Add to Card
               </Button>
            </div>
         </main>
      );
   }
}

const fetchData = async (id) => await axios.get(`https://62982b718d77ad6f750d8168.mockapi.io/product/${id}`)
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
   const productDetail = await fetchData(context.query.id);
   return {
      props: {
         productDetail,
      },
   };
}

export default Detail;