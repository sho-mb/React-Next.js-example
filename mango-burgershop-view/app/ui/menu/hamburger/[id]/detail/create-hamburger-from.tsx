'use client';

import { SauceField, ToppingField } from "@/app/lib/definitions";
import ToppingList from "./topping-list";
import { PlusIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import SauceList from "./sauce-list";
import { useFormState } from "react-dom";
import { createBurger } from "@/app/lib/hamburgerApi";
import Link from "next/link";
import { Button } from "@/app/ui/button";

export default function CreateHamburgerPage({
  sauceList,
  toppingList
} : {
  sauceList : SauceField[],
  toppingList : ToppingField[]
}) {

  const initialState = { message : "", errors : {}};
  const [state, dispatch] = useFormState(createBurger, initialState)

  return(
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            What is burger name ?
          </label>
          <div className="relative">
            <input 
              type="text" 
              name="name" 
              id="name"
              placeholder="Enter name here"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
            <PlusIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>
        <div className="mb-4">
          <SauceList sauceList={sauceList} />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="mb-2 block text-sm font-medium">
            How much do you want to sell to?
          </label>
          <div className="relative">
            <input 
              type="number" 
              name="price" 
              id="price"
              step="0.01"
              placeholder="Enter price here"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
            <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
          </div>
        </div>
        <div className="mb-4">
          <ToppingList toppingList={toppingList} />
        </div>
      </div>
      <div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href={`/menu/hamburger`}
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create burger</Button>
      </div>
      </div>
    </form>
  )
}