import React from 'react'
import Header from '../header'
import Footer from '../footer'
import { Fade } from "react-awesome-reveal";
import { ToastContainer, toast } from 'react-toastify';
import emailjs from "@emailjs/browser";

const Register = () => {
    const [success,setSuccess] = React.useState(false)
    const [toastShown, setToastShown] = React.useState(false);
    const [formData, setFormData] = React.useState({ name: '',email: '',age:'',subject:'Beta Optimised S&P Strategy',tradingexperience:'' ,message: '' });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      const handleToastClose =()=>{
        setToastShown(false)
      }
      const handleasubmit = () => {
    
    
        if (!formData.name && !toastShown ) {
          toast.error('Please enter your First Name',{
            autoClose: 3000, // Close after 6 seconds
            closeButton: false, // Hide the default close button
            onClose: handleToastClose, 
          });
          setToastShown(true);
          return;
        }
        if (!formData.email) {
          toast.error('Please enter your Email',{
            autoClose: 3000, // Close after 6 seconds
            closeButton: false, // Hide the default close button
            onClose: handleToastClose, 
          });
          setToastShown(true);
          return;
        }
        if (!formData.age) {
          toast.error('Please enter your Age',{
            autoClose: 3000, // Close after 6 seconds
            closeButton: false, // Hide the default close button
            onClose: handleToastClose, 
          });
          setToastShown(true);
          return;
        }
        if (!formData.tradingexperience) {
            toast.error('Please enter your Trading Experience',{
              autoClose: 3000, // Close after 6 seconds
              closeButton: false, // Hide the default close button
              onClose: handleToastClose, 
            });
            setToastShown(true);
            return;
          }
        
        if (!formData.message) {
          toast.error('Please enter your Message',{
            autoClose: 3000, // Close after 6 seconds
            closeButton: false, // Hide the default close button
            onClose: handleToastClose, 
          });
          setToastShown(true);
          return;
        }
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          toast.error('Please enter a valid email address',{
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
            from_name:formData.name,
            subject:formData.subject ,
            to_name: "Kunal dhawan",
            message:formData.message,
            reply_to:formData.email,
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

      const isMobile = window.innerWidth < 600;
    return (
        <div>
            <Header />
            <ToastContainer />
            <div className="elementor elementor-99"   >
                <div className="elementor-element elementor-element-8939de3 e-flex e-con-boxed e-con e-parent" >
                    <div className="e-con-inner">
                    </div>
                </div>
                <div className="elementor-element elementor-element-a317161 e-flex e-con-boxed e-con e-parent" style={{ marginTop: '-2%' }} >
                    <div className="e-con-inner">
                        <div className="elementor-element elementor-element-11a23476 e-con-full e-flex e-con e-child">
                        {success && <div className="elementor-element elementor-element-6f8d8d31 e-con-full e-flex elementor-invisible e-con e-child" style={{ position: 'relative', backgroundImage: `linear-gradient(rgba(128, 128, 128, 0.5), rgba(128, 128, 128, 0.5)), url('wp-content/stock3.jpg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '30px',width:isMobile?'100%':'50%',height:'400px',marginTop:'10%'}} >
                           
                       <div>
                     <h3 style={{color:'white'}}>You will receive password in next 24 hours</h3>
                   </div>
                     </div>
                 }
                         { !success &&    <div className="elementor-element elementor-element-6f8d8d31 e-con-full e-flex elementor-invisible e-con e-child" style={{ position: 'relative', backgroundImage: `linear-gradient(rgba(128, 128, 128, 0.5), rgba(128, 128, 128, 0.5)), url('wp-content/stock3.jpg')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '30px',width:isMobile?'100%':'50%'}} >
                            <Fade direction='left'>
                                <div className="elementor-element elementor-element-2e9c19e9 elementor-widget elementor-widget-heading" >
                                    <div className="elementor-widget-container">
                                        <h3 className="elementor-heading-title elementor-size-default"    style={{color:'white'}}>
                                            AlgoEdge Registration
                                        </h3>
                                        <h6 style={{color:'white'}}>Beta Optimised S&P Strategy</h6>
                                    </div>
                                </div>
                                <div  className="elementor-element elementor-element-51043f9b elementor-widget elementor-widget-heading" >
                                    <div className="elementor-widget-container">
                                        {/* <div className="elementor-heading-title elementor-size-default">
                                            Mus cubilia eget donec velit conubia. Facilisi tincidunt finibus
                                            faucibus enim praesent urna.
                                        </div> */}
                                    </div>
                                </div>
                                <div className="elementor-element elementor-element-5cf51013 elementor-button-align-stretch elementor-widget elementor-widget-form" >
                                    <div className="elementor-widget-container">
                                        <style
                                            dangerouslySetInnerHTML={{
                                                __html:
                                                    '\n\t\t\t\t\t\t\t\t\t/*! elementor-pro - v3.19.0 - 07-02-2024 */\n\t\t\t\t\t\t\t\t\t.elementor-button.elementor-hidden,\n\t\t\t\t\t\t\t\t\t.elementor-hidden {\n\t\t\t\t\t\t\t\t\t\tdisplay: none\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__step {\n\t\t\t\t\t\t\t\t\t\twidth: 100%\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__step:not(.elementor-hidden) {\n\t\t\t\t\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\t\t\t\t\tflex-wrap: wrap\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__buttons {\n\t\t\t\t\t\t\t\t\t\tflex-wrap: wrap\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__buttons,\n\t\t\t\t\t\t\t\t\t.e-form__buttons__wrapper {\n\t\t\t\t\t\t\t\t\t\tdisplay: flex\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators {\n\t\t\t\t\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\t\t\t\t\tjustify-content: space-between;\n\t\t\t\t\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\t\t\t\t\tflex-wrap: nowrap;\n\t\t\t\t\t\t\t\t\t\tfont-size: 13px;\n\t\t\t\t\t\t\t\t\t\tmargin-bottom: var(--e-form-steps-indicators-spacing)\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator {\n\t\t\t\t\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\t\t\t\t\tflex-direction: column;\n\t\t\t\t\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\t\t\t\t\tjustify-content: center;\n\t\t\t\t\t\t\t\t\t\tflex-basis: 0;\n\t\t\t\t\t\t\t\t\t\tpadding: 0 var(--e-form-steps-divider-gap)\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator__progress {\n\t\t\t\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\t\t\t\t\tbackground-color: var(--e-form-steps-indicator-progress-background-color);\n\t\t\t\t\t\t\t\t\t\tborder-radius: var(--e-form-steps-indicator-progress-border-radius);\n\t\t\t\t\t\t\t\t\t\toverflow: hidden\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator__progress__meter {\n\t\t\t\t\t\t\t\t\t\twidth: var(--e-form-steps-indicator-progress-meter-width, 0);\n\t\t\t\t\t\t\t\t\t\theight: var(--e-form-steps-indicator-progress-height);\n\t\t\t\t\t\t\t\t\t\tline-height: var(--e-form-steps-indicator-progress-height);\n\t\t\t\t\t\t\t\t\t\tpadding-right: 15px;\n\t\t\t\t\t\t\t\t\t\tborder-radius: var(--e-form-steps-indicator-progress-border-radius);\n\t\t\t\t\t\t\t\t\t\tbackground-color: var(--e-form-steps-indicator-progress-color);\n\t\t\t\t\t\t\t\t\t\tcolor: var(--e-form-steps-indicator-progress-meter-color);\n\t\t\t\t\t\t\t\t\t\ttext-align: right;\n\t\t\t\t\t\t\t\t\t\ttransition: width .1s linear\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator:first-child {\n\t\t\t\t\t\t\t\t\t\tpadding-left: 0\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator:last-child {\n\t\t\t\t\t\t\t\t\t\tpadding-right: 0\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator--state-inactive {\n\t\t\t\t\t\t\t\t\t\tcolor: var(--e-form-steps-indicator-inactive-primary-color, #c2cbd2)\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator--state-inactive [class*=indicator--shape-]:not(.e-form__indicators__indicator--shape-none) {\n\t\t\t\t\t\t\t\t\t\tbackground-color: var(--e-form-steps-indicator-inactive-secondary-color, #fff)\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator--state-inactive object,\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator--state-inactive svg {\n\t\t\t\t\t\t\t\t\t\tfill: var(--e-form-steps-indicator-inactive-primary-color, #c2cbd2)\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator--state-active {\n\t\t\t\t\t\t\t\t\t\tcolor: var(--e-form-steps-indicator-active-primary-color, #39b54a);\n\t\t\t\t\t\t\t\t\t\tborder-color: var(--e-form-steps-indicator-active-secondary-color, #fff)\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator--state-active [class*=indicator--shape-]:not(.e-form__indicators__indicator--shape-none) {\n\t\t\t\t\t\t\t\t\t\tbackground-color: var(--e-form-steps-indicator-active-secondary-color, #fff)\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator--state-active object,\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator--state-active svg {\n\t\t\t\t\t\t\t\t\t\tfill: var(--e-form-steps-indicator-active-primary-color, #39b54a)\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator--state-completed {\n\t\t\t\t\t\t\t\t\t\tcolor: var(--e-form-steps-indicator-completed-secondary-color, #fff)\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator--state-completed [class*=indicator--shape-]:not(.e-form__indicators__indicator--shape-none) {\n\t\t\t\t\t\t\t\t\t\tbackground-color: var(--e-form-steps-indicator-completed-primary-color, #39b54a)\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator--state-completed .e-form__indicators__indicator__label {\n\t\t\t\t\t\t\t\t\t\tcolor: var(--e-form-steps-indicator-completed-primary-color, #39b54a)\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator--state-completed .e-form__indicators__indicator--shape-none {\n\t\t\t\t\t\t\t\t\t\tcolor: var(--e-form-steps-indicator-completed-primary-color, #39b54a);\n\t\t\t\t\t\t\t\t\t\tbackground-color: initial\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator--state-completed object,\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator--state-completed svg {\n\t\t\t\t\t\t\t\t\t\tfill: var(--e-form-steps-indicator-completed-secondary-color, #fff)\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator__icon {\n\t\t\t\t\t\t\t\t\t\twidth: var(--e-form-steps-indicator-padding, 30px);\n\t\t\t\t\t\t\t\t\t\theight: var(--e-form-steps-indicator-padding, 30px);\n\t\t\t\t\t\t\t\t\t\tfont-size: var(--e-form-steps-indicator-icon-size);\n\t\t\t\t\t\t\t\t\t\tborder-width: 1px;\n\t\t\t\t\t\t\t\t\t\tborder-style: solid;\n\t\t\t\t\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\t\t\t\t\tjustify-content: center;\n\t\t\t\t\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\t\t\t\t\toverflow: hidden;\n\t\t\t\t\t\t\t\t\t\tmargin-bottom: 10px\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator__icon img,\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator__icon object,\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator__icon svg {\n\t\t\t\t\t\t\t\t\t\twidth: var(--e-form-steps-indicator-icon-size);\n\t\t\t\t\t\t\t\t\t\theight: auto\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator__icon .e-font-icon-svg {\n\t\t\t\t\t\t\t\t\t\theight: 1em\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator__number {\n\t\t\t\t\t\t\t\t\t\twidth: var(--e-form-steps-indicator-padding, 30px);\n\t\t\t\t\t\t\t\t\t\theight: var(--e-form-steps-indicator-padding, 30px);\n\t\t\t\t\t\t\t\t\t\tborder-width: 1px;\n\t\t\t\t\t\t\t\t\t\tborder-style: solid;\n\t\t\t\t\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\t\t\t\t\tjustify-content: center;\n\t\t\t\t\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\t\t\t\t\tmargin-bottom: 10px\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator--shape-circle {\n\t\t\t\t\t\t\t\t\t\tborder-radius: 50%\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator--shape-square {\n\t\t\t\t\t\t\t\t\t\tborder-radius: 0\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator--shape-rounded {\n\t\t\t\t\t\t\t\t\t\tborder-radius: 5px\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator--shape-none {\n\t\t\t\t\t\t\t\t\t\tborder: 0\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator__label {\n\t\t\t\t\t\t\t\t\t\ttext-align: center\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator__separator {\n\t\t\t\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\t\t\t\theight: var(--e-form-steps-divider-width);\n\t\t\t\t\t\t\t\t\t\tbackground-color: #babfc5\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators--type-icon,\n\t\t\t\t\t\t\t\t\t.e-form__indicators--type-icon_text,\n\t\t\t\t\t\t\t\t\t.e-form__indicators--type-number,\n\t\t\t\t\t\t\t\t\t.e-form__indicators--type-number_text {\n\t\t\t\t\t\t\t\t\t\talign-items: flex-start\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators--type-icon .e-form__indicators__indicator__separator,\n\t\t\t\t\t\t\t\t\t.e-form__indicators--type-icon_text .e-form__indicators__indicator__separator,\n\t\t\t\t\t\t\t\t\t.e-form__indicators--type-number .e-form__indicators__indicator__separator,\n\t\t\t\t\t\t\t\t\t.e-form__indicators--type-number_text .e-form__indicators__indicator__separator {\n\t\t\t\t\t\t\t\t\t\tmargin-top: calc(var(--e-form-steps-indicator-padding, 30px) / 2 - var(--e-form-steps-divider-width, 1px) / 2)\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.elementor-field-type-hidden {\n\t\t\t\t\t\t\t\t\t\tdisplay: none\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.elementor-field-type-html {\n\t\t\t\t\t\t\t\t\t\tdisplay: inline-block\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.elementor-field-type-tel input {\n\t\t\t\t\t\t\t\t\t\tdirection: inherit\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.elementor-login .elementor-lost-password,\n\t\t\t\t\t\t\t\t\t.elementor-login .elementor-remember-me {\n\t\t\t\t\t\t\t\t\t\tfont-size: .85em\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.elementor-field-type-recaptcha_v3 .elementor-field-label {\n\t\t\t\t\t\t\t\t\t\tdisplay: none\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.elementor-field-type-recaptcha_v3 .grecaptcha-badge {\n\t\t\t\t\t\t\t\t\t\tz-index: 1\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.elementor-button .elementor-form-spinner {\n\t\t\t\t\t\t\t\t\t\torder: 3\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.elementor-form .elementor-button>span {\n\t\t\t\t\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\t\t\t\t\tjustify-content: center;\n\t\t\t\t\t\t\t\t\t\talign-items: center\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.elementor-form .elementor-button .elementor-button-text {\n\t\t\t\t\t\t\t\t\t\twhite-space: normal;\n\t\t\t\t\t\t\t\t\t\tflex-grow: 0\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.elementor-form .elementor-button svg {\n\t\t\t\t\t\t\t\t\t\theight: auto\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.elementor-form .elementor-button .e-font-icon-svg {\n\t\t\t\t\t\t\t\t\t\theight: 1em\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.elementor-select-wrapper .select-caret-down-wrapper {\n\t\t\t\t\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\t\t\t\t\ttop: 50%;\n\t\t\t\t\t\t\t\t\t\ttransform: translateY(-50%);\n\t\t\t\t\t\t\t\t\t\tinset-inline-end: 10px;\n\t\t\t\t\t\t\t\t\t\tpointer-events: none;\n\t\t\t\t\t\t\t\t\t\tfont-size: 11px\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.elementor-select-wrapper .select-caret-down-wrapper svg {\n\t\t\t\t\t\t\t\t\t\tdisplay: unset;\n\t\t\t\t\t\t\t\t\t\twidth: 1em;\n\t\t\t\t\t\t\t\t\t\taspect-ratio: unset;\n\t\t\t\t\t\t\t\t\t\tfill: currentColor\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.elementor-select-wrapper .select-caret-down-wrapper i {\n\t\t\t\t\t\t\t\t\t\tfont-size: 19px;\n\t\t\t\t\t\t\t\t\t\tline-height: 2\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.elementor-select-wrapper.remove-before:before {\n\t\t\t\t\t\t\t\t\t\tcontent: "" !important\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t'
                                            }}
                                        />
                                 <div className="elementor-form" method="post" name="New Form" style={{marginTop:'-5%'}}>
                                        
                                            <div className="elementor-form-fields-wrapper elementor-labels-aove" >
            
                                                <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-100" style={{ marginBottom: '3%' }}>
                                                    <label
                                                        htmlFor="form-field-name"
                                                        className="elementor-field-label"
                                                        style={{color:'white'}}
                                                    >
                                                        Name{" "}
                                                    </label>
                                                    <input
                                                        size={1}
                                                        type="text"
                                                        name="name"
                                                        id="form-field-name"
                                                        className="elementor-field elementor-size-sm  elementor-field-textual"
                                                        placeholder="Name"
                                                        onChange={(e)=>{handleChange(e)}}
                                                        />
                                                </div>
                                                <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-100 elementor-field-required" style={{ marginBottom: '3%' }}>
                                                    <label
                                                        htmlFor="form-field-email"
                                                        className="elementor-field-label"
                                                        style={{color:'white'}}
                                                    >
                                                        Email{" "}
                                                    </label>
                                                    <input
                                                        size={1}
                                                        type="email"
                                                        name="email"
                                                        id="form-field-email"
                                                        className="elementor-field elementor-size-sm  elementor-field-textual"
                                                        placeholder="Email"
                                                        required="required"
                                                        aria-required="true"
                                                        onChange={(e)=>{handleChange(e)}}

                                                    />
                                                </div>
                                                <div className="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-field_3ec60e4 elementor-col-100" style={{ marginBottom: '3%' }}>
                                                    <label
                                                        htmlFor="form-field-field_3ec60e4"
                                                        className="elementor-field-label"
                                                        style={{color:'white'}}
                                                    >
                                                        Age{" "}
                                                    </label>

                                                    <select className="elementor-field elementor-size-sm  elementor-field-textual form-control"
                                                    name='age'
                                                    onChange={(e)=>{handleChange(e)}}

                                                    >
                                                        <option hidden>Age</option>
                                                        <option>19-29</option>
                                                        <option>30-39</option>
                                                        <option>40-49</option>
                                                        <option>50-59</option>
                                                        <option>60+</option>
                                                    </select>
                                                </div>
                                                <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-field_6d71d35 elementor-col-100 elementor-field-required" style={{ marginBottom: '3%' }}>
                                                    <label
                                                        htmlFor="form-field-field_6d71d35"
                                                        className="elementor-field-label"
                                                        style={{color:'white'}}
                                                    >
                                                        Trading Experience
                                                    </label>
                                                    <select className="elementor-field elementor-size-sm  elementor-field-textual"
                                                    onChange={(e)=>{handleChange(e)}}
                                                    name='tradingexperience'

                                                    >
                                                        <option hidden>Trading Experience</option>
                                                        <option>Not experienced</option>
                                                        <option>Experienced</option>
                                                        <option>Expert</option>

                                                    </select>
                                                </div>
                                                <div className="elementor-field-type-textarea elementor-field-group elementor-column elementor-field-group-message elementor-col-100" >
                                                    <label
                                                        htmlFor="form-field-message"
                                                        className="elementor-field-label"
                                                        style={{color:'white'}}
                                                    >
                                                        Any specific interests or goals related to algorithmic trading?
                                                    </label>
                                                    <textarea
                                                        className="elementor-field-textual elementor-field  elementor-size-sm"
                                                        name="message"
                                                        id="form-field-message"
                                                        rows={2}
                                                        placeholder="Message"

                                                        defaultValue={""}
                                                        onChange={(e)=>{handleChange(e)}}

                                                    />
                                                </div>

                                                {/* <div className="elementor-field-type-textarea elementor-field-group elementor-column elementor-field-group-message elementor-col-100" >

                                                    <div className="g-recaptcha dmforminput dmRespDesignCol"
                                                        style={{ float: "none", clear: "both" }}
                                                    >
                                                        <div
                                                            className="grecaptcha-badge"
                                                            data-style="inline"
                                                            style={{ width: 256, height: 60, boxShadow: "gray 0px 0px 5px" }}
                                                        >
                                                            <div className="grecaptcha-logo">
                                                                <iframe
                                                                    title="reCAPTCHA"
                                                                    width={256}
                                                                    height={60}
                                                                    role="presentation"
                                                                    name="a-nr9x9qs7aupa"
                                                                    frameBorder={0}
                                                                    scrolling="no"
                                                                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                                                                    src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LeiWB8UAAAAAHYnVJM7_-7ap6bXCUNGiv7bBPME&co=aHR0cHM6Ly9hbGdvZWRnZS5pbzo0NDM.&hl=en&v=moV1mTgQ6S91nuTnmll4Y9yf&theme=light&size=invisible&badge=inline&cb=w8h7p55h2y1s"
                                                                />
                                                            </div>
                                                            <div className="grecaptcha-error" />
                                                            <textarea
                                                                id="g-recaptcha-response"
                                                                name="g-recaptcha-response"
                                                                className="g-recaptcha-response"
                                                                style={{
                                                                    width: 250,
                                                                    height: 40,
                                                                    border: "1px solid rgb(193, 193, 193)",
                                                                    margin: "10px 25px",
                                                                    padding: 0,
                                                                    resize: "none",
                                                                    display: "none"
                                                                }}
                                                                data-gramm="false"
                                                                wt-ignore-input="true"
                                                                defaultValue={""}
                                                            />
                                                        </div>
                                                        <iframe style={{ display: "none" }} />
                                                    </div>


                                                </div> */}

                                                <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons" style={{ marginBottom: '2%',marginTop:'4%' }}>
                                                    <button type="submit" className="elementor-button elementor-size-sm" onClick={()=>{handleasubmit()}} >
                                                   <span>
                                                            <span className="elementor-button-text">
                                                                Submit
                                                            </span>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                            
                                        
                        </div>  
                                </div>
                                </Fade>
                            </div>
                               }
                            <div className="elementor-element elementor-element-11b058b2 e-con-full e-flex elementor-invisible e-con e-child" style={{display:isMobile?'none':'block'}} >
                               <img src='wp-content/register111.png' style={{width:'100vw'}} />
                         </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default Register