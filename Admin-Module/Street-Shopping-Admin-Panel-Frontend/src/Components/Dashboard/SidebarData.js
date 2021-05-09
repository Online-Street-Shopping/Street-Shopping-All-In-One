import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as FiUser from "react-icons/fi";
import * as GrDeliver from "react-icons/gr";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Users',
        path: '/users',
        icon: <FiUser.FiUser />,
        cName: 'nav-text'
    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Delivery Boy',
        path: '/deliveryboy',
        icon: <GrDeliver.GrDeliver />,
        cName: 'nav-text'
    },
    {
        title: 'Subscription',
        path: '/subscription',
        icon: <IoIcons.IoMdCash />,
        cName: 'nav-text'
    }
]