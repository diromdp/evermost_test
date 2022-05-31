import React, { Component } from 'react';
import { Badge, Stack, Progress } from '@chakra-ui/react'

import styles from '../../styles/Home.module.css';
import Header from '../../component/header';

class Compare extends Component {
   constructor(props) {
      super(props);
      this.state = {}
   }
   render() {
      return (
         <>
            <main className={styles.container}>
               <Header
                  urlPage="/"
               />
               <div className="grid grid-cols-2 place-content-center gap-2 mb-4">
                  <div className="text-center">
                     <img className="w-40 m-auto" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="bulbasaur" loading="lazy" />
                     <p className="text-md font-bold mb-2">bulbasaur</p>
                     <figure className="text-center">
                        <Stack direction='row' className="justify-center">
                           <Badge className="rounded-full" colorScheme='green'>Success</Badge>
                           <Badge className="rounded-full" colorScheme='red'>Removed</Badge>
                        </Stack>
                     </figure>
                  </div>
                  <div className="text-center">
                     <img className="w-40 m-auto" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png" alt="ivysaur" loading="lazy" />
                     <p className="text-md font-bold mb-2">bulbasaur</p>
                     <figure className="text-center">
                        <Stack direction='row' className="justify-center">
                           <Badge className="rounded-full" colorScheme='green'>Success</Badge>
                           <Badge className="rounded-full" colorScheme='red'>Removed</Badge>
                        </Stack>
                     </figure>
                  </div>
               </div>
               <section className="shadow-xl p-4 mb-4 rounded-xl">
                  <h2 className="font-bold text-md mb-3">Basic</h2>
                  <table className="container">
                     <tbody>
                        <tr className="text-base">
                           <td className="text-base">Height</td>
                           <td className="text-base">{`0'3" (0.07 m)`}</td>
                           <td className="text-base">{`0'3" (0.07 m)`}</td>
                        </tr>
                        <tr className="text-base">
                           <td className="text-base">Weight</td>
                           <td className="text-base">152.1 lbs (69 kg)</td>
                           <td className="text-base">286.6 lbs (130 kg)</td>
                        </tr>
                     </tbody>
                  </table>
               </section>
               <section className="shadow-xl p-4 mb-4 rounded-xl">
                  <h2 className="font-bold text-md mb-3">Breeding</h2>
                  <table className="container">
                     <tbody>
                        <tr className="text-base">
                           <td>Gender</td>
                           <td>
                              <div className="gender">
                                 <div className="gender-item">
                                    <span className="gender__icon gender__icon--male">♂</span>
                                    <span className="gender__value">87.5%</span>
                                 </div>
                                 <div className="gender-item">
                                    <span className="gender__icon gender__icon--female">♀</span>
                                    <span className="gender__value">12.5%</span>
                                 </div>
                              </div>
                           </td>
                           <td>
                              <div className="gender">
                                 <div className="gender-item">
                                    <span className="gender__icon gender__icon--male">♂</span>
                                    <span className="gender__value">87.5%</span
                                    ></div>
                                 <div className="gender-item">
                                    <span className="gender__icon gender__icon--female">♀</span>
                                    <span className="gender__value">12.5%</span>
                                 </div>
                              </div>
                           </td>
                        </tr>
                        <tr className="text-base">
                           <td>Groups</td>
                           <td>monster, plant</td>
                           <td>monster, plant</td>
                        </tr>
                        <tr className="text-base">
                           <td>Cycles</td>
                           <td>20</td>
                           <td>20</td>
                        </tr>
                     </tbody>
                  </table>
               </section>
               <section className="shadow-xl p-4 mb-4 rounded-xl">
                  <h2 className="font-bold text-md mb-3">Stats</h2>
                  <div className="flex flex-col mb-2">
                     <div className="flex-row flex justify-between">
                        <div className="stats-compare__value">45</div>
                        <p className="stats-compare__name">HP</p>
                        <div className="stats-compare__value">60</div>
                     </div>
                     <div className="grid grid-cols-2 place-content-center gap-1">
                        <Progress isAnimated={true} className="rounded-md" value={40} size='md' colorScheme='facebook' />
                        <Progress isAnimated={true} className="rounded-md" value={40} size='md' colorScheme='facebook' />
                     </div>
                  </div>
                  <div className="flex flex-col mb-2">
                     <div className="flex-row flex justify-between">
                        <div className="stats-compare__value">45</div>
                        <p className="stats-compare__name">HP</p>
                        <div className="stats-compare__value">60</div>
                     </div>
                     <div className="grid grid-cols-2 place-content-center gap-1">
                        <Progress isAnimated={true} className="rounded-md" value={40} size='md' colorScheme='facebook' />
                        <Progress isAnimated={true} className="rounded-md" value={40} size='md' colorScheme='facebook' />
                     </div>
                  </div>
                  <div className="flex flex-col mb-2">
                     <div className="flex-row flex justify-between">
                        <div className="stats-compare__value">45</div>
                        <p className="stats-compare__name">HP</p>
                        <div className="stats-compare__value">60</div>
                     </div>
                     <div className="grid grid-cols-2 place-content-center gap-1">
                        <Progress isAnimated={true} className="rounded-md" value={40} size='md' colorScheme='facebook' />
                        <Progress isAnimated={true} className="rounded-md" value={40} size='md' colorScheme='facebook' />
                     </div>
                  </div>
               </section>
            </main>
         </>
      );
   }
}

export default Compare;