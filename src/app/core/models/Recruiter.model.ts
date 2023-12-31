import { Company } from "./Company.model";

export interface Recruiter {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    company: Company;

}