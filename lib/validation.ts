import { z } from 'zod'

const phoneRegEx =
  /^(?:\+?[1-9]\d{1,14}|(?:\(?\d{2}\)?[\s-]?\d{4,5}[\s-]?\d{4}))$/
export const UserFormSchema = z.object({
  name: z
    .string()
    .min(2, 'O nome deve conter ter ao menos 2 caracteres.')
    .max(50, 'O nome deve conter ter, ao máximo, 50 caracteres.'),
  email: z.string().email('Endereço de e-mail inválido.'),
  phone: z
    .string()
    .refine((phone) => phoneRegEx.test(phone), 'Número de telefone inválido.'),
})
