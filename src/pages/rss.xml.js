import rss from '@astrojs/rss';

export const get = () =>
	rss({
		title: "nat3z.github.io",
		description: "The website for @Nat3z",
		site: import.meta.env.SITE,
		items: import.meta.glob('./blog/**/*.{md,mdx}'),
	});
