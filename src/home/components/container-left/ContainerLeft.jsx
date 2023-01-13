import { ResponsiveNav } from "../responsive/ResponsiveNav"
import { Elements } from "./Elements"
import { Icon } from "./Icon"
import { ProfileButton } from "./ProfileButton"

export const ContainerLeft = () => {
  return (
    <div>
        <div className="container-left">
          <nav className="pc">
            <Icon />

            <Elements />

            <ProfileButton />
          </nav>

          <nav className="responsive-nav">
            <ResponsiveNav />
          </nav>
        </div>
    </div>
  )
}
