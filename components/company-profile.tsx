import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from 'lucide-react';
import Image from "next/image";

export default function CompanyProfile() {
  const pricingTiers = [
    {
      name: "Premium",
      description: "Ideal for creating a professional Company Profile.",
      originalPrice: "IDR 5.000.000",
      discountedPrice: "IDR 4.000.000",
      link: "https://wa.me/6281586525868?text=Hi,%20I%20want%20to%20create%20a%20website%20with%20the%20Premium%20package",
      features: [
        "Responsive website design",
        "Basic content management system",
        "SEO optimization for search engines",
        "1-year domain",
        "Up to 5 pages included",
      ],
    },
    {
      name: "Deluxe",
      description: "Best choice for developing a Management System.",
      originalPrice: "IDR 12.000.000",
      discountedPrice: "IDR 10.000.000",
      link: "https://wa.me/6281586525868?text=Hi,%20I%20want%20to%20create%20a%20website%20with%20the%20Deluxe%20package",
      features: [
        "Custom dashboard and analytics",
        "Role-based user management",
        "Integration with third-party APIs",
        "Automated reports and notifications",
        "Monthly website care and support",
      ],
    },
    {
      name: "Exclusive",
      description: "Tailored solutions by client request.",
      originalPrice: "IDR 20.000.000",
      discountedPrice: "IDR 16.000.000",
      link: "https://wa.me/6281586525868?text=Hi,%20I%20want%20to%20create%20a%20website%20with%20the%20Exclusive%20package",
      features: [
        "Fully customized software development",
        "Scalable and robust architecture",
        "Consultation and planning support",
        "Advanced security features",
        "Dedicated manager and team",
      ],
    },
  ];

  const projects = [
    {
      name: "E-commerce Platform Overhaul",
      client: "MegaMart Inc.",
      description: "Redesigned and optimized the entire e-commerce platform, resulting in a 40% increase in conversion rates and 25% faster page load times.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "AI-Powered Customer Service Bot",
      client: "TechSupport Co.",
      description: "Developed an AI chatbot that handles 70% of customer inquiries automatically, reducing response times by 60% and improving customer satisfaction.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "AI-Powered Customer Service Bot",
      client: "TechSupport Co.",
      description: "Developed an AI chatbot that handles 70% of customer inquiries automatically, reducing response times by 60% and improving customer satisfaction.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-[#2560cd] text-white">
          <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Your Website, Our Expertise</span>
              <span className="block text-blue-200">Crafted with InnovateX Precision</span>
            </h1>
            <p className="mt-6 max-w-lg text-xl sm:max-w-3xl">
              Let us bring your vision to life with expertly designed, responsive, and optimized websites.
              At InnovateX, we specialize in creating tailored solutions that help your business thrive in the digital
              world.
            </p>
            <div className="mt-10">
              <Button size="lg" variant="secondary"
                      onClick={() => window.location.href = "https://wa.me/6281586525868?text=Hi,%20I%20want%20to%20create%20a%20website"}>
                Get in touch
              </Button>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">About Us</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Driving Digital Transformation for Businesses
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                InnovateX is a visionary startup committed to empowering businesses through digital transformation.
                Our mission is to enable organizations to seamlessly digitalize their products, streamline operations,
                and unlock new revenue opportunities.
                With a strong focus on innovation and tailored solutions, we strive to be a trusted partner in helping
                businesses achieve sustainable growth in an ever-evolving digital landscape.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        {/*<section id="projects" className="py-20 bg-gray-100">*/}
        {/*  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">*/}
        {/*    <div className="text-center">*/}
        {/*      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">*/}
        {/*        Our Projects*/}
        {/*      </h2>*/}
        {/*      <p className="mt-4 text-lg text-gray-600">*/}
        {/*        Discover how we&apos;ve helped businesses transform and grow*/}
        {/*      </p>*/}
        {/*    </div>*/}
        {/*    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">*/}
        {/*      {projects.map((project, index) => (*/}
        {/*          <Card key={index} className="flex flex-col bg-white">*/}
        {/*            <Image*/}
        {/*                src={project.image}*/}
        {/*                alt={project.name}*/}
        {/*                width={300}*/}
        {/*                height={200}*/}
        {/*                className="object-cover h-48 w-full rounded-t-lg"*/}
        {/*            />*/}
        {/*            <CardHeader>*/}
        {/*              <CardTitle className="text-black">{project.name}</CardTitle>*/}
        {/*              <CardDescription>{project.client}</CardDescription>*/}
        {/*            </CardHeader>*/}
        {/*            <CardContent>*/}
        {/*              <p className="text-black">{project.description}</p>*/}
        {/*            </CardContent>*/}
        {/*            <CardFooter>*/}
        {/*              <Button variant="outline" className="w-full bg-black text-white hover:bg-black/70">Learn More</Button>*/}
        {/*            </CardFooter>*/}
        {/*          </Card>*/}
        {/*      ))}*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</section>*/}

        {/* Pricing Section */}
        <section id="pricing" className="bg-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Pricing Plans
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Choose the perfect plan for your business needs
              </p>
            </div>
            <div
                className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
              {pricingTiers.map((tier) => (
                  <Card key={tier.name} className="flex flex-col justify-between bg-white shadow-md">
                    <CardHeader>
                      <CardTitle className="text-2xl text-black font-bold">{tier.name}</CardTitle>
                      <CardDescription>{tier.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mt-4 flex flex-col items-baseline text-black font-extrabold">
                    <span className="text-lg font-medium text-gray-500 line-through">
                      {tier.originalPrice}
                    </span>
                        <span className="ml-2 text-2xl">{tier.discountedPrice}</span>
                      </div>
                      <ul className="mt-6 space-y-4">
                        {tier.features.map((feature) => (
                            <li key={feature} className="flex">
                              <Check className="flex-shrink-0 w-6 h-6 text-green-500"/>
                              <span className="ml-3 text-gray-500">{feature}</span>
                            </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button
                          className="w-full bg-black text-white hover:bg-black/70"
                          onClick={() => {
                            // Ambil link dari data pricingTiers berdasarkan nama tier
                            const link = pricingTiers.find(t => t.name === tier.name)?.link;
                            if (link) {
                              window.location.href = link;
                            }
                          }}
                      >
                        {`Get Started with ${tier.name}`}
                      </Button>
                    </CardFooter>
                  </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Contact Us
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Get in touch with our team for any inquiries or support
              </p>
            </div>
            <div className="mt-12 max-w-lg mx-auto">
              <Button className="w-full bg-black text-white hover:bg-black/70"
                      onClick={() => window.location.href = "https://wa.me/6281586525868?text=Hi,%20I%20want%20to%20create%20a%20website"}>
                Contact our team for any inquiries or support
              </Button>
            </div>
          </div>
        </section>
      </div>
  );
}
