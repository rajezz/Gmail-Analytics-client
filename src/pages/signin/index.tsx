import react from "react";
import { Layout } from "../../components/Layout";
import { PageContent } from "./styles";

import { GoogleSignIn } from "../../components/GoogleSignIn";

function LogIn() {
    return (
        <Layout title="Log In">
            <PageContent>
                <GoogleSignIn />
            </PageContent>
        </Layout>
    );
}

export { LogIn };
