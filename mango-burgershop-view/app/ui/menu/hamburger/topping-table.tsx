import { Hamburger } from "@/app/lib/definitions";
import { DeleteTopping } from "./button";

export default function TopoingTable( { hamburger } : { hamburger : Hamburger}) {

  const totalCostOfIngredients = hamburger.toppings.reduce((acc, topping) => acc + topping.cost, 0);
  
  return (
    <table>
      <thead className="text-left">
        <th scope="col" className="px-4 py-2">Name</th>
        <th scope="col" className="px-4 py-2">Cost</th>
        <th scope="col" className="relative py-3">
          <span className="sr-only">Edit</span>
        </th>
      </thead>
      <tbody>
        {hamburger.toppings.map(topping => {
          return (
            <tr key={topping.id} className="border-b">
              <td className="whitespace-nowrap px-4 py-2">{topping.name}</td>
              <td className="whitespace-nowrap px-4 py-2">{topping.cost} USD</td>
              <td className="whitespace-nowrap"> 
                <DeleteTopping hamburgerId={hamburger.id} toppingId={topping.id}/>
              </td>
            </tr>
          )
        })}
        <tr>
          <td className="px-4 py-2">Total Cost</td>
          <td className="px-4 py-2">{totalCostOfIngredients.toFixed(2)} USD</td>
        </tr>
      </tbody>
    </table>
  )

}