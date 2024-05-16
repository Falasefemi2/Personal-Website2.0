import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sanity from "astro-sanity";

import sanity from "@sanity/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: "skm4nw2d",
    dataset: "production",
    useCdn: false,
    apiVersion: "2024-05-16", // insert the current date to access the latest version of the API
  })
  [react()], tailwind({
    applyBaseStyles: false
  }), sanity(), react()]
});


