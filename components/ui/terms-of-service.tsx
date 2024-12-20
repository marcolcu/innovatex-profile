import React from "react";
import {Button} from "@/components/ui/button";

const TermsOfService = () => {
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
        <h1 className="text-3xl font-extrabold text-gray-900">Terms of Service</h1>
        <p className="mt-4 text-lg text-gray-600">
          These terms and conditions outline the rules and regulations for the use of InnovateX&apos;s website and services.
        </p>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900">Acceptance of Terms</h2>
          <p className="mt-2 text-lg text-gray-600">
            By accessing and using our website or services, you agree to comply with these terms of service.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900">Services Provided</h2>
          <p className="mt-2 text-lg text-gray-600">
            InnovateX provides software solutions, web development, and related services. The specific terms for each
            service will be outlined in a separate agreement.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900">User Responsibilities</h2>
          <p className="mt-2 text-lg text-gray-600">
            As a user, you agree to:
          </p>
          <ul className="mt-2 text-lg text-gray-600 list-inside list-disc">
            <li>Provide accurate and up-to-date information.</li>
            <li>Not use our services for illegal or prohibited activities.</li>
            <li>Not interfere with the operation of the website or services.</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900">Limitation of Liability</h2>
          <p className="mt-2 text-lg text-gray-600">
            InnovateX will not be liable for any damages or losses resulting from the use of our services, including but
            not limited to indirect, incidental, or consequential damages.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900">Changes to Terms</h2>
          <p className="mt-2 text-lg text-gray-600">
            We may update these terms of service at any time. Any changes will be posted on this page, and the updated
            date will be listed at the top of the page.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900">Contact Us</h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have any questions about these terms of service, please contact us at <a
              href="mailto:contact@innovatex.com" className="text-blue-600">contact@innovatex.com</a>.
          </p>
        </section>
      </div>
  );
};

export default TermsOfService;
