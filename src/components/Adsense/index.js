import { useEffect } from "react"
export function GoogleAdsenseContainer({ slot, layoutKey }) {
  const adsStatus = false
  const client = "ca-pub-9270075046641360"
  useEffect(() => {
    ; (window.adsbygoogle = window.adsbygoogle || []).push({})
  }, [])

  if (!adsStatus) return <></>

  if (layoutKey) return <ins class="adsbygoogle" style={{ display: "block" }} data-ad-format="fluid" data-ad-layout-key={layoutKey} data-ad-client={client} data-ad-slot={slot}></ins>

  return <ins className="adsbygoogle" style={{ display: "block" }} data-ad-client={client} data-ad-slot={slot} data-ad-format="auto" data-full-width-responsive="true"></ins>
}
