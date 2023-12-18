import { GetDetail } from "@/app/lib/hamburgerApi";
import { kalam } from "@/app/ui/fonts";
import { UpdateToppings } from "../../button";
import { UpdateSauces } from "../../button";
import TopoingTable from "../../topping-table";
import SauceTable from "../../sauce-teble";
import Link from "next/link";
import Image from "next/image";
import burger from "@/public/burger.jpeg"

export default async function HamburgerDetailTable({ id } : {id : number}) {

  const data = await GetDetail(id);
  let hamburger = null;
  let totalCostOfSauces;
  let totalCostOfIngredients;

  if (data) {
    hamburger = data;
    totalCostOfIngredients = hamburger.toppings.reduce((acc, topping) => acc + topping.cost, 0);
    totalCostOfSauces = hamburger.sauces.reduce((acc, sauce) => acc + sauce.cost, 0);
  } else {
    throw new Error("No values")
  }

  return(
    <div>
      <div className="flex">
        <div>
          <div className="w-full h-100  hidden md:block">
            <Image 
              src={burger} 
              alt={`${hamburger.name}'s picture`} 
              width={400}
              height={400}
            />
          </div>
          <UpdateToppings className="mt-4"  id={id} />
          <UpdateSauces className="mt-4 mb-4" id={id} />
          <Link
          href="/menu/hamburger"
          className="items-center rounded-lg bg-blue-600 py-2 px-6 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline"
          >
            <span>Return</span>
          </Link>
        </div>
        <div className="md:mx-8">
          <div className="mb-4">
            {/* using font form google fonts check in fonts.tsx */}
            <div className={`${kalam.className} flex text-center md:gap-10 text-6xl`}>
              <div>
                {hamburger.name}
              </div>
              <div>
                {hamburger.price} USD
              </div>
            </div>
            <div className="flex text-3xl py-3">
              <div className="mr-5">
                Total Cost : { (totalCostOfIngredients + totalCostOfSauces).toFixed(2) } USD
              </div>
              <div>
              depreciation rate :  { (((totalCostOfIngredients + totalCostOfSauces) / hamburger.price) * 100).toFixed(2) } %
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="mr-10">
              <SauceTable hamburger={hamburger} />
            </div>
            <div>
              <TopoingTable hamburger={hamburger}  />
            </div>
          </div>
        </div>
       </div>
      </div>
  )
}