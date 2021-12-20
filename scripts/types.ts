import { BigNumber } from "ethers";

export enum VaultName {
    TombFtm60 = 'TombFtm60',
    TombFtm = 'TombFtm',
    TshareMasonry = 'TshareMasonry',
    SpiritFtm = 'SpiritFtm',
}

export const AllVaultNames = Object.keys(VaultName).filter((item) => {
    return isNaN(Number(item));
});

export interface VaultData {
    address: string,
    preExploitFullPricePerShare: BigNumber,
    abi: any,
}

export interface UserAdditionalData {
    discordTag?: string,
    tgTag?: string,
}

export type AffectedUsersCollection = { [key: string]: UserAdditionalData }