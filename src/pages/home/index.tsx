import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Layout } from "../../components/Layout";
import { SERVER_EMAILS_URL } from "../../_data/urls";

import { FetchAPI } from "../../utils/axios";


function Home() {
    const navigate = useNavigate();
    
    useEffect((): void => {
        FetchAPI(SERVER_EMAILS_URL, { withCredentials: true }).then(([error, response]) => {
            if (error) {
                console.error("GET api/gmail/emails | Couldn't fetch Emails", JSON.stringify(error, null, 3));
                navigate("/login"); // redirect to login page
                return;
            }

            if (response?.data) {
                console.log("GET api/gmail/emails | Response", JSON.stringify(response.data, null, 3));
            }
        });
    }, []);

    return (
        <Layout title="Home">
            <div className="page">Home page!</div>
        </Layout>
    );
}

export { Home };
