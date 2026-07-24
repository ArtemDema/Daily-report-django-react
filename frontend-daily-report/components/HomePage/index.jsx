import Header from "../Header"
import LeftSide from "../LeftSide"
import RightSide from "../RightSide"
import FrontSide from "./FrontSide"

function homePage() {
    return(
      <div className='mainDiv'>
        <Header />

        <div className='contentDiv'>

          <LeftSide />

          <FrontSide />

          <RightSide />

        </div>
      </div>
    )
}

export default homePage