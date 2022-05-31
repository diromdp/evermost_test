import React, { Component } from 'react';
import Link from 'next/link';
import Image from 'next/image'

class Header extends Component {
   constructor(props) {
      super(props);
      this.state = {}
   }
   render() {
      const { urlPage } = this.props;
      return (
         <div className={`sticky top-0 left-0 m-auto m-0 flex z-10 pl-2 pr-2 border-b border-gray-900`}>
            <div className="flex flex-row justify-between w-full pt-3 pl-3 pr-3 pb-3">
               <h1 className="font-normal text-xl">Grocery</h1>
               <div className="flex">
                  <Link href="#">
                     <a onClick={false}>
                        <Image alt="Vercel logo" src="/img/ic_notif.svg" width={24} height={24} />
                     </a>
                  </Link>
               </div>
            </div>
         </div>
      );
   }
}

export default Header;