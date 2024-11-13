import Image from 'next/image'
import { Button } from './ui/button'

interface SubmitButtonProps {
  isLoading: boolean
  className?: string
  children: React.ReactNode
}
export function SubmitButton({
  children,
  isLoading,
  className,
}: SubmitButtonProps) {
  return (
    <Button
      type='submit'
      className={className ?? 'shad-primary-btn w-full'}
      disabled={isLoading}
    >
      {isLoading ? (
        <div className='flex items-center gap-4'>
          <Image
            src='/assets/icons/loader.svg'
            alt='loader'
            width={24}
            height={24}
            className='animate-spin'
          />
          Carregando...
        </div>
      ) : (
        children
      )}
    </Button>
  )
}
