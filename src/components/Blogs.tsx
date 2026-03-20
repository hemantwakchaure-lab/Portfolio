"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";
import { PortableText } from "@portabletext/react";

interface BlogPost {
    _id: string;
    title: string;
    slug: { current: string };
    publishedAt: string;
    excerpt: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    coverImage: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    content: any[];
}

export default function Blogs() {
    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const data = await client.fetch<BlogPost[]>(`
                    *[_type == "blog"] | order(publishedAt desc) {
                        _id,
                        title,
                        slug,
                        publishedAt,
                        excerpt,
                        coverImage,
                        content
                    }
                `);
                setBlogs(data);
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };

        fetchBlogs();
    }, []);

    // Placeholder data until Sanity is populated
    const placeholderBlogs = [
        {
            _id: "1",
            title: "SAP on AWS",
            publishedAt: new Date().toISOString(),
            excerpt: "As businesses strive to stay ahead in a rapidly evolving digital landscape, leveraging the right technology becomes paramount. One such powerful integration is SAP on AWS.",
            coverImage: null,
            content: null,
            slug: { current: 'sap-on-aws' }
        },
        {
            _id: "2",
            title: "SAP Gen AI automating Sales Order",
            publishedAt: new Date(Date.now() - 86400000).toISOString(),
            excerpt: "Exploring the capabilities of SAP Generative AI in streamlining and automating the Sales Order process.",
            coverImage: null,
            content: null,
            slug: { current: 'sap-gen-ai-sales-order' }
        },
        {
            _id: "3",
            title: "SAP AI for Brim coming soon.",
            publishedAt: new Date(Date.now() - 172800000).toISOString(),
            excerpt: "A look ahead at the upcoming AI innovations tailored for SAP BRIM (Billing and Revenue Innovation Management).",
            coverImage: null,
            content: null,
            slug: { current: 'sap-ai-brim' }
        }
    ];

    const displayBlogs = blogs.length > 0 ? blogs : placeholderBlogs;

    return (
        <section id="blogs" className="relative z-20 bg-[#121212] py-24 px-8 md:px-24">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-16 md:mb-24 text-center"
                >
                    <h3 className="text-sm uppercase tracking-widest text-blue-400 mb-4 font-bold">
                        Insights & Thoughts
                    </h3>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
                        Latest Blogs
                    </h2>
                    <p className="mt-4 text-neutral-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        Read about my latest explorations in SAP, AWS integrations, Generative AI, and more.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {displayBlogs.map((blog, index) => (
                        <motion.div
                            key={blog._id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                            className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer bg-[#1a1a1a] border border-white/5 hover:border-blue-500/30 transition-all duration-300"
                            onClick={() => setSelectedBlog(blog as BlogPost)}
                        >
                            {/* Background decoration replaced the image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            {/* Dark Gradient Overlay for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                            <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end h-full">

                                <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-blue-300 transition-colors">
                                    {blog.title}
                                </h3>
                                <p className="text-neutral-300 text-sm leading-relaxed mb-6 line-clamp-3 opacity-90">
                                    {blog.excerpt}
                                </p>

                                {/* Read More button */}
                                <div className="inline-flex items-center text-sm font-bold text-white transition-colors focus:outline-none">
                                    Read Article
                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedBlog && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 md:px-8">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedBlog(null)}
                                className="absolute inset-0 bg-black/80 backdrop-blur-md"
                            />

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                className="relative w-full max-w-4xl max-h-[90vh] bg-[#1a1a1a] border border-white/10 rounded-2xl md:rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col"
                            >
                                <button
                                    onClick={() => setSelectedBlog(null)}
                                    className="absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors border border-white/10 backdrop-blur-sm"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                </button>

                                <div className="overflow-y-auto w-full h-full [scrollbar-width:thin] scrollbar-track-transparent scrollbar-thumb-white/10">
                                    {/* Image Header */}
                                    <div className="relative w-full h-64 md:h-96 bg-[#121212] flex items-center justify-center relative overflow-hidden">
                                        {selectedBlog.coverImage ? (
                                            <Image
                                                src={urlFor(selectedBlog.coverImage).url()}
                                                alt={selectedBlog.title}
                                                fill
                                                className="object-cover opacity-60"
                                            />
                                        ) : (
                                            <Image
                                                src={selectedBlog._id === "2" ? "/blogs/SAP%20Gen%20AI%20automating%20Sales%20Order/SAP%20Gen%20AI%20automating%20Sales%20Order%20-%203.PNG" : "/blogs/placeholder.jpg"}
                                                alt={selectedBlog.title}
                                                fill
                                                className="object-cover opacity-60"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                    e.currentTarget.parentElement?.classList.add('bg-gradient-to-br', 'from-blue-900', 'to-neutral-900');
                                                }}
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent" />

                                        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-10">

                                            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                                                {selectedBlog.title}
                                            </h2>
                                        </div>
                                    </div>

                                    {/* Detailed Text Area */}
                                    <div className="p-8 md:p-12 space-y-8 bg-[#1a1a1a]">
                                        <div className="prose prose-invert prose-blue max-w-none prose-img:rounded-xl prose-img:shadow-lg prose-headings:font-bold prose-headings:text-white prose-a:text-blue-400 prose-p:text-neutral-300 prose-p:leading-relaxed prose-strong:text-white">
                                            {selectedBlog.content ? (
                                                <PortableText value={selectedBlog.content} />
                                            ) : (
                                                <div className="whitespace-pre-line text-neutral-300">
                                                    {/* Fallback for the hardcoded placeholder blogs */}
                                                    {selectedBlog._id === "1" ? (
                                                        <>
                                                            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-light">
                                                                As businesses strive to stay ahead in a rapidly evolving digital landscape, leveraging the right technology becomes paramount. One such powerful integration is <span className="font-semibold text-white">SAP on AWS</span>, which brings together the robustness of SAP&apos;s enterprise applications with the scalability and flexibility of Amazon Web Services (AWS). Let&apos;s dive into this integration, exploring each component and how they work together to drive innovation and efficiency.
                                                            </p>
                                                            
                                                            <div className="my-10 relative w-full h-auto rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl">
                                                                <Image
                                                                    src="/blogs/SAP%20on%20AWS/SAP%20on%20Aws.PNG"
                                                                    alt="SAP on AWS Architecture diagram"
                                                                    width={1200}
                                                                    height={600}
                                                                    className="w-full h-auto object-contain"
                                                                />
                                                            </div>

                                                            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mt-16 mb-8 tracking-tight">
                                                                A Closer Look at Each Component
                                                            </h3>
                                                            
                                                            <h4 className="text-xl font-bold text-blue-300 mt-8 mb-3">AWS Cloud</h4>
                                                            <p className="text-neutral-400 bg-white/5 border border-white/5 p-5 rounded-xl">
                                                                The foundation of our setup, AWS Cloud, provides a reliable and scalable infrastructure. It&apos;s like the bedrock upon which everything else is built, ensuring that all components run smoothly and efficiently.
                                                            </p>
                                                            
                                                            <h4 className="text-xl font-bold text-blue-300 mt-8 mb-3">Mobile Apps and Websites</h4>
                                                            <p className="text-neutral-400 bg-white/5 border border-white/5 p-5 rounded-xl">
                                                                These are the user-facing applications that interact with the backend SAP systems. Whether it&apos;s a mobile app for on-the-go access or a website for detailed analysis, these interfaces allow users to interact seamlessly with SAP.
                                                            </p>
                                                            
                                                            <h4 className="text-xl font-bold text-blue-300 mt-8 mb-3">Echo, IoT, and Other Services</h4>
                                                            <p className="text-neutral-400 bg-white/5 border border-white/5 p-5 rounded-xl">
                                                                Imagine controlling your business operations using voice commands or IoT devices. AWS integrates with Echo and IoT services to bring futuristic capabilities into your SAP ecosystem, making operations smarter and more intuitive.
                                                            </p>
                                                            
                                                            <h4 className="text-xl font-bold text-blue-300 mt-8 mb-3">API Gateway</h4>
                                                            <p className="text-neutral-400 bg-white/5 border border-white/5 p-5 rounded-xl">
                                                                Think of the API Gateway as the doorman of a grand hotel. It securely handles and routes incoming requests to the appropriate backend services, ensuring that only authorized traffic gets through. This gateway supports seamless integration and communication between different components.
                                                            </p>
                                                            
                                                            <h4 className="text-xl font-bold text-blue-300 mt-8 mb-3">AWS AppSync</h4>
                                                            <p className="text-neutral-400 bg-white/5 border border-white/5 p-5 rounded-xl">
                                                                AWS AppSync synchronizes data in real-time across mobile apps, websites, and other services. It&apos;s like having a highly efficient conductor ensuring that all parts of the orchestra play in perfect harmony, providing users with up-to-date information at all times.
                                                            </p>
                                                            
                                                            <h4 className="text-xl font-bold text-blue-300 mt-8 mb-3">Amazon Cognito</h4>
                                                            <p className="text-neutral-400 bg-white/5 border border-white/5 p-5 rounded-xl">
                                                                Security is paramount, and Amazon Cognito takes care of that by managing user authentication and authorization. It ensures that only authorized users can access the SAP systems, adding an extra layer of security.
                                                            </p>
                                                            
                                                            <h4 className="text-xl font-bold text-blue-300 mt-8 mb-3">Mobile Hub</h4>
                                                            <p className="text-neutral-400 bg-white/5 border border-white/5 p-5 rounded-xl">
                                                                Mobile Hub simplifies the development and deployment of mobile apps that interact with SAP. It provides a suite of tools and services that help developers create feature-rich mobile applications with ease.
                                                            </p>
                                                            
                                                            <h4 className="text-xl font-bold text-blue-300 mt-8 mb-3">Virtual Private Cloud (VPC)</h4>
                                                            <p className="text-neutral-400 bg-white/5 border border-white/5 p-5 rounded-xl">
                                                                VPC is your private section of the AWS cloud where you can isolate resources for enhanced security and control. It&apos;s like having your own private island in the vast ocean of AWS, ensuring that your operations remain secure and isolated from others.
                                                            </p>
                                                            
                                                            <h4 className="text-xl font-bold text-blue-300 mt-8 mb-3">Public Subnet <span className="text-neutral-500 font-normal text-base ml-2">Application Load Balancer (External)</span></h4>
                                                            <p className="text-neutral-400 bg-white/5 border border-white/5 p-5 rounded-xl">
                                                                Situated in the public subnet, the Application Load Balancer distributes incoming traffic across multiple targets (like EC2 instances). This ensures that your applications remain highly available and can handle varying loads without any hiccups.
                                                            </p>
                                                            
                                                            <h4 className="text-xl font-bold text-blue-300 mt-8 mb-3">Private Subnet <span className="text-neutral-500 font-normal text-base ml-2">Network Load Balancer (Internal)</span></h4>
                                                            <p className="text-neutral-400 bg-white/5 border border-white/5 p-5 rounded-xl">
                                                                In the private subnet, the Network Load Balancer handles internal traffic between the SAP Gateway and SAP applications. It ensures low latency and high throughput for critical backend operations.
                                                            </p>
                                                            
                                                            <h4 className="text-xl font-bold text-blue-300 mt-8 mb-3">Lambda Proxy</h4>
                                                            <p className="text-neutral-400 bg-white/5 border border-white/5 p-5 rounded-xl">
                                                                AWS Lambda allows you to run code in response to events without provisioning or managing servers. The Lambda proxy in this setup acts as a bridge, executing backend logic and integrating various AWS services with SAP.
                                                            </p>
                                                            
                                                            <h4 className="text-xl font-bold text-blue-300 mt-8 mb-3">SAP Gateway and SAP Applications</h4>
                                                            <p className="text-neutral-400 bg-white/5 border border-white/5 p-5 rounded-xl">
                                                                These are the core components of your SAP environment, hosted within the private subnet for enhanced security. The SAP Gateway handles business logic and data processing, communicating with the SAP applications to perform various tasks.
                                                            </p>
                                                            
                                                            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mt-16 mb-8 tracking-tight">
                                                                How It All Comes Together
                                                            </h3>
                                                            <ul className="space-y-4 mb-10 text-neutral-300">
                                                                <li className="flex items-start"><span className="text-blue-400 mr-3 mt-1">●</span> <div><strong className="text-white">User Interaction:</strong> Users interact with the system through mobile apps, websites, Echo, or IoT devices. These interactions are routed through the API Gateway, which handles security and traffic management.</div></li>
                                                                <li className="flex items-start"><span className="text-blue-400 mr-3 mt-1">●</span> <div><strong className="text-white">Data Synchronization:</strong> AWS AppSync ensures that data is synchronized in real-time across all user interfaces, providing up-to-date information to the users.</div></li>
                                                                <li className="flex items-start"><span className="text-blue-400 mr-3 mt-1">●</span> <div><strong className="text-white">Backend Processing:</strong> The API Gateway routes requests to the appropriate services. For instance, Lambda functions might execute specific logic, or the SAP Gateway processes business transactions.</div></li>
                                                                <li className="flex items-start"><span className="text-blue-400 mr-3 mt-1">●</span> <div><strong className="text-white">Internal Traffic Management:</strong> The Network Load Balancer manages internal traffic between SAP components, ensuring smooth communication and high performance.</div></li>
                                                                <li className="flex items-start"><span className="text-blue-400 mr-3 mt-1">●</span> <div><strong className="text-white">Security and Access Control:</strong> Amazon Cognito manages user authentication and authorization, ensuring that only authorized users have access to the system.</div></li>
                                                            </ul>

                                                            <div className="my-12 relative w-full h-auto rounded-xl overflow-hidden bg-white/5 border border-white/10 p-6 flex justify-center shadow-lg">
                                                                <Image
                                                                    src="/blogs/SAP%20on%20AWS/SAP%20on%20AWS%20(2).png"
                                                                    alt="SAP on AWS Component Details"
                                                                    width={800}
                                                                    height={400}
                                                                    className="w-full max-w-3xl h-auto object-contain rounded-lg shadow-sm"
                                                                />
                                                            </div>
                                                            
                                                            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mt-16 mb-6 tracking-tight">
                                                                A Personal Touch: Why This Matters
                                                            </h3>
                                                            
                                                            <div className="border-l-4 border-blue-500 pl-6 py-2 my-8">
                                                                <p className="text-neutral-300 text-lg italic leading-relaxed mb-4">
                                                                    &quot;As someone who has seen the evolution of enterprise systems, the integration of SAP on AWS is a game-changer. It combines the best of both worlds—SAP&apos;s powerful business applications and AWS&apos;s scalable cloud infrastructure.&quot;
                                                                </p>
                                                            </div>
                                                            
                                                            <p className="text-neutral-300 leading-relaxed mb-6">
                                                                This setup not only enhances operational efficiency but also opens doors to innovative possibilities like voice-controlled operations and real-time data synchronization. Imagine walking into your office and simply asking, <span className="text-white font-medium">&quot;Alexa, how&apos;s the sales performance this quarter?&quot;</span> and getting a real-time update, thanks to the seamless integration of Echo and SAP on AWS. This is not just a vision for the future; it&apos;s a reality today.
                                                            </p>
                                                            
                                                            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mt-16 mb-6 tracking-tight">
                                                                Conclusion
                                                            </h3>
                                                            <p className="text-neutral-300 leading-relaxed mb-4">
                                                                Integrating SAP on AWS is more than just a technological advancement; it&apos;s a strategic move towards a more agile, efficient, and innovative business environment. By leveraging the combined power of SAP&apos;s robust applications and AWS&apos;s flexible infrastructure, businesses can achieve new heights of success.
                                                            </p>
                                                            <p className="text-neutral-300 leading-relaxed mb-10">
                                                                Whether you&apos;re an IT professional, a business leader, or a developer, understanding and embracing this integration can help you drive your organization forward in the digital age. So, let&apos;s embark on this journey together and unlock the full potential of SAP on AWS.
                                                            </p>
                                                            
                                                            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/5 rounded-2xl p-8 mt-12 text-center">
                                                                <p className="text-neutral-300 italic mb-4">
                                                                    This blog post was written by <strong className="text-white not-italic text-lg">Hemant Wakchaure</strong>.
                                                                </p>
                                                                <p className="text-neutral-400 mb-6 text-sm">
                                                                    If you have any questions or would like to discuss the topic further, feel free to reach out to me. I&apos;m always happy to connect and share insights.
                                                                </p>
                                                                <a href="mailto:hemant.wakchaure29@gmail.com" className="inline-block px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition-colors font-semibold shadow-lg shadow-blue-500/30">
                                                                    hemant.wakchaure29@gmail.com
                                                                </a>
                                                                
                                                                <p className="mt-8 text-xs text-neutral-500">
                                                                    Reference - <a href="https://aws.amazon.com/blogs/awsforsap/deploy-apis-for-sap-using-amazon-api-gateway/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">AWS for SAP Documentation</a>
                                                                </p>
                                                            </div>
                                                        </>
                                                    ) : selectedBlog._id === "2" ? (
                                                        <>
                                                            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-light">
                                                                Creating sales orders in SAP has traditionally been a manual, time-consuming process involving multiple screens, validations, and back-and-forth inputs. But what if you could simply chat your way through it?
                                                            </p>
                                                            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed font-light mt-4">
                                                                With the power of Generative AI, Microsoft Copilot, and SAP integrations, we can now automate this entire workflow using a conversational interface. Introducing <span className="font-semibold text-white">VisSapBot</span> — a GenAI-powered chatbot that simplifies sales order creation directly from Microsoft Teams.
                                                            </p>
                                                            
                                                            <div className="my-10 relative w-full h-auto rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl">
                                                                <Image
                                                                    src="/blogs/SAP%20Gen%20AI%20automating%20Sales%20Order/SAP%20Gen%20AI%20automating%20Sales%20Order%20-%203.PNG"
                                                                    alt="SAP Gen AI Automating Sales Order overview"
                                                                    width={1200}
                                                                    height={600}
                                                                    className="w-full h-auto object-contain"
                                                                />
                                                            </div>

                                                            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mt-16 mb-8 tracking-tight">
                                                                💡 The Problem
                                                            </h3>
                                                            <p className="text-neutral-300 leading-relaxed mb-4">Sales order creation in SAP often involves:</p>
                                                            <ul className="space-y-3 mb-6 text-neutral-400">
                                                                <li className="flex items-start"><span className="text-blue-500 mr-2">▪</span> <div>Navigating complex UI screens</div></li>
                                                                <li className="flex items-start"><span className="text-blue-500 mr-2">▪</span> <div>Manually entering product and quantity details</div></li>
                                                                <li className="flex items-start"><span className="text-blue-500 mr-2">▪</span> <div>Checking stock availability</div></li>
                                                                <li className="flex items-start"><span className="text-blue-500 mr-2">▪</span> <div>Handling errors and rework</div></li>
                                                            </ul>
                                                            <p className="text-neutral-300 leading-relaxed mb-4">This leads to:</p>
                                                            <ul className="space-y-3 mb-10 text-neutral-400">
                                                                <li className="flex items-center"><span className="text-xl mr-3">⏳</span> <div className="font-medium">Increased processing time</div></li>
                                                                <li className="flex items-center"><span className="text-xl mr-3">❌</span> <div className="font-medium text-red-300">Human errors</div></li>
                                                                <li className="flex items-center"><span className="text-xl mr-3">📉</span> <div className="font-medium text-orange-300">Reduced productivity</div></li>
                                                            </ul>

                                                            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mt-16 mb-8 tracking-tight">
                                                                🤖 The Solution: VisSapBot
                                                            </h3>
                                                            <p className="text-neutral-300 leading-relaxed mb-6">VisSapBot is a conversational AI assistant that allows users to:</p>
                                                            <ul className="space-y-3 mb-10 text-neutral-300">
                                                                <li className="flex items-start"><span className="text-blue-400 mr-3 mt-1">✓</span> <div>Create sales orders using natural language</div></li>
                                                                <li className="flex items-start"><span className="text-blue-400 mr-3 mt-1">✓</span> <div>Validate product availability in real time</div></li>
                                                                <li className="flex items-start"><span className="text-blue-400 mr-3 mt-1">✓</span> <div>Automatically adjust quantities if stock is limited</div></li>
                                                                <li className="flex items-start"><span className="text-blue-400 mr-3 mt-1">✓</span> <div>Confirm and generate orders instantly</div></li>
                                                            </ul>
                                                            
                                                            <div className="bg-white/5 border border-white/10 p-6 rounded-xl mb-12 relative overflow-hidden">
                                                                <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
                                                                <h4 className="text-white font-bold mb-4 flex items-center"><span className="mr-2">👉</span> Example interaction:</h4>
                                                                <div className="space-y-4 font-mono text-sm md:text-base">
                                                                    <div className="flex flex-col bg-white/5 p-3 rounded-lg mr-12">
                                                                        <span className="text-blue-300 font-bold mb-1">User:</span>
                                                                        <span className="text-neutral-200">&quot;Create a sales order for Visteon Display, quantity 10&quot;</span>
                                                                    </div>
                                                                    <div className="flex flex-col bg-blue-900/30 border border-blue-500/20 p-3 rounded-lg ml-12">
                                                                        <span className="text-blue-400 font-bold mb-1">VisSapBot:</span>
                                                                        <span className="text-neutral-200">&quot;Only 5 in stock. Do you want to proceed?&quot;</span>
                                                                    </div>
                                                                    <div className="flex flex-col bg-white/5 p-3 rounded-lg mr-12">
                                                                        <span className="text-blue-300 font-bold mb-1">User:</span>
                                                                        <span className="text-neutral-200">&quot;Yes&quot;</span>
                                                                    </div>
                                                                    <div className="flex flex-col bg-green-900/30 border border-green-500/20 p-3 rounded-lg ml-12">
                                                                        <span className="text-green-400 font-bold mb-1">VisSapBot:</span>
                                                                        <span className="text-white font-semibold">&quot;Sales order #91020202 created successfully ✅&quot;</span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mt-16 mb-8 tracking-tight">
                                                                🏗️ Architecture Overview
                                                            </h3>
                                                            <p className="text-neutral-300 leading-relaxed mb-8">The solution integrates multiple technologies to enable seamless automation:</p>
                                                            
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                                                <div className="bg-[#121212] border border-white/5 p-6 rounded-xl relative group hover:border-blue-500/30 transition-colors">
                                                                    <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center mb-4"><span className="text-blue-400 font-bold text-lg">1</span></div>
                                                                    <h4 className="text-xl font-bold text-white mb-2">Microsoft Teams</h4>
                                                                    <p className="text-neutral-400 text-sm">Acts as the user interface where users interact with the chatbot.</p>
                                                                </div>
                                                                <div className="bg-[#121212] border border-white/5 p-6 rounded-xl relative group hover:border-purple-500/30 transition-colors">
                                                                    <div className="w-10 h-10 bg-purple-500/10 rounded-full flex items-center justify-center mb-4"><span className="text-purple-400 font-bold text-lg">2</span></div>
                                                                    <h4 className="text-xl font-bold text-white mb-2">Copilot Studio</h4>
                                                                    <p className="text-neutral-400 text-sm">Builds and customizes the conversational AI bot. Handles intent recognition and conversation flow.</p>
                                                                </div>
                                                                <div className="bg-[#121212] border border-white/5 p-6 rounded-xl relative group hover:border-blue-500/30 transition-colors">
                                                                    <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center mb-4"><span className="text-blue-400 font-bold text-lg">3</span></div>
                                                                    <h4 className="text-xl font-bold text-white mb-2">Power Automate</h4>
                                                                    <p className="text-neutral-400 text-sm">Acts as the orchestration layer. Connects the chatbot to SAP and executes workflows.</p>
                                                                </div>
                                                                <div className="bg-[#121212] border border-white/5 p-6 rounded-xl relative group hover:border-yellow-500/30 transition-colors">
                                                                    <div className="w-10 h-10 bg-yellow-500/10 rounded-full flex items-center justify-center mb-4"><span className="text-yellow-400 font-bold text-lg">4</span></div>
                                                                    <h4 className="text-xl font-bold text-white mb-2">SAP ERP System</h4>
                                                                    <p className="text-neutral-400 text-sm mb-2">Processes business logic and executes BAPIs such as:</p>
                                                                    <code className="text-xs text-yellow-300 bg-yellow-900/30 px-2 py-1 rounded block mb-1">BAPI_SALESORDER_CREATEFROMDATA</code>
                                                                    <code className="text-xs text-yellow-300 bg-yellow-900/30 px-2 py-1 rounded block">BAPI_SALESORDER_GETSTATUS</code>
                                                                </div>
                                                                <div className="bg-[#121212] border border-white/5 p-6 rounded-xl relative group hover:border-cyan-500/30 transition-colors md:col-span-2">
                                                                    <div className="w-10 h-10 bg-cyan-500/10 rounded-full flex items-center justify-center mb-4"><span className="text-cyan-400 font-bold text-lg">5</span></div>
                                                                    <h4 className="text-xl font-bold text-white mb-2">Azure OpenAI</h4>
                                                                    <p className="text-neutral-400 text-sm">Powers natural language understanding and enables human-like conversations.</p>
                                                                </div>
                                                            </div>
                                                            
                                                            <div className="my-12 relative w-full h-auto rounded-xl overflow-hidden bg-white/5 border border-white/10 p-6 flex justify-center shadow-lg">
                                                                <Image
                                                                    src="/blogs/SAP%20Gen%20AI%20automating%20Sales%20Order/SAP%20Gen%20AI%20automating%20Sales%20Order%20-%204.PNG"
                                                                    alt="SAP Gen AI Workflow components"
                                                                    width={800}
                                                                    height={400}
                                                                    className="w-full max-w-4xl h-auto object-contain rounded-lg shadow-sm"
                                                                />
                                                            </div>

                                                            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mt-16 mb-8 tracking-tight">
                                                                🔄 End-to-End Flow
                                                            </h3>
                                                            <ul className="space-y-4 mb-12 text-neutral-300 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                                                                {[
                                                                    "User sends a request in Microsoft Teams",
                                                                    "Copilot interprets the intent (create sales order)",
                                                                    "Power Automate triggers a workflow",
                                                                    "SAP BAPI checks product availability",
                                                                    "Bot confirms or adjusts quantity",
                                                                    "Sales order is created in SAP",
                                                                    "Confirmation is sent back to the user"
                                                                ].map((step, i) => (
                                                                    <li key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                                                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1a1a1a] shadow absolute left-0 md:mx-auto md:left-1/2 md:-translate-x-1/2 border border-white/20 group-hover:border-blue-400 group-hover:bg-blue-900/40 transition-colors z-10 text-sm font-bold text-white">
                                                                            {i + 1}
                                                                        </div>
                                                                        <div className="w-full pl-14 md:w-5/12 md:pl-0 md:px-8">
                                                                            <div className="p-4 bg-white/5 rounded-xl border border-white/10 group-hover:border-blue-500/20 group-hover:bg-white/10 transition-colors shadow-sm">
                                                                                {step}
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                ))}
                                                            </ul>

                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                                                                <div>
                                                                    <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6 tracking-tight">✨ Key Features</h3>
                                                                    <ul className="space-y-3 text-neutral-300">
                                                                        <li className="flex items-center"><span className="mr-3">💬</span> Conversational interface (no SAP GUI needed)</li>
                                                                        <li className="flex items-center"><span className="mr-3">⚡</span> Real-time stock validation</li>
                                                                        <li className="flex items-center"><span className="mr-3">🔄</span> Dynamic user interaction</li>
                                                                        <li className="flex items-center"><span className="mr-3">🔗</span> Seamless SAP integration</li>
                                                                        <li className="flex items-center"><span className="mr-3">🧠</span> AI-powered understanding</li>
                                                                    </ul>
                                                                </div>
                                                                <div>
                                                                    <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-6 tracking-tight">📈 Business Impact</h3>
                                                                    <ul className="space-y-3 text-neutral-300">
                                                                        <li className="flex items-center"><span className="mr-3">🚀</span> Faster order processing</li>
                                                                        <li className="flex items-center"><span className="mr-3">🎯</span> Reduced manual errors</li>
                                                                        <li className="flex items-center"><span className="mr-3">👩‍💻</span> Improved user experience</li>
                                                                        <li className="flex items-center"><span className="mr-3">📊</span> Increased operational efficiency</li>
                                                                    </ul>
                                                                </div>
                                                            </div>

                                                            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mt-16 mb-8 tracking-tight">
                                                                🔐 Considerations
                                                            </h3>
                                                            <p className="text-neutral-300 leading-relaxed mb-6">While powerful, a few aspects must be handled carefully:</p>
                                                            <div className="flex flex-wrap gap-3 mb-12">
                                                                <span className="px-4 py-2 bg-red-900/20 text-red-300 rounded-full text-sm border border-red-500/20">Data security & SAP controls</span>
                                                                <span className="px-4 py-2 bg-orange-900/20 text-orange-300 rounded-full text-sm border border-orange-500/20">Error handling & fallbacks</span>
                                                                <span className="px-4 py-2 bg-blue-900/20 text-blue-300 rounded-full text-sm border border-blue-500/20">Logging & audit trails</span>
                                                                <span className="px-4 py-2 bg-purple-900/20 text-purple-300 rounded-full text-sm border border-purple-500/20">API performance & latency</span>
                                                            </div>

                                                            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mt-16 mb-8 tracking-tight">
                                                                🔮 Future Enhancements
                                                            </h3>
                                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                                                                <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center">
                                                                    <span className="text-3xl block mb-2">🎙️</span>
                                                                    <p className="text-sm text-neutral-300">Voice-based order creation</p>
                                                                </div>
                                                                <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center">
                                                                    <span className="text-3xl block mb-2">💡</span>
                                                                    <p className="text-sm text-neutral-300">Predictive recommendations</p>
                                                                </div>
                                                                <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center">
                                                                    <span className="text-3xl block mb-2">🔗</span>
                                                                    <p className="text-sm text-neutral-300">Integration with CRM systems</p>
                                                                </div>
                                                                <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center">
                                                                    <span className="text-3xl block mb-2">🌍</span>
                                                                    <p className="text-sm text-neutral-300">Multi-language support</p>
                                                                </div>
                                                            </div>

                                                            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mt-16 mb-6 tracking-tight">
                                                                🏁 Conclusion
                                                            </h3>
                                                            <p className="text-neutral-300 leading-relaxed mb-6">
                                                                VisSapBot demonstrates how Generative AI can transform traditional enterprise workflows into intuitive, conversational experiences. By combining SAP with modern AI tools like Azure OpenAI and Copilot Studio, organizations can unlock a new level of efficiency and user satisfaction.
                                                            </p>
                                                            
                                                            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/5 rounded-2xl p-8 mt-12 text-center">
                                                                <span className="text-3xl mb-4 block">👤</span>
                                                                <p className="text-neutral-300 italic mb-4">
                                                                    This solution was originally designed by <strong className="text-white not-italic text-lg">Hemant Wakchaure</strong> as part of his work as an SAP Program Project Manager Intern.
                                                                </p>
                                                                <p className="text-neutral-400 mb-6 text-sm">
                                                                    For any queries or collaboration opportunities, feel free to reach out.
                                                                </p>
                                                                <a href="mailto:hemant.wakchaure29@gmail.com" className="inline-block px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition-colors font-semibold shadow-lg shadow-blue-500/30">
                                                                    hemant.wakchaure29@gmail.com
                                                                </a>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <div className="flex flex-col items-center justify-center py-12 text-center h-full">
                                                            <svg className="w-16 h-16 text-neutral-600 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                                            </svg>
                                                            <h3 className="text-xl font-bold text-white mb-2">Full Content Coming Soon</h3>
                                                            <p className="text-neutral-400 max-w-sm">The detailed content for this blog post is currently being written or published via the CMS.</p>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>

                                        <div className="pt-8 border-t border-white/10 flex justify-end">
                                            <button
                                                onClick={() => setSelectedBlog(null)}
                                                className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold rounded-full transition-colors border border-white/10"
                                            >
                                                Close Article
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
