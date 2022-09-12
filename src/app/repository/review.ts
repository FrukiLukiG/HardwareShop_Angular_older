import { Hardware } from "./hardware"

export interface Review {
    title: string
    text: string
    grade: number
    hardwareToReview: Hardware
}
