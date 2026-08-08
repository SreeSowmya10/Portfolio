import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sree Sowmya Gaddam Portfolio",
    short_name: "Sree Sowmya",
    description: "Software Engineer portfolio focused on backend, cloud, data, and applied AI.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff"
  };
}