'use server'

import { z } from "zod"

const schema= z.object({
    email:z.string({
        invalid_type_error :'invalid email'
    })
})

export default async function createuser(formData:FormData)
{
    const validateFields =schema.safeParse({
        email:formData.get('email'),
    }) 
    if (!validateFields.success) {
        return {
          errors: validateFields.error.flatten().fieldErrors,
        }
      }
}


 