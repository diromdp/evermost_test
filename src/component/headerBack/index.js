import React, { Component } from 'react';
import Link from 'next/link';

class HeaderBack extends Component {
   constructor(props) {
      super(props);
      this.state = {}
   }

   render() {
      const { urlPage, titlePage } = this.props;
      return (
         <div className={`sticky top-0 left-0 m-auto m-0 flex z-10 pl-3 pr-3 border-b border-gray-200 bg-white z-10`}>
            <div className="flex flex-row w-full pt-3 pb-3">
               <div className="flex">
                  {
                     urlPage &&
                     <Link href={urlPage}>
                        <a onClick={false}>
                           <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.5 19L8.5 12L15.5 5" stroke="#130F26" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                           </svg>
                        </a>
                     </Link>
                  }
               </div>
               {
                  titlePage &&
                  <h1 className="font-normal text-xl ml-6">{titlePage}</h1>
               }
            </div>
         </div>
      );
   }
}

export default HeaderBack;