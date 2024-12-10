"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Stepper } from "@/components/ui/stepper";
import { ArrowLeft, CircleIcon, Upload } from "lucide-react";
import Link from "next/link";

export default function BusinessRegistrationPage() {
  const steps = [
    { title: "Business Type", isCompleted: true },
    { title: "Business Details", isCurrent: true },
    { title: "Implementation" },
    { title: "Owners" },
    { title: "Directors" },
    
    { title: "KYC Details" },
    { title: "Complete Registration" },
  ];

  return (
    <div className="min-h-screen  text-white md:p-8">
      {/* Back Link */}
      <Link
        href="/register"
        className="mb-8 inline-flex items-center text-sm text-gray-800 hover:text-gray-500"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Link>

      <div className="mx-auto max-w-4xl">
        {/* Logo Section */}
        <div className="mb-8 flex items-center justify-center">
          <div className="flex items-center gap-2">
            
            <span className="text-xl text-gray-800 font-bold">Multi-Step Process Form Assignment</span>
          </div>
        </div>

        {/* Stepper */}
        <Card className="mb-8 bg-white hidden lg:block p-6 sm:p-8">
          <Stepper steps={steps} />
        </Card>

        {/* Business Form */}
        <Card className="bg-white p-6 sm:p-8 text-gray-900">
          <h2 className="mb-6 text-xl font-semibold">
            Tell us more about your business
          </h2>

          {/* Responsive Form */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="legalName">Legal Name *</Label>
              <Input id="legalName" placeholder="Legal name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="doingBusinessAs">Doing business as *</Label>
              <Input id="doingBusinessAs" placeholder="Doing business as" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="registrationNumber">Company Registration Number *</Label>
              <Input id="registrationNumber" placeholder="Company Registration Number" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="businessNumber">Business Registration Number *</Label>
              <Input id="businessNumber" placeholder="Business Registration Number" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="website">Website URL *</Label>
              <Input id="website" placeholder="https://" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="industry">Industry Name *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tech">Technology</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* File Upload Sections */}
            <div className="space-y-2">
              <Label>Certification of Incorporation *</Label>
              <div className="flex h-32 cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-gray-300 hover:border-primary">
                <div className="text-center">
                  <Upload className="mx-auto h-6 w-6 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-500">Click to upload</p>
                  <p className="text-xs text-gray-400">Maximum file size 20 MB</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Company Logo *</Label>
              <div className="flex h-32 cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-gray-300 hover:border-primary">
                <div className="text-center">
                  <Upload className="mx-auto h-6 w-6 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-500">Click to upload</p>
                  <p className="text-xs text-gray-400">Maximum file size 20 MB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-between">
            <Button variant="outline" className="w-full sm:w-auto">
              Previous
            </Button>
            <Button className="w-full sm:w-auto">Next</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
