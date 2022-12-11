import { keywordsDataType } from '@/type/keyword'

export const useShuffle = (list: keywordsDataType) => {
  let i = list.length

  while (--i) {
    const j = Math.floor(Math.random() * (i + 1))
    if (i == j) continue
    const k = list[i]
    list[i] = list[j]
    list[j] = k
  }
  return list
}
