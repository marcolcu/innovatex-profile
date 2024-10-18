import React from 'react';
import Link from "next/link";

const PackageCard = ({ title, price, oldPrice, features }: { title: string; price: string; oldPrice?: string; features: string[] }) => {
  return (
      <div className="border rounded-lg shadow-lg overflow-hidden max-w-sm ">
        <div className="p-6 text-white border-b-2">
          <h3 className="text-3xl text-center font-bold mb-2">{title}</h3>
        </div>
        <div className="p-6">
          <ul className="mb-6 space-y-2">
            {features.map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <span className="text-blue-700">•</span>
                  <span className="text-white">{feature}</span>
                </li>
            ))}
          </ul>
          <div className="text-center">
            {oldPrice && (
                <p className="text-sm text-gray-500 line-through mb-2">
                  {oldPrice}
                </p>
            )}
            <p className="text-2xl font-bold text-purple">{price}</p>
          </div>
        </div>
      </div>
  );
};

const PackagesSection = () => {
  const packages = [
    {
      title: 'Premium',
      price: 'IDR 3.000.000',
      oldPrice: 'IDR 4.000.000',
      features: [
        'Company Profile',
        'Free Web Design',
        'Website Storage',
        '2x Revision',
        'Basic SEO Optimization',
        'UI/UX Optimization',
        'Modern Design',
      ],
    },
    {
      title: 'Deluxe',
      price: 'IDR 6.000.000',
      oldPrice: 'IDR 7.000.000',
      features: [
        'Management System',
        'Bigger Website Storage',
        'All Basic Plan Features',
        '3x Revision',
        'Unique Design / Can Request',
        'Advanced SEO Optimization',
        'Multi Language',
      ],
    },
    {
      title: 'Exclusive',
      price: 'IDR 9.000.000',
      oldPrice: 'IDR 10.000.000',
      features: [
        'Request by Client',
        'Biggest Website Storage',
        'All Plan Features',
        '6x Revision',
        'Client Request',
        'Advanced SEO Optimization',
        'Multi Language',
      ],
    },
  ];

  return (
      <section id="package" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="heading font-bold text-center text-white mb-8">Our Packages</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {packages.map((pkg, idx) => (
                <Link key={idx} target="_blank" href="https://wa.me/6281586525868?text=Hi,%20saya%20ingin%20membuat%20website">
                  <PackageCard key={idx} title={pkg.title} price={pkg.price} oldPrice={pkg.oldPrice} features={pkg.features} />
                </Link>
            ))}
          </div>
        </div>
      </section>
  );
};

export default PackagesSection;
