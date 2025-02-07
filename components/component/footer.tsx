import Link from "next/link"

export function Footer() {
  return (
      <footer className="bg-white py-10 md:py-16">
        <div className="container grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2" prefetch={false}>
              <span className="text-lg font-bold text-gray-900">InnovateX</span>
            </Link>
            <p className="text-gray-900">
              Transform your ideas into reality with tailored software solutions. At InnovateX, we deliver precision,
              scalability, and success for your business.
            </p>
          </div>
          <div className="grid gap-2">
            <h3 className="text-lg font-semibold text-gray-900">Follow Us</h3>
            <div className="flex gap-2">
              <Link href="https://www.instagram.com/innovate._x/" className="text-gray-900 hover:text-muted-foreground" prefetch={false}>
                <InstagramIcon className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com/company/innovatex-sh" className="text-gray-900 hover:text-muted-foreground" prefetch={false}>
                <LinkedinIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="grid gap-2">
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <Link href="#home" className="text-gray-900 hover:text-muted-foreground" prefetch={false}>
              Home
            </Link>
            <Link href="#feature" className="text-gray-900 hover:text-muted-foreground" prefetch={false}>
              Features
            </Link>
            <Link href="#pricing" className="text-gray-900 hover:text-muted-foreground" prefetch={false}>
              Pricing
            </Link>
            <Link href="#contact" className="text-gray-900 hover:text-muted-foreground" prefetch={false}>
              Contact
            </Link>
          </div>
          <div className="grid gap-2">
            <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <PhoneIcon className="h-5 w-5 text-gray-900" />
                <span className="text-gray-900">+62 815-8652-5868</span>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon className="h-5 w-5 text-gray-900" />
                <span className="text-gray-900">marketing@innovatexsh.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPinIcon className="h-5 w-5 text-gray-900" />
                <span className="text-gray-900">Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-8 flex flex-col items-center gap-2 border-t pt-8 text-sm text-gray-900 md:flex-row md:justify-between">
          <p>&copy; 2025 InnovateX. All rights reserved.</p>
          <nav className="flex gap-4">
            <Link href="/privacy-policy" className="hover:underline text-gray-900" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:underline text-gray-900" prefetch={false}>
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
  )
}

function InstagramIcon(props: any) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
  )
}

function LinkedinIcon(props: any) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
  )
}

function MailIcon(props: any) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
  )
}

function MapPinIcon(props: any) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
  )
}

function PhoneIcon(props: any) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
  )
}
