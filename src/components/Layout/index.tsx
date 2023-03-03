import * as React from "react";
import Helmet from "react-helmet";

import {Footer} from "../Footer";
import {Header} from "../Header";
import { Page } from "./styles";

interface Props {
    children: JSX.Element;
    title: string;
}

export const Layout = ({children, title}: Props) => {
    return (
        <Page>
            <Helmet>
                <title>{title} | Gmail Analtyics</title>
            </Helmet>
            <Header />
            {children}
            <Footer />
        </Page>
    );
};
