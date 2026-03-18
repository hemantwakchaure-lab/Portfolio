import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { sapCapability } from './src/sanity/schema'
import { blog } from './src/sanity/blogSchema'

export default defineConfig({
    basePath: '/studio',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'v7z0m8k2',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    title: 'Portfolio Admin',
    schema: {
        types: [sapCapability, blog],
    },
    plugins: [structureTool()],
})

