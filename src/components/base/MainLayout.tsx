import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer';
import SubLayout from '@/app/[locale]/client/layout';


type Props = {
    children: React.ReactNode;

    locale: string;
};


const MainLayout = ({ children, locale }: Props) => {
    return (
        <>
            <SubLayout params={{ locale }}>
                <Navbar />
            </SubLayout>
            {children}
            <Footer />
        </>
    )
}

export default MainLayout