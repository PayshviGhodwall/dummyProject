import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Profile() {
  useEffect(() => {
    document.title = "Victor Shevchenko";
  }, []);
  return (
    <div className="pwa_main">
      <div className="container">
        <Link to="/" className="header_2 row align-items-center mt-4">
          <div className="col-2">
            <a className="menubtn" href="javascript:;">
              <img src="assets/img/menu.png" alt="" />
            </a>
          </div>
          <div className="col-8 text-center">
            <div className="pagename2">Feed</div>
          </div>
          <div className="col-2">
            <div className="numbercount">12</div>
          </div>
        </Link>
        <div className="pwa_contentpart py-4">
          <div className="row Profile_main">
            <div className="col-12">
              <div className="row Profile_top align-items-center mb-4">
                <div className="col-auto">
                  <div className="Profile_pic">
                    <img src="assets/img/profile.png" alt="" />
                  </div>
                </div>
                <div className="col px-0">
                  <a className="username" href>
                    Victor Shevchenko
                  </a>
                  <a className="user_anchor" href="javascript:;">
                    vs.com
                  </a>
                </div>
              </div>
              <div className="row Profile_details mb-4">
                <div className="col-12">
                  <div className="row mb-2">
                    <div className="col-4">
                      <div className="details_count">
                        <strong>44</strong> published
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="details_count">
                        <strong>123</strong> followers
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="details_count">
                        <strong>44</strong> following
                      </div>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-auto">
                      <div className="alreadyjoined">
                        <a href="javascript:;">
                          <img src="assets/img/profile.png" alt="" />
                        </a>
                        <a href="javascript:;">
                          <img src="assets/img/profile.png" alt="" />
                        </a>
                        <a href="javascript:;">
                          <img src="assets/img/profile.png" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="col">
                      <div className="followed_by">
                        Followed by <a href="javascript:;">mattvernon</a>,{" "}
                        <a href="javascript:;">johan</a>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-auto pe-0">
                      <a className="follow_btn" href="javascript:;">
                        Follow
                      </a>
                    </div>
                    <div className="col-auto pe-0">
                      <Link className="profilebtn" to="/chat">
                        Message
                      </Link>
                    </div>
                    <div className="col-auto pe-0">
                      <a className="profilebtn" href="javascript:;">
                        Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row Profile_details">
                <div className="col-12">
                  <div className="row appersin_main pt-1">
                    <div className="col-6 pe-1">
                      <div className="appersin_imgs mb-2">
                        <img src="assets/img/chatleft_1.png" alt="" />
                        <div className="icons_top">
                          <a href="javascript:;">
                            <img src="assets/img/icon1.png" alt="" />
                          </a>
                          <a href="javascript:;">
                            <img src="assets/img/icon2.png" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="appersin_imgs mb-2">
                        <img src="assets/img/chatleft_2.png" alt="" />
                        <div className="icons_top">
                          <a href="javascript:;">
                            <img src="assets/img/icon1.png" alt="" />
                          </a>
                          <a href="javascript:;">
                            <img src="assets/img/icon2.png" alt="" />
                          </a>
                          <a href="javascript:;">
                            <img src="assets/img/icon3.png" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="appersin_imgs mb-2">
                        <img src="assets/img/chatleft_3.png" alt="" />
                        <div className="icons_top">
                          <a href="javascript:;">
                            <img src="assets/img/icon1.png" alt="" />
                          </a>
                          <a href="javascript:;">
                            <img src="assets/img/icon2.png" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="appersin_imgs mb-2">
                        <img src="assets/img/chatleft_3.png" alt="" />
                        <div className="icons_top">
                          <a href="javascript:;">
                            <img src="assets/img/icon1.png" alt="" />
                          </a>
                          <a href="javascript:;">
                            <img src="assets/img/icon2.png" alt="" />
                          </a>
                          <a href="javascript:;">
                            <img src="assets/img/icon3.png" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 ps-1">
                      <div className="appersin_imgs mb-2">
                        <img src="assets/img/chatright_1.png" alt="" />
                        <div className="icons_top">
                          <a href="javascript:;">
                            <img src="assets/img/icon1.png" alt="" />
                          </a>
                          <a href="javascript:;">
                            <img src="assets/img/icon2.png" alt="" />
                          </a>
                          <a href="javascript:;">
                            <img src="assets/img/icon3.png" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="appersin_imgs mb-2">
                        <img src="assets/img/chatright_2.png" alt="" />
                        <div className="icons_top">
                          <a href="javascript:;">
                            <img src="assets/img/icon1.png" alt="" />
                          </a>
                          <a href="javascript:;">
                            <img src="assets/img/icon2.png" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="appersin_imgs mb-2">
                        <img src="assets/img/chatright_3.png" alt="" />
                        <div className="icons_top">
                          <a href="javascript:;">
                            <img src="assets/img/icon1.png" alt="" />
                          </a>
                          <a href="javascript:;">
                            <img src="assets/img/icon2.png" alt="" />
                          </a>
                          <a href="javascript:;">
                            <img src="assets/img/icon3.png" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="appersin_imgs mb-2">
                        <img src="assets/img/chatright_4.png" alt="" />
                        <div className="icons_top">
                          <a href="javascript:;">
                            <img src="assets/img/icon1.png" alt="" />
                          </a>
                          <a href="javascript:;">
                            <img src="assets/img/icon2.png" alt="" />
                          </a>
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
    </div>
  );
}

export default Profile;
