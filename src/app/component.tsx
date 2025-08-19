'use client'
import { useEffect } from "react";

export const ErrorComponent = () => {

  useEffect(() => {
    throw new Error('Alguma coisa deu errado :(');
  }, [])

  return (
    <div className="mt-20">
      <h2 className="text-white">Alguma coisa deu errado. :C</h2>
    </div>
  )
};