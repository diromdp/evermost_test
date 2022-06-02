import React, { Component } from 'react';

import Header from '../../component/headerBack';
import Navbar from '../../component/navbar';

import styles from '../../styles/Home.module.css';

class ListProduct extends Component {
   constructor(props) {
      super(props);
      this.state = {}
   }

   render() {
      return (
         <main className={styles.container}>
            <Header
               urlPage="/"
               titlePage="Fresh Meat"
            />
            <div className="container min-h-screen">
               <div className="pt-6 grid grid-cols-2 gap-3 pl-3 pr-3">
                  <div className="rounded-xl bg-neutral-200 p-3">
                     <div className="text-center m-auto mb-3">
                        <img className="m-auto w-auto h-full object-cover" src="/img/product/apple.png" />
                     </div>
                     <div className>
                        <h4 className="font-semibold text-xs">Fresh Premium Apple Indonesia</h4>
                        <span className="font-normal text-xs block mt-1">200gr</span>
                        <div className>
                           <span className="font-semibold text-sm text-green-500 mt-3 block">
                              Rp 8.000
                           </span>
                        </div>
                     </div>
                  </div>
                  <div className="rounded-xl bg-neutral-200 p-3">
                     <div className="text-center m-auto mb-3">
                        <img className="m-auto w-auto h-full object-cover" src="/img/product/apple.png" />
                     </div>
                     <div className>
                        <h4 className="font-semibold text-xs">Fresh Premium Apple Indonesia</h4>
                        <span className="font-normal text-xs block mt-1">200gr</span>
                        <div className>
                           <span className="font-semibold text-sm text-green-500 mt-3 block">
                              Rp 8.000
                           </span>
                        </div>
                     </div>
                  </div>
                  <div className="rounded-xl bg-neutral-200 p-3">
                     <div className="text-center m-auto mb-3">
                        <img className="m-auto w-auto h-full object-cover" src="/img/product/apple.png" />
                     </div>
                     <div className>
                        <h4 className="font-semibold text-xs">Fresh Premium Apple Indonesia</h4>
                        <span className="font-normal text-xs block mt-1">200gr</span>
                        <div className>
                           <span className="font-semibold text-sm text-green-500 mt-3 block">
                              Rp 8.000
                           </span>
                        </div>
                     </div>
                  </div>
                  <div className="rounded-xl bg-neutral-200 p-3">
                     <div className="text-center m-auto mb-3">
                        <img className="m-auto w-auto h-full object-cover" src="/img/product/apple.png" />
                     </div>
                     <div className>
                        <h4 className="font-semibold text-xs">Fresh Premium Apple Indonesia</h4>
                        <span className="font-normal text-xs block mt-1">200gr</span>
                        <div className>
                           <span className="font-semibold text-sm text-green-500 mt-3 block">
                              Rp 8.000
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <Navbar />
         </main>
      );
   }
}

export default ListProduct;