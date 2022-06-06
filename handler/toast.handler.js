import { Subject } from 'rxjs'
import { filter } from 'rxjs/operators'


export const toastService = {
    onToast,
    success,
    error,
    info,
    warn,
    toast,
    clear
}

export const ToastType = {
    Success: 'Success',
    Error: 'Error',
    Info: 'Info',
    Warning: 'Warning'
}

const toastSubject = new Subject()
const defaultId = "default-toast"

// enable subscribing to toasts observable
function onToast(id = defaultId) {
    return toastSubject.asObservable().pipe(filter(x => x && x.id === id))
}

// convenience methods
function success(message, options) {
    toast({ ...options, type: ToastType.Success, message })
}

function error(message, options) {
    toast({ ...options, type: ToastType.Error, message })
}

function info(message, options) {
    toast({ ...options, type: ToastType.Info, message })
}

function warn(message, options) {
    toast({ ...options, type: ToastType.Warning, message })
}

// core toast method
function toast(toast) {
    toast.id = toast.id || defaultId
    toast.autoClose = (toast.autoClose === undefined ? true : toast.autoClose)
    toastSubject.next(toast)
}

// clear toasts
function clear(id = defaultId) {
    toastSubject.next({ id })
}