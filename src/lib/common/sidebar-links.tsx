import HomeIcon from "@mui/icons-material/Home";
import AdjustIcon from "@mui/icons-material/Adjust";

import { SidebarLinkType } from "./definitions";

const sidebarHome: SidebarLinkType = {
    label: "Home",
    path: "/",
    icon: <HomeIcon />,
    targetSegment: null,
};
const sidebarComponents: SidebarLinkType = {
    label: "Components",
    path: "/components",
    icon: <AdjustIcon />,
    targetSegment: "components",
};
export const sidebarLinks: SidebarLinkType[] = [sidebarHome, sidebarComponents];