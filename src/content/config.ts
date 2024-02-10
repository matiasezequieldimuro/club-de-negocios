import { defineCollection } from "astro/content/runtime";
import { z } from "astro/zod";
const successStoriesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        imageUrl: z.string(),
        text: z.string()
    })
})

export const collections = {
    successStories: successStoriesCollection
}