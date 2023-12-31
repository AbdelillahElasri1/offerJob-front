import { Offer } from "./Offer.model";

export interface Application {
    id: number;
    applicationName: string;
    applicationEmail: string;
    cvAttchement: string;
    applicationDate: Date;
    offer: Offer;
}