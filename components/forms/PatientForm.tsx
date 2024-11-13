'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Form } from '@/components/ui/form'
import { CustomFormField } from '@/components/CustomFormField'
import { SubmitButton } from '@/components/SubmitButton'
import { UserFormSchema } from '@/lib/validation'
import { createUser } from '@/lib/actions/patient.actions'

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
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof UserFormSchema>>({
    resolver: zodResolver(UserFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  })

  async function onSubmit({
    name,
    email,
    phone,
  }: z.infer<typeof UserFormSchema>) {
    setIsLoading(true)

    try {
      const userData = { name, email, phone }
      const user = await createUser(userData)
      if (user) router.push(`/patients/${user.$id}/register`)
    } catch (error) {
      console.log(error)
    }

    setIsLoading(false)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 flex-1'>
        <section className='mb-6 space-y-3'>
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
          placeholder='joaodasilva@email.com'
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

        <SubmitButton isLoading={isLoading}>Começar</SubmitButton>
      </form>
    </Form>
  )
}
