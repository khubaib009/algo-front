import React from 'react'
import { Fade } from "react-awesome-reveal";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocation, faMailBulk } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  library.add(faLocation, faPhone, faMailBulk);
  const isMobile = window.innerWidth < 600;

  return (
    <div data-elementor-type="footer" data-elementor-id={19} className="elementor elementor-19 elementor-location-footer" data-elementor-post-type="elementor_library" style={{ marginTop: isMobile ? '0%' : '2%' }}>
      <div className="elementor-element elementor-element-642a5c01 e-flex e-con-boxed e-con e-parent" >
        <div className="e-con-inner">
          <div className="elementor-element elementor-element-e6cec1f e-flex e-con-boxed e-con e-child" >
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-7970809f elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-heading" >
                <div className="elementor-widget-container">
                  <h4 className="elementor-heading-title elementor-size-default">
                    {/* Signup our newsletter to get update information, news, insight
                  or promotions. */}
                    {/* Contact us to learn more */}
                  </h4>
                </div>
              </div>
              <div className="elementor-element elementor-element-d58e697 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-button-align-stretch elementor-widget elementor-widget-form" >
                <div className="elementor-widget-container">
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        '\n\t\t\t\t\t\t\t\t\t/*! elementor-pro - v3.19.0 - 07-02-2024 */\n\t\t\t\t\t\t\t\t\t.elementor-button.elementor-hidden,\n\t\t\t\t\t\t\t\t\t.elementor-hidden {\n\t\t\t\t\t\t\t\t\t\tdisplay: none\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__step {\n\t\t\t\t\t\t\t\t\t\twidth: 100%\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__step:not(.elementor-hidden) {\n\t\t\t\t\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\t\t\t\t\tflex-wrap: wrap\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__buttons {\n\t\t\t\t\t\t\t\t\t\tflex-wrap: wrap\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__buttons,\n\t\t\t\t\t\t\t\t\t.e-form__buttons__wrapper {\n\t\t\t\t\t\t\t\t\t\tdisplay: flex\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators {\n\t\t\t\t\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\t\t\t\t\tjustify-content: space-between;\n\t\t\t\t\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\t\t\t\t\tflex-wrap: nowrap;\n\t\t\t\t\t\t\t\t\t\tfont-size: 13px;\n\t\t\t\t\t\t\t\t\t\tmargin-bottom: var(--e-form-steps-indicators-spacing)\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator {\n\t\t\t\t\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\t\t\t\t\tflex-direction: column;\n\t\t\t\t\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\t\t\t\t\tjustify-content: center;\n\t\t\t\t\t\t\t\t\t\tflex-basis: 0;\n\t\t\t\t\t\t\t\t\t\tpadding: 0 var(--e-form-steps-divider-gap)\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator__progress {\n\t\t\t\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\t\t\t\t\tbackground-color: var(--e-form-steps-indicator-progress-background-color);\n\t\t\t\t\t\t\t\t\t\tborder-radius: var(--e-form-steps-indicator-progress-border-radius);\n\t\t\t\t\t\t\t\t\t\toverflow: hidden\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator__progress__meter {\n\t\t\t\t\t\t\t\t\t\twidth: var(--e-form-steps-indicator-progress-meter-width, 0);\n\t\t\t\t\t\t\t\t\t\theight: var(--e-form-steps-indicator-progress-height);\n\t\t\t\t\t\t\t\t\t\tline-height: var(--e-form-steps-indicator-progress-height);\n\t\t\t\t\t\t\t\t\t\tpadding-right: 15px;\n\t\t\t\t\t\t\t\t\t\tborder-radius: var(--e-form-steps-indicator-progress-border-radius);\n\t\t\t\t\t\t\t\t\t\tbackground-color: var(--e-form-steps-indicator-progress-color);\n\t\t\t\t\t\t\t\t\t\tcolor: var(--e-form-steps-indicator-progress-meter-color);\n\t\t\t\t\t\t\t\t\t\ttext-align: right;\n\t\t\t\t\t\t\t\t\t\ttransition: width .1s linear\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator:first-child {\n\t\t\t\t\t\t\t\t\t\tpadding-left: 0\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator:last-child {\n\t\t\t\t\t\t\t\t\t\tpadding-right: 0\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator--state-inactive {\n\t\t\t\t\t\t\t\t\t\tcolor: var(--e-form-steps-indicator-inactive-primary-color, #c2cbd2)\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator--state-inactive [class*=indicator--shape-]:not(.e-form__indicators__indicator--shape-none) {\n\t\t\t\t\t\t\t\t\t\tbackground-color: var(--e-form-steps-indicator-inactive-secondary-color, #fff)\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator--state-inactive object,\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator--state-inactive svg {\n\t\t\t\t\t\t\t\t\t\tfill: var(--e-form-steps-indicator-inactive-primary-color, #c2cbd2)\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator--state-active {\n\t\t\t\t\t\t\t\t\t\tcolor: var(--e-form-steps-indicator-active-primary-color, #39b54a);\n\t\t\t\t\t\t\t\t\t\tborder-color: var(--e-form-steps-indicator-active-secondary-color, #fff)\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator--state-active [class*=indicator--shape-]:not(.e-form__indicators__indicator--shape-none) {\n\t\t\t\t\t\t\t\t\t\tbackground-color: var(--e-form-steps-indicator-active-secondary-color, #fff)\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator--state-active object,\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator--state-active svg {\n\t\t\t\t\t\t\t\t\t\tfill: var(--e-form-steps-indicator-active-primary-color, #39b54a)\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator--state-completed {\n\t\t\t\t\t\t\t\t\t\tcolor: var(--e-form-steps-indicator-completed-secondary-color, #fff)\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator--state-completed [class*=indicator--shape-]:not(.e-form__indicators__indicator--shape-none) {\n\t\t\t\t\t\t\t\t\t\tbackground-color: var(--e-form-steps-indicator-completed-primary-color, #39b54a)\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator--state-completed .e-form__indicators__indicator__label {\n\t\t\t\t\t\t\t\t\t\tcolor: var(--e-form-steps-indicator-completed-primary-color, #39b54a)\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator--state-completed .e-form__indicators__indicator--shape-none {\n\t\t\t\t\t\t\t\t\t\tcolor: var(--e-form-steps-indicator-completed-primary-color, #39b54a);\n\t\t\t\t\t\t\t\t\t\tbackground-color: initial\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator--state-completed object,\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator--state-completed svg {\n\t\t\t\t\t\t\t\t\t\tfill: var(--e-form-steps-indicator-completed-secondary-color, #fff)\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator__icon {\n\t\t\t\t\t\t\t\t\t\twidth: var(--e-form-steps-indicator-padding, 30px);\n\t\t\t\t\t\t\t\t\t\theight: var(--e-form-steps-indicator-padding, 30px);\n\t\t\t\t\t\t\t\t\t\tfont-size: var(--e-form-steps-indicator-icon-size);\n\t\t\t\t\t\t\t\t\t\tborder-width: 1px;\n\t\t\t\t\t\t\t\t\t\tborder-style: solid;\n\t\t\t\t\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\t\t\t\t\tjustify-content: center;\n\t\t\t\t\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\t\t\t\t\toverflow: hidden;\n\t\t\t\t\t\t\t\t\t\tmargin-bottom: 10px\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator__icon img,\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator__icon object,\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator__icon svg {\n\t\t\t\t\t\t\t\t\t\twidth: var(--e-form-steps-indicator-icon-size);\n\t\t\t\t\t\t\t\t\t\theight: auto\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator__icon .e-font-icon-svg {\n\t\t\t\t\t\t\t\t\t\theight: 1em\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator__number {\n\t\t\t\t\t\t\t\t\t\twidth: var(--e-form-steps-indicator-padding, 30px);\n\t\t\t\t\t\t\t\t\t\theight: var(--e-form-steps-indicator-padding, 30px);\n\t\t\t\t\t\t\t\t\t\tborder-width: 1px;\n\t\t\t\t\t\t\t\t\t\tborder-style: solid;\n\t\t\t\t\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\t\t\t\t\tjustify-content: center;\n\t\t\t\t\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\t\t\t\t\tmargin-bottom: 10px\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator--shape-circle {\n\t\t\t\t\t\t\t\t\t\tborder-radius: 50%\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator--shape-square {\n\t\t\t\t\t\t\t\t\t\tborder-radius: 0\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator--shape-rounded {\n\t\t\t\t\t\t\t\t\t\tborder-radius: 5px\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator--shape-none {\n\t\t\t\t\t\t\t\t\t\tborder: 0\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator__label {\n\t\t\t\t\t\t\t\t\t\ttext-align: center\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators__indicator__separator {\n\t\t\t\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\t\t\t\theight: var(--e-form-steps-divider-width);\n\t\t\t\t\t\t\t\t\t\tbackground-color: #babfc5\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators--type-icon,\n\t\t\t\t\t\t\t\t\t.e-form__indicators--type-icon_text,\n\t\t\t\t\t\t\t\t\t.e-form__indicators--type-number,\n\t\t\t\t\t\t\t\t\t.e-form__indicators--type-number_text {\n\t\t\t\t\t\t\t\t\t\talign-items: flex-start\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.e-form__indicators--type-icon .e-form__indicators__indicator__separator,\n\t\t\t\t\t\t\t\t\t.e-form__indicators--type-icon_text .e-form__indicators__indicator__separator,\n\t\t\t\t\t\t\t\t\t.e-form__indicators--type-number .e-form__indicators__indicator__separator,\n\t\t\t\t\t\t\t\t\t.e-form__indicators--type-number_text .e-form__indicators__indicator__separator {\n\t\t\t\t\t\t\t\t\t\tmargin-top: calc(var(--e-form-steps-indicator-padding, 30px) / 2 - var(--e-form-steps-divider-width, 1px) / 2)\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.elementor-field-type-hidden {\n\t\t\t\t\t\t\t\t\t\tdisplay: none\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.elementor-field-type-html {\n\t\t\t\t\t\t\t\t\t\tdisplay: inline-block\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.elementor-field-type-tel input {\n\t\t\t\t\t\t\t\t\t\tdirection: inherit\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.elementor-login .elementor-lost-password,\n\t\t\t\t\t\t\t\t\t.elementor-login .elementor-remember-me {\n\t\t\t\t\t\t\t\t\t\tfont-size: .85em\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.elementor-field-type-recaptcha_v3 .elementor-field-label {\n\t\t\t\t\t\t\t\t\t\tdisplay: none\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.elementor-field-type-recaptcha_v3 .grecaptcha-badge {\n\t\t\t\t\t\t\t\t\t\tz-index: 1\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.elementor-button .elementor-form-spinner {\n\t\t\t\t\t\t\t\t\t\torder: 3\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.elementor-form .elementor-button>span {\n\t\t\t\t\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\t\t\t\t\tjustify-content: center;\n\t\t\t\t\t\t\t\t\t\talign-items: center\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.elementor-form .elementor-button .elementor-button-text {\n\t\t\t\t\t\t\t\t\t\twhite-space: normal;\n\t\t\t\t\t\t\t\t\t\tflex-grow: 0\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.elementor-form .elementor-button svg {\n\t\t\t\t\t\t\t\t\t\theight: auto\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.elementor-form .elementor-button .e-font-icon-svg {\n\t\t\t\t\t\t\t\t\t\theight: 1em\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.elementor-select-wrapper .select-caret-down-wrapper {\n\t\t\t\t\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\t\t\t\t\ttop: 50%;\n\t\t\t\t\t\t\t\t\t\ttransform: translateY(-50%);\n\t\t\t\t\t\t\t\t\t\tinset-inline-end: 10px;\n\t\t\t\t\t\t\t\t\t\tpointer-events: none;\n\t\t\t\t\t\t\t\t\t\tfont-size: 11px\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.elementor-select-wrapper .select-caret-down-wrapper svg {\n\t\t\t\t\t\t\t\t\t\tdisplay: unset;\n\t\t\t\t\t\t\t\t\t\twidth: 1em;\n\t\t\t\t\t\t\t\t\t\taspect-ratio: unset;\n\t\t\t\t\t\t\t\t\t\tfill: currentColor\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.elementor-select-wrapper .select-caret-down-wrapper i {\n\t\t\t\t\t\t\t\t\t\tfont-size: 19px;\n\t\t\t\t\t\t\t\t\t\tline-height: 2\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.elementor-select-wrapper.remove-before:before {\n\t\t\t\t\t\t\t\t\t\tcontent: "" !important\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t'
                    }}
                  />
                  {/* <form className="elementor-form" method="post" name="New Form"> */}
                  <input type="hidden" name="post_id" defaultValue={19} />
                  <input type="hidden" name="form_id" defaultValue="d58e697" />
                  <input
                    type="hidden"
                    name="referer_title"
                    defaultValue="Homepage"
                  />
                  <input type="hidden" name="queried_id" defaultValue={102} />
                  <div className="elementor-form-fields-wrapper elementor-labels-">
                    <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-name elementor-col-60 elementor-sm-60">
                      {/* <label
                        htmlFor="form-field-name"
                        className="elementor-field-label elementor-screen-only"
                      >
                        Email{" "}
                      </label>
                      <input
                        size={1}
                        type="email"
                        name="form_fields[name]"
                        id="form-field-name"
                        className="elementor-field elementor-size-sm  elementor-field-textual"
                        placeholder="Your Email"
                      /> */}
                    </div>
                    <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-40 e-form__buttons elementor-sm-40">
                      {/* <button type="submit" className="elementor-button elementor-size-sm" onClick={()=>{window.location.href = "/contact"}} >
                        <span>
                          <span className=" elementor-button-icon"></span>
                          <span className="elementor-button-text">Contact</span>
                        </span>
                      </button> */}
                    </div>
                  </div>
                  {/* </form> */}
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-5db40688 e-con-full e-flex e-con e-child" >
            <div className="elementor-element elementor-element-5c3e9fb3 elementor-widget elementor-widget-image" >
              <Fade damping={1}>
                <div className="elementor-widget-container">
                  <img src="/wp-content/logo.png" title="logo_vestrade_1png" alt="logo_vestrade_1png" loading="lazy" />
                </div>
              </Fade>
            </div>
            <div className="elementor-element elementor-element-1ee2387d elementor-widget elementor-widget-text-editor" >
              <div className="elementor-widget-container">
                <p>
                Providing advanced quantitative and algorithmic strategies to institutional investment managers.
                  {/* We democratize algorithmic trading, by providing a our technology to both expert algorithmic traders and individual investors. */}
                  </p>
              </div>
            </div>
            <div className="elementor-element elementor-element-6a3b8403 elementor-shape-circle elementor-widget__width-initial e-grid-align-tablet-center e-grid-align-mobile-center elementor-widget-tablet__width-inherit elementor-grid-0 elementor-widget elementor-widget-social-icons" >
              <div className="elementor-widget-container">
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n\t\t\t\t\t\t\t\t/*! elementor - v3.20.0 - 13-03-2024 */\n\t\t\t\t\t\t\t\t.elementor-widget-social-icons.elementor-grid-0 .elementor-widget-container,\n\t\t\t\t\t\t\t\t.elementor-widget-social-icons.elementor-grid-mobile-0 .elementor-widget-container,\n\t\t\t\t\t\t\t\t.elementor-widget-social-icons.elementor-grid-tablet-0 .elementor-widget-container {\n\t\t\t\t\t\t\t\t\tline-height: 1;\n\t\t\t\t\t\t\t\t\tfont-size: 0\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-widget-social-icons:not(.elementor-grid-0):not(.elementor-grid-tablet-0):not(.elementor-grid-mobile-0) .elementor-grid {\n\t\t\t\t\t\t\t\t\tdisplay: inline-grid\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-widget-social-icons .elementor-grid {\n\t\t\t\t\t\t\t\t\tgrid-column-gap: var(--grid-column-gap, 5px);\n\t\t\t\t\t\t\t\t\tgrid-row-gap: var(--grid-row-gap, 5px);\n\t\t\t\t\t\t\t\t\tgrid-template-columns: var(--grid-template-columns);\n\t\t\t\t\t\t\t\t\tjustify-content: var(--justify-content, center);\n\t\t\t\t\t\t\t\t\tjustify-items: var(--justify-content, center)\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-icon.elementor-social-icon {\n\t\t\t\t\t\t\t\t\tfont-size: var(--icon-size, 25px);\n\t\t\t\t\t\t\t\t\tline-height: var(--icon-size, 25px);\n\t\t\t\t\t\t\t\t\twidth: calc(var(--icon-size, 25px) + 2 * var(--icon-padding, .5em));\n\t\t\t\t\t\t\t\t\theight: calc(var(--icon-size, 25px) + 2 * var(--icon-padding, .5em))\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon {\n\t\t\t\t\t\t\t\t\t--e-social-icon-icon-color: #fff;\n\t\t\t\t\t\t\t\t\tdisplay: inline-flex;\n\t\t\t\t\t\t\t\t\tbackground-color: #69727d;\n\t\t\t\t\t\t\t\t\talign-items: center;\n\t\t\t\t\t\t\t\t\tjustify-content: center;\n\t\t\t\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\t\t\t\tcursor: pointer\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon i {\n\t\t\t\t\t\t\t\t\tcolor: var(--e-social-icon-icon-color)\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon svg {\n\t\t\t\t\t\t\t\t\tfill: var(--e-social-icon-icon-color)\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon:last-child {\n\t\t\t\t\t\t\t\t\tmargin: 0\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon:hover {\n\t\t\t\t\t\t\t\t\topacity: .9;\n\t\t\t\t\t\t\t\t\tcolor: #fff\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-android {\n\t\t\t\t\t\t\t\t\tbackground-color: #a4c639\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-apple {\n\t\t\t\t\t\t\t\t\tbackground-color: #999\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-behance {\n\t\t\t\t\t\t\t\t\tbackground-color: #1769ff\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-bitbucket {\n\t\t\t\t\t\t\t\t\tbackground-color: #205081\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-codepen {\n\t\t\t\t\t\t\t\t\tbackground-color: #000\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-delicious {\n\t\t\t\t\t\t\t\t\tbackground-color: #39f\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-deviantart {\n\t\t\t\t\t\t\t\t\tbackground-color: #05cc47\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-digg {\n\t\t\t\t\t\t\t\t\tbackground-color: #005be2\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-dribbble {\n\t\t\t\t\t\t\t\t\tbackground-color: #ea4c89\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-elementor {\n\t\t\t\t\t\t\t\t\tbackground-color: #d30c5c\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-envelope {\n\t\t\t\t\t\t\t\t\tbackground-color: #ea4335\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-facebook,\n\t\t\t\t\t\t\t\t.elementor-social-icon-facebook-f {\n\t\t\t\t\t\t\t\t\tbackground-color: #3b5998\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-flickr {\n\t\t\t\t\t\t\t\t\tbackground-color: #0063dc\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-foursquare {\n\t\t\t\t\t\t\t\t\tbackground-color: #2d5be3\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-free-code-camp,\n\t\t\t\t\t\t\t\t.elementor-social-icon-freecodecamp {\n\t\t\t\t\t\t\t\t\tbackground-color: #006400\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-github {\n\t\t\t\t\t\t\t\t\tbackground-color: #333\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-gitlab {\n\t\t\t\t\t\t\t\t\tbackground-color: #e24329\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-globe {\n\t\t\t\t\t\t\t\t\tbackground-color: #69727d\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-google-plus,\n\t\t\t\t\t\t\t\t.elementor-social-icon-google-plus-g {\n\t\t\t\t\t\t\t\t\tbackground-color: #dd4b39\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-houzz {\n\t\t\t\t\t\t\t\t\tbackground-color: #7ac142\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-instagram {\n\t\t\t\t\t\t\t\t\tbackground-color: #262626\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-jsfiddle {\n\t\t\t\t\t\t\t\t\tbackground-color: #487aa2\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-link {\n\t\t\t\t\t\t\t\t\tbackground-color: #818a91\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-linkedin,\n\t\t\t\t\t\t\t\t.elementor-social-icon-linkedin-in {\n\t\t\t\t\t\t\t\t\tbackground-color: #0077b5\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-medium {\n\t\t\t\t\t\t\t\t\tbackground-color: #00ab6b\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-meetup {\n\t\t\t\t\t\t\t\t\tbackground-color: #ec1c40\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-mixcloud {\n\t\t\t\t\t\t\t\t\tbackground-color: #273a4b\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-odnoklassniki {\n\t\t\t\t\t\t\t\t\tbackground-color: #f4731c\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-pinterest {\n\t\t\t\t\t\t\t\t\tbackground-color: #bd081c\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-product-hunt {\n\t\t\t\t\t\t\t\t\tbackground-color: #da552f\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-reddit {\n\t\t\t\t\t\t\t\t\tbackground-color: #ff4500\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-rss {\n\t\t\t\t\t\t\t\t\tbackground-color: #f26522\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-shopping-cart {\n\t\t\t\t\t\t\t\t\tbackground-color: #4caf50\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-skype {\n\t\t\t\t\t\t\t\t\tbackground-color: #00aff0\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-slideshare {\n\t\t\t\t\t\t\t\t\tbackground-color: #0077b5\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-snapchat {\n\t\t\t\t\t\t\t\t\tbackground-color: #fffc00\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-soundcloud {\n\t\t\t\t\t\t\t\t\tbackground-color: #f80\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-spotify {\n\t\t\t\t\t\t\t\t\tbackground-color: #2ebd59\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-stack-overflow {\n\t\t\t\t\t\t\t\t\tbackground-color: #fe7a15\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-steam {\n\t\t\t\t\t\t\t\t\tbackground-color: #00adee\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-stumbleupon {\n\t\t\t\t\t\t\t\t\tbackground-color: #eb4924\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-telegram {\n\t\t\t\t\t\t\t\t\tbackground-color: #2ca5e0\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-threads {\n\t\t\t\t\t\t\t\t\tbackground-color: #000\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-thumb-tack {\n\t\t\t\t\t\t\t\t\tbackground-color: #1aa1d8\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-tripadvisor {\n\t\t\t\t\t\t\t\t\tbackground-color: #589442\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-tumblr {\n\t\t\t\t\t\t\t\t\tbackground-color: #35465c\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-twitch {\n\t\t\t\t\t\t\t\t\tbackground-color: #6441a5\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-twitter {\n\t\t\t\t\t\t\t\t\tbackground-color: #1da1f2\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-viber {\n\t\t\t\t\t\t\t\t\tbackground-color: #665cac\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-vimeo {\n\t\t\t\t\t\t\t\t\tbackground-color: #1ab7ea\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-vk {\n\t\t\t\t\t\t\t\t\tbackground-color: #45668e\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-weibo {\n\t\t\t\t\t\t\t\t\tbackground-color: #dd2430\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-weixin {\n\t\t\t\t\t\t\t\t\tbackground-color: #31a918\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-whatsapp {\n\t\t\t\t\t\t\t\t\tbackground-color: #25d366\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-wordpress {\n\t\t\t\t\t\t\t\t\tbackground-color: #21759b\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-x-twitter {\n\t\t\t\t\t\t\t\t\tbackground-color: #000\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-xing {\n\t\t\t\t\t\t\t\t\tbackground-color: #026466\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-yelp {\n\t\t\t\t\t\t\t\t\tbackground-color: #af0606\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-youtube {\n\t\t\t\t\t\t\t\t\tbackground-color: #cd201f\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-social-icon-500px {\n\t\t\t\t\t\t\t\t\tbackground-color: #0099e5\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-shape-rounded .elementor-icon.elementor-social-icon {\n\t\t\t\t\t\t\t\t\tborder-radius: 10%\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-shape-circle .elementor-icon.elementor-social-icon {\n\t\t\t\t\t\t\t\t\tborder-radius: 50%\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t"
                  }}
                />
                <div className="elementor-social-icons-wrapper elementor-grid text-center">

                  {/* <span className="elementor-grid-item">
                    <Fade direction='left'>
                      <a className="elementor-icon elementor-social-icon elementor-social-icon-facebook-f elementor-animation-pop elementor-repeater-item-2368e63" target="_blank" onClick={() => { window.open('https://www.facebook.com/profile.php?id=61554136802433', '_blank'); }} >
                        <span className="elementor-screen-only">Facebook-f</span>
                        <svg
                          className="e-font-icon-svg e-fab-facebook-f"
                          viewBox="0 0 320 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                        </svg>{" "}
                      </a>
                    </Fade>
                  </span> */}
                  {/* <span className="elementor-grid-item">
                    <Fade direction='up'>
                      <a className="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-animation-pop elementor-repeater-item-e525968" target="_blank" onClick={() => { window.open('https://twitter.com/Algo_Edge_', '_blank'); }} >
                        <span className="elementor-screen-only">Twitter</span>
                        <img style={{ width: '14px', height: '14px' }} src='/twitter1.png' alt='twitter' />
                      </a>
                    </Fade>
                  </span> */}
                  <span className="elementor-grid-item">
                    <Fade direction='down'>
                      <a className="elementor-icon elementor-social-icon elementor-social-icon-linkedin-in elementor-animation-pop elementor-repeater-item-cf29904" target="_blank" onClick={() => { window.open('https://ca.linkedin.com/company/algoedge-cad/', '_blank'); }}  >
                        <span className="elementor-screen-only">Linkedin-in</span>
                        <svg className="e-font-icon-svg e-fab-linkedin-in" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" >
                          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                        </svg>{" "}
                      </a>
                    </Fade>
                  </span>

                  {/* <span className="elementor-grid-item">
                    <Fade direction='right'>
                      <a className="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-animation-pop elementor-repeater-item-7e0b0fe" target="_blank" onClick={() => { window.open('https://www.instagram.com/algoedge_/', '_blank'); }}  >
                        <span className="elementor-screen-only">Instagram</span>
                        <svg
                          className="e-font-icon-svg e-fab-instagram"
                          viewBox="0 0 448 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                        </svg>{" "}
                      </a>
                    </Fade>
                  </span> */}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="elementor-element elementor-element-c3d685d e-con-full e-flex e-con e-child"  >
          <div  className="elementor-element elementor-element-8f18113 elementor-widget elementor-widget-heading" >
            <div className="elementor-widget-container">
              <h5 className="elementor-heading-title elementor-size-default">
                Product
              </h5>
            </div>
          </div>
          <div className="elementor-element elementor-element-a08e13d elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" >
            <div className="elementor-widget-container">
              <ul className="elementor-icon-list-items">
                <li className="elementor-icon-list-item">
                  <a href="#">
                    <span className="elementor-icon-list-text">Stocks</span>
                  </a>
                </li>
                <li className="elementor-icon-list-item">
                  <a href="#">
                    <span className="elementor-icon-list-text">
                      Futures &amp; Options
                    </span>
                  </a>
                </li>
                <li className="elementor-icon-list-item">
                  <a href="#">
                    <span className="elementor-icon-list-text">IPO</span>
                  </a>
                </li>
                <li className="elementor-icon-list-item">
                  <a href="#">
                    <span className="elementor-icon-list-text">Mutual Funds</span>
                  </a>
                </li>
                <li className="elementor-icon-list-item">
                  <a href="#">
                    <span className="elementor-icon-list-text">Credits</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>  */}
          {/* <div className="elementor-element elementor-element-19af54c8 e-con-full e-flex e-con e-child" >
          <div className="elementor-element elementor-element-5bcf2401 elementor-widget elementor-widget-heading"  >
            <div className="elementor-widget-container">
              <h5 className="elementor-heading-title elementor-size-default">
                Support
              </h5>
            </div>
          </div>
          <div  className="elementor-element elementor-element-26fe2537 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" >
            <div className="elementor-widget-container">
              <ul className="elementor-icon-list-items">
                <li className="elementor-icon-list-item">
                  <a href="#">
                    <span className="elementor-icon-list-text">Contact Us</span>
                  </a>
                </li>
                <li className="elementor-icon-list-item">
                  <a href="#">
                    <span className="elementor-icon-list-text">Help Centre</span>
                  </a>
                </li>
                <li className="elementor-icon-list-item">
                  <a href="#">
                    <span className="elementor-icon-list-text">FAQ</span>
                  </a>
                </li>
                <li className="elementor-icon-list-item">
                  <a href="#">
                    <span className="elementor-icon-list-text">My Account</span>
                  </a>
                </li>
                <li className="elementor-icon-list-item">
                  <a href="#">
                    <span className="elementor-icon-list-text">Community</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
          <div className="elementor-element elementor-element-16954a64 e-con-full e-flex e-con e-child" >
            <div className="elementor-element elementor-element-7cd768c8 elementor-widget elementor-widget-heading" >
              <div className="elementor-widget-container">
                <h5 className="elementor-heading-title elementor-size-default">
                  Company
                </h5>
              </div>
            </div>
            <div className="elementor-element elementor-element-75db75a1 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"  >
              <div className="elementor-widget-container">
                <ul className="elementor-icon-list-items">
                  <li className="elementor-icon-list-item">
                    <a onClick={() => { window.location.href = '/' }}>
                      <span className="elementor-icon-list-text">Home</span>
                    </a>
                  </li>
                  {/* <li className="elementor-icon-list-item">
                  <a onClick={()=>{window.location.href ='/aboutus'}}>
                    <span className="elementor-icon-list-text">About</span>
                  </a>
                </li> */}
                   <li className="elementor-icon-list-item">
                    <a onClick={() => { window.location.href = '/Strategies' }}>
                      <span className="elementor-icon-list-text">Strategies</span>
                    </a>
                  </li>
                  <li className="elementor-icon-list-item">
                    <a onClick={() => { window.location.href = '/Institutional_Investors' }}>
                      <span className="elementor-icon-list-text">Institutional Investors</span>
                    </a>
                  </li>
                  {/* <li className="elementor-icon-list-item">
                    <a onClick={() => { window.location.href = '/Individual_Traders' }}>
                      <span className="elementor-icon-list-text">Individual Traders</span>
                    </a>
                  </li> */}
                  <li className="elementor-icon-list-item">
                    <a onClick={() => { window.location.href = '/team' }}>
                      <span className="elementor-icon-list-text">
                        Team
                      </span>
                    </a>
                  </li>
                  {/* <li className="elementor-icon-list-item">
                  <a onClick={()=>{window.location.href ='/Data-Innovation'}}>
                    <span className="elementor-icon-list-text">
                    Data Innovation
                    </span>
                  </a>
                </li> */}
                  <li className="elementor-icon-list-item">
                    <a onClick={() => { window.location.href = '/blog' }}>
                      <span className="elementor-icon-list-text">
                        Blog
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-622e8781 e-con-full e-flex e-con e-child" >
            <div className="elementor-element elementor-element-398d7547 elementor-widget elementor-widget-heading" >
              <div className="elementor-widget-container">
                <h5 className="elementor-heading-title elementor-size-default">
                  Get in Touch
                </h5>
              </div>
            </div>
            <div className="elementor-element elementor-element-d11b38a elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" >
              <div className="elementor-widget-container">
                <ul className="elementor-icon-list-items">

                  <li className="elementor-icon-list-item">
                    <a href="https://www.google.com/maps/search/?api=1&query=Delaware,%20us" target="_blank" rel="noopener noreferrer" >
                      <span className="elementor-icon-list-icon">
                        <Fade direction='up'>
                          <FontAwesomeIcon icon={faLocation} style={{ color: '#08f9e8' }} />

                        </Fade>
                      </span>
                      <span className="elementor-icon-list-text">
                        Delaware, US
                        <br />
                      </span>
                    </a>
                  </li>
                  <li className="elementor-icon-list-item">
                    <a href="mailto:kunal.dhawan@algoedge.io">
                      <span className="elementor-icon-list-icon">
                        <Fade direction='left'>
                          <FontAwesomeIcon icon={faMailBulk} style={{ color: '#08f9e8' }} />
                        </Fade>
                      </span>
                      <span className="elementor-icon-list-text">
                        kunal.dhawan@algoedge.io
                      </span>
                    </a>
                  </li>
                  <li className="elementor-icon-list-item">
                    <a href="tel:+15878798880">
                      <span className="elementor-icon-list-icon">
                        <Fade direction='down'>
                          <FontAwesomeIcon icon={faPhone} style={{ color: '#08f9e8' }} />
                        </Fade>
                      </span>
                      <span className="elementor-icon-list-text">(587)879-8880</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="elementor-element elementor-element-4fde4f88 e-con-full e-flex e-con e-child" >
            <div className="elementor-element elementor-element-22020cfb elementor-widget__width-auto elementor-widget elementor-widget-heading" >
              <div className="elementor-widget-container">
                <div className="elementor-heading-title elementor-size-default">
                  Copyright© 2024 Algoedge, All rights reserved.

                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-370e3c3b elementor-widget__width-initial elementor-widget elementor-widget-heading" >
              <div className="elementor-widget-container">
                <div className="elementor-heading-title elementor-size-default">
                  {/* *Cursus ligula luctus lobortis consectetuer malesuada blandit
                dictumst dui parturient conubia. Primis ante dis montes litora
                augue placerat. Orci si montes id ultricies eget lectus proin elit
                vel malesuada primis. */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer