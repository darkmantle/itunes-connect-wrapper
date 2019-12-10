import { Itunes, AnalyticsQuery, measures } from "itunesconnectanalytics";
import { Measures } from "./enums";

export default class itunes {

    private instance: Itunes;
    private appId: string;

    async login(username: string, password: string) {

        return new Promise((resolve, reject) => {

            if (!username || !password) {
                throw new Error("Username and password are required");
                return;
            }

            this.instance = new Itunes(username, password, {
                errorCallback: function (e) {
                    reject('Error logging in: ' + e);
                },
                successCallback: function (d) {
                    resolve(true);
                }
            });
        });
    }

    setAppId(appId: string): void {
        this.appId = appId;
    }

    createError(msg: string): Error {
        return new Error(msg);
    }

    getMetric(measures: Measures[] | Measures, startDate: Date, endDate: Date, callback: (error: any, totals: MetricResponse) => any) {
        if (!Array.isArray(measures)) measures = [measures];

        const enumVals = Object.keys(Measures).map(k => Measures[k as any]);
        
        for (var i=0; i<measures.length; i++) {
            if (!enumVals.includes(measures[i])) {
                callback(this.createError("Incorrect metric entered"), null);
                return;
            }
        }

        const query = new AnalyticsQuery.metrics(this.appId, {
            measures
        }).date(startDate, endDate);

        this.instance.request(query, function (error, result) {
            if (error) {
                callback(this.createError(error), null);
                return;
            }

            const totals: MetricResponse = result.results.map(r => r.totals);

            callback(null, totals);

        });
    }
}

type MetricResponse = {
    value: number;
    type: string;
    key: Measures}