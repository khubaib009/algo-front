import React, { useState, useEffect } from 'react'
import Header from '../../home/Navbar'
import Footer from '../../splite/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faComment, faTag } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import { ApiURL } from '../../../utils/BaseUrl';


const Singleblog = () => {
  const location = useLocation();
  const paramName = location.state.id;
  const [category, setTopcategory] = useState('');
  const [Subscribe, setSubscribe] = useState(false);
  const [Subscribe2, setSubscribe2] = useState(false);
  const [Subscribeemail, setSubscribeEmail] = useState('');
  const [Subscribename, setSubscribeName] = useState('');

  const [Blogs, setBlogs] = useState('');
  const [comment, setComment] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [singleblog, setSingleblog] = useState('');
  const [listcomment, setlistComment] = useState('');
  const [Blogslistid, setBlogslistid] = useState('');

  const Blogcategory = ApiURL.BLOGCATEGORY
  const Blog = `${ApiURL.LISTBLOG}/${paramName}`
  const Comment = ApiURL.ADDCOMMENT
  const Subscribeall = ApiURL.ADDSUBSCRIBE
  const Blogall = ApiURL.LISTBLOG

  const handlesubscribesubmit = () => {
    fetch(Subscribeall, {
      method: "POST",
      headers: {
        //   Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: Subscribename,
        email: Subscribeemail,
      }),

    })
      .then((response) => response.json())
      .then(data => {
        // Check if the status is true
        if (data.status === true) {
          setSubscribe(false);
          setSubscribe2(false);
          setSubscribeName();
          setSubscribeEmail();
        } else {
          // Handle case when status is not true
      
          console.error("Error: Subscribe not created successfully");
        }
      })
      .catch((error) => {

      });
  }


 
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };


  useEffect(() => {
    fetchalldata();
    formblog();
    fetchdata();


  }, []);

  const fetchalldata = () => {
    fetch(Blog)
      .then(response => response.json())
      .then(data => {
        // Update blogCategories state with the data from the list API
        setSingleblog(data.data);
        setBlogslistid(data.data._id)
        fetchComment(data.data._id);
        console.log(Blogslistid);
      })
      .catch(error => {
        // Handle error
        console.error('Error fetching blog categories:', error);
      });
  }
  const fetchdata = () => {
    fetch(Blogcategory)
      .then(response => response.json())
      .then(data => {
        // Update blogCategories state with the data from the list API
        setTopcategory(data.data);
        console.log('listblogcategoryname', category);
      })
      .catch(error => {
        // Handle error
        console.error('Error fetching blog categories:', error);
      });
  }

  const fetchComment = (id) => {
    fetch(`${ApiURL.LISTCOMMENT}${id}`)
      .then(response => response.json())
      .then(data => {
        // Update blogCategories state with the data from the list API
        setlistComment(data.data);
      })
      .catch(error => {
        // Handle error
        console.error('Error fetching blog categories:', error);
      });
  }
  const handlesubmit = () => {
    fetch(Comment, {
      method: "POST",
      headers: {
        //   Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        comment: comment,
        email: email,
        blog_id: singleblog._id
      }),

    })
      .then((response) => response.json())
      .then(data => {
        // Check if the status is true
        if (data.status === true) {
          fetchalldata()
          setComment('')
          setEmail('')
          setName('')
        } else {
          // Handle case when status is not true
          console.error("Error: Blogcategory not created successfully");
        }
      })
      .catch((error) => {

      });
  }



  const formblog = () => {
    fetch(Blogall)
      .then(response => response.json())
      .then(data => {
        // Update blogCategories state with the data from the list API
        setBlogs(data.data);
      })
      .catch(error => {
        // Handle error
        console.error('Error fetching blog categories:', error);
      });
  }
  return (
    <div>
      <Header />

      <div
        data-elementor-type="single-post"
        data-elementor-id={11}
        className="elementor elementor-11 elementor-location-single post-115 post type-post status-publish format-standard has-post-thumbnail hentry category-stock-market"
        data-elementor-post-type="elementor_library"
      >
        <div className="elementor-element elementor-element-a5ad72f e-flex e-con-boxed e-con e-parent" data-id="a5ad72f" data-element_type="container" data-settings='{"background_background":"classic"}' data-core-v316-plus="true" >
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-6f20195c e-con-full e-flex e-con e-child" data-id="6f20195c" data-element_type="container" >
              <div
                className="elementor-element elementor-element-0d7308c elementor-widget elementor-widget-heading"
                data-id="0d7308c"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n\t\t\t\t\t\t\t\t/*! elementor - v3.20.0 - 13-03-2024 */\n\t\t\t\t\t\t\t\t.elementor-heading-title {\n\t\t\t\t\t\t\t\t\tpadding: 0;\n\t\t\t\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\t\t\t\tline-height: 1\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-widget-heading .elementor-heading-title[class*=elementor-size-]>a {\n\t\t\t\t\t\t\t\t\tcolor: inherit;\n\t\t\t\t\t\t\t\t\tfont-size: inherit;\n\t\t\t\t\t\t\t\t\tline-height: inherit\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-widget-heading .elementor-heading-title.elementor-size-small {\n\t\t\t\t\t\t\t\t\tfont-size: 15px\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-widget-heading .elementor-heading-title.elementor-size-medium {\n\t\t\t\t\t\t\t\t\tfont-size: 19px\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-widget-heading .elementor-heading-title.elementor-size-large {\n\t\t\t\t\t\t\t\t\tfont-size: 29px\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-widget-heading .elementor-heading-title.elementor-size-xl {\n\t\t\t\t\t\t\t\t\tfont-size: 39px\n\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t.elementor-widget-heading .elementor-heading-title.elementor-size-xxl {\n\t\t\t\t\t\t\t\t\tfont-size: 59px\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t"
                    }}
                  />
                  <h6 className="elementor-heading-title elementor-size-default">
                    <a href="#" rel="tag">
                      {singleblog.blog_category}
                    </a>
                  </h6>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-6bfff8b0 elementor-invisible elementor-widget elementor-widget-heading"
                data-id="6bfff8b0"
                data-element_type="widget"
                data-settings='{"_animation":"fadeInLeft"}'
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h1 className="elementor-heading-title elementor-size-default">
                    {singleblog.title}
                  </h1>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-5e662ec7 elementor-align-left elementor-invisible elementor-widget elementor-widget-post-info"
                data-id="5e662ec7"
                data-element_type="widget"
                data-settings='{"_animation":"fadeInRight"}'
                data-widget_type="post-info.default"
              >
                <div className="elementor-widget-container">
                  <link
                    rel="stylesheet"
                    href="'https://algoedge.io//wp-content/plugins/elementor/assets/css/widget-icon-list.min.css"
                  />
                  <link
                    rel="stylesheet"
                    href="'https://algoedge.io//wp-content/plugins/elementor-pro/assets/css/widget-theme-elements.min.css"
                  />
                  <ul className="elementor-inline-items elementor-icon-list-items elementor-post-info">
                    <li
                      className="elementor-icon-list-item elementor-repeater-item-3c7b83e elementor-inline-item"
                      itemProp="datePublished"
                    >
                      <a href="2024/02/15/index.html">
                        <span className="elementor-icon-list-icon">
                          <FontAwesomeIcon icon={faCalendar} />
                        </span>
                        <span className="elementor-icon-list-text elementor-post-info__item elementor-post-info__item--type-date">
                          {formatDate(singleblog.createdAt)}
                        </span>
                      </a>
                    </li>
                    <li
                      className="elementor-icon-list-item elementor-repeater-item-a7d1004 elementor-inline-item"
                      itemProp="commentCount"
                    >
                      <a href="index.html@p=115.html#respond">
                        <span className="elementor-icon-list-icon">
                          <FontAwesomeIcon icon={faComment} />
                        </span>
                        <span className="elementor-icon-list-text elementor-post-info__item elementor-post-info__item--type-comments">
                          No Comments{" "}
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {!Subscribe2 && <div className="elementor-button-wrapper d-flex " style={{ padding: '2px' }} >
                <a
                  className="elementor-button elementor-button-link elementor-size-sm"
                  onClick={() =>setSubscribe2(true )}
                  style={{ border: '1px solid white', color: 'white' }}
                >
                  <span className="elementor-button-content-wrapper" >
                    <span className="elementor-button-text">Subscribe</span>
                  </span>
                </a>
                <span style={{color:'white' }}>  Gain an edge in algorithmic trading with exclusive insights from our experts</span>
              </div> }

             { Subscribe2 && 
              <div className="elementor-element elementor-element-4bd79943 elementor-widget elementor-widget-post-comments" data-id="4bd79943" data-element_type="widget" data-widget_type="post-comments.theme_comments" >
                <div className="elementor-widget-container">
                  <section id="comments" className="comments-area">
                    <div id="respond" className="comment-respond">

                      <div className="comment-form" >

                        <p className="comment-form-author">
                          <label htmlFor="author" style={{color:'white'}}>
                            Name <span className="required">*</span>
                          </label>{" "}
                          <input
                            id="author"
                            name="author"
                            type="text"
                            value={Subscribename}
                            onChange={(e) => setSubscribeName(e.target.value)}
                            size={30}
                            maxLength={245}
                            autoComplete="name"
                            required=""
                          />
                        </p>
                        <p className="comment-form-email">
                          <label htmlFor="email" style={{color:'white'}}>
                            Email <span className="required">*</span>
                          </label>{" "}
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={Subscribeemail}
                            onChange={(e) => setSubscribeEmail(e.target.value)}
                            size={30}
                            maxLength={100}
                            aria-describedby="email-notes"
                            autoComplete="email"
                            required=""
                          />
                        </p>
                        <p className="form-submit">
                          <input
                            name="submit"
                            type="submit"
                            id="submit"
                            value="Subscribe"
                            className="submit"
                            defaultValue="Post Comment"
                            onClick={() => { handlesubscribesubmit() }}
                          />{" "}
                          <input
                            type="hidden"
                            name="comment_post_ID"
                            defaultValue={115}
                            id="comment_post_ID"
                          />
                          <input
                            type="hidden"
                            name="comment_parent"
                            id="comment_parent"
                            defaultValue={0}
                          />
                        </p>
                      </div   >
                    </div>
                    {/* #respond */}
                  </section>

                </div>
              </div>}
            </div>
          </div>
        </div>
        <div
          className="elementor-element elementor-element-2fa900b8 e-flex e-con-boxed e-con e-parent"
          data-id="2fa900b8"
          data-element_type="container"
          data-core-v316-plus="true"
        >
          <div className="e-con-inner">
            <div
              className="elementor-element elementor-element-569daa6b e-con-full e-flex e-con e-child"
              data-id="569daa6b"
              data-element_type="container"
            >
              <div
                className="elementor-element elementor-element-3ce128ce elementor-widget elementor-widget-theme-post-content"
                data-id="3ce128ce"
                data-element_type="widget"
                data-widget_type="theme-post-content.default"
              >
                <div className="elementor-widget-container"
                  dangerouslySetInnerHTML={{ __html: singleblog.content }}
                >

                </div>
              </div>
              {!Subscribe && <div className="elementor-button-wrapper d-flex " style={{ padding: '2px' }} >
                <a className="elementor-button elementor-button-link elementor-size-sm" onClick={() =>setSubscribe(true )} style={{ border: '1px solid white', color: 'white' }}
                >
                  <span className="elementor-button-content-wrapper" >
                    <span className="elementor-button-text">Subscribe</span>
                  </span>
                </a>
                <span style={{ marginLeft: '1%' }}>Gain an edge in algorithmic trading with exclusive insights from our experts</span>
              </div> }

             { Subscribe && 
              <div className="elementor-element elementor-element-4bd79943 elementor-widget elementor-widget-post-comments" data-id="4bd79943" data-element_type="widget" data-widget_type="post-comments.theme_comments" >
                <div className="elementor-widget-container">
                  <section id="comments" className="comments-area">
                    <div id="respond" className="comment-respond">

                      <div className="comment-form" >

                        <p className="comment-form-author">
                          <label htmlFor="author">
                            Name <span className="required">*</span>
                          </label>{" "}
                          <input
                            id="author"
                            name="author"
                            type="text"
                            value={Subscribename}
                            onChange={(e) => setSubscribeName(e.target.value)}
                            size={30}
                            maxLength={245}
                            autoComplete="name"
                            required=""
                          />
                        </p>
                        <p className="comment-form-email">
                          <label htmlFor="email">
                            Email <span className="required">*</span>
                          </label>{" "}
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={Subscribeemail}
                            onChange={(e) => setSubscribeEmail(e.target.value)}
                            size={30}
                            maxLength={100}
                            aria-describedby="email-notes"
                            autoComplete="email"
                            required=""
                          />
                        </p>
                        <p className="form-submit">
                          <input
                            name="submit"
                            type="submit"
                            id="submit"
                            value="Subscribe"
                            className="submit"
                            defaultValue="Post Comment"
                            onClick={() => { handlesubscribesubmit() }}
                          />{" "}
                          <input
                            type="hidden"
                            name="comment_post_ID"
                            defaultValue={115}
                            id="comment_post_ID"
                          />
                          <input
                            type="hidden"
                            name="comment_parent"
                            id="comment_parent"
                            defaultValue={0}
                          />
                        </p>
                      </div   >
                    </div>
                    {/* #respond */}
                  </section>

                </div>
              </div>}
              <div
                className="elementor-element elementor-element-3439a2e e-flex e-con-boxed e-con e-child"
                data-id="3439a2e"
                data-element_type="container"
              >
                <div className="e-con-inner">
                  <div
                    className="elementor-element elementor-element-4c4231d elementor-widget elementor-widget-heading"
                    data-id="4c4231d"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h5 className="elementor-heading-title elementor-size-default">
                        Share it :
                      </h5>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-125cebf7 elementor-share-buttons--skin-flat elementor-grid-4 elementor-share-buttons--color-custom elementor-grid-mobile-0 elementor-share-buttons--shape-circle elementor-share-buttons--view-icon elementor-widget elementor-widget-share-buttons"
                    data-id="125cebf7"
                    data-element_type="widget"
                    data-widget_type="share-buttons.default"
                  >
                    <div className="elementor-widget-container">
                      <link
                        rel="stylesheet"
                        href="wp-content/plugins/elementor-pro/assets/css/widget-share-buttons.min.css"
                      />
                      <div className="elementor-grid">
                        <div className="elementor-grid-item">
                          <div
                            className="elementor-share-btn elementor-share-btn_facebook"
                            role="button"
                            tabIndex={0}
                            aria-label="Share on facebook"
                          >
                            <span className="elementor-share-btn__icon">
                              <svg
                                className="e-font-icon-svg e-fab-facebook"
                                viewBox="0 0 512 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                              </svg>{" "}
                            </span>
                          </div>
                        </div>
                        <div className="elementor-grid-item">
                          <div
                            className="elementor-share-btn elementor-share-btn_twitter"
                            role="button"
                            tabIndex={0}
                            aria-label="Share on twitter"
                          >
                           <span
  className="elementor-share-btn__icon"
  onMouseEnter={(e) => { e.currentTarget.querySelector('img').style.filter = 'brightness(0) invert(1)'; }}
  onMouseLeave={(e) => { e.currentTarget.querySelector('img').style.filter = 'none'; }}
>
  <img
    style={{ height: '25px', transition: 'filter 0.3s' }}
    src='/twitter.png'
    alt='twitter'
  />
</span>
                          </div>
                        </div>
                        <div className="elementor-grid-item">
                          <div
                            className="elementor-share-btn elementor-share-btn_whatsapp"
                            role="button"
                            tabIndex={0}
                            aria-label="Share on whatsapp"
                          >
                            <span className="elementor-share-btn__icon">
                              <svg
                                className="e-font-icon-svg e-fab-whatsapp"
                                viewBox="0 0 448 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                              </svg>{" "}
                            </span>
                          </div>
                        </div>
                        <div className="elementor-grid-item">
                          <div
                            className="elementor-share-btn elementor-share-btn_telegram"
                            role="button"
                            tabIndex={0}
                            aria-label="Share on telegram"
                          >
                            <span className="elementor-share-btn__icon">
                              <svg
                                className="e-font-icon-svg e-fab-telegram"
                                viewBox="0 0 496 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path>
                              </svg>{" "}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-23031594 elementor-author-box--image-valign-top elementor-author-box--avatar-yes elementor-author-box--name-yes elementor-author-box--biography-yes elementor-author-box--link-no elementor-widget elementor-widget-author-box"
                data-id={23031594}
                data-element_type="widget"
                data-widget_type="author-box.default"
              >

                <div className="elementor-widget-container" style={{ overflowY: 'scroll', maxHeight: '200px  ' }}>
                  {listcomment && listcomment.map((comm, index) => (
                    <div className="elementor-author-box card" style={{ marginBottom: '4%', display: 'flex' }} >
                      <div className="elementor-author-box__avatar" style={{ width: '10%' }}>
                        <img src="/download.jpg" alt="Natalie Stanley" loading="lazy" style={{ borderRadius: '50%' }} />
                      </div>
                      <div className="elementor-author-box__text" style={{ width: '90%' }}>
                        <div>
                          <div className="elementor-author-box__name">
                            {comm.name}
                          </div>
                        </div>
                        <div className="elementor-author-box__bio">
                          {comm.comment}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="elementor-element elementor-element-4bd79943 elementor-widget elementor-widget-post-comments" data-id="4bd79943" data-element_type="widget" data-widget_type="post-comments.theme_comments" >
                <div className="elementor-widget-container">
                  <section id="comments" className="comments-area">
                    <div id="respond" className="comment-respond">
                      <h2 id="reply-title" className="comment-reply-title">
                        Comment
                        <small>
                          <a
                            rel="nofollow"
                            id="cancel-comment-reply-link"
                            href="index.html@p=115.html#respond"
                            style={{ display: "none" }}
                          >
                            Cancel reply
                          </a>
                        </small>
                      </h2>
                      <div className="comment-form" >
                        <p className="comment-notes">
                          <span id="email-notes">
                            Your email address will not be published.
                          </span>{" "}
                          <span className="required-field-message">
                            Required fields are marked{" "}
                            <span className="required">*</span>
                          </span>
                        </p>
                        <p className="comment-form-comment">
                          <label htmlFor="comment">
                            Comment <span className="required">*</span>
                          </label>{" "}
                          <textarea id="comment" name="comment" cols={45} rows={8}
                            maxLength={65525}
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            required=""
                          />
                        </p>
                        <p className="comment-form-author">
                          <label htmlFor="author">
                            Name <span className="required">*</span>
                          </label>{" "}
                          <input
                            id="author"
                            name="author"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            size={30}
                            maxLength={245}
                            autoComplete="name"
                            required=""
                          />
                        </p>
                        <p className="comment-form-email">
                          <label htmlFor="email">
                            Email <span className="required">*</span>
                          </label>{" "}
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            size={30}
                            maxLength={100}
                            aria-describedby="email-notes"
                            autoComplete="email"
                            required=""
                          />
                        </p>
                        <p className="form-submit">
                          <input
                            name="submit"
                            type="submit"
                            id="submit"
                            className="submit"
                            defaultValue="Post Comment"
                            onClick={() => { handlesubmit() }}
                          />{" "}
                          <input
                            type="hidden"
                            name="comment_post_ID"
                            defaultValue={115}
                            id="comment_post_ID"
                          />
                          <input
                            type="hidden"
                            name="comment_parent"
                            id="comment_parent"
                            defaultValue={0}
                          />
                        </p>
                      </div   >
                    </div>
                    {/* #respond */}
                  </section>
                  {/* .comments-area */}
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-7d78940d e-con-full e-flex e-con e-child"
              data-id="7d78940d"
              data-element_type="container"
            >
             
              <div
                className="elementor-element elementor-element-2364e4b3 e-con-full e-flex elementor-invisible e-con e-child"
                data-id="2364e4b3"
                data-element_type="container"
                data-settings='{"background_background":"classic","animation":"fadeInUp"}'
              >
                <div
                  className="elementor-element elementor-element-7b46a6a1 elementor-widget elementor-widget-heading"
                  data-id="7b46a6a1"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h4 className="elementor-heading-title elementor-size-default">
                      Popular Categories
                    </h4>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-68e0c206 elementor-widget elementor-widget-elementskit-category-list"
                  data-id="68e0c206"
                  data-element_type="widget"
                  data-widget_type="elementskit-category-list.default"
                >
                  <div className="elementor-widget-container">
                    <div className="ekit-wid-con">
                      <ul className="elementor-icon-list-items">
                        {category && category.map((cat, index) => (
                          <li className="elementor-icon-list-item">
                            <a href="#">
                              <span className="elementor-icon-list-icon">
                                <FontAwesomeIcon icon={faTag} />
                              </span>
                              <span className="elementor-icon-list-text"> {cat.blog_category_name.charAt(0).toUpperCase() +
                                cat.blog_category_name.slice(1).toLowerCase()}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-108729d3 e-con-full e-flex elementor-invisible e-con e-child"
                data-id="108729d3"
                data-element_type="container"
                data-settings='{"background_background":"classic","animation":"fadeInUp"}'
              >
                <div
                  className="elementor-element elementor-element-4b8b13d5 elementor-widget elementor-widget-heading"
                  data-id="4b8b13d5"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h3 className="elementor-heading-title elementor-size-default">
                    Do It Right
                    </h3>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-aa88978 elementor-widget elementor-widget-text-editor"
                  data-id="aa88978"
                  data-element_type="widget"
                  data-widget_type="text-editor.default"
                >
                  <div className="elementor-widget-container">
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n\t\t\t\t\t\t\t\t\t/*! elementor - v3.20.0 - 13-03-2024 */\n\t\t\t\t\t\t\t\t\t.elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap {\n\t\t\t\t\t\t\t\t\t\tbackground-color: #69727d;\n\t\t\t\t\t\t\t\t\t\tcolor: #fff\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap {\n\t\t\t\t\t\t\t\t\t\tcolor: #69727d;\n\t\t\t\t\t\t\t\t\t\tborder: 3px solid;\n\t\t\t\t\t\t\t\t\t\tbackground-color: transparent\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap {\n\t\t\t\t\t\t\t\t\t\tmargin-top: 8px\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter {\n\t\t\t\t\t\t\t\t\t\twidth: 1em;\n\t\t\t\t\t\t\t\t\t\theight: 1em\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.elementor-widget-text-editor .elementor-drop-cap {\n\t\t\t\t\t\t\t\t\t\tfloat: left;\n\t\t\t\t\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\t\t\t\t\tline-height: 1;\n\t\t\t\t\t\t\t\t\t\tfont-size: 50px\n\t\t\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t\t\t.elementor-widget-text-editor .elementor-drop-cap-letter {\n\t\t\t\t\t\t\t\t\t\tdisplay: inline-block\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t"
                      }}
                    />
                    <p>
                    Learn about algorithmic trading from the best, reach out with any questions and we'll get back to you ASAP.
                    </p>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-f3a9969 elementor-widget elementor-widget-button"
                  data-id="f3a9969"
                  data-element_type="widget"
                  data-widget_type="button.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-button-wrapper">
                      <a
                        className="elementor-button elementor-button-link elementor-size-sm"
                 
                      >
                        <span className="elementor-button-content-wrapper">
                          <span className="elementor-button-text" style={{color:'white'}}>DISCOVER MORE</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-63dc7457 e-flex e-con-boxed elementor-invisible e-con e-child"
                data-id="63dc7457"
                data-element_type="container"
                data-settings='{"background_background":"classic","animation":"fadeInUp"}'
              >
                <div className="e-con-inner">
                  <div
                    className="elementor-element elementor-element-7b7ef73 elementor-widget elementor-widget-heading"
                    data-id="7b7ef73"
                    data-element_type="widget"
                    data-widget_type="heading.default"
                  >
                    <div className="elementor-widget-container">
                      <h5 className="elementor-heading-title elementor-size-default">
                        Latest Post
                      </h5>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-5241bc1c elementor-grid-1 elementor-posts--thumbnail-left elementor-grid-tablet-2 elementor-grid-mobile-1 elementor-widget elementor-widget-posts"
                    data-id="5241bc1c"
                    data-element_type="widget"
                    data-settings='{"classic_columns":"1","classic_row_gap":{"unit":"px","size":14,"sizes":[]},"classic_columns_tablet":"2","classic_columns_mobile":"1","classic_row_gap_tablet":{"unit":"px","size":"","sizes":[]},"classic_row_gap_mobile":{"unit":"px","size":"","sizes":[]}}'
                    data-widget_type="posts.classic"
                  >
                    <div className="elementor-widget-container">
                      <link
                        rel="stylesheet"
                        href="wp-content/plugins/elementor-pro/assets/css/widget-posts.min.css"
                      />
                      <div className="elementor-posts-container elementor-posts elementor-posts--skin-classic elementor-grid">
                        {Blogs && Blogs.map(blo => (
                          <article className="elementor-post elementor-grid-item post-123 post type-post status-publish format-standard has-post-thumbnail hentry category-investment">
                            <a className="elementor-post__thumbnail__link"  href="index.html@p=123.html"  tabIndex={-1} >
                              <div className="elementor-post__thumbnail">
                                <img
                                  width={1280}
                                  height={687}
                                  src={`${ApiURL.BaseURL}${blo.image}`}
                                  className="attachment-full size-full wp-image-118"
                                  alt="Business people, coach and stock market presentation in meeting for trading, graph and chart monito"
                                />
                              </div>
                            </a>
                            <div className="elementor-post__text">
                              <div className="elementor-post__title">
                                <a href="index.html@p=123.html">
                                  {blo.title}
                                </a>
                              </div>
                              <div className="elementor-post__meta-data">
                                <span className="elementor-post-date">
                                  {formatDate(blo.createdAt)}
                                </span>
                              </div>
                            </div>
                          </article>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Singleblog