'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var types = require('@disco3/types');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

exports.SupportedChainId = void 0;
(function(SupportedChainId2) {
  SupportedChainId2[SupportedChainId2["ETHEREUM"] = 1] = "ETHEREUM";
})(exports.SupportedChainId || (exports.SupportedChainId = {}));
class Url extends types.Connector {
  constructor(actions, url, connectEagerly = false) {
    super(actions);
    if (connectEagerly && typeof window === "undefined") {
      throw new Error("connectEagerly = true is invalid for SSR, instead use the activate method in a useEffect");
    }
    this.url = url;
    if (connectEagerly)
      void this.activate();
  }
  async isomorphicInitialize() {
    if (this.eagerConnection)
      return this.eagerConnection;
    await (this.eagerConnection = Promise.all([
      Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('@ethersproject/providers')); }).then(({ JsonRpcProvider }) => JsonRpcProvider),
      Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('@ethersproject/experimental')); }).then(({ Eip1193Bridge }) => Eip1193Bridge)
    ]).then(([JsonRpcProvider, Eip1193Bridge]) => {
      const provider = new JsonRpcProvider(this.url);
      this.provider = new Eip1193Bridge(provider.getSigner(), provider);
    }));
  }
  async activate() {
    if (!this.provider)
      this.actions.startActivation();
    await this.isomorphicInitialize();
    return this.provider.request({ method: "eth_chainId" }).then((chainId) => {
      this.actions.update({ chainId: parseChainId(chainId), accounts: [] });
    }).catch((error) => {
      this.actions.reportError(error);
    });
  }
}
function parseChainId(chainId) {
  return Number.parseInt(chainId, 16);
}
const SUSHIGUARD_RELAY = {
  [1]: "https://api.sushirelay.com/v1"
};

exports.SUSHIGUARD_RELAY = SUSHIGUARD_RELAY;
exports.Url = Url;
//# sourceMappingURL=index.js.map
