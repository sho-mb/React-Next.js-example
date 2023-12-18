import { SauceField } from "@/app/lib/definitions";
import { PlusIcon } from "@heroicons/react/24/outline";

export default function SauceList({sauceList} : { sauceList : SauceField[]}){
  return(
    <div>
      <label htmlFor="sauce" className="mb-2 block text-sm font-medium">
        Choose sauce
      </label>
      <div className="relative">
        <select
          name="sauceId"
          id="sauce"
          aria-describedby="sauce-error"
          className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
        >
        <option value="" disabled>Select Sauce</option>
          {
            sauceList.map((sauce) => (
              <option key={sauce.id} value={sauce.id}>
                {sauce.name}
              </option>
            ))}
        </select> 
        <PlusIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
      </div>
    </div>
  )
}