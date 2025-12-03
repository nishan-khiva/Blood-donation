import React, { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: 'General', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Replace this with real API call (Formspree, Netlify Forms, your backend, etc.)
    console.log('Contact form submitted:', form)
    setStatus('Thank you! We received your message and will get back to you soon.')
    setForm({ name: '', email: '', phone: '', type: 'General', message: '' })
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">

      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-red-700">Contact Us</h1>
        <p className="mt-3 text-lg text-gray-700">We're here to help — reach out for blood support, volunteering, donations, or any other enquiry.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Contact form */}
        <section className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>

          <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form">
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="name">Full name</label>
              <input required id="name" name="name" value={form.name} onChange={handleChange}
                className="mt-1 block w-full rounded-lg border-gray-200 shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-red-200"
                placeholder="Your full name" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
              <input required type="email" id="email" name="email" value={form.email} onChange={handleChange}
                className="mt-1 block w-full rounded-lg border-gray-200 shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-red-200"
                placeholder="you@example.com" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange}
                className="mt-1 block w-full rounded-lg border-gray-200 shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-red-200"
                placeholder="+91 9XXXXXXXXX" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="type">Enquiry type</label>
              <select id="type" name="type" value={form.type} onChange={handleChange}
                className="mt-1 block w-full rounded-lg border-gray-200 shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-red-200">
                <option>General</option>
                <option>Blood Request</option>
                <option>Volunteering</option>
                <option>Donation</option>
                <option>Partnership</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
              <textarea id="message" name="message" value={form.message} onChange={handleChange} rows="5"
                className="mt-1 block w-full rounded-lg border-gray-200 shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-red-200"
                placeholder="Write your message here..." />
            </div>

            <div className="flex items-center justify-between gap-4">
              <button type="submit" className="inline-block px-6 py-3 rounded-xl bg-red-600 text-white font-semibold shadow hover:opacity-95">
                Send Message
              </button>

              <p className="text-sm text-gray-500">Or call emergency: <strong className="text-red-600">+91 88595 30001</strong></p>
            </div>

            {status && <div role="status" className="p-3 bg-green-50 text-green-800 rounded-lg">{status}</div>}
          </form>
        </section>

        {/* Contact details */}
        <aside className="bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>

            <p className="text-gray-700"><strong>Address:</strong> Sitarganj, Udham Singh Nagar, Uttarakhand, India</p>
            <p className="mt-2 text-gray-700"><strong>Phone:</strong> +91 88595 30001</p>
            <p className="mt-2 text-gray-700"><strong>Email:</strong> susrstrust@gmail.com</p>

            <div className="mt-6">
              <h4 className="font-medium">Working hours</h4>
              <p className="text-gray-600">Mon - Sun: 9:00 AM — 6:00 PM (24/7 for emergency blood requests)</p>
            </div>

            <div className="mt-6">
              <h4 className="font-medium">Quick links</h4>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li><a href="/donate" className="underline">Donate Blood / Money</a></li>
                <li><a href="/volunteer" className="underline">Volunteer with us</a></li>
                <li><a href="/about" className="underline">Learn about our work</a></li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="font-medium">Follow us</h4>
              <div className="flex gap-3 mt-3">
                <a aria-label="Facebook" href="#" className="text-gray-600 hover:text-red-600">Facebook</a>
                <a aria-label="Instagram" href="#" className="text-gray-600 hover:text-red-600">Instagram</a>
                <a aria-label="Twitter" href="#" className="text-gray-600 hover:text-red-600">X</a>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-medium mb-2">Find us</h4>
            {/* Replace the src with your real google maps iframe link */}
            <div className="w-full h-40 rounded-lg overflow-hidden">


              <iframe
                title="SUSRS Trust location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27936.475369690743!2d79.683408479948!3d28.92628604421675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0672c919ba6fb%3A0x5a36632545688dc4!2sSitarganj%2C%20Uttarakhand%20262405!5e0!3m2!1sen!2sin!4v1764769191006!5m2!1sen!2sin"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" />
            </div>
          </div>
        </aside>

      </div>

    </div>
  )
}

export default Contact
