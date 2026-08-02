interface ToastType {
  id: number
  status: 'error' | 'success' | 'info'
  message: string
}

class Toast {
  list = $state<ToastType[]>([])

  send(status: ToastType['status'], message: string) {
    this.list.push({ id: Math.random() + 10000, status, message })
  }

  remove(id: number) {
    console.log(id, 'removing...')
    this.list = this.list.filter(entry => entry.id !== id)
  }
}

export const toasts = new Toast()
