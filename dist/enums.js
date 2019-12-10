"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Frequency;
(function (Frequency) {
    Frequency["day"] = "DAY";
    Frequency["week"] = "WEEK";
    Frequency["month"] = "MONTH";
})(Frequency || (Frequency = {}));
exports.Frequency = Frequency;
;
var Measures;
(function (Measures) {
    Measures["installs"] = "installs";
    Measures["sessions"] = "sessions";
    Measures["pageViews"] = "pageViewCount";
    Measures["activeDevices"] = "activeDevices";
    Measures["activeLast30days"] = "rollingActiveDevices";
    Measures["crashes"] = "crashes";
    Measures["payingUsers"] = "payingUsers";
    Measures["units"] = "units";
    Measures["sales"] = "sales";
    Measures["iap"] = "iap";
    Measures["impressions"] = "impressionsTotal";
    Measures["impressionsUnique"] = "impressionsTotalUnique";
    Measures["pageViewUnique"] = "pageViewUnique";
})(Measures || (Measures = {}));
exports.Measures = Measures;
;
var Dimension;
(function (Dimension) {
    Dimension["appVersion"] = "appVersion";
    Dimension["campaigns"] = "campaignId";
    Dimension["device"] = "platform";
    Dimension["platformVersion"] = "platformVersion";
    Dimension["region"] = "region";
    Dimension["territory"] = "storefront";
    Dimension["websites"] = "domainReferrer";
    Dimension["apps"] = "appReferrer";
    Dimension["sourceType"] = "source";
})(Dimension || (Dimension = {}));
exports.Dimension = Dimension;
var DimensionFilterKey;
(function (DimensionFilterKey) {
    DimensionFilterKey["appPurchaseWeek"] = "apppurchaseWeek";
    DimensionFilterKey["apppurchaseDay"] = "apppurchaseDay";
    DimensionFilterKey["apppurchaseMonth"] = "apppurchaseMonth";
    DimensionFilterKey["appVersion"] = "appVersion";
    DimensionFilterKey["campaigns"] = "campaignId";
    DimensionFilterKey["device"] = "platform";
    DimensionFilterKey["platformVersion"] = "platformVersion";
    DimensionFilterKey["territory"] = "storefront";
    DimensionFilterKey["region"] = "region";
    DimensionFilterKey["websites"] = "domainReferrer";
})(DimensionFilterKey || (DimensionFilterKey = {}));
exports.DimensionFilterKey = DimensionFilterKey;
var Platform;
(function (Platform) {
    Platform["iPhone"] = "iPhone";
    Platform["iPad"] = "iPad";
    Platform["iPod"] = "iPod";
    Platform["appleTV"] = "AppleTV";
})(Platform || (Platform = {}));
exports.Platform = Platform;
var QueryType;
(function (QueryType) {
    QueryType["sources"] = "sources";
    QueryType["metrics"] = "metrics";
})(QueryType || (QueryType = {}));
exports.QueryType = QueryType;
