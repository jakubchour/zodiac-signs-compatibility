import { Sign } from '@/components/Sign'
import { Progressbar } from '@/components/Progressbar'
import { InlineShareButtons } from 'sharethis-reactjs';
import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head'
import compatibilityTitles from '@/data/compatibility-titles.json'
import signs from '@/data/signs.json'
import pairs from '@/data/zodiac-pairs.json'
import ReactGA from 'react-ga';
import Link from 'next/link'
import styles from '@/styles/Compatibility.module.scss'


export default function Home() {
  const [isShareButtonsVisible, setIsShareButtonsVisible] = useState(false)
  const [firstSign, setFirstSign] = useState({} as SignInterface)
  const [secondSign, setSecondSign] = useState({} as SignInterface)

  const router = useRouter()
  const pair = router.query.pair as string

  useEffect(() => {
    if (!pair) {
      return;
    }

    const splitedPair = pair.split("+")
    const foundedFirstSign = signs.find(sign => sign.name === splitedPair[0])
    const foundedSecondSign = signs.find(sign => sign.name === splitedPair[1])

    const signsExists = foundedFirstSign && foundedSecondSign
    if (!signsExists) {
      router.push("/")
      return;
    }

    setFirstSign(foundedFirstSign)
    setSecondSign(foundedSecondSign)
  }, [router.query.pair])

  const handleShare = useCallback(() => {
    ReactGA.event({
      category: "Astro compatibility",
      action: "Share compatibility"
    })

    setIsShareButtonsVisible(true)
  }, [])

  const handleStartOver = useCallback(() => {
    ReactGA.event({
      category: "Astro compatibility",
      action: "Try astro compatibility button clicked"
    })
  }, [])

  const getCompatibilityTitle = (compatibilityTitles: CompatibilityTitlesInterface[], currentPair: CurrentPairInterface) => {
    return compatibilityTitles.find(title => title.score <= currentPair.overallscore)?.text || "A fair cosmical match!"
  }

  const firstForCheck = `${firstSign.name}-${secondSign.name}`.toLowerCase()
  const secondPairForCheck = `${secondSign.name}-${firstSign.name}`.toLowerCase()

  const findedPair = pairs.find(pair =>
    pair.possibleCombinations.split(" ").join("").toLowerCase() === firstForCheck ||
    pair.possibleCombinations.split(" ").join("").toLowerCase() === secondPairForCheck
  )

  const SHARE_DESCRIPTION = "Check my zodiac compatibility results!"


  return (
    <>
      <Head>
        <title>Compatibility result!</title>
      </Head>
      <h1 className={styles.pageTitle}>Is it a match?</h1>
      {findedPair && <main className={styles.container}>
        <section className={styles.signs}>
          <Sign signInfo={firstSign} />
          <span className={styles.plus}>+</span>
          <Sign signInfo={secondSign} />
        </section>
        <section>
          <h2 className={styles.comment}>{getCompatibilityTitle(compatibilityTitles, findedPair)}</h2>
          <Progressbar isOverallScore percent={findedPair.overallscore} />
        </section>

        <section className={styles.secondaryScore}>
          <Progressbar title={"Career"} percent={findedPair.careerscore} />
          <Progressbar title={"Sex life"} percent={findedPair.intimatescore} />
          <Progressbar title={"Mindset"} percent={findedPair.mindsetscore} />
          <Progressbar title={"Friendship"} percent={findedPair.interestsscore} />
        </section>

        <button className={styles.share} onClick={handleShare}>Share results</button>
        
        <section className={styles.shareButtonsContainer}>
          <div className={isShareButtonsVisible ? styles.shareButtons : styles.hidedShareButtons}>
            <InlineShareButtons
              config={{
                alignment: 'center',
                color: 'social',
                enabled: true,
                font_size: 16,
                labels: 'cta',
                language: 'en',
                networks: [
                  'reddit',
                  'whatsapp',
                  'facebook',
                  'twitter'
                ],
                padding: 12,
                radius: 4,
                show_total: false,
                size: 40,
                image: "https://bit.ly/2CMhCMC",
                title: SHARE_DESCRIPTION,
                message: SHARE_DESCRIPTION,
                url: "https://zodiac-signs-compatibility.vercel.app/"
              }}
            />
          </div>
        </section>

        <section>
          <h2 className={styles.subtitle}>Overall</h2>
          <p className={styles.description}>{findedPair.description}</p>
        </section>

        <Link href={`/?my_sign=${firstSign.name}`} className={styles.redirect} onClick={handleStartOver}>Start over</Link>
      </main>}
    </>
  )
}

interface SignInterface {
  name: string,
  imagePath: string,
  dates: string
}

interface CurrentPairInterface {
  possibleCombinations: string;
  combinationid: number;
  description: string;
  overallscore: number;
  careerscore: number;
  intimatescore: number;
  mindsetscore: number;
  interestsscore: number;
}

interface CompatibilityTitlesInterface {
  score: number,
  text: string
}