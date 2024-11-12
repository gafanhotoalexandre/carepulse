'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Form } from '@/components/ui/form'
import { CustomFormField } from '@/components/CustomFormField'
import { Button } from '../ui/button'

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'O username deve ter ao menos 2 caracteres.',
  }),
  email: z.string().email(),
})

export enum FormFieldType {
  INPUT = 'input',
  TEXTAREA = 'textarea',
  PHONE_INPUT = 'phoneInput',
  CHECKBOX = 'checkbox',
  DATE_PICKER = 'datePicker',
  SELECT = 'select',
  SKELETON = 'skeleton',
}

export function PatientForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6 flex-1'>
        <section className='mb-12 space-y-4'>
          <h1 className='header'>Seja bem-vindo! 👋</h1>
          <p className='text-dark-700'>
            Que tal agendar sua primeira consulta?
          </p>
        </section>

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name='name'
          label='Nome completo'
          placeholder='João da Silva'
          iconSrc='/assets/icons/user.svg'
          iconAlt='usuário'
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name='email'
          label='E-mail'
          placeholder='Joãodasilva@email.com'
          iconSrc='/assets/icons/email.svg'
          iconAlt='email'
        />

        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name='phone'
          label='Número de telefone'
          placeholder='(99) 9.9999-9999'
        />

        <Button type='submit'>Entrar</Button>
      </form>
    </Form>
  )
}
