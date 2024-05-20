import React from 'react';
import Banner from '../src/app/components/Banner/index'
import StackyCards from '../src/app/components/StackyCard/index'
import OurWork from '../src/app/components/ourwork/index'
import Companies from '../src/app/components/companies/index'
import Progess from '../src/app/components/progess/index'
import Video from '../src/app/components/video/index'
import Customer from '../src/app/components/customers/index'
import Footer from '../src/app/components/footer/footer';
import Header from '../src/app/components/Header/index'
import { Parallax } from 'react-scroll-parallax';

const Home = () => {
    return (
        <div style={{ margin:0, padding:0}}>
            <Header />
            <Banner />
            <StackyCards />
            <OurWork />
            <Companies />
            <Progess />
            <Video />
            <Customer />
            <Footer />
        </div>
    );
}

export default Home;
