import { BigNumber } from "ethers";
import { ABI } from "./abi/abi";
import { VaultData, VaultName } from "./types";

export const vaultData: { [key: string]: VaultData | null } = {
    [VaultName.TombFtm60]: null,
    [VaultName.TombFtm]: { address: '0xFDc10560bd833B763352C481f5785Dd69C803429', preExploitFullPricePerShare: BigNumber.from('19440499548893996111'), abi: ABI.grimVaultAbi },
    [VaultName.TshareMasonry]: { address: '0xE3BbAC6429724dcFcFA3DAfdb282AF1210aF31ED', preExploitFullPricePerShare: BigNumber.from('1234570668185209446'), abi: ABI.grimVaultAbi },
    [VaultName.SpiritFtm]: { address: '0xa20e8756e0bdc405c1a92821131341c6f8232891', preExploitFullPricePerShare: BigNumber.from('1565039772388208052'), abi: ABI.grimVaultAbi },
}