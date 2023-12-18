import HamburgerDetailTable from "@/app/ui/menu/hamburger/[id]/detail/table";
import Link from "next/link";

export default async function page({ params } : { params : {id : number} }) {
  const id = params.id;

  return (
    <div>
      <HamburgerDetailTable id = {id} />
    </div>
    
  )
}