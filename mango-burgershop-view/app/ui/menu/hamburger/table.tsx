import { Hamburger } from "@/app/lib/definitions";
import { DeleteHamburger, GetDetail } from "./button";
import { GetAll } from "@/app/lib/hamburgerApi";
import { notFound } from "next/navigation";
import Image from "next/image";
import burger from "@/public/burger.jpeg"

export default async function HamburgerTable({
  query
} : {
  query: string;
}) {

  const data = await GetAll();

  if (!data) {
    notFound();
  }

  var hamburgerList = null;
  if (query) {
    hamburgerList = data.filter((param) => param.name.toLocaleUpperCase().includes(query.toLocaleUpperCase()))
  } else {
    hamburgerList = data;
  }



  return(
    <div>
       <div className="md:hidden">
        {hamburgerList.map((item : Hamburger) => (
          <div key={item.id} className="mb-2 w-full roundex-md bgwhite p-4">
            <div>
            <div className="flex items-center justify-between border-b pd-4">
                <div className="mb-2 flex items-center"> 
                  <p>{item.name}</p>
                </div>
                <p>{item.price}</p>
              </div>
              <p>Deiscription Deiscription Deiscription Deiscription Deiscription Deiscription</p>
            </div>
            <div className="flex justify-end gap-2">
              <GetDetail id={item.id} />
              <DeleteHamburger id={item.id} />
            </div>
          </div>
        ))}
      </div>
      <table className="hidden min-w-full text-grey-900 md:table">
        <thead className="rounded-lg text-left text-sm font-normal">
          <tr>
            <th scope="col" className="px-4 py-5 font-medium">Image</th>
            <th scope="col" className="px-4 py-5 font-medium">Name</th>
            <th scope="col" className="px-4 py-5 font-medium ">Discription</th>
            <th scope="col" className="px-4 py-5 font-medium ">Price</th>
            <th scope="col" className="py-3 pl-6 pr-3 relative">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray">
          {hamburgerList?.map((item : Hamburger) => (
            <tr
              key={item.id}
              className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
            >
              <td className="whitespace-nowrap py-3 pl-6 pr-3"> 
               <Image 
                  src={burger} 
                  alt={`${item.name}'s picture`} 
                  width={160}
                  height={160}
                />
              </td>
              <td className="whitespace-nowrap py-3 pl-6 pr-3">
                <p>{item.name}</p>
              </td>
              
              <td className="whitespace-nowrap py-3 pl-6 pr-3">
                <p>
                  Discription Discription Discription Discription Discription Discription Discription<br/>
                  Discription Discription Discription Discription Discription Discription Discription
                </p>
              </td>
              <td className="whitespace-nowrap py-3 pl-6 pr-3">
                {item.price}
              </td>
              <td className="whitespace-nowrap py-3 pl-6 pr-3">
                <div className="flex justify-end gap-3">
                  <GetDetail id={item.id} />
                  <DeleteHamburger id={item.id} />
                </div>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}