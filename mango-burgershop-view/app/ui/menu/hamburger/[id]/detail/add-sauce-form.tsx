'use client'

import { Hamburger, SauceField } from "@/app/lib/definitions";
import { AddSauce } from "@/app/lib/hamburgerApi";
import { useFormState } from "react-dom";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Button } from "@/app/ui/button";
import Link from "next/link";
import clsx from "clsx";

export default function AddSauceForm({
  hamburger,
  sauceList
} : {
  hamburger : Hamburger
  sauceList : SauceField[]
}) {

  const availableSauces = sauceList.filter((sauce) => 
  {
    for (let index = 0; index < hamburger.sauces.length; index++) {
      const element = hamburger.sauces[index];
      if (sauce.id === element.id) {
        return false;
      } 
    }
    return true;
  })

  const initialForm = {message : ""}
  const addSauceById = AddSauce.bind(null, hamburger.id);
  const [state, add] = useFormState(addSauceById, initialForm)

  return (
    <form action={add}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label htmlFor="addSauce" className="mb-2 block text-sm font-medium">
            Choose sauce
          </label>
          <div className="relative">
            <select
             name="addSauceId"
             id="addSauce"
             aria-describedby="addSauce-error"
             className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            >
              <option value="" disabled>Select Sauce</option>
              {
                availableSauces.map((sauce) => (
                  <option key={sauce.id} value={sauce.id}>
                    {sauce.name}
                  </option>
                ))}
            </select> 
            <PlusIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          <div id="addSauce-error" aria-live="polite" aria-atomic="true">
            <p className={clsx("mt-2 text-sm text-red-500",
            {
              'text-green-500' : state.message === "Success"
            },
            )}>
              {state.message}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
         href={`/menu/hamburger/${hamburger.id}/detail`}
         className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 tansition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Add Sauce</Button>
      </div>
    </form>
  )
}