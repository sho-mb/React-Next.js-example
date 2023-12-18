import { GetSauces, GetToppings } from "@/app/lib/hamburgerApi"
import CreateHamburgerPage from "@/app/ui/menu/hamburger/[id]/detail/create-hamburger-from"
import { notFound } from "next/navigation"
export default async function page() {

  const [sauceList, toppingList] = await Promise.all([
    GetSauces(),
    GetToppings()
  ])

  if (!sauceList || !toppingList) {
    return notFound();
  }

  return (
    <div>
      <CreateHamburgerPage sauceList={sauceList} toppingList={toppingList}/>
    </div>
  )
}