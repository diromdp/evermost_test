import React, { Component } from 'react';
import { Badge, Stack, Tabs, Tab, TabList, TabPanel, TabPanels, Progress } from '@chakra-ui/react'

import styles from '../../styles/Home.module.css';
import Header from '../../component/header';


class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <main className={styles.container}>
                <Header
                    urlPage="/"
                />
                <div className="container -mt-6">
                    <div className="bg-green-500 relative">
                        <div className="pl-6 pr-6 pt-8">
                            <h3 className="font-bold text-xl">#003</h3>
                            <h3 className="font-bold text-xl">Ivysiur</h3>
                            <div className="pt-2">
                                <Stack direction='row'>
                                    <Badge className="rounded-full" colorScheme='green'>Success</Badge>
                                    <Badge className="rounded-full" colorScheme='red'>Removed</Badge>
                                    <Badge className="rounded-full" colorScheme='purple'>New</Badge>
                                </Stack>
                            </div>
                        </div>
                        <div className="pl-6 pr-6">
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
                        </div>
                    </div>
                    <div className="bg-white -mt-8 rounded-tl-2xl relative rounded-tr-2xl w-full p-6">
                        <Tabs>
                            <TabList>
                                <Tab>About</Tab>
                                <Tab>Base Stats</Tab>
                                <Tab>Evolution</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <p>A strange seed was planted on its back at birth.The plant sprouts and grows with this POKéMON.</p>
                                    <div className="grid grid-cols-4 gap-2 pt-2">
                                        <span className="block text-gray-500 font-normal">Height</span>
                                        <span className="font-normal col-span-3"> {`2'4" (0.7 m)`}</span>
                                    </div>
                                    <div className="grid grid-cols-4 gap-2 pt-2">
                                        <span className="block text-gray-500 font-normal">Weight</span>
                                        <span className="col-span-3"> {`2'4" (0.7 m)`}</span>
                                    </div>
                                    <div className="grid grid-cols-4 gap-2 pt-2">
                                        <span className="block text-gray-500 font-normal">Abilities</span>
                                        <span className="col-span-3"> {`chlorophyll, overgrow`}</span>
                                    </div>
                                    <h3 className="text-md font-bold block mt-3">Breeding</h3>
                                    <div className="grid grid-cols-4 gap-2 pt-2">
                                        <span className="block text-gray-500 font-normal">Gender</span>
                                        <span className="col-span-3"> {`male 80%, female 20%`}</span>
                                    </div>
                                    <div className="grid grid-cols-4 gap-2 pt-2">
                                        <span className="block text-gray-500 font-normal">Egg Groups</span>
                                        <span className="col-span-3"> {`monster, plant`}</span>
                                    </div>
                                    <div className="grid grid-cols-4 gap-2 pt-2">
                                        <span className="block text-gray-500 font-normal">Egg Cycles</span>
                                        <span className="col-span-3"> {`20 (5,100-5,140 steps)`}</span>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="flex-col">
                                        <div className="flex-row justify-between flex mb-2">
                                            <span className="font-normal text-base block">HP</span>
                                            <span className="font-normal text-base block">40</span>
                                        </div>
                                        <Progress className="rounded-md" value={40} size='md' colorScheme='facebook' />
                                    </div>
                                    <div className="flex-col mt-3">
                                        <div className="flex-row justify-between flex mb-2">
                                            <span className="font-normal text-base block">HP</span>
                                            <span className="font-normal text-base block">40</span>
                                        </div>
                                        <Progress className="rounded-md" value={40} size='md' colorScheme='facebook' />
                                    </div>
                                    <div className="flex-col mt-3">
                                        <div className="flex-row justify-between flex mb-2">
                                            <span className="font-normal text-base block">HP</span>
                                            <span className="font-normal text-base block">40</span>
                                        </div>
                                        <Progress className="rounded-md" value={40} size='md' colorScheme='facebook' />
                                    </div>
                                    <div className="flex-col mt-3">
                                        <div className="flex-row justify-between flex mb-2">
                                            <span className="font-normal text-base block">HP</span>
                                            <span className="font-normal text-base block">40</span>
                                        </div>
                                        <Progress className="rounded-md" value={40} size='md' colorScheme='facebook' />
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="container">
                                        <div className="">
                                            <span className="block text-base font-normal">
                                                Level 16+
                                            </span>
                                            <div className="grid grid-cols-3 gap-2 pt-3">
                                                <div className="bg-cyan-200 rounded-2xl p-2">
                                                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
                                                </div>
                                                <div className="flex-row flex justify-center items-center">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>
                                                </div>
                                                <div className="bg-white rounded-2xl p-2">
                                                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pt-8">
                                            <span className="block text-base font-normal">
                                                Level 18+
                                            </span>
                                            <div className="grid grid-cols-3 gap-2 pt-3">
                                                <div className="bg-cyan-200 rounded-2xl p-2">
                                                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
                                                </div>
                                                <div className="flex-row flex justify-center items-center">
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>
                                                </div>
                                                <div className="bg-white rounded-2xl p-2">
                                                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </div>
                </div>
            </main>
        );
    }
}

export default Detail;