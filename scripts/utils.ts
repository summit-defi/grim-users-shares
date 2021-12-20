import { ethers, BigNumber } from "ethers"

export const e18 = (n: number) => {
    return ethers.utils.parseUnits(n.toString())
}

export const promiseSequenceMap = async <T, R>(inputArray: T[], transformer: (element: T, index: number, array: T[]) => Promise<R>): Promise<R[]> => {
    const newArray: R[] = []
    for (let i = 0; i < inputArray.length; i++) {
        newArray[i] = await transformer(inputArray[i], i, inputArray)
    }
    return newArray
}

export const sumBigNumbers = (arr: BigNumber[]) => {
    return arr.reduce((acc, n) => acc.add(n), e18(0))
}

export const toDecimal = (n: BigNumber) => {
    return ethers.utils.formatUnits(n, 18)
}
