"use client";
import Providers from "@/Providers/Providers";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const notify = (message) => toast(message);

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    router.push("Home");
  }, []);
  return <Providers />;
}
