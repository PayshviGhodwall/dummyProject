import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const divStyle = { height: `calc(${window.innerHeight}px - 124px)` };

function Chats() {
  useEffect(() => {
    document.title = "Chats";
  }, []);
  return (
    <div className="pwa_main">
      <div className="container">
        <Link to="/profile" className="header_2 row align-items-center mt-4">
          <div className="col-2">
            <a className="menubtn" href="javascript:;">
              <img src="assets/img/menu.png" alt="" />
            </a>
          </div>
          <div className="col-8 text-center">
            <div className="pagename2">Chat</div>
          </div>
          <div className="col-2">
            <div className="numbercount">12</div>
          </div>
        </Link>
        <div className="pwa_contentpart pt-3">
          <div className="row">
            <div className="col-12 messages_main">
              <ul
                className="nav nav-tabs border-0 mb-3 nav-fill"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    All
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Ai chat
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    Spaarkd
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="contact1-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact1"
                    type="button"
                    role="tab"
                    aria-controls="contact1"
                    aria-selected="false"
                  >
                    Community
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="messages_inner">
                    <Link
                      to="/chat-details"
                      className="messagesbox_main row align-items-center active"
                    >
                      <div className="col-auto">
                        <div className="messagesbox_img">
                          <img src="assets/img/chat_1.png" alt="" />
                        </div>
                      </div>
                      <div className="col px-0">
                        <div className="messagesbox_details">
                          <h2>Firstname Lastname</h2>
                          <p>Message preview here</p>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="msg_time">12h</div>
                      </div>
                    </Link>
                    <Link
                      to="/chat-details"
                      className="messagesbox_main row align-items-center"
                    >
                      <div className="col-auto">
                        <div className="messagesbox_img">
                          <img src="assets/img/chat_2.png" alt="" />
                        </div>
                      </div>
                      <div className="col px-0">
                        <div className="messagesbox_details">
                          <h2>Firstname Lastname</h2>
                          <p>Message preview here</p>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="msg_time">12h</div>
                      </div>
                    </Link>
                    <Link
                      to="/chat-details"
                      className="messagesbox_main row align-items-center"
                    >
                      <div className="col-auto">
                        <div className="messagesbox_img">
                          <img src="assets/img/chat_3.png" alt="" />
                        </div>
                      </div>
                      <div className="col px-0">
                        <div className="messagesbox_details">
                          <h2>Firstname Lastname</h2>
                          <p>Message preview here</p>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="msg_time">12h</div>
                      </div>
                    </Link>
                    <Link
                      to="/chat-details"
                      className="messagesbox_main row align-items-center"
                    >
                      <div className="col-auto">
                        <div className="messagesbox_img">
                          <img src="assets/img/chat_4.png" alt="" />
                        </div>
                      </div>
                      <div className="col px-0">
                        <div className="messagesbox_details">
                          <h2>Firstname Lastname</h2>
                          <p>Message preview here</p>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="msg_time">12h</div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="messages_inner">
                    <Link
                      to="/chat-details"
                      className="messagesbox_main row align-items-center active"
                    >
                      <div className="col-auto">
                        <div className="messagesbox_img">
                          <img src="assets/img/chat_1.png" alt="" />
                        </div>
                      </div>
                      <div className="col px-0">
                        <div className="messagesbox_details">
                          <h2>Firstname Lastname</h2>
                          <p>Message preview here</p>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="msg_time">12h</div>
                      </div>
                    </Link>
                    <Link
                      to="/chat-details"
                      className="messagesbox_main row align-items-center"
                    >
                      <div className="col-auto">
                        <div className="messagesbox_img">
                          <img src="assets/img/chat_2.png" alt="" />
                        </div>
                      </div>
                      <div className="col px-0">
                        <div className="messagesbox_details">
                          <h2>Firstname Lastname</h2>
                          <p>Message preview here</p>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="msg_time">12h</div>
                      </div>
                    </Link>
                    <Link
                      to="/chat-details"
                      className="messagesbox_main row align-items-center"
                    >
                      <div className="col-auto">
                        <div className="messagesbox_img">
                          <img src="assets/img/chat_3.png" alt="" />
                        </div>
                      </div>
                      <div className="col px-0">
                        <div className="messagesbox_details">
                          <h2>Firstname Lastname</h2>
                          <p>Message preview here</p>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="msg_time">12h</div>
                      </div>
                    </Link>
                    <Link
                      to="/chat-details"
                      className="messagesbox_main row align-items-center"
                    >
                      <div className="col-auto">
                        <div className="messagesbox_img">
                          <img src="assets/img/chat_4.png" alt="" />
                        </div>
                      </div>
                      <div className="col px-0">
                        <div className="messagesbox_details">
                          <h2>Firstname Lastname</h2>
                          <p>Message preview here</p>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="msg_time">12h</div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <div className="messages_inner">
                    <Link
                      to="/chat-details"
                      className="messagesbox_main row align-items-center active"
                    >
                      <div className="col-auto">
                        <div className="messagesbox_img">
                          <img src="assets/img/chat_1.png" alt="" />
                        </div>
                      </div>
                      <div className="col px-0">
                        <div className="messagesbox_details">
                          <h2>Firstname Lastname</h2>
                          <p>Message preview here</p>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="msg_time">12h</div>
                      </div>
                    </Link>
                    <Link
                      to="/chat-details"
                      className="messagesbox_main row align-items-center"
                    >
                      <div className="col-auto">
                        <div className="messagesbox_img">
                          <img src="assets/img/chat_2.png" alt="" />
                        </div>
                      </div>
                      <div className="col px-0">
                        <div className="messagesbox_details">
                          <h2>Firstname Lastname</h2>
                          <p>Message preview here</p>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="msg_time">12h</div>
                      </div>
                    </Link>
                    <Link
                      to="/chat-details"
                      className="messagesbox_main row align-items-center"
                    >
                      <div className="col-auto">
                        <div className="messagesbox_img">
                          <img src="assets/img/chat_3.png" alt="" />
                        </div>
                      </div>
                      <div className="col px-0">
                        <div className="messagesbox_details">
                          <h2>Firstname Lastname</h2>
                          <p>Message preview here</p>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="msg_time">12h</div>
                      </div>
                    </Link>
                    <Link
                      to="/chat-details"
                      className="messagesbox_main row align-items-center"
                    >
                      <div className="col-auto">
                        <div className="messagesbox_img">
                          <img src="assets/img/chat_4.png" alt="" />
                        </div>
                      </div>
                      <div className="col px-0">
                        <div className="messagesbox_details">
                          <h2>Firstname Lastname</h2>
                          <p>Message preview here</p>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="msg_time">12h</div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="contact1"
                  role="tabpanel"
                  aria-labelledby="contact1-tab"
                >
                  <div className="messages_inner">
                    <Link
                      to="/chat-details"
                      className="messagesbox_main row align-items-center active"
                    >
                      <div className="col-auto">
                        <div className="messagesbox_img">
                          <img src="assets/img/chat_1.png" alt="" />
                        </div>
                      </div>
                      <div className="col px-0">
                        <div className="messagesbox_details">
                          <h2>Firstname Lastname</h2>
                          <p>Message preview here</p>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="msg_time">12h</div>
                      </div>
                    </Link>
                    <Link
                      to="/chat-details"
                      className="messagesbox_main row align-items-center"
                    >
                      <div className="col-auto">
                        <div className="messagesbox_img">
                          <img src="assets/img/chat_2.png" alt="" />
                        </div>
                      </div>
                      <div className="col px-0">
                        <div className="messagesbox_details">
                          <h2>Firstname Lastname</h2>
                          <p>Message preview here</p>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="msg_time">12h</div>
                      </div>
                    </Link>
                    <Link
                      to="/chat-details"
                      className="messagesbox_main row align-items-center"
                    >
                      <div className="col-auto">
                        <div className="messagesbox_img">
                          <img src="assets/img/chat_3.png" alt="" />
                        </div>
                      </div>
                      <div className="col px-0">
                        <div className="messagesbox_details">
                          <h2>Firstname Lastname</h2>
                          <p>Message preview here</p>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="msg_time">12h</div>
                      </div>
                    </Link>
                    <Link
                      to="/chat-details"
                      className="messagesbox_main row align-items-center"
                    >
                      <div className="col-auto">
                        <div className="messagesbox_img">
                          <img src="assets/img/chat_4.png" alt="" />
                        </div>
                      </div>
                      <div className="col px-0">
                        <div className="messagesbox_details">
                          <h2>Firstname Lastname</h2>
                          <p>Message preview here</p>
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="msg_time">12h</div>
                      </div>
                    </Link>
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

export default Chats;
