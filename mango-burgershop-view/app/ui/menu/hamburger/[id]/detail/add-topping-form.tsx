'use client';

import { Hamburger, ToppingField } from "@/app/lib/definitions"
import { Button } from "@/app/ui/button";
import Link from "next/link";
import { AddTopping } from "@/app/lib/hamburgerApi";
import { useFormState } from "react-dom";
import ToppingList from "./topping-list";

export default function AddToppingForm({
  toppingList, 
  hamburger
} : {
  toppingList : ToppingField[];
  hamburger : Hamburger
}) {

  const availableTopping = toppingList.filter((topping) => 
    {
      for (let index = 0; index < hamburger.toppings.length; index++) {
        const element = hamburger.toppings[index];
        if (topping.id === element.id) {
          return false;
        } 
      }
      return true;
    }
  )

  const initialState = { message:"" };
  const updateToppingWithId = AddTopping.bind(null, hamburger.id);
  const [state, dispatch] = useFormState(updateToppingWithId, initialState);

  return(
    <form action={dispatch}>
      <div>
        <div className="rounded-md bg-gray-50 p-4 md:p-6">
          <div className="mb-4">
              <ToppingList toppingList={availableTopping} />
            <div id="topping-error" aria-live="polite" aria-atomic="true">
              <p className='mt-2 text-sm text-red-500'>
              {state.message !== "" ? state.message : ""}
              </p>
            </div>
          </div> 
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href={`/menu/hamburger/${hamburger.id}/detail`}
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Add topping</Button>
      </div>
    </form>
  )
 
}