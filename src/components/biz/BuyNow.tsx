// components/BuyNowButton.tsx

'use client'

import { useState, ChangeEvent } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { launchPaystackModal } from '@/lib/paystack'
import { FormData, ApiResponse } from '@/type'
import UserDetailsModal from './UserDetailsModal'

interface BuyNowButtonProps {
  className?: string
  text?: string
  onClick?: () => void
}

export default function BuyNowButton({ className, text = "Buy Now", onClick }: BuyNowButtonProps) {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', phone: '' })
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const handleClickBuy = (): void => setShowModal(true)

  const handleCloseModal = (): void => {
    setShowModal(false)
    setError('')
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    setFormData((prev: FormData) => ({ ...prev, [name]: value }))
  }

  const validateForm = (): string | null => {
    const { name, email, phone } = formData
    if (!name || !email || !phone) return 'All fields are required.'

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) return 'Enter a valid email address.'

    const phoneRegex = /^[0-9]{11}$/
    if (!phoneRegex.test(phone)) return 'Enter a valid 11-digit phone number.'

    return null
  }

  const handleSubmit = async (): Promise<void> => {
    setError('')
    const validationError = validateForm()
    if (validationError) {
      setError(validationError)
      return
    }

    setLoading(true)

    try {
      let sessionId = localStorage.getItem('sessionId')
      if (!sessionId) {
        sessionId = uuidv4()
        localStorage.setItem('sessionId', sessionId)
      }

      const res = await fetch('/api/userdata', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, sessionId }),
      })

      const result: ApiResponse = await res.json()

      if (res.ok && result.success) {
        setShowModal(false)
        onClick?.()
        launchPaystackModal(formData, sessionId)
      } else {
        setError(result.error || 'Something went wrong.')
      }
    } catch (err) {
      console.error(err)
      setError('Error saving user data.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <button onClick={handleClickBuy} className={`bg-blue-600 text-white px-4 py-2 rounded ${loading ? 'opacity-50' : ''} ${className}`}>
        {!text ? "Buy Now" : text}
      </button>

      {showModal && (
        <UserDetailsModal
          formData={formData}
          error={error}
          loading={loading}
          onChange={handleInputChange}
          onSubmit={handleSubmit}
          onClose={handleCloseModal}
        />
      )}
    </>
  )
}
