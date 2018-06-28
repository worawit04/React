import React, { Component } from 'react';
import unnamed from './unnamed.jpg';
import ship from './ship.jpg';
import logonews from './logonews.png';
import './App.css';
import './styles/themes/page/home.scss';
import './styles/components/input.scss';
import './icomoon/style.css';
import styles2 from './styles/testLocal2.scss';
class Home extends Component {
  render() {
    return (
      <div className="root">
        <div className="container">
          <div className="navigation">
            <div className="logo">
              <img alt="Photo" src={logonews} />
            </div>
            <ul className="topnav">
              <li><a className="active" href="#home">Home</a></li>
              <li><a href="news">Sport</a></li>
              <li><a href="contact">Health</a></li>
              <li><a href="contact">Business</a></li>
              <li><a href="contact">Technology</a></li>
            </ul>
            <div class="search-container">
              <form >
                <input type="text" placeholder="Search.." name="search" />
              </form>
            </div>
          </div>
          <div className="main-body">
            <div className="wrap">
              <div class="left">
                <div className="slider">
                  <div className="callbacks_wrap" >
                    <img alt="Photo" className="img-thumbnail" src={ship} />
                  </div>
                  <div className="post-text">
                    <h3>Test</h3>
                    <p class="--pp-title" href="single.html">Sed ut perspiciatis unde omnis iste natus</p>
                  </div>
                </div>
                <div class="article_top">
                  <div> All around the world</div>
                </div>
                <div className="articles_main">
                  <div className="articles">
                    <div class="articlesLeft">
                      <div className="list_img">
                        <div class="post_img --boximage">
                          <img alt="Photo" className="img-thumbnail" src={ship} />
                        </div>
                      </div>
                    </div>
                    <div class="articlesright">
                      <div class="post_text ">
                        <a class="title_detail" href="single.html">Sed ut perspiciatis unde omnis iste natus</a>
                        <p>On Jan 25 <a class="span_link" href="#"><span class="glyphicon glyphicon-comment"></span>1 </a><a class="span_link" href="#"><span class="glyphicon glyphicon-eye-open"></span>56 </a></p>
                      </div>
                    </div>
                  </div>
                  <div className="articles">
                    <div class="articlesLeft">
                      <div className="list_img">
                        <div class="post_img --boximage">
                          <img alt="Photo" className="img-thumbnail" src={ship} />
                        </div>
                      </div>
                    </div>
                    <div class="articlesright">
                      <div class="post_text ">
                        <a class="title_detail" href="single.html">Sed ut perspiciatis unde omnis iste natus</a>
                        <p>On Jan 25 <a class="span_link" href="#"><span class="glyphicon glyphicon-comment"></span>1 </a><a class="span_link" href="#"><span class="glyphicon glyphicon-eye-open"></span>56 </a></p>
                      </div>
                    </div>
                  </div>
                  <div className="articles">
                    <div class="articlesLeft">
                      <div className="list_img">
                        <div class="post_img --boximage">
                          <img alt="Photo" className="img-thumbnail" src={ship} />
                        </div>
                      </div>
                    </div>
                    <div class="articlesright">
                      <div class="post_text ">
                        <a class="title_detail" href="single.html">Sed ut perspiciatis unde omnis iste natus</a>
                        <p>On Jan 25 <a class="span_link" href="#"><span class="glyphicon glyphicon-comment"></span>1 </a><a class="span_link" href="#"><span class="glyphicon glyphicon-eye-open"></span>56 </a></p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div class="right">
                <div class="newsletter">
                  <h1 class="side-title-head">Newsletter</h1>
                  <p class="sign">Sign up to receive our free newsletters!</p>
                  <form>
                    <input type="text" className="signemail" value="Email Address" />
                    <input type="submit" value="submit" />
                  </form>
                </div>
                <div class="list_vertical">
                  <div className="accordation_menu">
                    <div class="popular_news">
                      <div className="popular_head">Popular Posts</div>
                      <div className="popular_post_grid">
                        <div className="list-post">
                          <div class="post-img">
                            <img alt="Photo" className="img-thumbnail" src={ship} />
                          </div>
                          <div class="post-text">
                            <a class="--pp-title" href="single.html">Sed ut perspiciatis unde omnis iste natus</a>
                            <p>On Jan 25 <a class="span_link" href="#"><span class="glyphicon glyphicon-comment"></span>1 </a><a class="span_link" href="#"><span class="glyphicon glyphicon-eye-open"></span>56 </a></p>
                          </div>
                        </div>
                        <div className="list-post">
                          <div class="post-img">
                            <img alt="Photo" className="img-thumbnail" src={ship} />
                          </div>
                          <div class="post-text">
                            <a class="--pp-title" href="single.html">Sed ut perspiciatis unde omnis iste natus</a>
                            <p>On Jan 25 <a class="span_link" href="#"><span class="glyphicon glyphicon-comment"></span>1 </a><a class="span_link" href="#"><span class="glyphicon glyphicon-eye-open"></span>56 </a></p>
                          </div>
                        </div>
                        <div className="list-post">
                          <div class="post-img">
                            <img alt="Photo" className="img-thumbnail" src={ship} />
                          </div>
                          <div class="post-text">
                            <a class="--pp-title" href="single.html">Sed ut perspiciatis unde omnis iste natus</a>
                            <p>On Jan 25 <a class="span_link" href="#"><span class="glyphicon glyphicon-comment"></span>1 </a><a class="span_link" href="#"><span class="glyphicon glyphicon-eye-open"></span>56 </a></p>
                          </div>
                        </div>
                        <div className="list-post">
                          <div class="post-img">
                            <img alt="Photo" className="img-thumbnail" src={ship} />
                          </div>
                          <div class="post-text">
                            <a class="--pp-title" href="single.html">Sed ut perspiciatis unde omnis iste natus</a>
                            <p>On Jan 25 <a class="span_link" href="#"><span class="glyphicon glyphicon-comment"></span>1 </a><a class="span_link" href="#"><span class="glyphicon glyphicon-eye-open"></span>56 </a></p>
                          </div>
                        </div>
                        <div className="list-post">
                          <div class="post-img">
                            <img alt="Photo" className="img-thumbnail" src={ship} />
                          </div>
                          <div class="post-text">
                            <a class="--pp-title" href="single.html">Sed ut perspiciatis unde omnis iste natus</a>
                            <p>On Jan 25 <a class="span_link" href="#"><span class="glyphicon glyphicon-comment"></span>1 </a><a class="span_link" href="#"><span class="glyphicon glyphicon-eye-open"></span>56 </a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <p>Footer</p>
        </div>
      </div>
    );
  }
}
export default Home;
