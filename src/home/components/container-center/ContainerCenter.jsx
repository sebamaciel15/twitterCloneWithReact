import { ResponsiveNav2 } from "../responsive/ResponsiveNav2"
import { Fixed } from "./Fixed"
import { HomeTweets } from "./HomeTweets"
import { Twittear } from "./Twittear"

export const ContainerCenter = () => {
  return (
    <div>
        <div className="container-center">
          <Fixed />

          <Twittear />

          <HomeTweets />

          <ResponsiveNav2 />
        </div>
    </div>
  )
}
