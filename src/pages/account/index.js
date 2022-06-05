import React, { Component } from 'react';
import Image from 'next/image';
import { FaAngleRight } from 'react-icons/fa';

import Header from '../../component/headerBack';
import Navbar from '../../component/navbar';
import styles from '../../styles/Home.module.css';
import Link from 'next/link';


class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <main className={styles.container}>
                <Header 
                    titlePage="Account"
                />
                <div className="container min-h-screen pl-3 pr-3 pt-6">
                    <div className="flex flex-row">
                        <Image 
                            src="https://placeimg.com/640/480/animals/grayscale" 
                            className="rounded-xl" 
                            height="80" 
                            width="80" 
                            alt="image"
                        />
                        <div className="flex flex-col ml-4 mt-4">
                            <h1 className="text-md font-bold" >Muh. Hatta</h1>
                            <Link href="#">
                                <a className="text-xs font-normal text-green-400">Edit Profile</a>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col mt-9">
                        <div className="flex flex-row justify-between border-b pt-4 pb-4">
                            <span>Personal Info</span>
                            <FaAngleRight />
                        </div>
                        <div className="flex flex-row justify-between border-b pt-4 pb-4">
                            <span>My Address</span>
                            <FaAngleRight />
                        </div>
                        <div className="flex flex-row justify-between border-b pt-4 pb-4">
                            <span>Password</span>
                            <FaAngleRight />
                        </div>
                        <div className="flex flex-row justify-between border-b pt-4 pb-4">
                            <span>Help</span>
                            <FaAngleRight />
                        </div>
                        <div className="flex flex-row justify-between pt-4 pb-4">
                            <span>Logout</span>
                            <FaAngleRight />
                        </div>
                    </div>
                </div>
                <Navbar/>
            </main>
        );
    }
}
 
export default Account;