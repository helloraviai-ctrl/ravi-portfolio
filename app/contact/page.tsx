
export const metadata = { title: "Contact | Ravi Singh" };

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Contact</h1>
      <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="glass p-6 space-y-4 max-w-xl">
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>Don’t fill this out: <input name="bot-field" /></label>
        </p>
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input name="name" required className="w-full border rounded-2xl px-3 py-2 mt-1" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input name="email" type="email" required className="w-full border rounded-2xl px-3 py-2 mt-1" />
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea name="message" rows={5} required className="w-full border rounded-2xl px-3 py-2 mt-1"></textarea>
        </div>
        <button type="submit" className="rounded-2xl bg-accent text-white px-5 py-2">Send</button>
        <p className="text-sm text-gray-600 mt-2">Or email me at <a href="mailto:helloravi.ai@gmail.com" className="underline">helloravi.ai@gmail.com</a></p>
      </form>
    </div>
  );
}
