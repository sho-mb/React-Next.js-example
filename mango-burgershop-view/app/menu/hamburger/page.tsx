import { CreateBurger } from "@/app/ui/menu/hamburger/button";
import SearchBar from "@/app/ui/menu/hamburger/search-bar";
import HamburgerTable from "@/app/ui/menu/hamburger/table";

export default function page({
  searchParams,
} : {
  searchParams?: {
    query? : string;
  };
}) {
  const query = searchParams?.query || "";

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">Hamburger List</h1>
      </div>
      <div className="flex space-between">
        <SearchBar placeholder="Search Hamburger"/>
        <CreateBurger />
      </div>
      <HamburgerTable query={query}/>
    </div>
    
  );
}