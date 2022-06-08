import { Subject } from "rxjs"
import { filter } from "rxjs/operators"

export const eventService = {
    onEvent,
    sendEvent,
    clear,
}

const eventSubject = new Subject()
const defaultId = "default-event"


function onEvent(id = defaultId) {
    return eventSubject.asObservable().pipe(filter((x) => x && x.id === id))
}

function sendEvent(event) {
    event.id = event.id || defaultId
    event.autoClose = event.autoClose === undefined ? true : event.autoClose
    eventSubject.next(event)
}


function clear(id = defaultId) {
    eventSubject.next({ id })
}
