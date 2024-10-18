import React from 'react'
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface ErrorProps{
    message ?: string;
}

const FormError = ({message}: ErrorProps) => {
  return (
      <div className='bg-red-100 flex px-2 gap-2 items-center rounded-md text-sm py-2 text-red-500'>
          <ExclamationTriangleIcon/>
        <p>{message}</p>
    </div>
  )
}

export default FormError
