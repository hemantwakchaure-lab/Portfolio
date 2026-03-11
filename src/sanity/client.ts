import { createClient } from "next-sanity";

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "v7z0m8k2", // Public fallback for build
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: "2024-03-11", // Use current date
    useCdn: false, // Set false if using ISR/SSR
});
