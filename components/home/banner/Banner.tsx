"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Banner = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Navigation */}
      <nav className="absolute top-0 z-10 w-full px-6 py-4 flex items-center justify-between">
        <div className="bg-gray-200 px-6 py-3">
          <span className="text-xl font-bold">LOGO</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <NavItem text="Lorem Ipsum" />
          <NavItem text="Lorem Ipsum" />
          <NavItem text="Lorem Ipsum" />
        </div>
        <Button variant="secondary" className="rounded-full">
          Sign In
        </Button>
      </nav>

      {/* Content Container */}
      <div className="relative flex min-h-screen">
        {/* Left Content */}
        <div className="w-full md:w-[55%] pt-32 px-6 md:px-12 lg:px-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-xl">
            Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis
            elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea
            morbi libero imperdiet neque. Justo suspendisse tristique posuere
            quis eget viverra. Nunc euismod ultrices etiam nulla habitasse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
            />
            <Button className="rounded-full whitespace-nowrap">
              Submit <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground">
              <Check className="h-3 w-3" />
            </div>
            <span>No credit card required!</span>
          </div>
        </div>

        {/* Right Image Section with Clip Path */}
        <div className="absolute top-0 right-0 w-[50%] h-full hidden md:block overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/banner.png"
              alt="Motorcycle riders on the road"
              fill
              className="object-cover"
              style={{
                clipPath: "polygon(44% 0, 100% 0, 100% 100%, 11% 100%)",
              }}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ text }: { text: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className="flex items-center gap-1 cursor-pointer text-gray-600 hover:text-gray-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{text}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-md rounded-md p-2">
          <div className="p-2 hover:bg-gray-100 cursor-pointer">Option 1</div>
          <div className="p-2 hover:bg-gray-100 cursor-pointer">Option 2</div>
          <div className="p-2 hover:bg-gray-100 cursor-pointer">Option 3</div>
        </div>
      )}
    </div>
  );
};

export default Banner;
