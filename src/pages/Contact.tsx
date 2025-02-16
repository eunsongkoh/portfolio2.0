import ContactMe from "../components/Contact/ContactMe";
export default function Contact() {
  return (
    <div className="bg-gradient-to-t from-zinc-900 to-red-100">
      <div className="min-h-screen">
        <p className="font-stretch-150% text-4xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-rose-50 via-purple-100 to-blue-100 bg-clip-text text-transparent py-3 text-left m-5">
          Contact Me
        </p>
        <ContactMe />
      </div>
    </div>
  );
}
