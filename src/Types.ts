

export interface IEvent {
    eventID: number,
    title: string,
    dateStart: string,
    dateEnd: string,
    address: {
        street: string,
        suburb: string,
        city: string,
        gps: {
            long: number,
            lat: number
        }
    },
    featuredImage: string,
    description: string,
    summary: string
}

export interface IEventsState {
    loading: boolean,
    hasErrors: boolean,
    events: IEvent[]
}

export interface IDateObject {
    day: number,
    month: number,
    year: number,
    names: {
        day: string,
        dayAbbr: string,
        month: string,
        monthAbbr: string
    },
    hours: number,
    minutes: number,
    seconds: number
}