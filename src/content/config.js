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

const whoWeAreCollection = defineCollection({
    type: 'data',
    schema: ({ image }) => z.object({
        fullname: z.string(),
        photoPath: image(),
        description: z.string()
    })
})

const pricingCollection = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        price: z.string(),
        callToAction: z.string()
    })
})

export const collections = {
    successStories: successStoriesCollection,
    testimonials: testimonialsCollection,
    whoWeAre: whoWeAreCollection,
    pricing: pricingCollection
}