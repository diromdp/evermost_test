import React, { Component } from 'react';
import Link from 'next/link';
import ActiveLink from '../activeLink';


class Navbar extends Component {
   constructor(props) {
      super(props);
      this.state = {}
   }

   render() {
      return (
         <div className="container mt-3 sticky bottom-0 bg-white left-0">
            <ul className="p-3 border-t border-gray-200 list-none flex justify-between">
               <li>
                  <ActiveLink style={{ ...styles.active }} href="/">
                     <a style={{ ...styles.itemLink }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <g id="Iconly/Light-Outline/Home">
                              <g id="Home">
                                 <mask id="mask0_33437_4370" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="2" y="1" width="21" height="22">
                                    <path id="Clip 2" fillrule="evenodd" cliprule="evenodd" d="M2 1.00024H22.4998V22.5052H2V1.00024Z" fill="white" />
                                 </mask>
                                 <g mask="url(#mask0_33437_4370)">
                                    <path id="Fill 1" fillrule="evenodd" cliprule="evenodd" d="M13.7168 15.2914C14.9208 15.2914 15.9008 16.2644 15.9008 17.4604V20.5364C15.9008 20.7934 16.1068 20.9994 16.3708 21.0054H18.2768C19.7788 21.0054 20.9998 19.7994 20.9998 18.3174V9.59337C20.9928 9.08337 20.7498 8.60337 20.3328 8.28437L13.7398 3.02637C12.8548 2.32537 11.6168 2.32537 10.7288 3.02837L4.18076 8.28237C3.74776 8.61137 3.50476 9.09137 3.49976 9.61037V18.3174C3.49976 19.7994 4.72076 21.0054 6.22276 21.0054H8.14676C8.41776 21.0054 8.63776 20.7904 8.63776 20.5264C8.63776 20.4684 8.64476 20.4104 8.65676 20.3554V17.4604C8.65676 16.2714 9.63076 15.2994 10.8258 15.2914H13.7168ZM18.2768 22.5054H16.3528C15.2508 22.4794 14.4008 21.6144 14.4008 20.5364V17.4604C14.4008 17.0914 14.0938 16.7914 13.7168 16.7914H10.8308C10.4618 16.7934 10.1568 17.0944 10.1568 17.4604V20.5264C10.1568 20.6014 10.1468 20.6734 10.1258 20.7414C10.0178 21.7314 9.17176 22.5054 8.14676 22.5054H6.22276C3.89376 22.5054 1.99976 20.6264 1.99976 18.3174V9.60337C2.00976 8.60937 2.46776 7.69937 3.25876 7.10037L9.79376 1.85537C11.2328 0.715372 13.2378 0.715372 14.6738 1.85337L21.2558 7.10337C22.0288 7.69237 22.4868 8.60037 22.4998 9.58237V18.3174C22.4998 20.6264 20.6058 22.5054 18.2768 22.5054Z" fill="currentColor" />
                                 </g>
                              </g>
                           </g>
                        </svg>
                        <span className="block text-xs font-normal">

                        </span>
                     </a>
                  </ActiveLink>
               </li>
               <li>
                  <ActiveLink style={{ ...styles.active }} href="/cart">
                     <a style={{ ...styles.itemLink }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <g id="Iconly/Light-Outline/Buy">
                              <g id="Buy">
                                 <g id="Group 7">
                                    <path id="Fill 1" fillRule="evenodd" clipRule="evenodd" d="M6.32772 8.34736L6.93072 15.5194C6.97472 16.0714 7.42572 16.4854 7.97672 16.4854H7.98072H18.8917H18.8937C19.4147 16.4854 19.8597 16.0974 19.9337 15.5824L20.8837 9.02337C20.9057 8.86736 20.8667 8.71136 20.7717 8.58536C20.6777 8.45836 20.5397 8.37636 20.3837 8.35436C20.1747 8.36236 11.5017 8.35036 6.32772 8.34736ZM7.97472 17.9854C6.65772 17.9854 5.54272 16.9574 5.43572 15.6424L4.51972 4.74836L3.01272 4.48836C2.60372 4.41636 2.33072 4.02936 2.40072 3.62036C2.47272 3.21136 2.86772 2.94536 3.26772 3.00936L5.34772 3.36936C5.68272 3.42836 5.93772 3.70637 5.96672 4.04637L6.20172 6.84736C20.4777 6.85336 20.5237 6.86037 20.5927 6.86837C21.1497 6.94937 21.6397 7.24037 21.9737 7.68836C22.3077 8.13537 22.4477 8.68637 22.3677 9.23837L21.4187 15.7964C21.2397 17.0444 20.1557 17.9854 18.8957 17.9854H18.8907H7.98272H7.97472Z" fill="currentColor" />
                                    <path id="Fill 3" fillRule="evenodd" clipRule="evenodd" d="M17.2876 12.0437H14.5156C14.1006 12.0437 13.7656 11.7077 13.7656 11.2937C13.7656 10.8797 14.1006 10.5437 14.5156 10.5437H17.2876C17.7016 10.5437 18.0376 10.8797 18.0376 11.2937C18.0376 11.7077 17.7016 12.0437 17.2876 12.0437Z" fill="currentColor" />
                                    <path id="Fill 5" fillRule="evenodd" clipRule="evenodd" d="M7.54451 20.7019C7.84551 20.7019 8.08851 20.9449 8.08851 21.2459C8.08851 21.5469 7.84551 21.7909 7.54451 21.7909C7.24251 21.7909 6.99951 21.5469 6.99951 21.2459C6.99951 20.9449 7.24251 20.7019 7.54451 20.7019Z" fill="currentColor" />
                                 </g>
                                 <g id="Group 10">
                                    <mask id="mask0_33437_4502" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="6" y="20" width="3" height="2">
                                       <path id="Clip 9" fillRule="evenodd" clipRule="evenodd" d="M6.99902 21.2454C6.99902 21.5474 7.24202 21.7914 7.54502 21.7914C7.84602 21.7914 8.08902 21.5474 8.08902 21.2454C8.08902 20.9444 7.84602 20.7014 7.54502 20.7014C7.24202 20.7014 6.99902 20.9444 6.99902 21.2454Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask0_33437_4502)">
                                       <path id="Fill 8" fillRule="evenodd" clipRule="evenodd" d="M2 26.7904H13.089V15.7014H2V26.7904Z" fill="currentColor" />
                                    </g>
                                 </g>
                                 <g id="Group 15">
                                    <path id="Fill 11" fillRule="evenodd" clipRule="evenodd" d="M7.54351 21.0408C7.43051 21.0408 7.33851 21.1328 7.33851 21.2458C7.33851 21.4728 7.74951 21.4728 7.74951 21.2458C7.74951 21.1328 7.65651 21.0408 7.54351 21.0408ZM7.54351 22.5408C6.82951 22.5408 6.24951 21.9598 6.24951 21.2458C6.24951 20.5318 6.82951 19.9518 7.54351 19.9518C8.25751 19.9518 8.83851 20.5318 8.83851 21.2458C8.83851 21.9598 8.25751 22.5408 7.54351 22.5408Z" fill="currentColor" />
                                    <path id="Fill 13" fillRule="evenodd" clipRule="evenodd" d="M18.8248 20.7019C19.1258 20.7019 19.3698 20.9449 19.3698 21.2459C19.3698 21.5469 19.1258 21.7909 18.8248 21.7909C18.5228 21.7909 18.2798 21.5469 18.2798 21.2459C18.2798 20.9449 18.5228 20.7019 18.8248 20.7019Z" fill="currentColor" />
                                 </g>
                                 <g id="Group 18">
                                    <mask id="mask1_33437_4502" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="18" y="20" width="2" height="2">
                                       <path id="Clip 17" fillRule="evenodd" clipRule="evenodd" d="M18.28 21.2454C18.28 21.5474 18.523 21.7914 18.825 21.7914C19.125 21.7914 19.37 21.5474 19.37 21.2454C19.37 20.9444 19.125 20.7014 18.825 20.7014C18.523 20.7014 18.28 20.9444 18.28 21.2454Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask1_33437_4502)">
                                       <path id="Fill 16" fillRule="evenodd" clipRule="evenodd" d="M13.28 26.7904H24.37V15.7014H13.28V26.7904Z" fill="currentColor" />
                                    </g>
                                 </g>
                                 <path id="Fill 19" fillRule="evenodd" clipRule="evenodd" d="M18.8238 21.0408C18.7118 21.0408 18.6198 21.1328 18.6198 21.2458C18.6208 21.4748 19.0308 21.4728 19.0298 21.2458C19.0298 21.1328 18.9368 21.0408 18.8238 21.0408ZM18.8238 22.5408C18.1098 22.5408 17.5298 21.9598 17.5298 21.2458C17.5298 20.5318 18.1098 19.9518 18.8238 19.9518C19.5388 19.9518 20.1198 20.5318 20.1198 21.2458C20.1198 21.9598 19.5388 22.5408 18.8238 22.5408Z" fill="currentColor" />
                              </g>
                           </g>
                        </svg>
                     </a>
                  </ActiveLink>
               </li>
               <li>
                  <ActiveLink style={{ ...styles.active }} href="/account">
                     <a style={{ ...styles.itemLink }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <g id="Iconly/Light-Outline/Profile">
                              <g id="Profile">
                                 <g id="Group 3">
                                    <mask id="mask0_33437_4900" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="4" y="14" width="16" height="8">
                                       <path id="Clip 2" fillRule="evenodd" clipRule="evenodd" d="M4 14.4961H19.8399V21.8701H4V14.4961Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask0_33437_4900)">
                                       <path id="Fill 1" fillRule="evenodd" clipRule="evenodd" d="M11.9209 15.9961C7.65988 15.9961 5.49988 16.7281 5.49988 18.1731C5.49988 19.6311 7.65988 20.3701 11.9209 20.3701C16.1809 20.3701 18.3399 19.6381 18.3399 18.1931C18.3399 16.7351 16.1809 15.9961 11.9209 15.9961ZM11.9209 21.8701C9.96188 21.8701 3.99988 21.8701 3.99988 18.1731C3.99988 14.8771 8.52088 14.4961 11.9209 14.4961C13.8799 14.4961 19.8399 14.4961 19.8399 18.1931C19.8399 21.4891 15.3199 21.8701 11.9209 21.8701Z" fill="currentColor" />
                                    </g>
                                 </g>
                                 <g id="Group 6">
                                    <mask id="mask1_33437_4900" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="6" y="2" width="12" height="11">
                                       <path id="Clip 5" fillRule="evenodd" clipRule="evenodd" d="M6.60986 2.00012H17.2299V12.6187H6.60986V2.00012Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask1_33437_4900)">
                                       <path id="Fill 4" fillRule="evenodd" clipRule="evenodd" d="M11.9209 3.42776C9.77989 3.42776 8.03789 5.16876 8.03789 7.30976C8.03089 9.44376 9.75989 11.1838 11.8919 11.1918L11.9209 11.9058V11.1918C14.0609 11.1918 15.8019 9.44976 15.8019 7.30976C15.8019 5.16876 14.0609 3.42776 11.9209 3.42776ZM11.9209 12.6188H11.8889C8.9669 12.6098 6.59989 10.2268 6.60989 7.30676C6.60989 4.38176 8.99189 1.99976 11.9209 1.99976C14.8489 1.99976 17.2299 4.38176 17.2299 7.30976C17.2299 10.2378 14.8489 12.6188 11.9209 12.6188Z" fill="currentColor" />
                                    </g>
                                 </g>
                              </g>
                           </g>
                        </svg>
                     </a>
                  </ActiveLink>
               </li>
            </ul>
         </div>
      );
   }
}

export default Navbar;

export const styles = {
   itemLink: {
      margin: 0,
      color: '#AEAEB2'
   },
   active: {
      margin: 0,
   }
};
