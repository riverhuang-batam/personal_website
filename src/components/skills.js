import React from 'react'
const Skills = () => {
    return(
        <section id="skills">
        <div class="container">
            <div class="row">
                <div class="text-center">
                    <h1>MY SKILLS</h1>
                </div>

                <div class="col-4">
                    <p class="vertical-center">Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem
                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                        took
                        a galley of type and scrambled it to make a type specimen book. It has survived not only five
                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
                <div class="col-4-right">
                    <ul>
                        <li>
                            <h3>HTML 5</h3><span class="bar"><span class="html"></span></span>
                        </li>
                        <li>
                            <h3>CSS</h3><span class="bar"><span class="css"></span></span>
                        </li>
                        <li>
                            <h3>JAVASCRIPT</h3><span class="bar"><span class="javascript"></span></span>
                        </li>

                        <li>
                            <h3>REACT JS</h3><span class="bar"><span class="reactjs"></span></span>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </section>
    )
}
export default Skills;