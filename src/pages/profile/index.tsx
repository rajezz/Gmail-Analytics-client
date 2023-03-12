import react from "react";
import { Layout } from "../../components/Layout";
import { PageContent } from "./styles";


export function Profile() {
    
    return (
        <Layout title="Profile">
            <PageContent>
                <table>
                    <tr>
                        <td>Name:</td>
                        <td>{ }</td>
                    </tr>
                </table>
            </PageContent>
        </Layout>
    );
}