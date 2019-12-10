import { Measures } from "./enums";
export default class itunes {
    private instance;
    private appId;
    login(username: string, password: string): Promise<unknown>;
    setAppId(appId: string): void;
    createError(msg: string): Error;
    getMetric(measures: Measures[] | Measures, startDate: Date, endDate: Date, callback: (error: any, totals: MetricResponse) => any): void;
}
declare type MetricResponse = {
    value: number;
    type: string;
    key: Measures;
};
export {};
