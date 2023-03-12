import { useState } from "react";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import { FetchAPI } from "../../utils/axios";

import { GoogleSignInPanel } from "./styles";
import { SERVER_LOGIN_URL, SERVER_AUTH_USER_URL } from "../../_data/urls";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";

import { useAppDispatch } from "../../store";
import { userActions } from "../../services/user/slice";
import { User } from "../../types/user";

export function GoogleSignIn() {
    const navigate = useNavigate();
    const [scopePref, setScopePref] = useState("all");
    const appDispatch = useAppDispatch();

    const verifyUserAuthentication = async () => {
        const [error, response] = await FetchAPI(SERVER_AUTH_USER_URL, { withCredentials: true });

        if (error) {
            console.error("GET api/user/authenticate | Error", error);
            navigate("/login"); // redirect to login page
            return;
        }

        if (response?.data) {
            console.log("GET api/user/authenticate | Response", response.data);

            const user: User = response.data.user as User;

            console.log("user data from server", user);
            
            appDispatch(userActions.addUser({ user }));

            navigate("/"); // redirect to home page
        }
    };

    const openGoogleSignIn = () => {
        let timer: NodeJS.Timeout | null = null;
        const newWindow = window.open(SERVER_LOGIN_URL, "_blank", "width=500,height=600");

        if (newWindow) {
            timer = setInterval(() => {
                const onClosed = () => {
                    console.log("Authenticated with Google!");
                    verifyUserAuthentication();
                    if (timer) clearInterval(timer);
                };

                if (newWindow.closed) {
                    onClosed();
                }

                if (newWindow.location.href.endsWith("/login/success")) {
                    setTimeout(() => {
                        newWindow.close();
                        onClosed();
                    }, 2000);
                }
            }, 500);
        }
    };

    return (
        <GoogleSignInPanel>
            <FormControl sx={{ m: 3, minWidth: "400px" }} size="small">
                <InputLabel id="select-scope-pref-label">Scope Preference</InputLabel>
                <Select
                    labelId="select-scope-pref-label"
                    id="select-scope-pref"
                    value={scopePref}
                    onChange={(e) => setScopePref(e.target.value)}
                    label="Scope Preference"
                >
                    <MenuItem value="all">
                        View, Edit & Delete emails (<em>Complete access</em>)
                    </MenuItem>
                    <MenuItem value="restricted">
                        View emails (<em>Read-only access</em>)
                    </MenuItem>
                </Select>
                <FormHelperText>Select Google OAuth 2.0 Scope</FormHelperText>
            </FormControl>
            <GoogleButton onClick={openGoogleSignIn} />
        </GoogleSignInPanel>
    );
}
