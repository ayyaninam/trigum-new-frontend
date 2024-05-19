import SubLayout from "@/app/[locale]/client/layout";
import { Suspense, ReactNode } from "react";



type Props = {
    children: ReactNode;
    params: { locale: string };
};

export default function Layout({ children, params: { locale } }: Props) {
    return (
        <>
        <SubLayout params={{ locale }}>
            <Suspense>
                {children}
            </Suspense>
        </SubLayout>
        </>
    );
}
