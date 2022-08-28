export type DebtEvent = {
  id: number,
  name: string,
  created: Date
}

export type DebtPayment = {
  sender: {
    id: number,
    name: string
  },
  receiver: {
    id: number,
    name: string
  },
  amount: number
}

export type DebtPaymentSender = {
  id: number,
  name: string
  receivers: {
    id: number,
    name: string,
    amount: number
  }[]
}