import Header from "../Header"
import LeftSide from "../LeftSide"
import RightSide from "../RightSide"
import ListOfReports from "./ListOfReports"

function reportsPage() {
    return(
      <div className='mainDiv'>
        <Header />

        <div className='contentDiv'>

          <LeftSide />

          <ListOfReports />

          <RightSide />

        </div>
      </div>
    )
}

export default reportsPage