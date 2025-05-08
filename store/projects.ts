import { defineStore } from "pinia";
import type { IProjectCard } from "~~/types/IProjectCard";

export const useProjectsStore = defineStore("projects-store", {
  state: () => {
    return {
      projects: [
        {
          title: "Band Manager",
          type: "webapp",
          isActive: false,
          description:
            "Application to upload/edit/listen to backing tracks, organize sets, and manage a gig calendar. Created for music duo Whiskey Midnight.",
          desktopImage: {
            filename: "bandManager-desktop.PNG",
            altText: "Desktop Screenshot of Band Manager",
          },
          mobileImage: {
            filename: "",
            altText: "Mobile Screenshot of Band Manager",
          },
          sourceCodeUrl: "https://github.com/JShilling4/band-manager",
          demoUrl: "",
          technology: ["Vue3", "Typescript", "Firebase", "HowlerJS"],
        },
        {
          title: "IP Geolocator",
          type: "webapp",
          isActive: true,
          description:
            "Takes a domain or IP address and returns information about the IP address.",
          desktopImage: {
            filename: "ip-geolocator-desktop.png",
            altText: "Desktop Screenshot of IP Geolocator Project",
          },
          mobileImage: {
            filename: "ip-geolocator-mobile.png",
            altText: "Mobile Screenshot of IP Geolocator Project",
          },
          sourceCodeUrl: "https://github.com/JShilling4/ip-tracker",
          demoUrl: "https://justinshilling-ip-geolocator.netlify.app/",
          technology: ["Svelte", "Sass"],
        },
        {
          title: "Blogr (Demo)",
          type: "website",
          isActive: true,
          description: "",
          desktopImage: {
            filename: "blogr-desktop.png",
            altText: "Desktop Screenshot of Blogr Landing Page",
          },
          mobileImage: {
            filename: "blogr-mobile.png",
            altText: "Mobile Screenshot of Blogr Landing Page",
          },
          sourceCodeUrl: "https://github.com/JShilling4/blogr-landing-page",
          demoUrl: "https://justinshilling-blogr-landing-page.netlify.app/",
          technology: ["Vue2", "Sass"],
        },
        {
          title: "Portfolio (Live)",
          type: "website",
          isActive: false,
          description: "",
          desktopImage: {
            filename: "portfolio-desktop.PNG",
            altText:
              "Desktop Screenshot of Justin Shilling's portfolio website",
          },
          mobileImage: null,
          sourceCodeUrl: "https://github.com/JShilling4/portfolio",
          demoUrl: "",
          technology: ["Nuxt3", "Typescript", "Pinia"],
        },
        {
          title: "Easybank (Demo)",
          type: "website",
          isActive: true,
          description: "",
          desktopImage: {
            filename: "easybank-desktop.png",
            altText: "Desktop Screenshot of Easybank Landing Page",
          },
          mobileImage: {
            filename: "easybank-mobile.png",
            altText: "Mobile Screenshot of Easybank Landing Page",
          },
          sourceCodeUrl: "https://github.com/JShilling4/easybank-landing-page",
          demoUrl: "https://justinshilling-easybank-landing-page.netlify.app/",
          technology: ["Vue2", "Sass"],
        },
        {
          title: "Whiskey Midnight (Live)",
          type: "website",
          isActive: true,
          description: "Landing page for the music duo Whiskey Midnight",
          desktopImage: {
            filename: "whiskeyMidnight-desktop.PNG",
            altText: "Desktop Screenshot of Whiskey Midnight home page",
          },
          mobileImage: {
            filename: "",
            altText: "",
          },
          sourceCodeUrl: "https://github.com/JShilling4/band-manager",
          demoUrl: "https://whiskeymidnight.com",
          technology: ["Nuxt3", "Typescript", "Sass"],
        },
        {
          title: "Manage (Demo)",
          type: "website",
          isActive: true,
          description: "",
          desktopImage: {
            filename: "manage-desktop.png",
            altText: "Desktop Screenshot of Manage Landing Page",
          },
          mobileImage: {
            filename: "manage-mobile.png",
            altText: "Mobile Screenshot of Manage Landing Page",
          },
          sourceCodeUrl: "https://github.com/JShilling4/manage-landing-page",
          demoUrl: "https://justinshilling-manage-landing-page.netlify.app/",
          technology: ["Vue2", "Sass"],
        },
        {
          title: "Mortgage Calculator",
          type: "webapp",
          isActive: true,
          description:
            "Reactive mortgage calculator built as widget for B2C websites and applications while at Ruoff Mortgage.",
          desktopImage: {
            filename: "mortgage-calculator-desktop.png",
            altText: "Desktop Screenshot of Mortgage Calculator",
          },
          mobileImage: {
            filename: "mortgage-calculator-mobile.png",
            altText: "Mobile Screenshot of Mortgage Calculator",
          },
          sourceCodeUrl: "https://github.com/JShilling4/mortgage-calculator",
          demoUrl: "https://justinshilling-mortgage-calculator.netlify.app/",
          technology: ["Vue2", "Sass"],
        },
      ],
    };
  },
  actions: {},
  getters: {
    websites: (state) =>
      state.projects.filter((p: IProjectCard) => p.type === "website"),
    applications: (state) =>
      state.projects.filter((p: IProjectCard) => p.type === "webapp"),
  },
});
