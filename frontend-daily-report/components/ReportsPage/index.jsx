import Header from "../Header"
import LeftSide from "../LeftSide"
import RightSide from "../RightSide"
import ListOfReports from "./ListOfReports"
import ReportsPageStyles from "./ReportsPage.module.css"

function reportsPage() {
    return(
      <div className='mainDiv'>
        <Header />

        <div className='contentDiv'>

          <LeftSide />

          <div className={ReportsPageStyles.frontSide}>
            <ListOfReports day={27} month={8} year={2026} emotion={"fine"} text={'test'} />
            <ListOfReports day={27} month={8} year={2026} emotion={"notBad"} text={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex voluptas a suscipit nihil eius quis officiis corrupti architecto, omnis nisi eveniet officia consequuntur culpa. Vitae architecto maxime, at porro ullam veritatis quae aliquid repellendus, iusto natus quidem laborum tempore aspernatur necessitatibus minima possimus eos dolores minus neque cumque? Beatae tempora iste odit blanditiis earum ipsa repudiandae quam doloribus! Ipsum possimus voluptatem quia, laudantium in assumenda delectus quaerat nisi, aut natus distinctio excepturi nobis? Adipisci ipsa, qui, nam enim, accusantium sint officiis quas perferendis doloremque aut nihil magni dolore facere minima aperiam excepturi aspernatur reiciendis voluptatem eius explicabo. Rerum eligendi temporibus animi sed vero accusamus. Voluptas laudantium neque culpa iure vero maiores ut consequuntur, quae amet veritatis explicabo expedita eum saepe aliquid officiis. Officia ipsam illo commodi a non explicabo consequatur vitae perspiciatis facere ad beatae eos recusandae, deleniti veritatis quibusdam alias, magni distinctio eum et! Nihil perferendis quam placeat. Quam eligendi quasi, dicta minima tenetur temporibus vel unde, nostrum, doloremque dolor maiores molestias. Sed cumque, enim quia nemo molestias laborum eius doloribus, earum hic aperiam recusandae, aspernatur incidunt voluptate fuga quidem? Sapiente dignissimos sunt, accusamus odit voluptatibus repellat autem earum quos unde nisi, tempora assumenda pariatur iusto possimus, officiis aperiam.'} />
            <ListOfReports day={27} month={8} year={2026} emotion={"fine"} text={'test'} />
          </div>

          <RightSide />

        </div>
      </div>
    )
}

export default reportsPage