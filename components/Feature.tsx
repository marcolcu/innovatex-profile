import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Modern Design.',
    description:
        'Our websites are crafted with the latest design trends to ensure a visually stunning and user-friendly experience.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Fast Development.',
    description:
        'With our streamlined process, we deliver your website quickly without compromising on quality or performance.',
    icon: LockClosedIcon,
  },
  {
    name: 'Ongoing Support.',
    description:
        'We provide continuous maintenance and support to ensure your website stays up-to-date and runs smoothly.',
    icon: ServerIcon,
  },
];

export default function Feature() {
  return (
      <section id={"feature"} className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-indigo-600">Why Choose Us?</h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  Your Ideal Website Partner
                </p>
                <p className="mt-6 text-lg/8 text-gray-600">
                  Discover the perfect balance of aesthetics, speed, and reliability for your business or personal website.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                      <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                          <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                          {feature.name}
                        </dt>{' '}
                        <dd className="inline">{feature.description}</dd>
                      </div>
                  ))}
                </dl>
              </div>
            </div>
            <img
                alt="Product screenshot"
                src="/web.png"
                width={2432}
                height={1442}
                className="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl z-10 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </section>
  );
}

