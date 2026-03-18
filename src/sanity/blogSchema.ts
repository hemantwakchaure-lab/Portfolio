export const blog = {
    name: 'blog',
    title: 'Blog Post',
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
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            validation: (Rule: unknown) => (Rule as any).required(),
        },
        {
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
            initialValue: () => new Date().toISOString()
        },
        {
            name: 'excerpt',
            title: 'Excerpt (Card format)',
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
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                }
            ]
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
    preview: {
        select: {
            title: 'title',
            media: 'coverImage',
            date: 'publishedAt'
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        prepare(selection: any) {
            const {title, media, date} = selection;
            return {
                title,
                media,
                subtitle: date ? new Date(date).toLocaleDateString() : ''
            };
        }
    }
};
