import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import { Button, IconButton, Input, Skeleton } from '@chakra-ui/react'
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import { formatRupiah } from '../../lib/helper';
import { getDataCart } from '../../store/cart/action';

import Header from '../../component/headerBack';

import styles from '../../styles/Home.module.css';

class Cart extends Component {
   constructor(props) {
      super(props);
      this.state = {}
   }

   UNSAFE_componentWillMount = () => {

   }

   _handlerFilteDataCart = () => {
      const { cart, getDataCart } = this.props;
      const cartData = cart.cartData;
      const filterArr = cartData.filter((item, index) => {
         return index !== cartData.findIndex((v) => v.name === item.name)
      })
      getDataCart(filterArr);
   }

   _handlerDeleteItem = (val) => {
      const { cart, getDataCart } = this.props;
      let cartData = cart.cartData;
      let index = cartData.findIndex(function (o) {
         return o.id === val ;
      })
      console.log(index)

      if (index !== -1) {
         cartData.splice(index, 1);
         getDataCart(cartData)
      }
   }

   render() {
      const { cart } = this.props;
      const cartData = cart.cartData;
      const totalPrice = cartData.reduce((acc, val) => acc + parseInt(val.price), 0);

      console.log(totalPrice)

      return (
         <div className={styles.container}>
            <main className="container">
               <Header
                  urlPage="/"
                  titlePage={`cart`}
               />
               <div className="min-h-screen">
                  <div className="pt-6 pl-3 pr-3">
                     {
                        cartData &&
                        cartData.map(item => {
                           return (
                              <>
                                 <div className="flex flex-row justify-between pb-3 pt-3 border-b border-gray-200">
                                    <Image width="90" height="70" className="rounded-xl" src={item.urlPath} />
                                    <div className="flex flex-col">
                                       <h3 className="font-bold text-md mb-1">{item.name}</h3>
                                       <span className="font-normal text-sm">{item.weight}</span>
                                       <div className="flex flex-row mt-4">
                                          <IconButton
                                             className="w-7 h-7 focus:shadow-none min-w-0"
                                             variant='outline'
                                             colorScheme='green'
                                             onClick={false}
                                             fontSize='12px'
                                             icon={<FaMinus />}
                                          />
                                          <Input
                                             className="border-0 h-7 w-14 text-center focus:shadow-none min-w-0"
                                             placeholder={item.total}
                                             value={item.total}
                                             onChange={false} />
                                          <IconButton
                                             className="w-7 h-7 focus:shadow-none min-w-0"
                                             variant='outline'
                                             colorScheme='green'
                                             onClick={false}
                                             fontSize='12px'
                                             icon={<FaPlus />}
                                          />
                                       </div>
                                    </div>
                                    <div className="relative flex flex-col justify-between items-end">
                                       <Link href="javascript:void(0)">
                                          <a onClick={() => this._handlerDeleteItem(item.id)}>
                                             <FaTrash />
                                          </a>
                                       </Link>
                                       <span className="font-normal text-sm">{formatRupiah(item.price)}</span>
                                    </div>
                                 </div>
                              </>
                           )
                        })
                     }
                  </div>
               </div>
               <div className="sticky bottom-0 bg-white left-0">
                  <div className>
                     <div className="flex flex-row justify-between p-3">
                        <span className="block font-normal text-xs">Total</span>
                        <span className="block text-xs font-normal">{formatRupiah(totalPrice)}</span>
                     </div>
                     <div className="pr-3 pl-3 pb-3">
                        <Button className="w-full" colorScheme="green">Checkout</Button>
                     </div>
                  </div>
               </div>
            </main>
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   const { cart } = state;
   return {
      cart,
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      getDataCart: (val) => dispatch(getDataCart(val)),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);