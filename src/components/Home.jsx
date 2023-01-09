import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import Page from './Page'
import { SectionsContainer, Section } from 'react-fullpage';
import Powerwall from './Powerwall';

const Home = props => {
    let options = {
        anchors: ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour', 'sectionFive'],
    };

    return (
        <SectionsContainer {...options}>
            <div className="Home">
                <Section>
                    <Nav />
                    <Page modelName='Model Y' url='https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/0x0/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0' />
                </Section>
                <Section>
                    <Nav />
                    <Page modelName='Model 3' url='https://tesla-cdn.thron.com/delivery/public/image/tesla/03e533bf-8b1d-463f-9813-9a597aafb280/bvlatuR/std/4096x2560/M3-Homepage-Desktop-LHD' />
                </Section>
                <Section>
                    <Nav />
                    <Page modelName='Model X' url='https://tesla-cdn.thron.com/delivery/public/image/tesla/17ecbd59-0e37-4add-8aca-f905d12c02e4/bvlatuR/std/2880x1800/Homepage-Model-X-Desktop-LHD?quality=auto-medium&format=auto' />
                </Section>
                <Section>
                    <Nav />
                    <Page modelName='Model S' url='https://tesla-cdn.thron.com/delivery/public/image/tesla/2056ad87-6a25-403c-89f3-35fe291bdb65/bvlatuR/std/2880x1800/Homepage-Model-S-Desktop-LHD?quality=auto-medium&format=auto' />
                    <Footer />
                </Section>
                <Section>
                    <Nav />
                    <Powerwall />
                </Section>
            </div>
        </SectionsContainer>
    )
}

export default Home