import { ConnectionInfo } from '@ethersproject/web';
import { Eip1193Bridge } from '@ethersproject/experimental';
import { Connector, Actions } from '@disco3/types';

declare enum SupportedChainId {
    ETHEREUM = 1
}
declare class Url extends Connector {
    /** {@inheritdoc Connector.provider} */
    provider: Eip1193Bridge | undefined;
    private eagerConnection?;
    private url;
    /**
     * @param url - An RPC url.
     * @param connectEagerly - A flag indicating whether connection should be initiated when the class is constructed.
     */
    constructor(actions: Actions, url: url, connectEagerly?: boolean);
    private isomorphicInitialize;
    /** {@inheritdoc Connector.activate} */
    activate(): Promise<void>;
}
declare type url = string | ConnectionInfo;
declare const SUSHIGUARD_RELAY: {
    [chainId in SupportedChainId]?: string;
};

export { SUSHIGUARD_RELAY, SupportedChainId, Url };
