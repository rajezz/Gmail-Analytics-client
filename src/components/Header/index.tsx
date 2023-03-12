import react from "react";
import { ProfileActionButton } from "../ProfileActionButton";

import { StyledHeader } from "./styles";

export function Header() {
    return (
        <StyledHeader className="header">
            <div className="title">
                <a href="/" className="title-link">
                    Gmail Analytics
                </a>
            </div>
            <div className="logo">
                <img src="assets/svg/logo.svg" height="40px" width="auto" alt="Logo" />
            </div>
            <ProfileActionButton />
        </StyledHeader>
    );
}
