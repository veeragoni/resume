"use client"

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

export function VSCodeProvider({ children, className }: { 
  children: React.ReactNode
  className?: string 
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className={cn(className, mounted ? 'vsc-initialized' : '')}>
      {children}
    </div>
  )
}