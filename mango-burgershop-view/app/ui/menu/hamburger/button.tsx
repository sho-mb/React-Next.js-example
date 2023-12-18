import Link from "next/link"
import { DocumentMagnifyingGlassIcon ,PlusIcon, PencilIcon, TrashIcon, XCircleIcon } from "@heroicons/react/24/outline"
import { Delete, DeleteSauceApi, DeleteToppingApi } from "@/app/lib/hamburgerApi"


export function CreateBurger() {
  return(
    <Link
     href="/menu/hamburger/create"
     className="flex h-10 items-center rounded-lg bg-blue-600 px-5 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline"
    >
      <span className="hidden md:block">Create Hamburger</span>{' '}
      <PlusIcon className="h-5 md:ml-4"/>
    </Link>
  )
}

export function GetDetail({ id }: { id: number }) {
  return (
    <Link
      href={`/menu/hamburger/${id}/detail`}
      className="rounded-md border p-2 hover:bg-gray-100" 
    >
      <DocumentMagnifyingGlassIcon className="w-5"/>
    </Link> 
  )
}

export function UpdateSauces({ id, className }: { id: number, className : string }) {
  return (
    <Link
      href={`/menu/hamburger/${id}/detail/updatesauce`}
      className={`${className} flex w-fit rounded-md border bg-orange-400 px-4 py-2 hover:bg-orange-200`}
    >
      <span className="mr-3 text-white">Update Sauces</span>
      <PencilIcon className="w-5" />
    </Link>
  )
}

export function UpdateToppings({ id, className }: { id: number, className : string }) {
  return (
    <Link
      href={`/menu/hamburger/${id}/detail/addtopping`}
      className={`${className} flex w-fit bg-orange-400 rounded-md border px-4 py-2 hover:bg-orange-200`}
    >
      <span className="mr-3 text-white">Update Toppings</span>
      <PencilIcon className="w-5" />
    </Link>
  )
}

export function DeleteHamburger({ id } : { id : number}) {

  const deleteRequest = Delete.bind(null, id)

  return (
    <form action={deleteRequest}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}

export function DeleteTopping({ hamburgerId, toppingId } : { hamburgerId : number, toppingId : number}) {
  const deleteRequest = DeleteToppingApi.bind(null, hamburgerId)
  
  return (
    <form action={deleteRequest}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <input type="number" defaultValue={toppingId} name="toppingId" hidden />
        <span className="sr-only">Delete</span>
        <XCircleIcon className="w-5 text-red-500" />
      </button>
    </form>
  );
}

export function DeleteSauce({ hamburgerId, sauceId } : { hamburgerId : number, sauceId : number}) {
  const deleteRequest = DeleteSauceApi.bind(null, hamburgerId)
  
  return (
    <form action={deleteRequest}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <input type="number" defaultValue={sauceId} name="sauceId" hidden />
        <span className="sr-only">Delete</span>
        <XCircleIcon className="w-5 text-red-500" />
      </button>
    </form>
  );
}