'use client'

import { Hamburger, SauceField } from "@/app/lib/definitions"
import { UpdateSauce } from "@/app/lib/hamburgerApi";
import { useFormState } from "react-dom";
import { MinusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Button } from "@/app/ui/button";
import SauceList from "./sauce-list";

export default function UpdateSauceForm({
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
    }
  )

  const initialForm = {message : ""}
  const updateSauceById = UpdateSauce.bind(null, hamburger.id);
  const [state, dispatch] = useFormState(updateSauceById, initialForm)

  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <SauceList sauceList={availableSauces}/>
          <div id="sauce-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">
              {state.message !== "" ? state.message : ""}
            </p>
          </div>

          <label htmlFor="target" className="mb-2 block text-sm font-medium">
            Which sauce you want to change ?
          </label>
          <div className="relative">
            <select
             name="targetId"
             id="target"
             aria-describedby="sauce-error"
             className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            >
              <option value="" disabled>Select Sauce</option>
              {
                hamburger.sauces.map((target) =>  (
                  <option key={target.id} value={target.id}>
                    {target.name}
                  </option>
                ))}
            </select> 
            <MinusIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          <div id="=target-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">
              {state.message !== "" ? state.message : ""}
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
        <Button type="submit">Update Sauce</Button>
      </div>
    </form> 
  )
}