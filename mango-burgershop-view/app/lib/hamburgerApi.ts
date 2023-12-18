'use server'

import { revalidatePath } from "next/cache"
import { Hamburger, SauceField, ToppingField } from "./definitions"
import { redirect } from "next/navigation"
import { z } from 'zod'

export type State = {
  message?: string | "";
};

export async function GetAll() {
  try {
    const res = await fetch ("http://localhost:5024/Hamburger", {
      method: 'GET',
      headers: {
          'Content-Type' : 'application/json',
      },
      cache: 'no-store'
    })
      

    if (!res.ok) {
      throw new Error( `GET request filed with status ${res.status}` )
    }

    if (res.status === 200) {
      const data : Hamburger[] = await res.json();
      return data;
    } else {
      return console.log("error")
    }
  } catch(error) {
    console.log(error)
  }
}

export async function Delete(id : number) {

  if (id === null) 
  return 

  try{
    const res = await fetch(`http://localhost:5024/Hamburger/${id}`, {
    method: 'DELETE',
    headers: {
        'Content-Type' : 'application/json',
      },
    })
  
    if (!res.ok) {
      throw new Error( `DELETE request filed with status ${res.status}` )
    }

    if (res.status === 204) {
      revalidatePath('/menu/hamburger')
    } else {
      return console.log("error")
    }
  } catch (error) {
    console.log("This is catch")
    console.log(error);
  }
}

export async function DeleteToppingApi(
  id : number,
  formData : FormData
) {

  const toppingId = formData.get("toppingId")
  if (id === null || toppingId === null) 
  return 

  try{
    const res = await fetch(`http://localhost:5024/Hamburger/${id}/topping?toppingId=${toppingId}`, {
    method: 'DELETE',
    headers: {
        'Content-Type' : 'application/json',
      },
    })
  
    if (!res.ok) {
      throw new Error( `DELETE request filed with status ${res.status}` )
    }

    if (res.status === 204) {
      revalidatePath(`/menu/hamburger/${id}/detail`)
    } else {
      return console.log("error")
    }
  } catch (error) {
    console.log("This is catch")
    console.log(error);
  }
}

export async function DeleteSauceApi(
  id : number,
  formData : FormData
) {

  const sauceId = formData.get("sauceId")
  if (id === null || sauceId === null) 
  return 

  try{
    const res = await fetch(`http://localhost:5024/Hamburger/${id}/sauce?sauceId=${sauceId}`, {
    method: 'DELETE',
    headers: {
        'Content-Type' : 'application/json',
      },
    })
  
    if (!res.ok) {
      throw new Error( `DELETE request filed with status ${res.status}` )
    }

    if (res.status === 204) {
      revalidatePath(`/menu/hamburger/${id}/detail`)
    } else {
      return console.log("error")
    }
  } catch (error) {
    console.log("This is catch")
    console.log(error);
  }
}

export async function GetDetail(id : number) {
  try{
    const res = await fetch(`http://localhost:5024/Hamburger/${id}`,{
    method: 'GET',
    headers: {
        'Content-Type' : 'application/json',
    },
    cache: 'no-store'
    })
    
    if (!res.ok) {
      throw new Error( `DELETE request filed with status ${res.status}` )
    }

    if (res.status === 200) {
      const item : Hamburger = await res.json()
      return item;
    } else {
      return console.log("error")
    }
  } catch (error) {
    console.log("This is catch")
    console.log(error);
  }
}

export async function GetToppings() {
  try{
    const res = await fetch('http://localhost:5024/Topping', {
    method: 'GET',
    headers: {
        'Content-Type' : 'application/json',
    },
    })

    if (res.status === 200) {
      const topping : ToppingField[] = await res.json()
      return topping
    } else {
      return console.log("error")
    }
  } catch (error) {
    console.log("This is catch")
    console.log(error);
  }
}

export async function GetSauces() {
  try{
    const res = await fetch('http://localhost:5024/Sauce', {
    method: 'GET',
    headers: {
        'Content-Type' : 'application/json',
    }})

    if (res.status === 200) {
      const sauces : SauceField[] = await res.json()
      return sauces
    } else {
      return console.log("error")
    }
  } catch (error) {
    console.log("This is catch")
    console.log(error);
  }
}

export async function AddTopping(
  burgerId : number,
  prevState: State,
  formData: FormData,
  ) {

    let toppings = formData.getAll("topping");

    if (!toppings) {
      return {
        message : "Failed to add topping",
      };
    }

  try {

    const res = await fetch(`http://localhost:5024/Hamburger/${burgerId}/addtopping`, {
      method: 'PUT',
      headers: {
          'Content-Type' : 'application/json',
      },
      body: JSON.stringify({ toppings : toppings}),
    })

    if (res.status !== 204) {          
      return {
        message: "You can not add same ingridents"
      }
    }
  
  } catch (error) {
    console.log(error)
    return {
      message: 'Internal Error'
    }
  };
  revalidatePath(`/menu/hamburger/${burgerId}/detail`)
  redirect(`/menu/hamburger/${burgerId}/detail`);
}

export async function UpdateSauce(
  burgerId : number,
  prevState: State,
  formData: FormData,
  ) {

    const sauceId = formData.get("sauceId");
    const targetId = formData.get("targetId");

    if (!sauceId) {
      return {
        message : "Select one sauce",
      };
    }

    if (!targetId) {
      return {
        message : "Select which sauce you want to change",
      };
    }

  try {
    const res = await fetch(`http://localhost:5024/Hamburger/${burgerId}/updatesauce?sauceId=${sauceId}&targetSauceId=${targetId}`, {
      method: 'PUT',
      headers: {
          'Content-Type' : 'application/json',
      },
    })

    if (res.status !== 204) {      
      return {
        message: "You can not add same sauce"
      }
    } 
  
  } catch (error) {
    console.log(error)
    return {
      message: 'Internal Error'
    }
  };

  revalidatePath(`/menu/hamburger/${burgerId}/detail`)
  redirect(`/menu/hamburger/${burgerId}/detail`);
}

export async function AddSauce(
  burgerId : number,
  prevState: State,
  formData: FormData,
  ) {

    const sauceId = formData.get("addSauceId");

    if (!sauceId) {
      return {
        message : "Select one sauce",
      };
    }

  try {
    const res = await fetch(`http://localhost:5024/Hamburger/${burgerId}/addsauce?sauceId=${sauceId}`, {
      method: 'PUT',
      headers: {
          'Content-Type' : 'application/json',
      },
    })

    console.log(res.status)

    if (res.status !== 204) {      
      return {
        message: "You can not add same sauce"
      }
    }
  
  } catch (error) {
    console.log(error)
    return {
      message: 'Internal Error'
    }
  };

  revalidatePath(`/menu/hamburger/${burgerId}/detail`)
  redirect(`/menu/hamburger/${burgerId}/detail`);
}

export type CreateState = {
  errors?:{
    "name": string[],
    "sauceId": string[],
    "price": string[],
    "toppings": string[]
  };
  messages?: string | null;
}

const ToppingSchema = z.string({
    invalid_type_error: "Please select a topping"
});

const FormSchema = z.object({
  id: z.string(),
  name : z.string({
    invalid_type_error: "Please enter a name"
  }),
  sauceId : z.string({
    invalid_type_error: "Please select a sauce"
  }),
  price: z.coerce.number().gt(0, {message: 'Please enter an price greater then $0'}),
  toppings : z.array(ToppingSchema)
})

const CreateBurger = FormSchema.omit({id: true})

export async function createBurger(
  prevState: State,
  formData: FormData,
  ) {
    const validatedFields = CreateBurger.safeParse({
      name: formData.get("name"),
      sauceId: formData.get("sauceId"),
      price: formData.get("price"),
      toppings: formData.getAll("topping") 
    })

    if (!validatedFields.success)  {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing field. Failed to create burger'
      };
    }

    const { name, sauceId, price, toppings } = validatedFields.data;

  try {
    const res = await fetch(`http://localhost:5024/Hamburger`, {
      method: 'POST',
      headers: {
          'Content-Type' : 'application/json',
      },
      body : JSON.stringify({
        name : name,
        saucesId : sauceId,
        price : price, 
        toppingsIds : toppings
      })
    })

    if (res.status !== 201) {      
      return {
        message: "You can not add same sauce"
      }
    }
  
  } catch (error) {
    console.log(error)
    return {
      message: 'Internal Error'
    }
  };

  revalidatePath("/menu/hamburger")
  redirect("/menu/hamburger");
}