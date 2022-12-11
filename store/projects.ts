import { defineStore } from "pinia";
import { IProjectCard } from "~~/types/IProjectCard";

export const useProjectsStore = defineStore({
  id: "projects-store",
  state: () => {
    return {
      projects: [
        {
          title: "Band Manager",
          type: "webapp",
          isActive: false,
          description:
            "Application to upload/edit/listen to backing tracks, organize sets, and manage a gig calendar. Created for music duo Whiskey Midnight. (Vue3, Typescript, Pinia, Firebase, HowlerJs)",
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
          technology: ["Vue3", "Typescript", "Pinia", "Firebase"],
        },
        {
          title: "IP Geolocator",
          type: "webapp",
          isActive: true,
          description:
            "Takes a domain or IP address and returns information about the IP address. (Svelte, Sass)",
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
          technology: ["Svelte", "Axios", "Sass"],
        },
        {
          title: "Blogr Landing Page",
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
          technology: ["Vue", "Scss"],
        },
        // {
        //     title: "Country Look-up",
        //     type: "webapp",
        //     isActive: true,
        //     description: "Side project web app that returns flag and country information with a search field. I used React for the JS & Styled Components for the styles.",
        //     desktopImage: {
        //         filename: "country-lookup-desktop.png",
        //         altText: "Desktop Screenshot of Country Lookup App",
        //     },
        //     mobileImage: {
        //         filename: "country-lookup-mobile.png",
        //         altText: "Mobile Screenshot of Country Lookup App",
        //     },
        //     sourceCodeUrl: "https://github.com/JShilling4/country-lookup",
        //     demoUrl: "https://justinshilling-country-lookup.netlify.app/",
        //     technology: ["React", "Styled Components", "Axios"],
        // },
        {
          title: "Easybank Landing Page",
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
          technology: ["Vue", "Sass"],
        },
        {
          title: "Whiskey Midnight Band Page",
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
          technology: ["Nuxt", "Typescript", "Sass"],
        },
        {
          title: "Manage Landing Page",
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
          technology: ["Vue", "Sass"],
        },
        {
          title: "Mortgage Calculator",
          type: "webapp",
          isActive: true,
          description:
            "Reactive mortgage calculator built as widget for B2C websites and applications while at Ruoff Mortgage. (Vue2/Scss)",
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
          technology: ["Vue", "Sass"],
        },
        // {
        //     title: "Music Hub",
        //     type: "webapp",
        //     isActive: true,
        //     description: "Side project web app that stores and plays personal music collections. Features individual accounts & storage using Vue for the JS, Firebase for the back end, and Tailwind for styles.",
        //     desktopImage: {
        //         filename: "music-hub-desktop.png",
        //         altText: "Desktop Screenshot of Music Hub App",
        //     },
        //     mobileImage: {
        //         filename: "music-hub-mobile.png",
        //         altText: "Mobile Screenshot of Music Hub App",
        //     },
        //     sourceCodeUrl: "https://github.com/JShilling4/music-hub",
        //     demoUrl: "https://justinshilling-music-hub.netlify.app/",
        //     technology: ["Vue", "Vuex", "Tailwind", "Firebase"],
        // },
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
