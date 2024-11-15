import Image from 'next/image'
import { Control } from 'react-hook-form'

import { ptBR } from 'date-fns/locale/pt-BR'
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker'
import PhoneInput from 'react-phone-number-input'
import { E164Number } from 'libphonenumber-js'
import 'react-phone-number-input/style.css'
import 'react-datepicker/dist/react-datepicker.css'

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from './ui/form'
import { Input } from './ui/input'
import { FormFieldType } from './forms/PatientForm'

registerLocale('pt-BR', ptBR)
setDefaultLocale('pt-BR')

interface CustomProps {
  control: Control<any>
  fieldType: FormFieldType
  name: string
  label?: string
  placeholder?: string
  iconSrc?: string
  iconAlt?: string
  disabled?: boolean
  dateFormat?: string
  showTimeSelect?: boolean
  children?: React.ReactNode
  renderSkeleton?: (field: any) => React.ReactNode
}

function RenderField({ field, props }: { field: any; props: CustomProps }) {
  const {
    fieldType,
    iconSrc,
    iconAlt,
    placeholder,
    showTimeSelect,
    dateFormat,
    renderSkeleton,
  } = props
  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className='flex rounded-md border border-dark-500 bg-dark-400'>
          {iconSrc && (
            <Image
              src={iconSrc}
              width={24}
              height={24}
              alt={iconAlt || 'ícone'}
              className='ml-2'
            />
          )}

          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              className='shad-input border-0'
            />
          </FormControl>
        </div>
      )

    case FormFieldType.PHONE_INPUT:
      return (
        <FormControl>
          <PhoneInput
            defaultCountry='BR'
            placeholder={placeholder}
            // international
            withCountryCallingCode
            value={field.value as E164Number | undefined}
            onChange={field.onChange}
            className='input-phone'
          />
        </FormControl>
      )

    case FormFieldType.DATE_PICKER:
      return (
        <div className='flex rounded-md border border-dark-500 bg-dark-400'>
          <Image
            src='/assets/icons/calendar.svg'
            height={24}
            width={24}
            alt='Calendário'
            className='ml-2'
          />

          <FormControl>
            <DatePicker
              locale='pt-BR'
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              dateFormat={dateFormat ?? 'dd/MM/yyyy'}
              showTimeSelect={showTimeSelect ?? true}
              timeInputLabel='Horário:'
              wrapperClassName='date-picker'
            ></DatePicker>
          </FormControl>
        </div>
      )

    case FormFieldType.SKELETON:
      return renderSkeleton ? renderSkeleton(field) : null
    default:
      break
  }
}
export function CustomFormField(props: CustomProps) {
  const { control, fieldType, name, label } = props
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='flex-1'>
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
          )}

          <RenderField field={field} props={props} />

          <FormMessage className='shad-error text-xs' />
        </FormItem>
      )}
    ></FormField>
  )
}
