"use client";
import Providers from "@/Providers/Providers";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    router.push("Login");
  }, []);
  return <Providers />;
}
