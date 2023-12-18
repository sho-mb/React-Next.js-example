'use server' 
import { FoodItem } from "@/app/lib/definitions";
import { clsx } from "clsx";

export async function AllItems() {
  const response = await fetch ("http://localhost:5024/Hamburger", {cache: "no-store"})
  const data = await response.json();

  return (
    <div className="flex w-full flex-col">
      <h2 className="mb-4 text-xl md:text-2xl">All items</h2>
      <div className="flex grow flex-col  rounded-xl bg-gray-50 p-4">
        <div className="px-6">
        {data.map((foodItem : FoodItem , i: Number) => {
          return (
            <div key={foodItem.id}
              className={clsx(
              'flex flex-row items-center justify-between py-4',
                {
                  'border-t': i !== 0,
                },
              )}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="truncate text-sm font-semibold md:text-base">{foodItem.name}</p>
                </div>
              </div>
              <div>
                <p className="truncate text-sm font-medium md:text-base">{foodItem.price} USD</p>
              </div>
            </div>
          );
          })}
        </div>
      </div>
    </div>
  )
}