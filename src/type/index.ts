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
  





  export interface SessionExplorerProps {
    sessions: FullSession[] // You'll define this type below
  }
  
  export interface FullSession {
    id: string
    enteredAt: string
    leftAt: string | null
    pathname: string | null
    ipAddress: string | null
    userAgent: string | null
    device: string | null
    country: string | null
    city: string | null
    userData?: {
      name: string
      email: string
      phone: string
    } | null
    payment?: {
      amount: number
      paidAt: string
      paystackRef: string
    } | null
    downloadLogs: {
      downloadedAt: string
    }[]
    pageViews: {
      path: string
      viewedAt: string
      leftAt: string | null
    }[]
  }


  export interface FunnelChartProps {
    counts: {
      landed: number
      clickedPay: number
      filledForm: number
      paid: number
      downloaded: number
    }
  }