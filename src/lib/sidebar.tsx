"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import styles from "../app/layout.module.scss";
import { sidebarLinks } from "./common/sidebar-links";
import { getWhichSelected } from "../lib/utils/util";

const Sidebar = () => {
    const activeSegment = useSelectedLayoutSegment();

    return (
        <aside className={styles.main_sidebar}>
            <p>
                <a className={styles.red}>Hello red</a>
            </p>
            <p>
                <a className={styles.blue}>Hi blue</a>
            </p>
            <p>
                <a>Hey there</a>
            </p>
            <hr />
            <ul>
                {sidebarLinks.map((link, idx) => {
                    return (
                        <li key={idx}>
                            {link.icon}
                            <Link
                                href={link.path}
                                className={getWhichSelected(
                                    activeSegment,
                                    link.targetSegment,
                                    styles.selected,
                                    styles.unselected
                                )}
                            >
                                {link.label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
};

export default Sidebar;