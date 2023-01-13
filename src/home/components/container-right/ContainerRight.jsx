import { Footer } from "./Footer"
import { SearchRight } from "./SearchRight"
import { WhRight } from "./WhRight"

export const ContainerRight = () => {
  return (
    <div>
        <div className="container-right">
          <SearchRight />

          <WhRight />

          <Footer />
        </div>
    </div>
  )
}
