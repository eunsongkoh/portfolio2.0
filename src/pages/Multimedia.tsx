import Videos from "../components/Multimedia/Videos";

export default function Multimedia() {
  return (
    <div className="bg-gradient-to-b from-neutral-850 to-red-100">
      <div className="min-h-screen m-5 py-10">
        <p className="font-stretch-150% text-4xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-rose-50 via-purple-100 to-blue-100 bg-clip-text text-transparent py-3 text-left">
          Multimedia
        </p>
        <Videos />
      </div>
    </div>
  );
}
