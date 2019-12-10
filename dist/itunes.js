"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var itunesconnectanalytics_1 = require("itunesconnectanalytics");
var enums_1 = require("./enums");
var itunes = /** @class */ (function () {
    function itunes() {
    }
    itunes.prototype.login = function (username, password) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        if (!username || !password) {
                            throw new Error("Username and password are required");
                            return;
                        }
                        _this.instance = new itunesconnectanalytics_1.Itunes(username, password, {
                            errorCallback: function (e) {
                                reject('Error logging in: ' + e);
                            },
                            successCallback: function (d) {
                                resolve(true);
                            }
                        });
                    })];
            });
        });
    };
    itunes.prototype.setAppId = function (appId) {
        this.appId = appId;
    };
    itunes.prototype.createError = function (msg) {
        return new Error(msg);
    };
    itunes.prototype.getMetric = function (measures, startDate, endDate, callback) {
        if (!Array.isArray(measures))
            measures = [measures];
        var enumVals = Object.keys(enums_1.Measures).map(function (k) { return enums_1.Measures[k]; });
        for (var i = 0; i < measures.length; i++) {
            if (!enumVals.includes(measures[i])) {
                callback(this.createError("Incorrect metric entered"), null);
                return;
            }
        }
        var query = new itunesconnectanalytics_1.AnalyticsQuery.metrics(this.appId, {
            measures: measures
        }).date(startDate, endDate);
        this.instance.request(query, function (error, result) {
            if (error) {
                callback(this.createError(error), null);
                return;
            }
            var totals = result.results.map(function (r) { return r.totals; });
            callback(null, totals);
        });
    };
    return itunes;
}());
exports.default = itunes;
