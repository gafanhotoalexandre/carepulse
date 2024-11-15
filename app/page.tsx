import { PatientForm } from '@/components/forms/PatientForm'
import Image from 'next/image'

import { metadata } from './layout'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex h-screen max-h-screen'>
      {/* TODO: OTP Verification | Passkey Modal */}

      <section className='remove-scrollbar container my-auto'>
        <div className='sub-container max-w-[496px]'>
          <Image
            src='/assets/icons/logo-full.svg'
            height={1000}
            width={1000}
            alt='paciente'
            className='mb-8 h-10 w-fit'
          />

          <PatientForm />

          <div className='text-14-regular mt-14 flex justify-between'>
            <p className='justify-items-end text-dark-600 xl:text-left'>
              &copy; {new Date().getFullYear()} {metadata.title?.toString()}
            </p>

            <Link href='/?admin=true' className='text-green-500'>
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src='/assets/images/onboarding-img.png'
        height={1000}
        width={1000}
        alt='paciente'
        className='side-img max-w-[50%]'
      />
    </div>
  )
}
