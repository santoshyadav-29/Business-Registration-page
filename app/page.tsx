import { Button } from "@/components/ui/button";
import { ArrowRight, Building2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="w-full max-w-[1200px] px-4 py-20 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
          <Building2 className="h-6 w-6 text-primary-foreground" />
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-6xl">
          Welcome to BusinessFlow
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
          Streamline your business operations with our comprehensive management platform. 
          Get started today and transform the way you work.
        </p>
        <Link href="/register">
          <Button size="lg" className="gap-2">
            Register Now
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}