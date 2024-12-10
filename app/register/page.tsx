"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LocationCard } from "@/components/ui/location-card";
import { VerificationInput } from "@/components/ui/verification-input";
import { ArrowLeft, CircleIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import logo from "../assets/logo.png";
import Image from "next/image";

export default function RegisterPage() {
  const router = useRouter();
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);

  const locations = [
    {
      country: "Singapore",
      flag: "https://flagcdn.com/w80/sg.png",
      title: "Head Office",
      subtitle: "XYZ Pte. Ltd.",
      address: "Road to nowhere, 08-424, 500 Internal Error",
    },
    {
      country: "Hong Kong",
      flag: "https://flagcdn.com/w80/hk.png",
      title: "Branches",
      subtitle: "XYZ Pte. Ltd.",
      address: "The Infinite Loop Office, 404 Timeout Plaza",
    },
    {
      country: "USA",
      flag: "https://flagcdn.com/w80/us.png",
      title: "Branches",
      subtitle: "XYZ Inc.",
      address: "Nulltown, Buglandia, 500 OHNOERREE",
    },
  ];

  const handleVerify = () => {
    router.push("/register/business");
  };

  return (
    <div className=" bg-white from-gray-900 to-gray-800  text-white ">
      <div className="mx-auto   flex flex-col md:flex-row gap-5 p-4 justify-center min-h-screen  items-center">
        <div className="">
          <div className="mb-8">
            <Link
              href="/"
              className="mb-8 inline-flex items-center text-sm text-gray-800 hover:text-gray-500"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Link>
            <h1 className="text-2xl font-bold">Layout Cards</h1>
          </div>

          <div className="mb-12 grid gap-2 md:grid-cols-2 justify-center items-center place-content-center ] ">
            {locations.map((location) => (
              <LocationCard
                key={location.country}
                {...location}
                isSelected={selectedLocation === location.country}
                onClick={() => setSelectedLocation(location.country)}
              />
            ))}
          </div>
        </div>
        <div>
          <Card className="bg-white p-8 text-gray-900">
            <div className="mb-6 flex justify-center">
              <div className="flex items-center gap-2">
                <Image
                  src={logo}
                  alt="Description of the image"
                  width={150}
                  height={300}
                />
                
              </div>
            </div>

            <div className="text-center">
              <h2 className="mb-2 text-xl font-semibold">Verify your Email</h2>
              <p className="mb-6 text-sm text-gray-600">
                Please enter the 6 digit code we just sent to s********@xyz.com
              </p>

              <VerificationInput
                onComplete={(code) => console.log("Verification code:", code)}
              />

              <div className="mt-6">
                <Button
                  variant="destructive"
                  className="w-full"
                  onClick={handleVerify}
                >
                  Verify
                </Button>
              </div>

              <p className="mt-4 text-sm text-gray-500">
                Wait 1:39 seconds before requesting a new code
              </p>

              <p className="mt-8 text-xs text-gray-400">
                By continuing, you are agreeing to Noobots{" "}
                <Link href="#" className="text-blue-500 hover:underline">
                  Terms of Service
                </Link>
                ,{" "}
                <Link href="#" className="text-blue-500 hover:underline">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-blue-500 hover:underline">
                  Cookie Policy
                </Link>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
