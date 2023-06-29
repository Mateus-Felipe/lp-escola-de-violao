import ContentInfo from "@/components/Home/ContentInfo/contentInfo"
import ThirdBanner from "@/components/Home/ThirdBanner/thirdBanner"
import Reviews from "@/components/Home/Reviews/reviews"
import FirstBanner from "@/components/Home/FirstBanner/firstBanner"
import AmbassadorSection from "@/components/Home/AmbassadorSection/ambassadorSection"
import FrequentAsks from "@/components/Home/FrequentAsks/frequentAsks"

export default function Home() {
  
  return (
    <main>
      <FirstBanner />
      <ContentInfo/>
      <Reviews />
      <ThirdBanner />
      <AmbassadorSection />
      <FrequentAsks />
      <footer  className="footer"> { /* Footer */ }
        <h1>A Maior Escola de Música do Brasil</h1>
      </footer>
    </main>
  )
}
