import { StaticImageData } from "next/image";

import demo_1 from "@/assets/img/demo/demo-1.jpg"
import demo_2 from "@/assets/img/demo/demo-2.jpg"
import demo_3 from "@/assets/img/demo/demo-3.jpg"
import demo_4 from "@/assets/img/demo/coming-soon.jpg"

interface MenuItem {
    id: number;
    page: string;
    title: string;
    link: string;
    has_dropdown: boolean;
    mega_menu?: boolean;
    sub_menus?: {
        link: string;
        title: string;
        demo_pic?: StaticImageData;
    }[];
}[];

const menu_data: MenuItem[] = [

    {
        id: 1,
        page: "home_1",
        has_dropdown: true,
        title: "Home",
        link: "#",
        mega_menu: true,
        sub_menus: [
            { link: "/", title: "Blockchain", demo_pic: demo_1 },
            { link: "/home-two", title: "Bitcoin Mining", demo_pic: demo_2 },
            { link: "/home-three", title: "ICO", demo_pic: demo_3 },
            { link: "#", title: "Coming Soon", demo_pic: demo_4 },
        ],
    },
    {
        id: 2,
        page: "home_1",
        has_dropdown: false,
        title: "Feature",
        link: "/#feature",
    },
    {
        id: 3,
        page: "home_1",
        has_dropdown: false,
        title: "Team",
        link: "/#team",
    },
    {
        id: 4,
        page: "home_1",
        has_dropdown: false,
        title: "Roadmap",
        link: "/#roadmap",
    },
    {
        id: 5,
        page: "home_1",
        has_dropdown: true,
        title: "Blog",
        link: "#",
        sub_menus: [
            { link: "/blog", title: "Blog" },
            { link: "/blog-details", title: "Blog Details", },
        ],
    },
    {
        id: 6,
        page: "home_1",
        has_dropdown: false,
        title: "Contact",
        link: "/contact",
    },

    // home_2

    {
        id: 1,
        page: "home_2",
        has_dropdown: true,
        title: "Home",
        link: "#",
        sub_menus: [
            { link: "/", title: "Blockchain", },
            { link: "/home-two", title: "Bitcoin Mining", },
            { link: "/home-three", title: "ICO", },
        ],
    },
    {
        id: 2,
        page: "home_2",
        has_dropdown: false,
        title: "Pricing",
        link: "/home-two/#pricing",
    },
    {
        id: 3,
        page: "home_2",
        has_dropdown: false,
        title: "Services",
        link: "/home-two/#services",
    },
    {
        id: 4,
        page: "home_2",
        has_dropdown: false,
        title: "Product",
        link: "/home-two/#product",
    },
    {
        id: 5,
        page: "home_2",
        has_dropdown: true,
        title: "Blog",
        link: "#",
        sub_menus: [
            { link: "/blog", title: "Blog" },
            { link: "/blog-details", title: "Blog Details", },
        ],
    },
    {
        id: 6,
        page: "home_2",
        has_dropdown: false,
        title: "Contact",
        link: "/contact",
    },

    // home_3

    {
        id: 1,
        page: "home_3",
        has_dropdown: true,
        title: "Home",
        link: "#",
        mega_menu: true,
        sub_menus: [
            { link: "/", title: "Blockchain", demo_pic: demo_1 },
            { link: "/home-two", title: "Bitcoin Mining", demo_pic: demo_2 },
            { link: "/home-three", title: "ICO", demo_pic: demo_3 },
            { link: "#", title: "Coming Soon", demo_pic: demo_4 },
        ],
    },
    {
        id: 2,
        page: "home_3",
        has_dropdown: false,
        title: "About",
        link: "/home-three/#about",
    },
    {
        id: 3,
        page: "home_3",
        has_dropdown: false,
        title: "Roadmap",
        link: "/home-three/#roadmap",
    },
    {
        id: 4,
        page: "home_3",
        has_dropdown: false,
        title: "Team",
        link: "/home-three/#team",
    },
    {
        id: 5,
        page: "home_3",
        has_dropdown: true,
        title: "Blog",
        link: "#",
        sub_menus: [
            { link: "/blog", title: "Blog" },
            { link: "/blog-details", title: "Blog Details", },
        ],
    },
    {
        id: 6,
        page: "home_3",
        has_dropdown: false,
        title: "Contact",
        link: "/contact",
    },
];
export default menu_data;
