import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'About',
    path: '/#about',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Tracks',
    path: '/#track',
    icon: <FaIcons.FaDotCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Timeline',
    path: '/#timeline',
    icon: <AiIcons.AiFillClockCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Prizes & Results',
    path: '/prize',
    icon: <AiIcons.AiTwotoneTrophy />,
    cName: 'nav-text'
  },
  {
    title: 'Wildcard',
    path: '/register',
    icon: <FaIcons.FaLaptopCode />,
    cName: 'nav-text'
  },
  {
    title: 'FAQs',
    path: '/#faq',
    icon: <AiIcons.AiFillQuestionCircle />,
    cName: 'nav-text'
  },
  {
    title: 'ContactUs',
    path: '/#contact',
    icon: <AiIcons.AiFillContacts />,
    cName: 'nav-text'
  }



];