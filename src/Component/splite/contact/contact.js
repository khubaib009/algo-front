import React, { useState } from 'react'
import Header from '../header'
import Footer from '../footer'
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  const [success, setSuccess] = React.useState(false)
  const [toastShown, setToastShown] = useState(false);
  const [formData, setFormData] = useState({ firstname: '', lastname: '', email: '', subject: '', message: '' });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleToastClose = () => {
    setToastShown(false)
  }
  const handleasubmit = () => {


    if (!formData.firstname && !toastShown) {
      toast.error('Please enter your First Name', {
        autoClose: 3000, // Close after 6 seconds
        closeButton: false, // Hide the default close button
        onClose: handleToastClose,
      });
      setToastShown(true);
      return;
    }
    if (!formData.lastname) {
      toast.error('Please enter your Last Name', {
        autoClose: 3000, // Close after 6 seconds
        closeButton: false, // Hide the default close button
        onClose: handleToastClose,
      });
      setToastShown(true);
      return;
    }
    if (!formData.email) {
      toast.error('Please enter your Email', {
        autoClose: 3000, // Close after 6 seconds
        closeButton: false, // Hide the default close button
        onClose: handleToastClose,
      });
      setToastShown(true);
      return;
    }
    if (!formData.subject) {
      toast.error('Please enter the Subject', {
        autoClose: 3000, // Close after 6 seconds
        closeButton: false, // Hide the default close button
        onClose: handleToastClose,
      });
      setToastShown(true);
      return;
    }
    if (!formData.message) {
      toast.error('Please enter your Message', {
        autoClose: 3000, // Close after 6 seconds
        closeButton: false, // Hide the default close button
        onClose: handleToastClose,
      });
      setToastShown(true);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address', {
        autoClose: 3000, // Close after 6 seconds
        closeButton: false, // Hide the default close button
        onClose: handleToastClose,
      });
      return;
    }

    emailjs
      .send(
        // "service_fzc4wtg",
        // "template_gdxtv7e",
        "service_y8nyi9j",
        "template_y1kbms7",
        {
          from_name: formData.firstname + " " + formData.lastname,
          subject: formData.subject,
          to_name: "Kunal dhawan",
          message: formData.message,
          reply_to: formData.email,
        },
        // "G-7y6B28M8nsQSHT-"
        "qNweVWGB2oq5FeyQT"
      )
      .then(
        result => {
          console.log(result);
          setSuccess(true);
        },
        error => {
          console.log(error.text);
        }
      );
  }
  return (
    <div id="ContactUS">
      {/* <Header /> */}
      <ToastContainer />
      <div data-elementor-type="wp-post" data-elementor-id={99} className="elementor elementor-99" data-elementor-post-type="envato_tk_templates"
 >
        <div className="elementor-element elementor-element-8939de3 e-flex e-con-boxed e-con e-parent" >
         
        </div>
        <div className="elementor-element elementor-element-a317161 e-flex e-con-boxed e-con e-parent"  >
          <div className="e-con-inner" style={{position: 'relative', backgroundImage: `linear-gradient(rgba(128, 128, 128, 0.5), rgba(128, 128, 128, 0.5)), url('/wp-content/trad1.avif')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '30px', marginTop: '2%', marginBottom: '2%',
 }}
          >
            <div className="elementor-element elementor-element-11a23476 e-con-full e-flex e-con e-child" style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="elementor-element elementor-element- e-con-full e-flex elementor-invisible e-con e-child" style={{ width: '80%' }}  >
                <div
                  className="elementor-element elementor-element-2e9c19e9 elementor-widget elementor-widget-heading"            >
                  {!success && <div className="elementor-widget-container">
                    <h3 className="elementor-heading-title elementor-size-default" style={{ color: 'white' }}>
                      Contact us to learn more
                    </h3>
                  </div>}
                </div>
                <div
                  className="elementor-element elementor-element-51043f9b elementor-widget elementor-widget-heading" >
                  <div className="elementor-widget-container">
                    <div className="elementor-heading-title elementor-size-default">
                      {/* Mus cubilia eget donec velit conubia. Facilisi tincidunt finibus
                  faucibus enim praesent urna. */}
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-5cf51013 elementor-button-align-stretch elementor-widget elementor-widget-form" >
                  <div className="elementor-widget-container">
                    {!success && <div className="elementor-form">
                      <input type="hidden" name="post_id" defaultValue={99} />
                      <input type="hidden" name="form_id" defaultValue="5cf51013" />
                      <input
                        type="hidden"
                        name="referer_title"
                        defaultValue="Contact US"
                      />
                      <input type="hidden" name="queried_id" defaultValue={99} />
                      <div className="elementor-form-fields-wrapper elementor-labels-above" style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-50" style={{ marginBottom: '3%' }}>
                          <label
                            htmlFor="form-field-name"
                            className="elementor-field-label"
                            style={{ color: 'white' }}
                          >First Name{" "}
                          </label>
                          <input
                            size={1}
                            type="text"
                            name="firstname"
                            id="form-field-name"
                            className="elementor-field elementor-size-sm  elementor-field-textual"
                            placeholder="First Name"
                            onChange={(e) => { handleChange(e) }}
                          />
                        </div>
                        <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-field_0cdf544 elementor-col-50" style={{ marginBottom: '3%' }}>
                          <label htmlFor="form-field-field_0cdf544" className="elementor-field-label" style={{ color: 'white' }} >
                            LastName
                          </label>
                          <input
                            size={1}
                            type="text"
                            name="lastname"
                            id="form-field-field_0cdf544"
                            className="elementor-field elementor-size-sm  elementor-field-textual"
                            placeholder="Last Name"
                            onChange={(e) => { handleChange(e) }}
                          />
                        </div>
                        
                        <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-100 elementor-field-required" style={{ marginBottom: '3%' }}>
                          <label htmlFor="form-field-email" className="elementor-field-label" style={{ color: 'white' }} >
                            Email{" "}
                          </label>
                          <input size={1} type="email" name="email" id="form-field-email" className="elementor-field elementor-size-sm  elementor-field-textual" placeholder="Email" required="required" aria-required="true"  onChange={(e) => { handleChange(e) }} />
                        </div>
                        <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-field_6d71d35 elementor-col-100 elementor-field-required" style={{ marginBottom: '3%' }}>
                          <label htmlFor="form-field-field_6d71d35" className="elementor-field-label" style={{ color: 'white' }} >
                          Subject{" "}
                          </label>
                          <input size={1} type="text" name="subject" id="form-field-field_6d71d35" className="elementor-field elementor-size-sm  elementor-field-textual" placeholder="Subject" required="required" aria-required="true" onChange={(e) => { handleChange(e) }}  />
                        </div>
                        <div className="elementor-field-type-textarea elementor-field-group elementor-column elementor-field-group-message elementor-col-100" style={{ marginBottom: '3%' }}>
                          <label htmlFor="form-field-message" className="elementor-field-label" style={{ color: 'white' }} > Message{" "} </label>
                          <textarea
                            className="elementor-field-textual elementor-field  elementor-size-sm"
                            name="message"
                            id="form-field-message"
                            rows={4}
                            placeholder="Message"
                            defaultValue={""}
                            onChange={(e) => { handleChange(e) }}
                          />
                        </div>
                        <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-30 e-form__buttons">
                          <button
                            // type="submit"
                             className="elementor-button elementor-size-sm"
                            style={{ border: '2px solid white' }}
                            onClick={() => { handleasubmit() }}
                          >
                            <span>
                              <span className="elementor-align-icon-left elementor-button-icon">
                                <i
                                  aria-hidden="true"
                                  className="mdi mdi-email-outline"
                                />{" "}
                              </span>
                              <span className="elementor-button-text">
                                Submit
                              </span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>}
                    {success && <div>
                      <h4 style={{ color: 'white' }}>Thanks for reaching out. You will hear back from us within 2 working days.</h4>
                    </div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-70514b39 e-con-full e-flex elementor-invisible e-con e-parent" >
          <div className="elementor-element elementor-element-41ed7fdb elementor-widget elementor-widget-google_maps" >
            <div className="elementor-widget-container">
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n\t\t\t\t\t\t/*! elementor - v3.20.0 - 13-03-2024 */\n\t\t\t\t\t\t.elementor-widget-google_maps .elementor-widget-container {\n\t\t\t\t\t\t\toverflow: hidden\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.elementor-widget-google_maps .elementor-custom-embed {\n\t\t\t\t\t\t\tline-height: 0\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.elementor-widget-google_maps iframe {\n\t\t\t\t\t\t\theight: 300px\n\t\t\t\t\t\t}\n\t\t\t\t\t"
                }}
              />
              {/* <div className="elementor-custom-embed">
            <iframe
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115096.8261275603!2d-75.61304165958522!3d39.23199352756832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c705764d0cd63b%3A0x941d2d128c04e878!2sDelaware%2C%20USA!5e0!3m2!1sen!2sin!4v1713338383020!5m2!1sen!2sin"
              title="Delaware, us"
              aria-label="Delaware, us"
            />
            <iframe
              title="Delaware, us"
              aria-label="Delaware, us"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d396199.7659056527!2d-75.78233140470756!3d39.12216136519508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b881e18d2adb73%3A0x5133d60c4ce4f62e!2sCamden%2C%20DE%2C%20USA!5e0!3m2!1sen!2sin!4v1713340065046!5m2!1sen!2sin"
             width="100%"
             height="700"
             style={{border:0}}
            allowfullscreen="" 
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}
export default Contact