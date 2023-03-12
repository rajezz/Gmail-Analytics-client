import { CSSProperties } from "react";

const styles: CSSProperties = {
    position: "absolute",
    top: "50%",
    textAlign: "center",
    width: "100%",
    fontSize: "16px",
    fontWeight: "500",
};

const secStyles: CSSProperties = {
    marginTop: "10px",
    color: "gray",
    fontSize: "14px",
    fontWeight: "400",
};

export function GoogleLoginFailure() {
    return <div style={styles}>❌ Failed to log in with Google! Try again later.</div>;
}

export function GoogleLoginSuccess() {
    return (
        <div style={styles}>
            ✅ Successfully logged in with Google!
            <div style={secStyles}>You can close this page.</div>
        </div>
    );
}
