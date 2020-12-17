// this file will eventually be removed
// and superseeded by use-cache.js
// after all components use composition api

export default {
  created () {
    this.__qCache = {}
  },

  methods: {
    __getCache: __QUASAR_SSR_SERVER__
      ? function (_, obj) { return obj }
      : function (key, obj) {
        return this.__qCache[ key ] === void 0
          ? (this.__qCache[ key ] = obj)
          : this.__qCache[ key ]
      },

    __getCacheWithFn: __QUASAR_SSR_SERVER__
      ? function (_, fn) { return fn() }
      : function (key, fn) {
        return this.__qCache[ key ] === void 0
          ? (this.__qCache[ key ] = fn())
          : this.__qCache[ key ]
      }
  }
}