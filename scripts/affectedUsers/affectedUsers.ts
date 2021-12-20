import { AffectedUsersCollection, UserAdditionalData, VaultName } from "../types";
import tombFtmUsers from "./tombFtmUsers";
import tshareMasonryUsers from "./tshareMasonryUsers";
import spiritFtmUsers from "./spiritFtmUsers";

export const affectedUsers: { [key: string]: AffectedUsersCollection } = {
    [VaultName.TombFtm60]: {},
    [VaultName.TombFtm]: tombFtmUsers,
    [VaultName.TshareMasonry]: tshareMasonryUsers,
    [VaultName.SpiritFtm]: spiritFtmUsers,
}