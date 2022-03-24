import { Connector } from '@disco3/types';

var SupportedChainId;
(function(SupportedChainId2) {
  SupportedChainId2[SupportedChainId2["ETHEREUM"] = 1] = "ETHEREUM";
})(SupportedChainId || (SupportedChainId = {}));
class Url extends Connector {
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
      import('@ethersproject/providers').then(({ JsonRpcProvider }) => JsonRpcProvider),
      import('@ethersproject/experimental').then(({ Eip1193Bridge }) => Eip1193Bridge)
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

export { SUSHIGUARD_RELAY, SupportedChainId, Url };
//# sourceMappingURL=index.mjs.map
