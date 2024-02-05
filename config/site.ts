export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "ENFUSE",
	description: "ENFUSE is committed for continued awareness on efficient energy management and conducts focused conferences,seminars,workshops and training programs in different regions of the country every year,where,professionals and experts in various disciplines from all over the country and abroad,deliberate,interact and share their knowledge and experiences, for the benefit of various stakeholders.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},

    {
      label: "Presentation",
      href: "/presentation",
    },
	{
		label: "Image Gallery",
		href: "/image-gallery",
	  },
    {
      label: "contact us",
      href: "/contactus",
    },
	  {
		label: "About us",
		href: "/aboutus",
	  },
	  {
		label: "Journals",
		href: "/journal",
	  },
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Events",
      href: "/events",
    },
	{
		label: "Journals",
		href: "/journal",
	  },
    {
      label: "Presentation",
      href: "/presentation",
    },
	{
		label: "Image Gallery",
		href: "/image-gallery",
	  },
    {
      label: "Memberships",
      href: "/memberships",
    },
    {
      label: "contact us",
      href: "/contactus",
    },
	  {
		label: "About us",
		href: "/aboutus",
	  },


	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "/memberships"
	},
};
