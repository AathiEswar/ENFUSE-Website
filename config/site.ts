export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Events",
      href: "/events",
    },
    {
      label: "Presentation",
      href: "/presentation",
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
		label: "Image gallery",
		href: "/gallery",
	  },
	  {
		label: "About us",
		href: "/aboutus",
	  }
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
      label: "Presentation",
      href: "/presentation",
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
		label: "Image gallery",
		href: "/gallery",
	  },
	  {
		label: "About us",
		href: "/aboutus",
	  },
	  {
		label: "Blogs",
		href: "/blogs",
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
