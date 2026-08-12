import { NotchNavbar } from "@/components/ui/notch-navbar";

export default function Navbar({ lang = "en" }: { lang?: string }) {
  return (
    <NotchNavbar lang={lang} />
  );
}
