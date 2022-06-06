import invariant from 'tiny-invariant';
import { NativeCurrency } from './nativeCurrency';
import { WONE } from './wone';
/**
 * Ether is the main usage of a 'native' currency, i.e. for Ethereum mainnet and all testnets
 */
export class Ether extends NativeCurrency {
    constructor(chainId) {
        super(chainId, 18, 'ETH', 'Ether');
    }
    get wrapped() {
        const wone = WONE[this.chainId];
        invariant(!!wone, 'WRAPPED');
        return wone;
    }
    static onChain(chainId) {
        var _a;
        return (_a = this._etherCache[chainId]) !== null && _a !== void 0 ? _a : (this._etherCache[chainId] = new Ether(chainId));
    }
    equals(other) {
        return other.isNative && other.chainId === this.chainId;
    }
}
Ether._etherCache = {};
//# sourceMappingURL=ether.js.map