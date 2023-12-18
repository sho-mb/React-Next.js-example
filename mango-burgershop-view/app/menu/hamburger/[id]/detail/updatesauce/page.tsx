import { GetDetail, GetSauces } from "@/app/lib/hamburgerApi";
import AddSauceForm from "@/app/ui/menu/hamburger/[id]/detail/add-sauce-form";
import UpdateSauceForm from "@/app/ui/menu/hamburger/[id]/detail/update-sauce-form";
import SauceTable from "@/app/ui/menu/hamburger/sauce-teble";
import { notFound } from "next/navigation";

export default async function page({ params } : { params : { id : number}}) {
  const id = params.id
  const [sauces, hamburger] = await Promise.all([
    GetSauces(),
    GetDetail(id)
  ])

  if (!sauces || !hamburger) {
    notFound();
  }

  return (
    <div>
      <div className="mb-4">
       <AddSauceForm  sauceList={sauces} hamburger={hamburger}/>        
      </div>
      <div>
        <UpdateSauceForm sauceList={sauces} hamburger={hamburger} />
      </div>
      <SauceTable hamburger={hamburger}/>
    </div>
  )
}