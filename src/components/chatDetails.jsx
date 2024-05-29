import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function ChatDetails() {
  useEffect(() => {
    document.title = "Victor Shevchenko";
  }, []);
  return (
    <div className="pwa_main">
      <div className="container">
        <div className="header_1 align-items-center">
          <div className="col-2">
            <Link to="/chat" className="back_btn">
              <img src="assets/img/back_btn.png" alt="" />
            </Link>
          </div>
          <div className="col-8 text-center">
            <div className="pagename"> Victor Shevchenko</div>
          </div>
          <div className="col-2">
            <a className="back_btn justify-content-end" href="javascript:;">
              <img src="assets/img/stylus.png" alt="" />
            </a>
          </div>
        </div>
        <div className="pwa_contentpart py-4">
          <div className="row">
            <div className="col-12">
              <div className="chat_main">
                <div className="row justify-content-end mb-3">
                  <div className="col-11">
                    <div className="ourmessage">
                      <p>
                        Hey! just saw your profile and your work look awesome,
                        are you interested to do a collab?
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-start mb-3">
                  <div className="col-9">
                    <div className="usermessage">
                      <p>Hey! sure, let me send you an invite</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 sendbox_outer">
              <div className="message_sendbox">
                <form className="row align-items-center w-100">
                  <div className="col-auto">
                    <a href="javascript:;" className="attechment">
                      <img src="assets/img/attchment.png" alt="" />
                    </a>
                  </div>
                  <div className="col px-0">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Chat with victor"
                    />
                  </div>
                  <div className="col-auto">
                    <a href="javascript:;" className="attechment">
                      <img src="assets/img/upload.png" alt="" />
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatDetails;
