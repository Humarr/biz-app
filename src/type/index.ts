// types/index.ts

export interface FormData {
    name: string
    email: string
    phone: string
  }
  
  export interface ApiResponse {
    success: boolean
    error?: string
  }
  
  export interface PaystackSetupOptions {
    key: string
    email: string
    amount: number
    currency: string
    ref: string
    metadata: {
      custom_fields: {
        display_name: string
        variable_name: string
        value: string
      }[]
    }
    callback: (response: { reference: string }) => void
    onClose: () => void
  }
  
  export interface PaystackPop {
    setup: (options: PaystackSetupOptions) => {
      openIframe: () => void
    }
  }
  