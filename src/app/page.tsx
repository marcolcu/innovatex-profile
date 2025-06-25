"use client";

import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Code, Smartphone, Globe, Database, Users, CheckCircle, ArrowRight, Star} from "lucide-react"
import Link from "next/link"
import Image from "next/image";

export default function SoftwareHouseLanding() {
    const handleWhatsAppClick = () => {
        const phoneNumber = "6281586525868";
        const message = "Hello, I would like to discuss a project.";
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    }

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <header
                className="px-4 lg:px-6 h-14 sm:h-16 flex items-center border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
                <Link href="/" className="flex items-center justify-center">
                    <span className="ml-2 text-lg sm:text-xl font-bold text-gray-900"> InnovateX</span>
                </Link>
                <nav className="ml-auto hidden sm:flex gap-4 sm:gap-6">
                    <Link href="#services" className="text-sm font-medium hover:text-blue-600 transition-colors">
                        Services
                    </Link>
                    <Link href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">
                        About
                    </Link>
                    <Link href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
                        Contact
                    </Link>
                </nav>
            </header>

            <main className="flex-1">
                {/* Hero Section */}
                <section
                    className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-gradient-to-br from-blue-50 to-indigo-100">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col justify-center items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <Badge variant="outline" className="w-fit bg-blue-100 text-blue-700 border-blue-200">
                                    Your Technology Partner
                                </Badge>
                                <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl/none text-gray-900">
                                    Transform Your Business Ideas Into Powerful Software Solutions
                                </h1>
                                <p className="text-gray-600 text-base text-center sm:text-lg md:text-xl">
                                    We partner with ambitious businesses to design, develop, and deploy custom software
                                    that drives
                                    growth, streamlines operations, and delights your customers. Your success is our
                                    mission.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 sm:flex-row">
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto"
                                        onClick={handleWhatsAppClick}>
                                    Start Your Project
                                    <ArrowRight className="ml-2 h-4 w-4"/>
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    onClick={handleWhatsAppClick}
                                    className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50 w-full sm:w-auto"
                                >
                                    Schedule a Consultation
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <Badge variant="outline" className="bg-gray-100 text-gray-700">
                                    What We Do For You
                                </Badge>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                                    Complete Software Solutions Tailored to Your Business
                                </h2>
                                <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    From concept to deployment, we handle every aspect of your software journey so you
                                    can focus on what
                                    you do best - running your business.
                                </p>
                            </div>
                        </div>
                        <div
                            className="mx-auto grid max-w-5xl items-start gap-4 sm:gap-6 py-8 sm:py-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            <Card className="border-2 hover:border-blue-200 transition-colors">
                                <CardHeader>
                                    <Globe className="h-10 w-10 text-blue-600"/>
                                    <CardTitle>Web Applications</CardTitle>
                                    <CardDescription>
                                        Scalable web platforms that grow with your business and engage your customers
                                        24/7
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-4 w-4 text-green-500"/>
                                            Custom web portals & dashboards
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-4 w-4 text-green-500"/>
                                            E-commerce solutions
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-4 w-4 text-green-500"/>
                                            Progressive web apps (PWAs)
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card className="border-2 hover:border-blue-200 transition-colors">
                                <CardHeader>
                                    <Smartphone className="h-10 w-10 text-blue-600"/>
                                    <CardTitle>Mobile Applications</CardTitle>
                                    <CardDescription>
                                        Native and cross-platform mobile apps that connect you directly with your
                                        customers
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-4 w-4 text-green-500"/>
                                            iOS & Android development
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-4 w-4 text-green-500"/>
                                            Cross-platform solutions
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-4 w-4 text-green-500"/>
                                            App store optimization
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card className="border-2 hover:border-blue-200 transition-colors">
                                <CardHeader>
                                    <Database className="h-10 w-10 text-blue-600"/>
                                    <CardTitle>Enterprise Systems</CardTitle>
                                    <CardDescription>
                                        Robust backend systems and integrations that streamline your operations
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-4 w-4 text-green-500"/>
                                            API development & integration
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-4 w-4 text-green-500"/>
                                            Database design & optimization
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="h-4 w-4 text-green-500"/>
                                            Cloud infrastructure setup
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section id="about" className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-gray-50">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col items-center justify-center space-y-6">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2 flex flex-col items-center text-center">
                                    <Badge variant="outline" className="w-fit bg-white text-gray-700">
                                        Why Partner With Us
                                    </Badge>
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                                        Your Success Is Our Priority
                                    </h2>
                                    <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                        We don't just build software - we build lasting partnerships. Our client-first
                                        approach ensures your
                                        project succeeds from day one.
                                    </p>
                                </div>
                                <div className="grid gap-4">
                                    <div className="flex gap-3">
                                        <Users className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0"/>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Dedicated Project Team</h3>
                                            <p className="text-gray-600 text-sm">
                                                Your own team of experts who understand your business and goals
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0"/>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Transparent Communication</h3>
                                            <p className="text-gray-600 text-sm">
                                                Regular updates, clear timelines, and honest feedback throughout
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <ArrowRight className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0"/>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Agile Development Process</h3>
                                            <p className="text-gray-600 text-sm">
                                                Fast iterations, continuous feedback, and adaptable solutions
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                {/*<section id="testimonials" className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32">*/}
                {/*    <div className="px-4 sm:px-6 lg:px-8">*/}
                {/*        <div className="flex flex-col items-center justify-center space-y-4 text-center">*/}
                {/*            <div className="space-y-2">*/}
                {/*                <Badge variant="outline" className="bg-gray-100 text-gray-700">*/}
                {/*                    Client Success Stories*/}
                {/*                </Badge>*/}
                {/*                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">*/}
                {/*                    Trusted by Businesses Like Yours*/}
                {/*                </h2>*/}
                {/*                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">*/}
                {/*                    See how we've helped businesses transform their operations and achieve their goals*/}
                {/*                    through custom*/}
                {/*                    software solutions.*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div*/}
                {/*            className="mx-auto grid max-w-5xl items-start gap-4 sm:gap-6 py-8 sm:py-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">*/}
                {/*            <Card className="bg-white shadow-lg">*/}
                {/*                <CardHeader>*/}
                {/*                    <div className="flex items-center gap-1">*/}
                {/*                        {[...Array(5)].map((_, i) => (*/}
                {/*                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400"/>*/}
                {/*                        ))}*/}
                {/*                    </div>*/}
                {/*                    <CardDescription className="text-gray-600">*/}
                {/*                        "TechCraft transformed our manual processes into a streamlined digital workflow.*/}
                {/*                        Our productivity*/}
                {/*                        increased by 300% and our customers love the new experience."*/}
                {/*                    </CardDescription>*/}
                {/*                </CardHeader>*/}
                {/*                <CardContent>*/}
                {/*                    <div className="flex items-center gap-3">*/}
                {/*                        <div*/}
                {/*                            className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">*/}
                {/*                            <span className="text-blue-600 font-semibold text-sm">SJ</span>*/}
                {/*                        </div>*/}
                {/*                        <div>*/}
                {/*                            <p className="font-semibold text-gray-900">Sarah Johnson</p>*/}
                {/*                            <p className="text-sm text-gray-600">CEO, RetailFlow</p>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </CardContent>*/}
                {/*            </Card>*/}
                {/*            <Card className="bg-white shadow-lg">*/}
                {/*                <CardHeader>*/}
                {/*                    <div className="flex items-center gap-1">*/}
                {/*                        {[...Array(5)].map((_, i) => (*/}
                {/*                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400"/>*/}
                {/*                        ))}*/}
                {/*                    </div>*/}
                {/*                    <CardDescription className="text-gray-600">*/}
                {/*                        "The mobile app they built for us has been a game-changer. Our customer*/}
                {/*                        engagement is through the*/}
                {/*                        roof, and the ROI exceeded our expectations."*/}
                {/*                    </CardDescription>*/}
                {/*                </CardHeader>*/}
                {/*                <CardContent>*/}
                {/*                    <div className="flex items-center gap-3">*/}
                {/*                        <div*/}
                {/*                            className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">*/}
                {/*                            <span className="text-green-600 font-semibold text-sm">MC</span>*/}
                {/*                        </div>*/}
                {/*                        <div>*/}
                {/*                            <p className="font-semibold text-gray-900">Michael Chen</p>*/}
                {/*                            <p className="text-sm text-gray-600">Founder, FitTrack</p>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </CardContent>*/}
                {/*            </Card>*/}
                {/*            <Card className="bg-white shadow-lg">*/}
                {/*                <CardHeader>*/}
                {/*                    <div className="flex items-center gap-1">*/}
                {/*                        {[...Array(5)].map((_, i) => (*/}
                {/*                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400"/>*/}
                {/*                        ))}*/}
                {/*                    </div>*/}
                {/*                    <CardDescription className="text-gray-600">*/}
                {/*                        "Professional, reliable, and truly understands business needs. They delivered*/}
                {/*                        exactly what we*/}
                {/*                        needed, on time and within budget."*/}
                {/*                    </CardDescription>*/}
                {/*                </CardHeader>*/}
                {/*                <CardContent>*/}
                {/*                    <div className="flex items-center gap-3">*/}
                {/*                        <div*/}
                {/*                            className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">*/}
                {/*                            <span className="text-purple-600 font-semibold text-sm">ER</span>*/}
                {/*                        </div>*/}
                {/*                        <div>*/}
                {/*                            <p className="font-semibold text-gray-900">Emily Rodriguez</p>*/}
                {/*                            <p className="text-sm text-gray-600">CTO, LogiCore</p>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </CardContent>*/}
                {/*            </Card>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}

                {/* CTA Section */}
                <section
                    id="contact"
                    className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-gradient-to-r from-blue-600 to-indigo-700"
                >
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                                    Ready to Transform Your Business?
                                </h2>
                                <p className="mx-auto max-w-[600px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Let's discuss your project and explore how we can help you achieve your goals. Get a
                                    free consultation
                                    and project estimate.
                                </p>
                            </div>
                            <div className="w-full max-w-md space-y-2">
                                <div className="flex flex-col sm:flex-row gap-2 pb-4 justify-center w-full max-w-md">
                                    <Button
                                        size="lg"
                                        variant="secondary"
                                        onClick={handleWhatsAppClick}
                                        className="bg-white text-blue-600 hover:bg-blue-50 w-full sm:w-auto"
                                    >
                                        Schedule a Call
                                    </Button>
                                    {/*<Button*/}
                                    {/*    size="lg"*/}
                                    {/*    variant="outline"*/}
                                    {/*    className="border-white text-white bg-transparent hover:text-white hover:bg-white/10 w-full sm:w-auto"*/}
                                    {/*>*/}
                                    {/*    View Our Portfolio*/}
                                    {/*</Button>*/}
                                </div>
                                <p className="text-xs text-blue-200 text-center sm:text-left">
                                    Free consultation • No commitment required • Response within 24 hours
                                </p>
                            </div>

                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */
            }
            <footer
                className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50">
                <div className="flex items-center gap-2">
                    <p className="text-xs text-gray-600">
                        © {new Date().getFullYear()} InnovateX. Crafting software that drives success.
                    </p>
                </div>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link href="/privacy-policy" className="text-xs hover:underline underline-offset-4 text-gray-600">
                        Privacy Policy
                    </Link>
                    <Link href="/terms-of-service" className="text-xs hover:underline underline-offset-4 text-gray-600">
                        Terms of Service
                    </Link>
                </nav>
            </footer>
        </div>
    )
}
