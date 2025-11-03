import { Outlet } from "react-router";
import Header from "@components/Header";
import Navigation from "@/components/Navigation";

export default function DefaultLayout() {
  return (
    <div className="relative flex items-center justify-center md:mr-24 md:ml-24">
      <Header />
      <div className="mt-14 max-w-175 min-w-dvw md:max-w-160 md:min-w-136 md:rounded-3xl md:border md:fixed md:top-4 md:h-screen md:overflow-y-auto [&::-webkit-scrollbar]:hidden md:[-ms-overflow-style:none] md:[scrollbar-width:none]">
        <Outlet />
      </div>
      <Navigation />
    </div>
  );
}
