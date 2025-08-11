import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

const isGH = process.env.DEPLOY_ENV === "gh";
const site =
	process.env.SITE_URL ||
	(isGH ? "https://<your-user>.github.io/<repo-name>/" : "http://localhost");
const base = process.env.BASE_PATH || (isGH ? "/<repo-name>/" : "/");

export default defineConfig({
	site,
	base,
	integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
	build: { format: "directory" },
});
