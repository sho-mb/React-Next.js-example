import { ToppingField } from "@/app/lib/definitions";

export default function ToppingList({
  toppingList
} : {
  toppingList : ToppingField[]
}) {
  return (
    <div>
      <label htmlFor="topping" className="mb-2 block text-sm font-medium">
        Choose Topping
      </label>
      <div className="relative flex flex-col flex-wrap h-40" id="topping">
        {toppingList.map((topping) => (
          <div key={topping.id} className="py-4 h-1/4">
            <label htmlFor={topping.name} className="ml-5">
              <input className="mr-5" type="checkbox" name="topping" id={topping.name} value={topping.id} />
              {topping.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}