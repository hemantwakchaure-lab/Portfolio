export const sapCapability = {
    name: 'sapCapability',
    title: 'SAP Capability (Blog)',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            validation: (Rule: unknown) => (Rule as any).required(),
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Project', value: 'Project' },
                    { title: 'Ideation', value: 'Ideation' },
                    { title: 'Cloud Strategy', value: 'Cloud Strategy' },
                    { title: 'Generative AI', value: 'Generative AI' },
                    { title: 'Capability', value: 'Capability' }
                ]
            },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            validation: (Rule: unknown) => (Rule as any).required(),
        },
        {
            name: 'description',
            title: 'Short Description (Card format)',
            type: 'text',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            validation: (Rule: unknown) => (Rule as any).required().max(200),
        },
        {
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            options: {
                hotspot: true, // Allows user to pick focal point
            },
        },
        {
            name: 'content',
            title: 'Rich Text Content',
            type: 'array',
            of: [
                { type: 'block' },
                { type: 'image' }
            ],
        },
    ],
};
