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

const testimonialsCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        name: z.string(),
        img: image()
    })
})

export const collections = {
    successStories: successStoriesCollection,
    testimonials: testimonialsCollection
}