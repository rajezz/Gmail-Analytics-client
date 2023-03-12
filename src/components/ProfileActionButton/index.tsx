import react, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import { useAppSelector } from "../../store";
import { userSelectors } from "../../services/user/slice";
import { AvatarImg } from "./styles";
import { LogoutIcon, ProfileIcon } from "../Icons";

export function ProfileActionButton() {
    const navigate = useNavigate();

    const loggedInuser = useAppSelector((state) => userSelectors.selectAll(state));

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    if (loggedInuser.length === 0) {
        return <Fragment></Fragment>;
    }

    const handleLogout = () => {
        navigate("/profile");
    };
    return (
        <Fragment>
            <Tooltip title="Account settings">
                <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ mr: 2 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                >
                    <Avatar sx={{ width: 32, height: 32 }}>
                        <AvatarImg src={loggedInuser[0].picture} alt="" />
                    </Avatar>
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 2.5,
                        minWidth: 200,
                        "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        "&:before": {
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
                <Tooltip title="Profile">
                    <MenuItem onClick={() => navigate("/profile")}>
                        <ListItemIcon>
                            <ProfileIcon size="24px" />
                        </ListItemIcon>
                        {loggedInuser[0].name}
                    </MenuItem>
                </Tooltip>
                <Divider />
                <Tooltip title="Logout">
                    <MenuItem onClick={handleLogout}>
                        <ListItemIcon>
                            <LogoutIcon size="24px" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Tooltip>
            </Menu>
        </Fragment>
    );
}
