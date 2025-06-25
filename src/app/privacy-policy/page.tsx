"use client";

import React from "react";
import {Button} from "@/components/ui/button";

const PrivacyPolicy = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="my-8">
                <Button
                    onClick={() => window.history.back()}
                    className="px-6 py-3 text-white bg-black rounded-md hover:bg-black/70"
                >
                    Back
                </Button>
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900">Privacy Policy</h1>
            <p className="mt-4 text-lg text-gray-600">
                Your privacy is important to us. This privacy policy explains the types of personal information we
                collect,
                how we use it, and how we protect your data.
            </p>

            <section className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-900">Information We Collect</h2>
                <p className="mt-2 text-lg text-gray-600">
                    We collect the following types of information:
                </p>
                <ul className="mt-2 text-lg text-gray-600 list-inside list-disc">
                    <li>Personal information such as your name, email address, and contact details.</li>
                    <li>Usage data such as how you interact with our website and services.</li>
                    <li>Cookies and tracking technologies to improve user experience.</li>
                </ul>
            </section>

            <section className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-900">How We Use Your Information</h2>
                <p className="mt-2 text-lg text-gray-600">
                    The information we collect is used for the following purposes:
                </p>
                <ul className="mt-2 text-lg text-gray-600 list-inside list-disc">
                    <li>To provide and improve our services.</li>
                    <li>To communicate with you regarding updates, offers, and customer support.</li>
                    <li>To analyze website usage and improve user experience.</li>
                </ul>
            </section>

            <section className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-900">Data Security</h2>
                <p className="mt-2 text-lg text-gray-600">
                    We take the security of your personal information seriously and implement appropriate security
                    measures to
                    protect your data.
                </p>
            </section>

            <section className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-900">Changes to This Policy</h2>
                <p className="mt-2 text-lg text-gray-600">
                    We may update this privacy policy from time to time. Any changes will be posted on this page with an
                    updated
                    date.
                </p>
            </section>

            <section className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-900">Contact Us</h2>
                <p className="mt-2 text-lg text-gray-600">
                    If you have any questions or concerns about our privacy policy, please contact us at <a
                    href="mailto:contact@innovatex.com" className="text-blue-600">contact@innovatex.com</a>.
                </p>
            </section>
        </div>
    );
};

export default PrivacyPolicy;