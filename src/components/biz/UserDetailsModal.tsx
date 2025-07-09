// components/UserDetailsModal.tsx

'use client'

import { FormData } from '@/type'
import { ChangeEvent } from 'react'

interface UserDetailsModalProps {
  formData: FormData
  error: string
  loading: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onSubmit: () => void
  onClose: () => void
}

export default function UserDetailsModal({
  formData,
  error,
  loading,
  onChange,
  onSubmit,
  onClose,
}: UserDetailsModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">Enter Your Details</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={onChange}
          className="w-full border px-3 py-2 mb-3 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={onChange}
          className="w-full border px-3 py-2 mb-3 rounded"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={onChange}
          className="w-full border px-3 py-2 mb-4 rounded"
        />

        {error && <p className="text-red-600 mb-2">{error}</p>}

        <button
          onClick={onSubmit}
          disabled={loading}
          className={`w-full bg-green-600 text-white px-4 py-2 rounded ${loading ? 'opacity-50' : ''}`}
        >
          {loading ? 'Processing...' : 'Proceed to Payment'}
        </button>

        <button onClick={onClose} className="mt-3 w-full text-sm text-gray-600 underline">
          Cancel
        </button>
      </div>
    </div>
  )
}
