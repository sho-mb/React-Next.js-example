import { GetDetail, GetToppings } from "@/app/lib/hamburgerApi";
import { notFound } from "next/navigation";
import AddToppingForm from "@/app/ui/menu/hamburger/[id]/detail/add-topping-form";
import TopoingTable from "@/app/ui/menu/hamburger/topping-table";


export default async function page({ params } : { params : {id : number} }) {

  const id = params.id;
  const [toppingList, hamburger] = await Promise.all([
    GetToppings(),
    GetDetail(id)
  ])

  if (!toppingList || !hamburger) {
    notFound();
  }

  return (
    <div>
      <AddToppingForm toppingList={toppingList} hamburger={ hamburger }/>
      <h2 className="px-5 py-3 text-4xl">Current Topping</h2>
      <TopoingTable hamburger={hamburger} />
    </div>
  )
}