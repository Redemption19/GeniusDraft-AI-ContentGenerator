import {
  PencilSquareIcon,
  LightBulbIcon,
  ChartBarIcon,
  SparklesIcon,
  ClockIcon,
  CogIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "AI-Powered Content Creation",
    description:
      "Generate high-quality blog posts effortlessly with our advanced AI technology, tailored to match your unique voice and style.",
    href: "#",
    icon: PencilSquareIcon,
  },
  {
    name: "Content Ideas Generator",
    description:
      "Stuck on what to write about? Our AI can generate a list of trending and relevant topics based on your niche.",
    href: "#",
    icon: LightBulbIcon,
  },
  {
    name: "SEO Optimization",
    description:
      "Enhance your content's search engine visibility with built-in SEO tools that suggest keywords, meta descriptions, and more.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Creative Enhancements",
    description:
      "Add a creative touch to your content with AI-powered suggestions for headlines, intros, and conclusions that captivate readers.",
    href: "#",
    icon: SparklesIcon,
  },
  {
    name: "Time-Saving Automation",
    description:
      "Automate routine tasks like formatting, proofreading, and plagiarism checking, so you can focus on creating great content.",
    href: "#",
    icon: ClockIcon,
  },
  {
    name: "Customization Options",
    description:
      "Customize the AI settings to better suit your writing style and preferences, ensuring each piece of content feels uniquely yours.",
    href: "#",
    icon: CogIcon,
  },
];

export default function AppFeatures() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">
            Elevate Your Blogging Experience
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything You Need for Exceptional Blog Content
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Discover the power of AI-driven content creation. Save time, boost creativity, and optimize your blog posts with GeniusDraft.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon
                    className="h-5 w-5 flex-none text-indigo-400"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-indigo-400"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}