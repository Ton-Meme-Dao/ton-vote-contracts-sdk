import {
    Cell,
    Slice,
    Address,
    Builder,
    beginCell,
    ComputeError,
    TupleItem,
    TupleReader,
    Dictionary,
    contractAddress,
    address,
    ContractProvider,
    Sender,
    Contract,
    ContractABI,
    ABIType,
    ABIGetter,
    ABIReceiver,
    TupleBuilder,
    DictionaryValue
} from 'ton-core';

export type DataSize = {
    $$type: 'DataSize';
    cells: bigint;
    bits: bigint;
    refs: bigint;
}

export function storeDataSize(src: DataSize) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeInt(src.cells, 257);
        b_0.storeInt(src.bits, 257);
        b_0.storeInt(src.refs, 257);
    };
}

export function loadDataSize(slice: Slice) {
    const sc_0 = slice;
    const _cells = sc_0.loadIntBig(257);
    const _bits = sc_0.loadIntBig(257);
    const _refs = sc_0.loadIntBig(257);
    return { $$type: 'DataSize' as const, cells: _cells, bits: _bits, refs: _refs };
}

export function loadTupleDataSize(source: TupleReader) {
    const _cells = source.readBigNumber();
    const _bits = source.readBigNumber();
    const _refs = source.readBigNumber();
    return { $$type: 'DataSize' as const, cells: _cells, bits: _bits, refs: _refs };
}

export function loadGetterTupleDataSize(source: TupleReader) {
    const _cells = source.readBigNumber();
    const _bits = source.readBigNumber();
    const _refs = source.readBigNumber();
    return { $$type: 'DataSize' as const, cells: _cells, bits: _bits, refs: _refs };
}

export function storeTupleDataSize(source: DataSize) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.cells);
    builder.writeNumber(source.bits);
    builder.writeNumber(source.refs);
    return builder.build();
}

export function dictValueParserDataSize(): DictionaryValue<DataSize> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDataSize(src)).endCell());
        },
        parse: (src) => {
            return loadDataSize(src.loadRef().beginParse());
        }
    }
}

export type SignedBundle = {
    $$type: 'SignedBundle';
    signature: Buffer;
    signedData: Slice;
}

export function storeSignedBundle(src: SignedBundle) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeBuffer(src.signature);
        b_0.storeBuilder(src.signedData.asBuilder());
    };
}

export function loadSignedBundle(slice: Slice) {
    const sc_0 = slice;
    const _signature = sc_0.loadBuffer(64);
    const _signedData = sc_0;
    return { $$type: 'SignedBundle' as const, signature: _signature, signedData: _signedData };
}

export function loadTupleSignedBundle(source: TupleReader) {
    const _signature = source.readBuffer();
    const _signedData = source.readCell().asSlice();
    return { $$type: 'SignedBundle' as const, signature: _signature, signedData: _signedData };
}

export function loadGetterTupleSignedBundle(source: TupleReader) {
    const _signature = source.readBuffer();
    const _signedData = source.readCell().asSlice();
    return { $$type: 'SignedBundle' as const, signature: _signature, signedData: _signedData };
}

export function storeTupleSignedBundle(source: SignedBundle) {
    const builder = new TupleBuilder();
    builder.writeBuffer(source.signature);
    builder.writeSlice(source.signedData.asCell());
    return builder.build();
}

export function dictValueParserSignedBundle(): DictionaryValue<SignedBundle> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSignedBundle(src)).endCell());
        },
        parse: (src) => {
            return loadSignedBundle(src.loadRef().beginParse());
        }
    }
}

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    const sc_0 = slice;
    const _code = sc_0.loadRef();
    const _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

export function loadTupleStateInit(source: TupleReader) {
    const _code = source.readCell();
    const _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

export function loadGetterTupleStateInit(source: TupleReader) {
    const _code = source.readCell();
    const _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

export function storeTupleStateInit(source: StateInit) {
    const builder = new TupleBuilder();
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

export function dictValueParserStateInit(): DictionaryValue<StateInit> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeStateInit(src)).endCell());
        },
        parse: (src) => {
            return loadStateInit(src.loadRef().beginParse());
        }
    }
}

export type Context = {
    $$type: 'Context';
    bounceable: boolean;
    sender: Address;
    value: bigint;
    raw: Slice;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeBit(src.bounceable);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw.asCell());
    };
}

export function loadContext(slice: Slice) {
    const sc_0 = slice;
    const _bounceable = sc_0.loadBit();
    const _sender = sc_0.loadAddress();
    const _value = sc_0.loadIntBig(257);
    const _raw = sc_0.loadRef().asSlice();
    return { $$type: 'Context' as const, bounceable: _bounceable, sender: _sender, value: _value, raw: _raw };
}

export function loadTupleContext(source: TupleReader) {
    const _bounceable = source.readBoolean();
    const _sender = source.readAddress();
    const _value = source.readBigNumber();
    const _raw = source.readCell().asSlice();
    return { $$type: 'Context' as const, bounceable: _bounceable, sender: _sender, value: _value, raw: _raw };
}

export function loadGetterTupleContext(source: TupleReader) {
    const _bounceable = source.readBoolean();
    const _sender = source.readAddress();
    const _value = source.readBigNumber();
    const _raw = source.readCell().asSlice();
    return { $$type: 'Context' as const, bounceable: _bounceable, sender: _sender, value: _value, raw: _raw };
}

export function storeTupleContext(source: Context) {
    const builder = new TupleBuilder();
    builder.writeBoolean(source.bounceable);
    builder.writeAddress(source.sender);
    builder.writeNumber(source.value);
    builder.writeSlice(source.raw.asCell());
    return builder.build();
}

export function dictValueParserContext(): DictionaryValue<Context> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeContext(src)).endCell());
        },
        parse: (src) => {
            return loadContext(src.loadRef().beginParse());
        }
    }
}

export type SendParameters = {
    $$type: 'SendParameters';
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
    value: bigint;
    to: Address;
    bounce: boolean;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
        if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
        b_0.storeInt(src.value, 257);
        b_0.storeAddress(src.to);
        b_0.storeBit(src.bounce);
    };
}

export function loadSendParameters(slice: Slice) {
    const sc_0 = slice;
    const _mode = sc_0.loadIntBig(257);
    const _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    const _code = sc_0.loadBit() ? sc_0.loadRef() : null;
    const _data = sc_0.loadBit() ? sc_0.loadRef() : null;
    const _value = sc_0.loadIntBig(257);
    const _to = sc_0.loadAddress();
    const _bounce = sc_0.loadBit();
    return { $$type: 'SendParameters' as const, mode: _mode, body: _body, code: _code, data: _data, value: _value, to: _to, bounce: _bounce };
}

export function loadTupleSendParameters(source: TupleReader) {
    const _mode = source.readBigNumber();
    const _body = source.readCellOpt();
    const _code = source.readCellOpt();
    const _data = source.readCellOpt();
    const _value = source.readBigNumber();
    const _to = source.readAddress();
    const _bounce = source.readBoolean();
    return { $$type: 'SendParameters' as const, mode: _mode, body: _body, code: _code, data: _data, value: _value, to: _to, bounce: _bounce };
}

export function loadGetterTupleSendParameters(source: TupleReader) {
    const _mode = source.readBigNumber();
    const _body = source.readCellOpt();
    const _code = source.readCellOpt();
    const _data = source.readCellOpt();
    const _value = source.readBigNumber();
    const _to = source.readAddress();
    const _bounce = source.readBoolean();
    return { $$type: 'SendParameters' as const, mode: _mode, body: _body, code: _code, data: _data, value: _value, to: _to, bounce: _bounce };
}

export function storeTupleSendParameters(source: SendParameters) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    builder.writeNumber(source.value);
    builder.writeAddress(source.to);
    builder.writeBoolean(source.bounce);
    return builder.build();
}

export function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSendParameters(src)).endCell());
        },
        parse: (src) => {
            return loadSendParameters(src.loadRef().beginParse());
        }
    }
}

export type MessageParameters = {
    $$type: 'MessageParameters';
    mode: bigint;
    body: Cell | null;
    value: bigint;
    to: Address;
    bounce: boolean;
}

export function storeMessageParameters(src: MessageParameters) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        b_0.storeInt(src.value, 257);
        b_0.storeAddress(src.to);
        b_0.storeBit(src.bounce);
    };
}

export function loadMessageParameters(slice: Slice) {
    const sc_0 = slice;
    const _mode = sc_0.loadIntBig(257);
    const _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    const _value = sc_0.loadIntBig(257);
    const _to = sc_0.loadAddress();
    const _bounce = sc_0.loadBit();
    return { $$type: 'MessageParameters' as const, mode: _mode, body: _body, value: _value, to: _to, bounce: _bounce };
}

export function loadTupleMessageParameters(source: TupleReader) {
    const _mode = source.readBigNumber();
    const _body = source.readCellOpt();
    const _value = source.readBigNumber();
    const _to = source.readAddress();
    const _bounce = source.readBoolean();
    return { $$type: 'MessageParameters' as const, mode: _mode, body: _body, value: _value, to: _to, bounce: _bounce };
}

export function loadGetterTupleMessageParameters(source: TupleReader) {
    const _mode = source.readBigNumber();
    const _body = source.readCellOpt();
    const _value = source.readBigNumber();
    const _to = source.readAddress();
    const _bounce = source.readBoolean();
    return { $$type: 'MessageParameters' as const, mode: _mode, body: _body, value: _value, to: _to, bounce: _bounce };
}

export function storeTupleMessageParameters(source: MessageParameters) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeNumber(source.value);
    builder.writeAddress(source.to);
    builder.writeBoolean(source.bounce);
    return builder.build();
}

export function dictValueParserMessageParameters(): DictionaryValue<MessageParameters> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeMessageParameters(src)).endCell());
        },
        parse: (src) => {
            return loadMessageParameters(src.loadRef().beginParse());
        }
    }
}

export type DeployParameters = {
    $$type: 'DeployParameters';
    mode: bigint;
    body: Cell | null;
    value: bigint;
    bounce: boolean;
    init: StateInit;
}

export function storeDeployParameters(src: DeployParameters) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        b_0.storeInt(src.value, 257);
        b_0.storeBit(src.bounce);
        b_0.store(storeStateInit(src.init));
    };
}

export function loadDeployParameters(slice: Slice) {
    const sc_0 = slice;
    const _mode = sc_0.loadIntBig(257);
    const _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    const _value = sc_0.loadIntBig(257);
    const _bounce = sc_0.loadBit();
    const _init = loadStateInit(sc_0);
    return { $$type: 'DeployParameters' as const, mode: _mode, body: _body, value: _value, bounce: _bounce, init: _init };
}

export function loadTupleDeployParameters(source: TupleReader) {
    const _mode = source.readBigNumber();
    const _body = source.readCellOpt();
    const _value = source.readBigNumber();
    const _bounce = source.readBoolean();
    const _init = loadTupleStateInit(source);
    return { $$type: 'DeployParameters' as const, mode: _mode, body: _body, value: _value, bounce: _bounce, init: _init };
}

export function loadGetterTupleDeployParameters(source: TupleReader) {
    const _mode = source.readBigNumber();
    const _body = source.readCellOpt();
    const _value = source.readBigNumber();
    const _bounce = source.readBoolean();
    const _init = loadGetterTupleStateInit(source);
    return { $$type: 'DeployParameters' as const, mode: _mode, body: _body, value: _value, bounce: _bounce, init: _init };
}

export function storeTupleDeployParameters(source: DeployParameters) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeNumber(source.value);
    builder.writeBoolean(source.bounce);
    builder.writeTuple(storeTupleStateInit(source.init));
    return builder.build();
}

export function dictValueParserDeployParameters(): DictionaryValue<DeployParameters> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeployParameters(src)).endCell());
        },
        parse: (src) => {
            return loadDeployParameters(src.loadRef().beginParse());
        }
    }
}

export type StdAddress = {
    $$type: 'StdAddress';
    workchain: bigint;
    address: bigint;
}

export function storeStdAddress(src: StdAddress) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeInt(src.workchain, 8);
        b_0.storeUint(src.address, 256);
    };
}

export function loadStdAddress(slice: Slice) {
    const sc_0 = slice;
    const _workchain = sc_0.loadIntBig(8);
    const _address = sc_0.loadUintBig(256);
    return { $$type: 'StdAddress' as const, workchain: _workchain, address: _address };
}

export function loadTupleStdAddress(source: TupleReader) {
    const _workchain = source.readBigNumber();
    const _address = source.readBigNumber();
    return { $$type: 'StdAddress' as const, workchain: _workchain, address: _address };
}

export function loadGetterTupleStdAddress(source: TupleReader) {
    const _workchain = source.readBigNumber();
    const _address = source.readBigNumber();
    return { $$type: 'StdAddress' as const, workchain: _workchain, address: _address };
}

export function storeTupleStdAddress(source: StdAddress) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.workchain);
    builder.writeNumber(source.address);
    return builder.build();
}

export function dictValueParserStdAddress(): DictionaryValue<StdAddress> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeStdAddress(src)).endCell());
        },
        parse: (src) => {
            return loadStdAddress(src.loadRef().beginParse());
        }
    }
}

export type VarAddress = {
    $$type: 'VarAddress';
    workchain: bigint;
    address: Slice;
}

export function storeVarAddress(src: VarAddress) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeInt(src.workchain, 32);
        b_0.storeRef(src.address.asCell());
    };
}

export function loadVarAddress(slice: Slice) {
    const sc_0 = slice;
    const _workchain = sc_0.loadIntBig(32);
    const _address = sc_0.loadRef().asSlice();
    return { $$type: 'VarAddress' as const, workchain: _workchain, address: _address };
}

export function loadTupleVarAddress(source: TupleReader) {
    const _workchain = source.readBigNumber();
    const _address = source.readCell().asSlice();
    return { $$type: 'VarAddress' as const, workchain: _workchain, address: _address };
}

export function loadGetterTupleVarAddress(source: TupleReader) {
    const _workchain = source.readBigNumber();
    const _address = source.readCell().asSlice();
    return { $$type: 'VarAddress' as const, workchain: _workchain, address: _address };
}

export function storeTupleVarAddress(source: VarAddress) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.workchain);
    builder.writeSlice(source.address.asCell());
    return builder.build();
}

export function dictValueParserVarAddress(): DictionaryValue<VarAddress> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeVarAddress(src)).endCell());
        },
        parse: (src) => {
            return loadVarAddress(src.loadRef().beginParse());
        }
    }
}

export type BasechainAddress = {
    $$type: 'BasechainAddress';
    hash: bigint | null;
}

export function storeBasechainAddress(src: BasechainAddress) {
    return (builder: Builder) => {
        const b_0 = builder;
        if (src.hash !== null && src.hash !== undefined) { b_0.storeBit(true).storeInt(src.hash, 257); } else { b_0.storeBit(false); }
    };
}

export function loadBasechainAddress(slice: Slice) {
    const sc_0 = slice;
    const _hash = sc_0.loadBit() ? sc_0.loadIntBig(257) : null;
    return { $$type: 'BasechainAddress' as const, hash: _hash };
}

export function loadTupleBasechainAddress(source: TupleReader) {
    const _hash = source.readBigNumberOpt();
    return { $$type: 'BasechainAddress' as const, hash: _hash };
}

export function loadGetterTupleBasechainAddress(source: TupleReader) {
    const _hash = source.readBigNumberOpt();
    return { $$type: 'BasechainAddress' as const, hash: _hash };
}

export function storeTupleBasechainAddress(source: BasechainAddress) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.hash);
    return builder.build();
}

export function dictValueParserBasechainAddress(): DictionaryValue<BasechainAddress> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeBasechainAddress(src)).endCell());
        },
        parse: (src) => {
            return loadBasechainAddress(src.loadRef().beginParse());
        }
    }
}

export type Deploy = {
    $$type: 'Deploy';
    queryId: bigint;
}

export function storeDeploy(src: Deploy) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(2490013878, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeploy(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 2490013878) { throw Error('Invalid prefix'); }
    const _queryId = sc_0.loadUintBig(64);
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

export function loadTupleDeploy(source: TupleReader) {
    const _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

export function loadGetterTupleDeploy(source: TupleReader) {
    const _queryId = source.readBigNumber();
    return { $$type: 'Deploy' as const, queryId: _queryId };
}

export function storeTupleDeploy(source: Deploy) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

export function dictValueParserDeploy(): DictionaryValue<Deploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadDeploy(src.loadRef().beginParse());
        }
    }
}

export type DeployOk = {
    $$type: 'DeployOk';
    queryId: bigint;
}

export function storeDeployOk(src: DeployOk) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(2952335191, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadDeployOk(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 2952335191) { throw Error('Invalid prefix'); }
    const _queryId = sc_0.loadUintBig(64);
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

export function loadTupleDeployOk(source: TupleReader) {
    const _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

export function loadGetterTupleDeployOk(source: TupleReader) {
    const _queryId = source.readBigNumber();
    return { $$type: 'DeployOk' as const, queryId: _queryId };
}

export function storeTupleDeployOk(source: DeployOk) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

export function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeployOk(src)).endCell());
        },
        parse: (src) => {
            return loadDeployOk(src.loadRef().beginParse());
        }
    }
}

export type FactoryDeploy = {
    $$type: 'FactoryDeploy';
    queryId: bigint;
    cashback: Address;
}

export function storeFactoryDeploy(src: FactoryDeploy) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(1829761339, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.cashback);
    };
}

export function loadFactoryDeploy(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 1829761339) { throw Error('Invalid prefix'); }
    const _queryId = sc_0.loadUintBig(64);
    const _cashback = sc_0.loadAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

export function loadTupleFactoryDeploy(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

export function loadGetterTupleFactoryDeploy(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _cashback = source.readAddress();
    return { $$type: 'FactoryDeploy' as const, queryId: _queryId, cashback: _cashback };
}

export function storeTupleFactoryDeploy(source: FactoryDeploy) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.cashback);
    return builder.build();
}

export function dictValueParserFactoryDeploy(): DictionaryValue<FactoryDeploy> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeFactoryDeploy(src)).endCell());
        },
        parse: (src) => {
            return loadFactoryDeploy(src.loadRef().beginParse());
        }
    }
}

export type ChangeOwner = {
    $$type: 'ChangeOwner';
    queryId: bigint;
    newOwner: Address;
}

export function storeChangeOwner(src: ChangeOwner) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(2174598809, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadChangeOwner(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 2174598809) { throw Error('Invalid prefix'); }
    const _queryId = sc_0.loadUintBig(64);
    const _newOwner = sc_0.loadAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

export function loadTupleChangeOwner(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _newOwner = source.readAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

export function loadGetterTupleChangeOwner(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _newOwner = source.readAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

export function storeTupleChangeOwner(source: ChangeOwner) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.newOwner);
    return builder.build();
}

export function dictValueParserChangeOwner(): DictionaryValue<ChangeOwner> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeChangeOwner(src)).endCell());
        },
        parse: (src) => {
            return loadChangeOwner(src.loadRef().beginParse());
        }
    }
}

export type ChangeOwnerOk = {
    $$type: 'ChangeOwnerOk';
    queryId: bigint;
    newOwner: Address;
}

export function storeChangeOwnerOk(src: ChangeOwnerOk) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(846932810, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadChangeOwnerOk(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 846932810) { throw Error('Invalid prefix'); }
    const _queryId = sc_0.loadUintBig(64);
    const _newOwner = sc_0.loadAddress();
    return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

export function loadTupleChangeOwnerOk(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _newOwner = source.readAddress();
    return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

export function loadGetterTupleChangeOwnerOk(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _newOwner = source.readAddress();
    return { $$type: 'ChangeOwnerOk' as const, queryId: _queryId, newOwner: _newOwner };
}

export function storeTupleChangeOwnerOk(source: ChangeOwnerOk) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.newOwner);
    return builder.build();
}

export function dictValueParserChangeOwnerOk(): DictionaryValue<ChangeOwnerOk> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeChangeOwnerOk(src)).endCell());
        },
        parse: (src) => {
            return loadChangeOwnerOk(src.loadRef().beginParse());
        }
    }
}

export type SetOwner = {
    $$type: 'SetOwner';
    newOwner: Address;
}

export function storeSetOwner(src: SetOwner) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(3266583875, 32);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadSetOwner(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 3266583875) { throw Error('Invalid prefix'); }
    const _newOwner = sc_0.loadAddress();
    return { $$type: 'SetOwner' as const, newOwner: _newOwner };
}

export function loadTupleSetOwner(source: TupleReader) {
    const _newOwner = source.readAddress();
    return { $$type: 'SetOwner' as const, newOwner: _newOwner };
}

export function loadGetterTupleSetOwner(source: TupleReader) {
    const _newOwner = source.readAddress();
    return { $$type: 'SetOwner' as const, newOwner: _newOwner };
}

export function storeTupleSetOwner(source: SetOwner) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.newOwner);
    return builder.build();
}

export function dictValueParserSetOwner(): DictionaryValue<SetOwner> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSetOwner(src)).endCell());
        },
        parse: (src) => {
            return loadSetOwner(src.loadRef().beginParse());
        }
    }
}

export type SetProposalOwner = {
    $$type: 'SetProposalOwner';
    newProposalOwner: Address;
}

export function storeSetProposalOwner(src: SetProposalOwner) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(3504586358, 32);
        b_0.storeAddress(src.newProposalOwner);
    };
}

export function loadSetProposalOwner(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 3504586358) { throw Error('Invalid prefix'); }
    const _newProposalOwner = sc_0.loadAddress();
    return { $$type: 'SetProposalOwner' as const, newProposalOwner: _newProposalOwner };
}

export function loadTupleSetProposalOwner(source: TupleReader) {
    const _newProposalOwner = source.readAddress();
    return { $$type: 'SetProposalOwner' as const, newProposalOwner: _newProposalOwner };
}

export function loadGetterTupleSetProposalOwner(source: TupleReader) {
    const _newProposalOwner = source.readAddress();
    return { $$type: 'SetProposalOwner' as const, newProposalOwner: _newProposalOwner };
}

export function storeTupleSetProposalOwner(source: SetProposalOwner) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.newProposalOwner);
    return builder.build();
}

export function dictValueParserSetProposalOwner(): DictionaryValue<SetProposalOwner> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSetProposalOwner(src)).endCell());
        },
        parse: (src) => {
            return loadSetProposalOwner(src.loadRef().beginParse());
        }
    }
}

export type SetFwdMsgFee = {
    $$type: 'SetFwdMsgFee';
    newFwdMsgFee: bigint;
}

export function storeSetFwdMsgFee(src: SetFwdMsgFee) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(4109608450, 32);
        b_0.storeUint(src.newFwdMsgFee, 64);
    };
}

export function loadSetFwdMsgFee(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 4109608450) { throw Error('Invalid prefix'); }
    const _newFwdMsgFee = sc_0.loadUintBig(64);
    return { $$type: 'SetFwdMsgFee' as const, newFwdMsgFee: _newFwdMsgFee };
}

export function loadTupleSetFwdMsgFee(source: TupleReader) {
    const _newFwdMsgFee = source.readBigNumber();
    return { $$type: 'SetFwdMsgFee' as const, newFwdMsgFee: _newFwdMsgFee };
}

export function loadGetterTupleSetFwdMsgFee(source: TupleReader) {
    const _newFwdMsgFee = source.readBigNumber();
    return { $$type: 'SetFwdMsgFee' as const, newFwdMsgFee: _newFwdMsgFee };
}

export function storeTupleSetFwdMsgFee(source: SetFwdMsgFee) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.newFwdMsgFee);
    return builder.build();
}

export function dictValueParserSetFwdMsgFee(): DictionaryValue<SetFwdMsgFee> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSetFwdMsgFee(src)).endCell());
        },
        parse: (src) => {
            return loadSetFwdMsgFee(src.loadRef().beginParse());
        }
    }
}

export type SetMetadata = {
    $$type: 'SetMetadata';
    newMetadata: Address;
}

export function storeSetMetadata(src: SetMetadata) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(3660550271, 32);
        b_0.storeAddress(src.newMetadata);
    };
}

export function loadSetMetadata(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 3660550271) { throw Error('Invalid prefix'); }
    const _newMetadata = sc_0.loadAddress();
    return { $$type: 'SetMetadata' as const, newMetadata: _newMetadata };
}

export function loadTupleSetMetadata(source: TupleReader) {
    const _newMetadata = source.readAddress();
    return { $$type: 'SetMetadata' as const, newMetadata: _newMetadata };
}

export function loadGetterTupleSetMetadata(source: TupleReader) {
    const _newMetadata = source.readAddress();
    return { $$type: 'SetMetadata' as const, newMetadata: _newMetadata };
}

export function storeTupleSetMetadata(source: SetMetadata) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.newMetadata);
    return builder.build();
}

export function dictValueParserSetMetadata(): DictionaryValue<SetMetadata> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSetMetadata(src)).endCell());
        },
        parse: (src) => {
            return loadSetMetadata(src.loadRef().beginParse());
        }
    }
}

export type DaoInit = {
    $$type: 'DaoInit';
    owner: Address;
    proposalOwner: Address;
    metadata: Address;
    fwdMsgFee: bigint;
}

export function storeDaoInit(src: DaoInit) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(3971512043, 32);
        b_0.storeAddress(src.owner);
        b_0.storeAddress(src.proposalOwner);
        b_0.storeAddress(src.metadata);
        b_0.storeUint(src.fwdMsgFee, 64);
    };
}

export function loadDaoInit(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 3971512043) { throw Error('Invalid prefix'); }
    const _owner = sc_0.loadAddress();
    const _proposalOwner = sc_0.loadAddress();
    const _metadata = sc_0.loadAddress();
    const _fwdMsgFee = sc_0.loadUintBig(64);
    return { $$type: 'DaoInit' as const, owner: _owner, proposalOwner: _proposalOwner, metadata: _metadata, fwdMsgFee: _fwdMsgFee };
}

export function loadTupleDaoInit(source: TupleReader) {
    const _owner = source.readAddress();
    const _proposalOwner = source.readAddress();
    const _metadata = source.readAddress();
    const _fwdMsgFee = source.readBigNumber();
    return { $$type: 'DaoInit' as const, owner: _owner, proposalOwner: _proposalOwner, metadata: _metadata, fwdMsgFee: _fwdMsgFee };
}

export function loadGetterTupleDaoInit(source: TupleReader) {
    const _owner = source.readAddress();
    const _proposalOwner = source.readAddress();
    const _metadata = source.readAddress();
    const _fwdMsgFee = source.readBigNumber();
    return { $$type: 'DaoInit' as const, owner: _owner, proposalOwner: _proposalOwner, metadata: _metadata, fwdMsgFee: _fwdMsgFee };
}

export function storeTupleDaoInit(source: DaoInit) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.owner);
    builder.writeAddress(source.proposalOwner);
    builder.writeAddress(source.metadata);
    builder.writeNumber(source.fwdMsgFee);
    return builder.build();
}

export function dictValueParserDaoInit(): DictionaryValue<DaoInit> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDaoInit(src)).endCell());
        },
        parse: (src) => {
            return loadDaoInit(src.loadRef().beginParse());
        }
    }
}

export type DaoContractState = {
    $$type: 'DaoContractState';
    registry: Address;
    owner: Address;
    proposalOwner: Address;
    metadata: Address;
    daoIndex: bigint;
    fwdMsgFee: bigint;
}

export function storeDaoContractState(src: DaoContractState) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeAddress(src.registry);
        b_0.storeAddress(src.owner);
        b_0.storeAddress(src.proposalOwner);
        const b_1 = new Builder();
        b_1.storeAddress(src.metadata);
        b_1.storeUint(src.daoIndex, 32);
        b_1.storeUint(src.fwdMsgFee, 64);
        b_0.storeRef(b_1.endCell());
    };
}

export function loadDaoContractState(slice: Slice) {
    const sc_0 = slice;
    const _registry = sc_0.loadAddress();
    const _owner = sc_0.loadAddress();
    const _proposalOwner = sc_0.loadAddress();
    const sc_1 = sc_0.loadRef().beginParse();
    const _metadata = sc_1.loadAddress();
    const _daoIndex = sc_1.loadUintBig(32);
    const _fwdMsgFee = sc_1.loadUintBig(64);
    return { $$type: 'DaoContractState' as const, registry: _registry, owner: _owner, proposalOwner: _proposalOwner, metadata: _metadata, daoIndex: _daoIndex, fwdMsgFee: _fwdMsgFee };
}

export function loadTupleDaoContractState(source: TupleReader) {
    const _registry = source.readAddress();
    const _owner = source.readAddress();
    const _proposalOwner = source.readAddress();
    const _metadata = source.readAddress();
    const _daoIndex = source.readBigNumber();
    const _fwdMsgFee = source.readBigNumber();
    return { $$type: 'DaoContractState' as const, registry: _registry, owner: _owner, proposalOwner: _proposalOwner, metadata: _metadata, daoIndex: _daoIndex, fwdMsgFee: _fwdMsgFee };
}

export function loadGetterTupleDaoContractState(source: TupleReader) {
    const _registry = source.readAddress();
    const _owner = source.readAddress();
    const _proposalOwner = source.readAddress();
    const _metadata = source.readAddress();
    const _daoIndex = source.readBigNumber();
    const _fwdMsgFee = source.readBigNumber();
    return { $$type: 'DaoContractState' as const, registry: _registry, owner: _owner, proposalOwner: _proposalOwner, metadata: _metadata, daoIndex: _daoIndex, fwdMsgFee: _fwdMsgFee };
}

export function storeTupleDaoContractState(source: DaoContractState) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.registry);
    builder.writeAddress(source.owner);
    builder.writeAddress(source.proposalOwner);
    builder.writeAddress(source.metadata);
    builder.writeNumber(source.daoIndex);
    builder.writeNumber(source.fwdMsgFee);
    return builder.build();
}

export function dictValueParserDaoContractState(): DictionaryValue<DaoContractState> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDaoContractState(src)).endCell());
        },
        parse: (src) => {
            return loadDaoContractState(src.loadRef().beginParse());
        }
    }
}

export type DeployAndInitProposal = {
    $$type: 'DeployAndInitProposal';
    body: Params;
}

export function storeDeployAndInitProposal(src: DeployAndInitProposal) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(1496883659, 32);
        b_0.store(storeParams(src.body));
    };
}

export function loadDeployAndInitProposal(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 1496883659) { throw Error('Invalid prefix'); }
    const _body = loadParams(sc_0);
    return { $$type: 'DeployAndInitProposal' as const, body: _body };
}

export function loadTupleDeployAndInitProposal(source: TupleReader) {
    const _body = loadTupleParams(source);
    return { $$type: 'DeployAndInitProposal' as const, body: _body };
}

export function loadGetterTupleDeployAndInitProposal(source: TupleReader) {
    const _body = loadGetterTupleParams(source);
    return { $$type: 'DeployAndInitProposal' as const, body: _body };
}

export function storeTupleDeployAndInitProposal(source: DeployAndInitProposal) {
    const builder = new TupleBuilder();
    builder.writeTuple(storeTupleParams(source.body));
    return builder.build();
}

export function dictValueParserDeployAndInitProposal(): DictionaryValue<DeployAndInitProposal> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeployAndInitProposal(src)).endCell());
        },
        parse: (src) => {
            return loadDeployAndInitProposal(src.loadRef().beginParse());
        }
    }
}

export type SendProposalInit = {
    $$type: 'SendProposalInit';
    body: Params;
}

export function storeSendProposalInit(src: SendProposalInit) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(2746622614, 32);
        b_0.store(storeParams(src.body));
    };
}

export function loadSendProposalInit(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 2746622614) { throw Error('Invalid prefix'); }
    const _body = loadParams(sc_0);
    return { $$type: 'SendProposalInit' as const, body: _body };
}

export function loadTupleSendProposalInit(source: TupleReader) {
    const _body = loadTupleParams(source);
    return { $$type: 'SendProposalInit' as const, body: _body };
}

export function loadGetterTupleSendProposalInit(source: TupleReader) {
    const _body = loadGetterTupleParams(source);
    return { $$type: 'SendProposalInit' as const, body: _body };
}

export function storeTupleSendProposalInit(source: SendProposalInit) {
    const builder = new TupleBuilder();
    builder.writeTuple(storeTupleParams(source.body));
    return builder.build();
}

export function dictValueParserSendProposalInit(): DictionaryValue<SendProposalInit> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSendProposalInit(src)).endCell());
        },
        parse: (src) => {
            return loadSendProposalInit(src.loadRef().beginParse());
        }
    }
}

export type SendUpdateProposal = {
    $$type: 'SendUpdateProposal';
    proposalAddress: Address;
    updateParams: Params;
}

export function storeSendUpdateProposal(src: SendUpdateProposal) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(2568858687, 32);
        b_0.storeAddress(src.proposalAddress);
        b_0.store(storeParams(src.updateParams));
    };
}

export function loadSendUpdateProposal(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 2568858687) { throw Error('Invalid prefix'); }
    const _proposalAddress = sc_0.loadAddress();
    const _updateParams = loadParams(sc_0);
    return { $$type: 'SendUpdateProposal' as const, proposalAddress: _proposalAddress, updateParams: _updateParams };
}

export function loadTupleSendUpdateProposal(source: TupleReader) {
    const _proposalAddress = source.readAddress();
    const _updateParams = loadTupleParams(source);
    return { $$type: 'SendUpdateProposal' as const, proposalAddress: _proposalAddress, updateParams: _updateParams };
}

export function loadGetterTupleSendUpdateProposal(source: TupleReader) {
    const _proposalAddress = source.readAddress();
    const _updateParams = loadGetterTupleParams(source);
    return { $$type: 'SendUpdateProposal' as const, proposalAddress: _proposalAddress, updateParams: _updateParams };
}

export function storeTupleSendUpdateProposal(source: SendUpdateProposal) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.proposalAddress);
    builder.writeTuple(storeTupleParams(source.updateParams));
    return builder.build();
}

export function dictValueParserSendUpdateProposal(): DictionaryValue<SendUpdateProposal> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSendUpdateProposal(src)).endCell());
        },
        parse: (src) => {
            return loadSendUpdateProposal(src.loadRef().beginParse());
        }
    }
}

export type ProposalDeployer$Data = {
    $$type: 'ProposalDeployer$Data';
    dao: Address;
    nextProposalId: bigint;
}

export function storeProposalDeployer$Data(src: ProposalDeployer$Data) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeAddress(src.dao);
        b_0.storeUint(src.nextProposalId, 32);
    };
}

export function loadProposalDeployer$Data(slice: Slice) {
    const sc_0 = slice;
    const _dao = sc_0.loadAddress();
    const _nextProposalId = sc_0.loadUintBig(32);
    return { $$type: 'ProposalDeployer$Data' as const, dao: _dao, nextProposalId: _nextProposalId };
}

export function loadTupleProposalDeployer$Data(source: TupleReader) {
    const _dao = source.readAddress();
    const _nextProposalId = source.readBigNumber();
    return { $$type: 'ProposalDeployer$Data' as const, dao: _dao, nextProposalId: _nextProposalId };
}

export function loadGetterTupleProposalDeployer$Data(source: TupleReader) {
    const _dao = source.readAddress();
    const _nextProposalId = source.readBigNumber();
    return { $$type: 'ProposalDeployer$Data' as const, dao: _dao, nextProposalId: _nextProposalId };
}

export function storeTupleProposalDeployer$Data(source: ProposalDeployer$Data) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.dao);
    builder.writeNumber(source.nextProposalId);
    return builder.build();
}

export function dictValueParserProposalDeployer$Data(): DictionaryValue<ProposalDeployer$Data> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeProposalDeployer$Data(src)).endCell());
        },
        parse: (src) => {
            return loadProposalDeployer$Data(src.loadRef().beginParse());
        }
    }
}

export type Params = {
    $$type: 'Params';
    proposalStartTime: bigint;
    proposalEndTime: bigint;
    proposalSnapshotTime: bigint;
    votingSystem: string;
    votingPowerStrategies: string;
    title: string;
    description: string;
    quorum: string;
    hide: boolean;
}

export function storeParams(src: Params) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(src.proposalStartTime, 64);
        b_0.storeUint(src.proposalEndTime, 64);
        b_0.storeUint(src.proposalSnapshotTime, 64);
        b_0.storeStringRefTail(src.votingSystem);
        b_0.storeStringRefTail(src.votingPowerStrategies);
        const b_1 = new Builder();
        b_1.storeStringRefTail(src.title);
        b_1.storeStringRefTail(src.description);
        b_1.storeStringRefTail(src.quorum);
        b_1.storeBit(src.hide);
        b_0.storeRef(b_1.endCell());
    };
}

export function loadParams(slice: Slice) {
    const sc_0 = slice;
    const _proposalStartTime = sc_0.loadUintBig(64);
    const _proposalEndTime = sc_0.loadUintBig(64);
    const _proposalSnapshotTime = sc_0.loadUintBig(64);
    const _votingSystem = sc_0.loadStringRefTail();
    const _votingPowerStrategies = sc_0.loadStringRefTail();
    const sc_1 = sc_0.loadRef().beginParse();
    const _title = sc_1.loadStringRefTail();
    const _description = sc_1.loadStringRefTail();
    const _quorum = sc_1.loadStringRefTail();
    const _hide = sc_1.loadBit();
    return { $$type: 'Params' as const, proposalStartTime: _proposalStartTime, proposalEndTime: _proposalEndTime, proposalSnapshotTime: _proposalSnapshotTime, votingSystem: _votingSystem, votingPowerStrategies: _votingPowerStrategies, title: _title, description: _description, quorum: _quorum, hide: _hide };
}

export function loadTupleParams(source: TupleReader) {
    const _proposalStartTime = source.readBigNumber();
    const _proposalEndTime = source.readBigNumber();
    const _proposalSnapshotTime = source.readBigNumber();
    const _votingSystem = source.readString();
    const _votingPowerStrategies = source.readString();
    const _title = source.readString();
    const _description = source.readString();
    const _quorum = source.readString();
    const _hide = source.readBoolean();
    return { $$type: 'Params' as const, proposalStartTime: _proposalStartTime, proposalEndTime: _proposalEndTime, proposalSnapshotTime: _proposalSnapshotTime, votingSystem: _votingSystem, votingPowerStrategies: _votingPowerStrategies, title: _title, description: _description, quorum: _quorum, hide: _hide };
}

export function loadGetterTupleParams(source: TupleReader) {
    const _proposalStartTime = source.readBigNumber();
    const _proposalEndTime = source.readBigNumber();
    const _proposalSnapshotTime = source.readBigNumber();
    const _votingSystem = source.readString();
    const _votingPowerStrategies = source.readString();
    const _title = source.readString();
    const _description = source.readString();
    const _quorum = source.readString();
    const _hide = source.readBoolean();
    return { $$type: 'Params' as const, proposalStartTime: _proposalStartTime, proposalEndTime: _proposalEndTime, proposalSnapshotTime: _proposalSnapshotTime, votingSystem: _votingSystem, votingPowerStrategies: _votingPowerStrategies, title: _title, description: _description, quorum: _quorum, hide: _hide };
}

export function storeTupleParams(source: Params) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.proposalStartTime);
    builder.writeNumber(source.proposalEndTime);
    builder.writeNumber(source.proposalSnapshotTime);
    builder.writeString(source.votingSystem);
    builder.writeString(source.votingPowerStrategies);
    builder.writeString(source.title);
    builder.writeString(source.description);
    builder.writeString(source.quorum);
    builder.writeBoolean(source.hide);
    return builder.build();
}

export function dictValueParserParams(): DictionaryValue<Params> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeParams(src)).endCell());
        },
        parse: (src) => {
            return loadParams(src.loadRef().beginParse());
        }
    }
}

export type ProposalInit = {
    $$type: 'ProposalInit';
    body: Params;
}

export function storeProposalInit(src: ProposalInit) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(1008560988, 32);
        b_0.store(storeParams(src.body));
    };
}

export function loadProposalInit(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 1008560988) { throw Error('Invalid prefix'); }
    const _body = loadParams(sc_0);
    return { $$type: 'ProposalInit' as const, body: _body };
}

export function loadTupleProposalInit(source: TupleReader) {
    const _body = loadTupleParams(source);
    return { $$type: 'ProposalInit' as const, body: _body };
}

export function loadGetterTupleProposalInit(source: TupleReader) {
    const _body = loadGetterTupleParams(source);
    return { $$type: 'ProposalInit' as const, body: _body };
}

export function storeTupleProposalInit(source: ProposalInit) {
    const builder = new TupleBuilder();
    builder.writeTuple(storeTupleParams(source.body));
    return builder.build();
}

export function dictValueParserProposalInit(): DictionaryValue<ProposalInit> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeProposalInit(src)).endCell());
        },
        parse: (src) => {
            return loadProposalInit(src.loadRef().beginParse());
        }
    }
}

export type Vote = {
    $$type: 'Vote';
    comment: string;
}

export function storeVote(src: Vote) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(2084703906, 32);
        b_0.storeStringRefTail(src.comment);
    };
}

export function loadVote(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 2084703906) { throw Error('Invalid prefix'); }
    const _comment = sc_0.loadStringRefTail();
    return { $$type: 'Vote' as const, comment: _comment };
}

export function loadTupleVote(source: TupleReader) {
    const _comment = source.readString();
    return { $$type: 'Vote' as const, comment: _comment };
}

export function loadGetterTupleVote(source: TupleReader) {
    const _comment = source.readString();
    return { $$type: 'Vote' as const, comment: _comment };
}

export function storeTupleVote(source: Vote) {
    const builder = new TupleBuilder();
    builder.writeString(source.comment);
    return builder.build();
}

export function dictValueParserVote(): DictionaryValue<Vote> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeVote(src)).endCell());
        },
        parse: (src) => {
            return loadVote(src.loadRef().beginParse());
        }
    }
}

export type UpdateProposal = {
    $$type: 'UpdateProposal';
    updateParams: Params;
}

export function storeUpdateProposal(src: UpdateProposal) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(817223820, 32);
        b_0.store(storeParams(src.updateParams));
    };
}

export function loadUpdateProposal(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 817223820) { throw Error('Invalid prefix'); }
    const _updateParams = loadParams(sc_0);
    return { $$type: 'UpdateProposal' as const, updateParams: _updateParams };
}

export function loadTupleUpdateProposal(source: TupleReader) {
    const _updateParams = loadTupleParams(source);
    return { $$type: 'UpdateProposal' as const, updateParams: _updateParams };
}

export function loadGetterTupleUpdateProposal(source: TupleReader) {
    const _updateParams = loadGetterTupleParams(source);
    return { $$type: 'UpdateProposal' as const, updateParams: _updateParams };
}

export function storeTupleUpdateProposal(source: UpdateProposal) {
    const builder = new TupleBuilder();
    builder.writeTuple(storeTupleParams(source.updateParams));
    return builder.build();
}

export function dictValueParserUpdateProposal(): DictionaryValue<UpdateProposal> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeUpdateProposal(src)).endCell());
        },
        parse: (src) => {
            return loadUpdateProposal(src.loadRef().beginParse());
        }
    }
}

export type ProposalContractState = {
    $$type: 'ProposalContractState';
    proposalDeployer: Address;
    id: bigint;
    proposalStartTime: bigint;
    proposalEndTime: bigint;
    proposalSnapshotTime: bigint;
    votingSystem: string;
    votingPowerStrategies: string;
    title: string;
    description: string;
    quorum: string;
    hide: boolean;
}

export function storeProposalContractState(src: ProposalContractState) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeAddress(src.proposalDeployer);
        b_0.storeUint(src.id, 32);
        b_0.storeUint(src.proposalStartTime, 64);
        b_0.storeUint(src.proposalEndTime, 64);
        b_0.storeUint(src.proposalSnapshotTime, 64);
        b_0.storeStringRefTail(src.votingSystem);
        b_0.storeStringRefTail(src.votingPowerStrategies);
        const b_1 = new Builder();
        b_1.storeStringRefTail(src.title);
        b_1.storeStringRefTail(src.description);
        b_1.storeStringRefTail(src.quorum);
        b_1.storeBit(src.hide);
        b_0.storeRef(b_1.endCell());
    };
}

export function loadProposalContractState(slice: Slice) {
    const sc_0 = slice;
    const _proposalDeployer = sc_0.loadAddress();
    const _id = sc_0.loadUintBig(32);
    const _proposalStartTime = sc_0.loadUintBig(64);
    const _proposalEndTime = sc_0.loadUintBig(64);
    const _proposalSnapshotTime = sc_0.loadUintBig(64);
    const _votingSystem = sc_0.loadStringRefTail();
    const _votingPowerStrategies = sc_0.loadStringRefTail();
    const sc_1 = sc_0.loadRef().beginParse();
    const _title = sc_1.loadStringRefTail();
    const _description = sc_1.loadStringRefTail();
    const _quorum = sc_1.loadStringRefTail();
    const _hide = sc_1.loadBit();
    return { $$type: 'ProposalContractState' as const, proposalDeployer: _proposalDeployer, id: _id, proposalStartTime: _proposalStartTime, proposalEndTime: _proposalEndTime, proposalSnapshotTime: _proposalSnapshotTime, votingSystem: _votingSystem, votingPowerStrategies: _votingPowerStrategies, title: _title, description: _description, quorum: _quorum, hide: _hide };
}

export function loadTupleProposalContractState(source: TupleReader) {
    const _proposalDeployer = source.readAddress();
    const _id = source.readBigNumber();
    const _proposalStartTime = source.readBigNumber();
    const _proposalEndTime = source.readBigNumber();
    const _proposalSnapshotTime = source.readBigNumber();
    const _votingSystem = source.readString();
    const _votingPowerStrategies = source.readString();
    const _title = source.readString();
    const _description = source.readString();
    const _quorum = source.readString();
    const _hide = source.readBoolean();
    return { $$type: 'ProposalContractState' as const, proposalDeployer: _proposalDeployer, id: _id, proposalStartTime: _proposalStartTime, proposalEndTime: _proposalEndTime, proposalSnapshotTime: _proposalSnapshotTime, votingSystem: _votingSystem, votingPowerStrategies: _votingPowerStrategies, title: _title, description: _description, quorum: _quorum, hide: _hide };
}

export function loadGetterTupleProposalContractState(source: TupleReader) {
    const _proposalDeployer = source.readAddress();
    const _id = source.readBigNumber();
    const _proposalStartTime = source.readBigNumber();
    const _proposalEndTime = source.readBigNumber();
    const _proposalSnapshotTime = source.readBigNumber();
    const _votingSystem = source.readString();
    const _votingPowerStrategies = source.readString();
    const _title = source.readString();
    const _description = source.readString();
    const _quorum = source.readString();
    const _hide = source.readBoolean();
    return { $$type: 'ProposalContractState' as const, proposalDeployer: _proposalDeployer, id: _id, proposalStartTime: _proposalStartTime, proposalEndTime: _proposalEndTime, proposalSnapshotTime: _proposalSnapshotTime, votingSystem: _votingSystem, votingPowerStrategies: _votingPowerStrategies, title: _title, description: _description, quorum: _quorum, hide: _hide };
}

export function storeTupleProposalContractState(source: ProposalContractState) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.proposalDeployer);
    builder.writeNumber(source.id);
    builder.writeNumber(source.proposalStartTime);
    builder.writeNumber(source.proposalEndTime);
    builder.writeNumber(source.proposalSnapshotTime);
    builder.writeString(source.votingSystem);
    builder.writeString(source.votingPowerStrategies);
    builder.writeString(source.title);
    builder.writeString(source.description);
    builder.writeString(source.quorum);
    builder.writeBoolean(source.hide);
    return builder.build();
}

export function dictValueParserProposalContractState(): DictionaryValue<ProposalContractState> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeProposalContractState(src)).endCell());
        },
        parse: (src) => {
            return loadProposalContractState(src.loadRef().beginParse());
        }
    }
}

export type Proposal$Data = {
    $$type: 'Proposal$Data';
    proposalDeployer: Address;
    id: bigint;
    proposalStartTime: bigint;
    proposalEndTime: bigint;
    proposalSnapshotTime: bigint;
    votingSystem: string;
    votingPowerStrategies: string;
    title: string;
    description: string;
    quorum: string;
    hide: boolean;
}

export function storeProposal$Data(src: Proposal$Data) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeAddress(src.proposalDeployer);
        b_0.storeUint(src.id, 32);
        b_0.storeUint(src.proposalStartTime, 64);
        b_0.storeUint(src.proposalEndTime, 64);
        b_0.storeUint(src.proposalSnapshotTime, 64);
        b_0.storeStringRefTail(src.votingSystem);
        b_0.storeStringRefTail(src.votingPowerStrategies);
        const b_1 = new Builder();
        b_1.storeStringRefTail(src.title);
        b_1.storeStringRefTail(src.description);
        b_1.storeStringRefTail(src.quorum);
        b_1.storeBit(src.hide);
        b_0.storeRef(b_1.endCell());
    };
}

export function loadProposal$Data(slice: Slice) {
    const sc_0 = slice;
    const _proposalDeployer = sc_0.loadAddress();
    const _id = sc_0.loadUintBig(32);
    const _proposalStartTime = sc_0.loadUintBig(64);
    const _proposalEndTime = sc_0.loadUintBig(64);
    const _proposalSnapshotTime = sc_0.loadUintBig(64);
    const _votingSystem = sc_0.loadStringRefTail();
    const _votingPowerStrategies = sc_0.loadStringRefTail();
    const sc_1 = sc_0.loadRef().beginParse();
    const _title = sc_1.loadStringRefTail();
    const _description = sc_1.loadStringRefTail();
    const _quorum = sc_1.loadStringRefTail();
    const _hide = sc_1.loadBit();
    return { $$type: 'Proposal$Data' as const, proposalDeployer: _proposalDeployer, id: _id, proposalStartTime: _proposalStartTime, proposalEndTime: _proposalEndTime, proposalSnapshotTime: _proposalSnapshotTime, votingSystem: _votingSystem, votingPowerStrategies: _votingPowerStrategies, title: _title, description: _description, quorum: _quorum, hide: _hide };
}

export function loadTupleProposal$Data(source: TupleReader) {
    const _proposalDeployer = source.readAddress();
    const _id = source.readBigNumber();
    const _proposalStartTime = source.readBigNumber();
    const _proposalEndTime = source.readBigNumber();
    const _proposalSnapshotTime = source.readBigNumber();
    const _votingSystem = source.readString();
    const _votingPowerStrategies = source.readString();
    const _title = source.readString();
    const _description = source.readString();
    const _quorum = source.readString();
    const _hide = source.readBoolean();
    return { $$type: 'Proposal$Data' as const, proposalDeployer: _proposalDeployer, id: _id, proposalStartTime: _proposalStartTime, proposalEndTime: _proposalEndTime, proposalSnapshotTime: _proposalSnapshotTime, votingSystem: _votingSystem, votingPowerStrategies: _votingPowerStrategies, title: _title, description: _description, quorum: _quorum, hide: _hide };
}

export function loadGetterTupleProposal$Data(source: TupleReader) {
    const _proposalDeployer = source.readAddress();
    const _id = source.readBigNumber();
    const _proposalStartTime = source.readBigNumber();
    const _proposalEndTime = source.readBigNumber();
    const _proposalSnapshotTime = source.readBigNumber();
    const _votingSystem = source.readString();
    const _votingPowerStrategies = source.readString();
    const _title = source.readString();
    const _description = source.readString();
    const _quorum = source.readString();
    const _hide = source.readBoolean();
    return { $$type: 'Proposal$Data' as const, proposalDeployer: _proposalDeployer, id: _id, proposalStartTime: _proposalStartTime, proposalEndTime: _proposalEndTime, proposalSnapshotTime: _proposalSnapshotTime, votingSystem: _votingSystem, votingPowerStrategies: _votingPowerStrategies, title: _title, description: _description, quorum: _quorum, hide: _hide };
}

export function storeTupleProposal$Data(source: Proposal$Data) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.proposalDeployer);
    builder.writeNumber(source.id);
    builder.writeNumber(source.proposalStartTime);
    builder.writeNumber(source.proposalEndTime);
    builder.writeNumber(source.proposalSnapshotTime);
    builder.writeString(source.votingSystem);
    builder.writeString(source.votingPowerStrategies);
    builder.writeString(source.title);
    builder.writeString(source.description);
    builder.writeString(source.quorum);
    builder.writeBoolean(source.hide);
    return builder.build();
}

export function dictValueParserProposal$Data(): DictionaryValue<Proposal$Data> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeProposal$Data(src)).endCell());
        },
        parse: (src) => {
            return loadProposal$Data(src.loadRef().beginParse());
        }
    }
}

export type Dao$Data = {
    $$type: 'Dao$Data';
    owner: Address;
    registry: Address;
    proposalOwner: Address;
    daoIndex: bigint;
    metadata: Address;
    fwdMsgFee: bigint;
}

export function storeDao$Data(src: Dao$Data) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeAddress(src.owner);
        b_0.storeAddress(src.registry);
        b_0.storeAddress(src.proposalOwner);
        b_0.storeUint(src.daoIndex, 32);
        const b_1 = new Builder();
        b_1.storeAddress(src.metadata);
        b_1.storeUint(src.fwdMsgFee, 64);
        b_0.storeRef(b_1.endCell());
    };
}

export function loadDao$Data(slice: Slice) {
    const sc_0 = slice;
    const _owner = sc_0.loadAddress();
    const _registry = sc_0.loadAddress();
    const _proposalOwner = sc_0.loadAddress();
    const _daoIndex = sc_0.loadUintBig(32);
    const sc_1 = sc_0.loadRef().beginParse();
    const _metadata = sc_1.loadAddress();
    const _fwdMsgFee = sc_1.loadUintBig(64);
    return { $$type: 'Dao$Data' as const, owner: _owner, registry: _registry, proposalOwner: _proposalOwner, daoIndex: _daoIndex, metadata: _metadata, fwdMsgFee: _fwdMsgFee };
}

export function loadTupleDao$Data(source: TupleReader) {
    const _owner = source.readAddress();
    const _registry = source.readAddress();
    const _proposalOwner = source.readAddress();
    const _daoIndex = source.readBigNumber();
    const _metadata = source.readAddress();
    const _fwdMsgFee = source.readBigNumber();
    return { $$type: 'Dao$Data' as const, owner: _owner, registry: _registry, proposalOwner: _proposalOwner, daoIndex: _daoIndex, metadata: _metadata, fwdMsgFee: _fwdMsgFee };
}

export function loadGetterTupleDao$Data(source: TupleReader) {
    const _owner = source.readAddress();
    const _registry = source.readAddress();
    const _proposalOwner = source.readAddress();
    const _daoIndex = source.readBigNumber();
    const _metadata = source.readAddress();
    const _fwdMsgFee = source.readBigNumber();
    return { $$type: 'Dao$Data' as const, owner: _owner, registry: _registry, proposalOwner: _proposalOwner, daoIndex: _daoIndex, metadata: _metadata, fwdMsgFee: _fwdMsgFee };
}

export function storeTupleDao$Data(source: Dao$Data) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.owner);
    builder.writeAddress(source.registry);
    builder.writeAddress(source.proposalOwner);
    builder.writeNumber(source.daoIndex);
    builder.writeAddress(source.metadata);
    builder.writeNumber(source.fwdMsgFee);
    return builder.build();
}

export function dictValueParserDao$Data(): DictionaryValue<Dao$Data> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDao$Data(src)).endCell());
        },
        parse: (src) => {
            return loadDao$Data(src.loadRef().beginParse());
        }
    }
}

 type Dao_init_args = {
    $$type: 'Dao_init_args';
    registry: Address;
    daoIndex: bigint;
}

function initDao_init_args(src: Dao_init_args) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeAddress(src.registry);
        b_0.storeInt(src.daoIndex, 257);
    };
}

async function Dao_init(registry: Address, daoIndex: bigint) {
    let parsed = Cell.fromBoc(Buffer.from("b5ee9c7241022f01000c4100022cff008e88f4a413f4bcf2c80bed53208e8130e1ed43d90103026fa64bc57b51343480006386be903e903e9034c7f500743e9034cfcc0409840944090408db05a3a2fe9020404075c01640b44078b6cf1b19a00402000c54745354745304ec01d072d721d200d200fa4021103450666f04f86102f862ed44d0d200018e1afa40fa40fa40d31fd401d0fa40d33f3010261025102410236c168e8bfa40810101d7005902d101e207925f07e07026d74920c21f953106d31f07de218210ecb876ebbae302218210c2b41d43bae302218210d0e3be76ba0405060700ee8d08600000000000000000000000000000000000000000000000000000000000000000048d08600000000000000000000000000000000000000000000000000000000000000000048d086000000000000000000000000000000000000000000000000000000000000000000441401382238d7ea4c6800000c210345f043402fa40fa40fa40d33f30810ba18d086000000000000000000000000000000000000000000000000000000000000000000416c70515f2f481114df84226c705f2f44503c87f01ca0055505056ce13cececb1f01c8ce12cb3fcdc9ed54005c5b05fa403081114df8425006c70515f2f410355512c87f01ca0055505056ce13cececb1f01c8ce12cb3fcdc9ed5403fa8e2d5b3204fa403081114df84225c705f2f410354413c87f01ca0055505056ce13cececb1f01c8ce12cb3fcdc9ed54e0218210da2f907fba8e2d5f0304fa403081114df84225c705f2f410354403c87f01ca0055505056ce13cececb1f01c8ce12cb3fcdc9ed54e0218210f4f3a602bae3022182105938a1cbbae3022108090c005c5b3604d33f308200cab5f84224c705f2f410354430c87f01ca0055505056ce13cececb1f01c8ce12cb3fcdc9ed5402bc5b05d33fd33fd33fd401d001d401d001d401d0d401d001d401d001d401d001d20030104910481047104610453981114df8422ec705917f95f8422cc705e2f2f48200eb0df8416f24135f035610bef2f4821005f5e10070fb02f828db3c5c0d0a01fa705920f90022f9005ad76501d76582020134c8cb17cb0fcb0fcbffcbff71f90400c87401cb0212ca07cbffc9d0105a10491038476a821007bfa4807050ba700ec8558082105938a1cb500acb1f095089cb3f16cb3f14cb3f02c8ce12cd01c8cecdc802c8ce12cd02c8ce12cd02c8ce12cd12ca00cdc9105610451034590b00a41036453304c8cf8580ca00cf8440ce01fa028069cf40025c6e016eb0935bcf819d58cf8680cf8480f400f400cf81e2f400c901fb0010355512c87f01ca0055505056ce13cececb1f01c8ce12cb3fcdc9ed5404f68210991dac3fba8f5f5b05fa40d33fd33fd33fd401d001d401d001d401d0d401d001d401d001d401d001d20030104910481047104610453981114df8422fc705917f95f8422dc705e2f2f48200eb0df8416f24135f035611bef2f4821005f5e10070fb02f828db3ce0218210946a98b6bae30237c00006c12116b00d2a2d2e011488c87001ca005801cec90e0228ff008e88f4a413f4bcf2c80bed5320e303ed43d90f17020271101502016e1113013bb3e0bb513434800065fe9034c7d65b04a5be900040745c389636cf1b086012015edb3c705920f90022f9005ad76501d76582020134c8cb17cb0fcb0fcbffcbff71f90400c87401cb0212ca07cbffc9d0190139b32e7b513434800065fe9034c7d65b04a5be900040745c38b6cf1b0860140002200139bf17cf6a268690000cbfd20698facb6094b7d200080e8b8716d9e3610c1600022103f63001d072d721d200d200fa4021103450666f04f86102f862ed44d0d2000197fa40d31f596c1296fa400101d170e203925f03e07022d74920c21f953102d31f03de2182105938a1cbbae302218210991dac3fbae302218210946a98b6bae30233c00002c12112b09e01c87f01ca005902cecb1fc9ed54e05bf2c08218272902f65b01d33fd33fd33fd401d001d401d001d401d0d401d001d401d001d401d001d20030104910481047104610453981345bf8422bc705f2f45419a0db3c5c705920f90022f9005ad76501d76582020134c8cb17cb0fcb0fcbffcbff71f90400c87401cb0212ca07cbffc9d0821005f5e10070fb02105a10491038476a1925010af82801db3c1a011e88c87001ca005a02ce810101cf00c91b0228ff008e88f4a413f4bcf2c80bed5320e303ed43d91c1e01bba64bc57b5134348000638cbe9034c7f4cff4cff4cff50074007500743500740075007400750074007500740074800c0416c416841644160415c4159b06e3867e9020404075c01640b4405c14c022c222c222c222c222c21c38b6cf1b2ee01d0016547a98547a98547a9853a901f63001d072d721d200d200fa4021103450666f04f86102f862ed44d0d200018e32fa40d31fd33fd33fd33fd401d001d401d0d401d001d401d001d401d001d401d001d20030105b105a10591058105710566c1b8e19fa40810101d7005902d1017053008b088b088b088b088b0870e20c925f0ce00ad70d1ff2e082211f04fe82103c1d6b5cba8ee03b5f053604d33fd33fd33fd401d001d401d001d401d0d401d001d401d001d401d001d200301049104810471046104539810ba10ac000930cc000923c70e2930cc000923c70e218f2f481114df8422ac705f2f4108a1079104810374614403305e02182107c420ea2bae30221821030b5d88cbae3020122202123009a5b8200cc6ef82328be94f82327bb9170e2f2f4108a5517c87f01ca0055a050abce18cb1f16cb3f14cb3f12cb3f01c8cecdc802c8ce12cd02c8ce12cd02c8ce12cd02c8ce12cd12ca00cdc9ed5401d23b5f053604d33fd33fd33fd401d001d401d001d401d0d401d001d401d001d401d001d2003010491048104710461045398200ef5e2ac300930dc300923d70e2930dc300923d70e21cf2f481114df8422bc705f2f48122dbf8235009bb18f2f4108a107910485533430022006cc87f01ca0055a050abce18cb1f16cb3f14cb3f12cb3f01c8cecdc802c8ce12cd02c8ce12cd02c8ce12cd02c8ce12cd12ca00cdc9ed54011c8210946a98b6bae3025f0cf2c0822400f4d33f30c8018210aff90f5758cb1fcb3fc9109b108a107910681057104610354430f84270705003804201503304c8cf8580ca00cf8440ce01fa02806acf40f400c901fb00c87f01ca0055a050abce18cb1f16cb3f14cb3f12cb3f01c8cecdc802c8ce12cd02c8ce12cd02c8ce12cd02c8ce12cd12ca00cdc9ed5401fa8209312d007050ef700ec8558082103c1d6b5c500acb1f095089cb3f16cb3f14cb3f02c8ce12cd01c8cecdc802c8ce12cd02c8ce12cd02c8ce12cd12ca00cdc910565e341037591036453304c8cf8580ca00cf8440ce01fa028069cf40025c6e016eb0935bcf819d58cf8680cf8480f400f400cf81e2f400c901fb00a426001ac87f01ca005902cecb1fc9ed5401a05b01fa40d33fd33fd33fd401d001d401d001d401d0d401d001d401d001d401d001d2003010491048104710461045398200c426f8422cc705f2f4821005f5e10070fb0255518209312d00705098700bc82800f85580821030b5d88c500acb1f095089cb3f16cb3f14cb3f02c8ce12cd01c8cecdc802c8ce12cd02c8ce12cd02c8ce12cd12ca00cdc94130146d50436d5033c8cf8580ca00cf8440ce01fa028069cf40025c6e016eb0935bcf819d58cf8680cf8480f400f400cf81e2f400c901fb0001c87f01ca005902cecb1fc9ed5400885b01d33f30c8018210aff90f5758cb1fcb3fc912f84270705003804201503304c8cf8580ca00cf8440ce01fa02806acf40f400c901fb00c87f01ca005902cecb1fc9ed540184705920f90022f9005ad76501d76582020134c8cb17cb0fcb0fcbffcbff71f90400c87401cb0212ca07cbffc9d0106a10581047103a487a820a625a007050a9700cc82b01fc55908210991dac3f500bcb1f19ce091078106710561045103441305089cb3f16cb3f14cb3f02c8ce12cd01c8cecdc802c8ce12cd02c8ce12cd02c8ce12cd12ca00cdc94130146d50436d5033c8cf8580ca00cf8440ce01fa028069cf40025c6e016eb0935bcf819d58cf8680cf8480f400f400cf81e2f400c901fb0010352c00365512c87f01ca0055505056ce13cececb1f01c8ce12cb3fcdc9ed5400ac5b05d33f30c8018210aff90f5758cb1fcb3fc910461035443012f84270705003804201503304c8cf8580ca00cf8440ce01fa02806acf40f400c901fb00c87f01ca0055505056ce13cececb1f01c8ce12cb3fcdc9ed54004a8e1d10355512c87f01ca0055505056ce13cececb1f01c8ce12cb3fcdc9ed54e05f06f2c082db921e53", "hex"));
    if (parsed.length !== 1) {
        throw new Error("Deserialized more than one cell");
    }
    const __code = parsed[0];
    const builder = beginCell();
    builder.storeUint(0, 1);
    initDao_init_args({ $$type: 'Dao_init_args', registry, daoIndex })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

export const Dao_errors = {
    2: { message: "Stack underflow" },
    3: { message: "Stack overflow" },
    4: { message: "Integer overflow" },
    5: { message: "Integer out of expected range" },
    6: { message: "Invalid opcode" },
    7: { message: "Type check error" },
    8: { message: "Cell overflow" },
    9: { message: "Cell underflow" },
    10: { message: "Dictionary error" },
    11: { message: "'Unknown' error" },
    12: { message: "Fatal error" },
    13: { message: "Out of gas error" },
    14: { message: "Virtualization error" },
    32: { message: "Action list is invalid" },
    33: { message: "Action list is too long" },
    34: { message: "Action is invalid or not supported" },
    35: { message: "Invalid source address in outbound message" },
    36: { message: "Invalid destination address in outbound message" },
    37: { message: "Not enough Toncoin" },
    38: { message: "Not enough extra currencies" },
    39: { message: "Outbound message does not fit into a cell after rewriting" },
    40: { message: "Cannot process a message" },
    41: { message: "Library reference is null" },
    42: { message: "Library change action error" },
    43: { message: "Exceeded maximum number of cells in the library or the maximum depth of the Merkle tree" },
    50: { message: "Account state size exceeded limits" },
    128: { message: "Null reference exception" },
    129: { message: "Invalid serialization prefix" },
    130: { message: "Invalid incoming message" },
    131: { message: "Constraints error" },
    132: { message: "Access denied" },
    133: { message: "Contract stopped" },
    134: { message: "Invalid argument" },
    135: { message: "Code of a contract was not found" },
    136: { message: "Invalid standard address" },
    138: { message: "Not a basechain address" },
    2977: { message: "Already initialized" },
    4429: { message: "Invalid sender" },
    8923: { message: "Update proposals is possible only before start time" },
    13403: { message: "only dao can send create proposal message" },
    50214: { message: "only dao can send update proposal message" },
    51893: { message: "Only registry can change fwd msg fee" },
    52334: { message: "Incative proposal" },
    60173: { message: "Below min fee for dao forward message" },
    61278: { message: "Propsal was not initialized yet" },
} as const

export const Dao_errors_backward = {
    "Stack underflow": 2,
    "Stack overflow": 3,
    "Integer overflow": 4,
    "Integer out of expected range": 5,
    "Invalid opcode": 6,
    "Type check error": 7,
    "Cell overflow": 8,
    "Cell underflow": 9,
    "Dictionary error": 10,
    "'Unknown' error": 11,
    "Fatal error": 12,
    "Out of gas error": 13,
    "Virtualization error": 14,
    "Action list is invalid": 32,
    "Action list is too long": 33,
    "Action is invalid or not supported": 34,
    "Invalid source address in outbound message": 35,
    "Invalid destination address in outbound message": 36,
    "Not enough Toncoin": 37,
    "Not enough extra currencies": 38,
    "Outbound message does not fit into a cell after rewriting": 39,
    "Cannot process a message": 40,
    "Library reference is null": 41,
    "Library change action error": 42,
    "Exceeded maximum number of cells in the library or the maximum depth of the Merkle tree": 43,
    "Account state size exceeded limits": 50,
    "Null reference exception": 128,
    "Invalid serialization prefix": 129,
    "Invalid incoming message": 130,
    "Constraints error": 131,
    "Access denied": 132,
    "Contract stopped": 133,
    "Invalid argument": 134,
    "Code of a contract was not found": 135,
    "Invalid standard address": 136,
    "Not a basechain address": 138,
    "Already initialized": 2977,
    "Invalid sender": 4429,
    "Update proposals is possible only before start time": 8923,
    "only dao can send create proposal message": 13403,
    "only dao can send update proposal message": 50214,
    "Only registry can change fwd msg fee": 51893,
    "Incative proposal": 52334,
    "Below min fee for dao forward message": 60173,
    "Propsal was not initialized yet": 61278,
} as const

const Dao_types: ABIType[] = [
    {"name":"DataSize","header":null,"fields":[{"name":"cells","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"bits","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"refs","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"SignedBundle","header":null,"fields":[{"name":"signature","type":{"kind":"simple","type":"fixed-bytes","optional":false,"format":64}},{"name":"signedData","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounceable","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}}]},
    {"name":"MessageParameters","header":null,"fields":[{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}}]},
    {"name":"DeployParameters","header":null,"fields":[{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"init","type":{"kind":"simple","type":"StateInit","optional":false}}]},
    {"name":"StdAddress","header":null,"fields":[{"name":"workchain","type":{"kind":"simple","type":"int","optional":false,"format":8}},{"name":"address","type":{"kind":"simple","type":"uint","optional":false,"format":256}}]},
    {"name":"VarAddress","header":null,"fields":[{"name":"workchain","type":{"kind":"simple","type":"int","optional":false,"format":32}},{"name":"address","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"BasechainAddress","header":null,"fields":[{"name":"hash","type":{"kind":"simple","type":"int","optional":true,"format":257}}]},
    {"name":"Deploy","header":2490013878,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DeployOk","header":2952335191,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"FactoryDeploy","header":1829761339,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"cashback","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ChangeOwner","header":2174598809,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ChangeOwnerOk","header":846932810,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"SetOwner","header":3266583875,"fields":[{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"SetProposalOwner","header":3504586358,"fields":[{"name":"newProposalOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"SetFwdMsgFee","header":4109608450,"fields":[{"name":"newFwdMsgFee","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"SetMetadata","header":3660550271,"fields":[{"name":"newMetadata","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"DaoInit","header":3971512043,"fields":[{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"proposalOwner","type":{"kind":"simple","type":"address","optional":false}},{"name":"metadata","type":{"kind":"simple","type":"address","optional":false}},{"name":"fwdMsgFee","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DaoContractState","header":null,"fields":[{"name":"registry","type":{"kind":"simple","type":"address","optional":false}},{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"proposalOwner","type":{"kind":"simple","type":"address","optional":false}},{"name":"metadata","type":{"kind":"simple","type":"address","optional":false}},{"name":"daoIndex","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"fwdMsgFee","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"DeployAndInitProposal","header":1496883659,"fields":[{"name":"body","type":{"kind":"simple","type":"Params","optional":false}}]},
    {"name":"SendProposalInit","header":2746622614,"fields":[{"name":"body","type":{"kind":"simple","type":"Params","optional":false}}]},
    {"name":"SendUpdateProposal","header":2568858687,"fields":[{"name":"proposalAddress","type":{"kind":"simple","type":"address","optional":false}},{"name":"updateParams","type":{"kind":"simple","type":"Params","optional":false}}]},
    {"name":"ProposalDeployer$Data","header":null,"fields":[{"name":"dao","type":{"kind":"simple","type":"address","optional":false}},{"name":"nextProposalId","type":{"kind":"simple","type":"uint","optional":false,"format":32}}]},
    {"name":"Params","header":null,"fields":[{"name":"proposalStartTime","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"proposalEndTime","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"proposalSnapshotTime","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"votingSystem","type":{"kind":"simple","type":"string","optional":false}},{"name":"votingPowerStrategies","type":{"kind":"simple","type":"string","optional":false}},{"name":"title","type":{"kind":"simple","type":"string","optional":false}},{"name":"description","type":{"kind":"simple","type":"string","optional":false}},{"name":"quorum","type":{"kind":"simple","type":"string","optional":false}},{"name":"hide","type":{"kind":"simple","type":"bool","optional":false}}]},
    {"name":"ProposalInit","header":1008560988,"fields":[{"name":"body","type":{"kind":"simple","type":"Params","optional":false}}]},
    {"name":"Vote","header":2084703906,"fields":[{"name":"comment","type":{"kind":"simple","type":"string","optional":false}}]},
    {"name":"UpdateProposal","header":817223820,"fields":[{"name":"updateParams","type":{"kind":"simple","type":"Params","optional":false}}]},
    {"name":"ProposalContractState","header":null,"fields":[{"name":"proposalDeployer","type":{"kind":"simple","type":"address","optional":false}},{"name":"id","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"proposalStartTime","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"proposalEndTime","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"proposalSnapshotTime","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"votingSystem","type":{"kind":"simple","type":"string","optional":false}},{"name":"votingPowerStrategies","type":{"kind":"simple","type":"string","optional":false}},{"name":"title","type":{"kind":"simple","type":"string","optional":false}},{"name":"description","type":{"kind":"simple","type":"string","optional":false}},{"name":"quorum","type":{"kind":"simple","type":"string","optional":false}},{"name":"hide","type":{"kind":"simple","type":"bool","optional":false}}]},
    {"name":"Proposal$Data","header":null,"fields":[{"name":"proposalDeployer","type":{"kind":"simple","type":"address","optional":false}},{"name":"id","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"proposalStartTime","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"proposalEndTime","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"proposalSnapshotTime","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"votingSystem","type":{"kind":"simple","type":"string","optional":false}},{"name":"votingPowerStrategies","type":{"kind":"simple","type":"string","optional":false}},{"name":"title","type":{"kind":"simple","type":"string","optional":false}},{"name":"description","type":{"kind":"simple","type":"string","optional":false}},{"name":"quorum","type":{"kind":"simple","type":"string","optional":false}},{"name":"hide","type":{"kind":"simple","type":"bool","optional":false}}]},
    {"name":"Dao$Data","header":null,"fields":[{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"registry","type":{"kind":"simple","type":"address","optional":false}},{"name":"proposalOwner","type":{"kind":"simple","type":"address","optional":false}},{"name":"daoIndex","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"metadata","type":{"kind":"simple","type":"address","optional":false}},{"name":"fwdMsgFee","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
]

const Dao_opcodes = {
    "Deploy": 2490013878,
    "DeployOk": 2952335191,
    "FactoryDeploy": 1829761339,
    "ChangeOwner": 2174598809,
    "ChangeOwnerOk": 846932810,
    "SetOwner": 3266583875,
    "SetProposalOwner": 3504586358,
    "SetFwdMsgFee": 4109608450,
    "SetMetadata": 3660550271,
    "DaoInit": 3971512043,
    "DeployAndInitProposal": 1496883659,
    "SendProposalInit": 2746622614,
    "SendUpdateProposal": 2568858687,
    "ProposalInit": 1008560988,
    "Vote": 2084703906,
    "UpdateProposal": 817223820,
}

const Dao_getters: ABIGetter[] = [
    {"name":"state","methodId":77589,"arguments":[],"returnType":{"kind":"simple","type":"DaoContractState","optional":false}},
]

export const Dao_getterMapping: { [key: string]: string } = {
    'state': 'getState',
}

const Dao_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"typed","type":"DaoInit"}},
    {"receiver":"internal","message":{"kind":"typed","type":"SetOwner"}},
    {"receiver":"internal","message":{"kind":"typed","type":"SetProposalOwner"}},
    {"receiver":"internal","message":{"kind":"typed","type":"SetMetadata"}},
    {"receiver":"internal","message":{"kind":"typed","type":"SetFwdMsgFee"}},
    {"receiver":"internal","message":{"kind":"typed","type":"DeployAndInitProposal"}},
    {"receiver":"internal","message":{"kind":"typed","type":"SendUpdateProposal"}},
    {"receiver":"internal","message":{"kind":"empty"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Deploy"}},
]


export class Dao implements Contract {
    
    public static readonly storageReserve = 0n;
    public static readonly errors = Dao_errors_backward;
    public static readonly opcodes = Dao_opcodes;
    
    static async init(registry: Address, daoIndex: bigint) {
        return await Dao_init(registry, daoIndex);
    }
    
    static async fromInit(registry: Address, daoIndex: bigint) {
        const __gen_init = await Dao_init(registry, daoIndex);
        const address = contractAddress(0, __gen_init);
        return new Dao(address, __gen_init);
    }
    
    static fromAddress(address: Address) {
        return new Dao(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  Dao_types,
        getters: Dao_getters,
        receivers: Dao_receivers,
        errors: Dao_errors,
    };
    
    constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: DaoInit | SetOwner | SetProposalOwner | SetMetadata | SetFwdMsgFee | DeployAndInitProposal | SendUpdateProposal | null | Deploy) {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'DaoInit') {
            body = beginCell().store(storeDaoInit(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'SetOwner') {
            body = beginCell().store(storeSetOwner(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'SetProposalOwner') {
            body = beginCell().store(storeSetProposalOwner(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'SetMetadata') {
            body = beginCell().store(storeSetMetadata(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'SetFwdMsgFee') {
            body = beginCell().store(storeSetFwdMsgFee(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'DeployAndInitProposal') {
            body = beginCell().store(storeDeployAndInitProposal(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'SendUpdateProposal') {
            body = beginCell().store(storeSendUpdateProposal(message)).endCell();
        }
        if (message === null) {
            body = new Cell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Deploy') {
            body = beginCell().store(storeDeploy(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getState(provider: ContractProvider) {
        const builder = new TupleBuilder();
        const source = (await provider.get('state', builder.build())).stack;
        const result = loadGetterTupleDaoContractState(source);
        return result;
    }
    
}