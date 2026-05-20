// src/components/Toast.tsx
"use client"
import { useEffect } from 'react'
import { Check } from 'lucide-react'
import './Toast.css'

interface ToastProps {
  message: string
  onClose: () => void
}

export function Toast({ message, onClose }: ToastProps) {

  // Disparaît automatiquement après 3 secondes
  useEffect(() => {
    const timer = setTimeout(onClose, 3000)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className="toast">
      <div className="toast__icon">
        <Check size={14} />
      </div>
      <span className="toast__message">{message}</span>
    </div>
  )
}