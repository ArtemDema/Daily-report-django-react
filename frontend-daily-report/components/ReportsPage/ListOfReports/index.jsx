import listOfReportsStyles from "./ListOfReports.module.css"


// временно реализованы пустышки. В них нет никакой информации и они нужны только для того, что бы показать будущие 
// стили и смысл компонента
function ListOfReports() {
    return(
        <div className={listOfReportsStyles.frontSide}>
            <h4>N месяц NNNN года</h4>

            <div className={listOfReportsStyles.report}>
                <div className={listOfReportsStyles.reportEmotion}>
                    <div className={listOfReportsStyles.emotion} id="terrible"></div>
                </div>

                <div className={listOfReportsStyles.reportText}>
                    <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis tenetur sunt corporis neque facilis dicta consectetur, suscipit voluptatibus numquam iure delectus earum enim culpa ad atque quaerat. Officia, eum minima delectus accusamus, in, quasi esse inventore temporibus unde possimus accusantium obcaecati nisi dolorum dolores fuga! Consequuntur eum maiores iusto nam voluptatibus, culpa quos quod autem voluptate consequatur omnis, velit vitae molestias obcaecati, beatae suscipit odit quasi debitis. Quaerat ea obcaecati nemo laborum sunt itaque esse hic rerum enim soluta velit architecto optio laudantium incidunt sapiente odit cum temporibus recusandae reprehenderit officiis sequi, deleniti fugiat. Nam facere at veniam totam aliquam.</h5>
                </div>

                <div className={listOfReportsStyles.reportPhotos}>
                    <div className={listOfReportsStyles.examplePhoto}></div>
                    <div className={listOfReportsStyles.examplePhoto}></div>
                    <div className={listOfReportsStyles.examplePhoto}></div>
                </div>

                <div className={listOfReportsStyles.reportEdit}>
                    <div className={listOfReportsStyles.reportDeleteButton}></div>
                    <div className={listOfReportsStyles.reportEditButton}></div>
                </div>
            </div>

            <h4>N месяц NNNN года</h4>

            <div className={listOfReportsStyles.report}>
                <div className={listOfReportsStyles.reportEmotion}>
                    <div className={listOfReportsStyles.emotion} id="notBad"></div>
                </div>

                <div className={listOfReportsStyles.reportText}>
                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam saepe eum in odio asperiores rerum nobis facilis nulla. Debitis eligendi fugiat ad minima voluptate, sit facilis cum sapiente unde accusantium, dicta quia labore quam vitae ratione similique a! Voluptate similique tempore itaque ullam veritatis ab aspernatur, nesciunt a in magnam expedita, quisquam laborum ipsum libero ad beatae eveniet mollitia aliquid officiis iusto omnis inventore animi dignissimos optio. Reprehenderit libero, veniam doloribus molestias consectetur ipsum quisquam animi harum facere odit repudiandae in tempora ullam quae corrupti corporis natus dicta. Odit exercitationem nobis officia odio facilis autem! Ducimus a explicabo aperiam omnis architecto natus, necessitatibus quisquam animi iure cum! Pariatur, praesentium cumque! Quo hic, iure et temporibus, impedit ducimus iusto aperiam quia aliquid quos repellat commodi tempora. Molestiae repellat vel, dolore delectus eveniet minus necessitatibus libero tenetur eius nihil voluptates rem quam dolores quibusdam rerum. Sed tenetur, facere libero omnis nesciunt deleniti ipsum quasi a distinctio eaque, vitae doloremque molestias quisquam velit est numquam praesentium, dolore dolores consectetur labore accusantium voluptatibus fugiat? Nemo deserunt quidem ut voluptatibus minima quam, veniam quisquam? Eligendi neque cum, illo ab labore ducimus hic possimus. Architecto quam, earum corrupti ipsam tempore ipsum minima corporis eum fugiat rem.</h5>
                </div>

                <div className={listOfReportsStyles.reportPhotos}>
                    <div className={listOfReportsStyles.examplePhoto}></div>
                </div>

                <div className={listOfReportsStyles.reportEdit}>
                    <div className={listOfReportsStyles.reportDeleteButton}></div>
                    <div className={listOfReportsStyles.reportEditButton}></div>
                </div>
            </div>

            <h4>N месяц NNNN года</h4>

            <div className={listOfReportsStyles.report}>
                <div className={listOfReportsStyles.reportEmotion}>
                    <div className={listOfReportsStyles.emotion} id="good"></div>
                </div>

                <div className={listOfReportsStyles.reportText}>
                    <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis tenetur sunt corporis neque facilis dicta consectetur, suscipit voluptatibus numquam iure delectus earum enim culpa ad atque quaerat.</h5>
                </div>

                <div className={listOfReportsStyles.reportPhotos}>
                    <div className={listOfReportsStyles.examplePhoto}></div>
                    <div className={listOfReportsStyles.examplePhoto}></div>
                    <div className={listOfReportsStyles.examplePhoto}></div>
                    <div className={listOfReportsStyles.examplePhoto}></div>
                    <div className={listOfReportsStyles.examplePhoto}></div>
                    <div className={listOfReportsStyles.examplePhoto}></div>
                </div>

                <div className={listOfReportsStyles.reportEdit}>
                    <div className={listOfReportsStyles.reportDeleteButton}></div>
                    <div className={listOfReportsStyles.reportEditButton}></div>
                </div>
            </div>

        </div>
    )
}

export default ListOfReports