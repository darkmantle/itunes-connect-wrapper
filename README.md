
## Itunes Connect Wrapper

[![CodeFactor](https://www.codefactor.io/repository/github/darkmantle/itunes-connect-wrapper/badge)](https://www.codefactor.io/repository/github/darkmantle/itunes-connect-wrapper)

A basic wrapper around the [itunesconnectanalytics](https://github.com/JanHalozan/iTunesConnectAnalytics) package to simplify usage. So far limited functionality available - dimension filters and groups are not implemented.

**Note: Testing does work but not included in source as an AppStore account is required.**


#### Example usage
```typescript
import itunes, { Measures } from "itunes-connect-wrapper";

const it = new itunes();

const callback = (err, res) => {
    if(err) console.error(err);
    else console.log(res);
}

it.login(USERNAME, PASSWORD).then(res => {
    it.setAppId("APP_ID");
    it.getMetric([Measures.installs, Measures.pageViews], START_DATE, END_DATE, callback);
});
```