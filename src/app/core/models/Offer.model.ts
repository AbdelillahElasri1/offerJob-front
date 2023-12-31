import { SafeResourceUrl } from "@angular/platform-browser";
import { Company } from "./Company.model";
import { Agent } from "./Agent.model";

export interface Offer {
    id: number;
    title: string;
    description: string;
    profile: string;
    city: string;
    educationLevel: string;
    salary: number;
    status: string;
    company: Company;
    agent: Agent;
}