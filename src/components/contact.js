import React from 'react'
const Contact = () => {
    return(
        <div id="contact">
        <div class="container">
            <div class="row">
                <div class="text-center">
                    <h1>GET IN TOUCH</h1>
                </div>
                <div class="col-4">
                    <form>
                        <label for="name">Name: </label>
                        <input type="name" id="name" name="name" placeholder="Your Name" required/>
                        <br/>
                        <label for="email">E-mail: </label>
                        <input type="email" id="name" name="name" placeholder="Your E-mail" required/>
                        <br/>
                        <label for="phone">Phone: </label> */}
                        <input type="tel" id="phone" name="phone" placeholder="Your Phone" required/>
                        <br/>
                         <label for="message">Message: </label>
                        <br/>
                        <textarea rows="6" cols="55" id="message" name="message" placeholder="Your Message"
                            required></textarea>
                        <br/>
                        <button type="submit" class="btn-submit">SEND MESSAGE</button>
                    </form>
                </div>
                <div class="col-4">
                    <div class="follow"><b>Address: </b><i class="fa fa-map-marker"></i> XYZ Road, Batam</div>
                    <div class="follow"><b>Phone: </b><i class="fa fa-phone"></i> +62 123456789</div>
                    <div class="follow"><b>E-mail: </b><i class="fa fa-envelope-o"></i> riverhuang@gmail.com</div>
                    <div class="follow"><label><b>Get Social: </b></label></div>
                        <a href="#"><i class="fa fa-github"></i></a>
                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-instagram"></i></a>
                        <a href="#"><i class="fa fa-youtube-play"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;