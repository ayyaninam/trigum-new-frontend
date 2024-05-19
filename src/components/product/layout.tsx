import SubLayout from '@/app/[locale]/client/layout';
import React from 'react'


type Props = {
    children: React.ReactNode;
    params: { locale: string };
};


const layout = ({
    children,
    params: { locale },
}: Readonly<Props>) => {
    return (
        <SubLayout params={{ locale }}>
            <div>
                {children}
            </div>
        </SubLayout>
    )
}

export default layout