import { Suspense, ReactNode } from "react";
import SubLayout from "../client/layout";

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
