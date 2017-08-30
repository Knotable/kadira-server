var collections = [
  {
    name: 'pubMetrics',
    index: {'value.res': 1, 'value.appId': 1, 'value.startTime': 1 }
  },
  {
    name: 'systemMetrics',
    index: {'value.res': 1, 'value.appId': 1, 'value.startTime': 1 }
  },
  {
    name: 'rawSystemMetrics',
    index: {'value.res': 1, 'value.appId': 1, 'value.startTime': 1 }
  },
  {
    name: 'errorMetrics',
    index: {'value.res': 1, 'value.appId': 1, 'value.startTime': 1 }
  },
  {
    name: 'rawPubMetrics',
    index: {'value.res': 1, 'value.appId': 1, 'value.startTime': 1 }
  },
  {
    name: 'methodsMetrics',
    index: {'value.res': 1, 'value.appId': 1, 'value.startTime': 1 }
  },
  {
    name: 'rawErrorMetrics',
    index: {'value.res': 1, 'value.appId': 1, 'value.startTime': 1 }
  },
  {
    name: 'rawMethodsMetrics',
    index: {'value.res': 1, 'value.appId': 1, 'value.startTime': 1 }
  },
  {
    name: 'pubTraces',
    index: { appId: 1, startTime: 1 }
  },
  {
    name: 'errorTraces',
    index: { appId: 1, startTime: 1 }
  }
]

collections.forEach(function (collection) {
  db.getCollection(collection.name).createIndex(collection.index)
})

