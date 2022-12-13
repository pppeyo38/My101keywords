import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Header } from '@/components/Header'
import { CardsLayout } from '@/components/CardsLayout'
import { useShuffle } from '@/hooks/useShuffle'
import { keywordsDataType } from '@/type/keyword'
import data from '@/data/keywords.json'

export default function Home() {
  const keywordsData: keywordsDataType = data
  const [keywords, setKeywords] = useState<keywordsDataType>([])

  useEffect(() => {
    setKeywords(useShuffle(keywordsData))
  }, [])

  return (
    <div>
      <Head>
        <title>My 101 KeyWords</title>
      </Head>

      <main>
        <Header />
        <CardsLayout keywords={keywords} />
      </main>
    </div>
  )
}
