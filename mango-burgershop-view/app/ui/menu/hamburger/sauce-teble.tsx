import { Hamburger } from "@/app/lib/definitions"
import { DeleteSauce } from "./button";

export default function SauceTable({ hamburger }: { hamburger: Hamburger }) {
  const totalCostOfSauces = hamburger.sauces.reduce((acc, sauce) => acc + sauce.cost, 0);
  return (
    <table>
      <thead className="text-left">
        <th scope="col" className="px-4 py-2">Name</th>
        <th scope="col" className="px-4 py-2">Cost</th>
        <th scope="col" className="px-4 py-2">Vegan?</th>
        <th scope="col" className="px-4 py-2">Spicy?</th>
        <th scope="col" className="py-3 relative">
          <span className="sr-only">Edit</span>
        </th>
      </thead>
      <tbody >
        {hamburger.sauces.map(sauce => {
          return (
            <tr key={sauce.id} className="border-b">
              <td className="whitespace-nowrap px-4 py-2">{sauce.name}</td>
              <td className="whitespace-nowrap px-4 py-2">{sauce.cost} USD</td>
              <td className="whitespace-nowrap px-4 py-2">{sauce.isVegan ? "yes" : "no"}</td>
              <td className="whitespace-nowrap px-4 py-2">{sauce.isSpicy ? "yes" : "no"}</td>
              <td>
                <DeleteSauce hamburgerId={hamburger.id} sauceId={sauce.id} />
              </td>
            </tr>
          )
        })}
        <tr>
          <td className="px-4 py-2">Total Cost</td>
          <td className="px-4 py-2">{totalCostOfSauces}</td>
        </tr>
      </tbody>
    </table>
  )

}