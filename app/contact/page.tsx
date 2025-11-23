import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <section className="container mx-auto py-16 max-w-xl">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full border p-3 rounded" />
          <input type="email" placeholder="Email" className="w-full border p-3 rounded" />
          <input type="text" placeholder="Phone" className="w-full border p-3 rounded" />
          <input type="text" placeholder="Company / Organization" className="w-full border p-3 rounded" />
          <textarea placeholder="Project Description" className="w-full border p-3 rounded" rows={5}></textarea>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded font-semibold">
            Submit
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
}
