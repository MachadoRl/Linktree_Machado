import React from "react";
import { Github, Linkedin, Globe, Mail, Download } from 'lucide-react';
import { triTable } from "three/examples/jsm/Addons.js";

export const userData = {
    name: "Rodrigo Lemes Machado",
    bio: "Desenvolvedor Front-End",
    avatarUrl: "https://github.com/MachadoRl.png",
};

export const linksData = [
    {
        id: 1,
        title: "",
        url: "",
        icon: <Globe size={20} />,
    },
    {
        id: 2,
        title: "Github",
        url: "https://github.com/MachadoRl",
        icon: <Github size={20} />
    },
    {
        id: 3,
        title: "Linkedin",
        url: "https://www.linkedin.com/in/rodrigolemesm/",
        icon: <Linkedin size={20} />
    },
    {
        id: 4,
        title: "Me mande um E-mail",
        url: "mailto:rodrigolemes.dev@gmail.com",
        icon: <Mail size={20} />
    },
    {
        id: 5,
        title: "Baixar Currículo",
        url: "../../public/cv-Rodrigo.pdf",
        icon: <Download size={20} />
    }
]