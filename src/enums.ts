enum Frequency {
    day = 'DAY',
    week = 'WEEK',
    month = 'MONTH'
};


enum Measures {
    installs =  'installs',
    sessions =  'sessions',
    pageViews =  'pageViewCount',
    activeDevices =  'activeDevices',
    activeLast30days =  'rollingActiveDevices',
    crashes =  'crashes',
    payingUsers =  'payingUsers',
    units =  'units',
    sales =  'sales',
    iap =  'iap',
    impressions =  'impressionsTotal',
    impressionsUnique =  'impressionsTotalUnique',
    pageViewUnique =  'pageViewUnique'
};

enum Dimension {
    appVersion =  'appVersion',
    campaigns =  'campaignId',
    device =  'platform',
    platformVersion =  'platformVersion',
    region =  'region',
    territory =  'storefront',
    websites =  'domainReferrer',
    apps =  'appReferrer',
    sourceType =  'source'
}

enum DimensionFilterKey {
    appPurchaseWeek =  'apppurchaseWeek',
    apppurchaseDay =  'apppurchaseDay',
    apppurchaseMonth =  'apppurchaseMonth',
    appVersion =  'appVersion',
    campaigns =  'campaignId',
    device =  'platform',
    platformVersion =  'platformVersion',
    territory =  'storefront',
    region =  'region',
    websites =  'domainReferrer'
}

enum Platform {
    iPhone =  'iPhone',
    iPad =  'iPad',
    iPod =  'iPod',
    appleTV =  'AppleTV'
}

enum QueryType {
    sources =  'sources',
    metrics =  'metrics'
}

export { QueryType, Platform, Frequency, Dimension, DimensionFilterKey, Measures };