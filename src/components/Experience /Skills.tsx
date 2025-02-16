import COriginal from "devicons-react/lib/icons/COriginal";
import CsharpOriginal from "devicons-react/lib/icons/CsharpOriginal";
import CplusplusOriginal from "devicons-react/lib/icons/CplusplusOriginal";
import JavaOriginal from "devicons-react/lib/icons/JavaOriginal";
import PythonOriginal from "devicons-react/lib/icons/PythonOriginal";
import JavascriptOriginal from "devicons-react/lib/icons/JavascriptOriginal";
import TypescriptOriginal from "devicons-react/lib/icons/TypescriptOriginal";
import SwiftPlain from "devicons-react/lib/icons/SwiftPlain";
import AngularOriginal from "devicons-react/lib/icons/AngularOriginal";
import ReactOriginal from "devicons-react/lib/icons/ReactOriginal";
import NextjsOriginalWordmark from "devicons-react/lib/icons/NextjsOriginalWordmark";
// import ReactnativeOriginalWordmark from "devicons-react/lib/icons/ReactnativeOriginalWordmark";
import DotNetPlainWordmark from "devicons-react/lib/icons/DotNetPlainWordmark";
import TailwindcssPlainWordmark from "devicons-react/lib/icons/TailwindcssPlainWordmark";
import BootstrapOriginal from "devicons-react/lib/icons/BootstrapOriginal";
import AmazonwebservicesOriginalWordmark from "devicons-react/lib/icons/AmazonwebservicesOriginalWordmark";
import AzureOriginal from "devicons-react/lib/icons/AzureOriginal";
import GitOriginal from "devicons-react/lib/icons/GitOriginal";
import { Slide } from "react-awesome-reveal";

export default function Skills() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-6 justify-center items-center">
      {[
        COriginal,
        CsharpOriginal,
        CplusplusOriginal,
        JavaOriginal,
        PythonOriginal,
        JavascriptOriginal,
        TypescriptOriginal,
        SwiftPlain,
        AngularOriginal,
        ReactOriginal,
        NextjsOriginalWordmark,
        // ReactnativeOriginalWordmark,
        DotNetPlainWordmark,
        TailwindcssPlainWordmark,
        BootstrapOriginal,
        AmazonwebservicesOriginalWordmark,
        AzureOriginal,
        GitOriginal,
      ].map((Icon, index) => (
        <Slide>
          <div
            key={index}
            className="rounded-2xl backdrop-blur-none backdrop-blur p-2 flex justify-center items-center w-full h-full bg-gradient-to-bl from-blue-100 to-pink-100"
          >
            <Icon size={50} className="mx-auto" />
          </div>
        </Slide>
      ))}
    </div>
  );
}
