import React from 'react'
const Picture = () => {
    return(
        <div id="picture">
        <div class="container">
            <div class="text-center">
                <h1>PICTURE</h1>
            </div>
            <div class="row">
                <div class="col-4">
                    <img src="assets/img/impactbyte4.jpeg" class="img-vertical" alt="picture" />
                </div>
                <div class="col-4">
                    <p class="vertical-center-img">Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem
                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                        took
                        a galley of type and scrambled it to make a type specimen book. It has survived not only five
                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
            </div>


            <div class="row">
                <div class="col-4">
                    <p class="vertical-center-img">Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem
                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                        took
                        a galley of type and scrambled it to make a type specimen book. It has survived not only five
                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
                <div class="col-4-right">
                    <img src="assets/img/picture.JPG" class="img-horizontal" alt="picture" />
                </div>
            </div>
        </div>
    </div>
    )
}
export default Picture;