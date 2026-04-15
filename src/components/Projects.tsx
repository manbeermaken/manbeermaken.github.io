import { ExternalLink } from "lucide-react";

const Projects = () => {
    return (
        <section className="bg-blue-50 rounded-md flex flex-col p-4 md:h-auto md:flex-1 md:overflow-y-auto">
            <div className="flex flex-col gap-10 h-full justify-center px-6 py-3">
                <div>
                    <div className="flex gap-1 hover:underline">
                        <a href="https://social.manbeermaken.xyz" target="_blank">
                            <h1 className="text-3xl mb-2 md:text-4xl font-bold">Social</h1>
                        </a>
                        <ExternalLink size={16} />
                    </div>
                    <div>
                        <p>
                            A scalable, high-performance social feed featuring real-time AI content moderation, custom JWT authentication, and seamless infinite scrolling. Built with Next.js, Express, and FastAPI.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="flex gap-1 hover:underline">
                        <a href="https://github.com/manbeermaken/api-rate-limiter" target="_blank">
                            <h1 className="text-3xl mb-2 md:text-4xl font-bold">Api Rate Limiter</h1>
                        </a>
                        <ExternalLink size={16} />
                    </div>
                    <div>
                        <p>
                            A robust API rate limiter that prioritizes developer experience and system stability. Features strict concurrency management via Redis and exposes RFC-compliant headers for seamless client-side backoff strategies.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
