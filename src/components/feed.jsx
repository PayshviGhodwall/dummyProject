import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getFeed, getPost } from "../redux/slices/getApiInfoSlice";
import { useDispatch, useSelector } from "react-redux";

function Feed() {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.new.post);
  const feed = useSelector((state) => state.new.feed);

  useEffect(() => {
    document.title = "Home";
    dispatch(getPost());
  }, []);
  useEffect(() => {
    document.title = "Home";
    dispatch(getFeed());
  }, []);

  console.log(post, feed);

  return (
    <div className="pwa_main">
      <div className="container">
        <div className="header_1 align-items-center">
          <div className="col-2">
            <Link className="back_btn" to="">
              <img src="assets/img/back_btn.png" alt="" />
            </Link>
          </div>
          <div className="col-8 text-center">
            <div className="pagename">Tech air puffer</div>
          </div>
          <div className="col-2"></div>
        </div>
        <div className="pwa_contentpart py-4">
          <div className="row feedbox_main mb-5">
            <div className="col-12">
              <div className="row feedbox_top align-items-center mb-4">
                <div className="col-auto">
                  <div className="feedbox_pix">
                    <img src="assets/img/p1.png" alt="" />
                  </div>
                </div>
                <div className="col px-0">
                  <Link className="username" to="/profile">
                    {post?.userId?.name}
                  </Link>
                </div>
                <div className="col-auto">
                  <div className="timerr">2 hours ago</div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 mb-4">
                  <div className="feed_img">
                    <img src={post?.image} alt="" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-6 pe-2">
                      <Link className="bookmark" to="">
                        <img src="assets/img/bookmark.png" alt="" />
                        Boomark
                      </Link>
                    </div>
                    <div className="col-6 ps-2">
                      <Link className="remix" to="">
                        <img src="assets/img/remix.png" alt="" />
                        Remix
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row appers_in">
            <div className="col-12">
              <div className="row appers_in_top mb-4">
                <div className="col-12 mb-2">
                  <div className="appers_heading">Appears in</div>
                </div>
                <div className="col-12">
                  <div className="Appears_badges">
                    {post?.tags?.map((item, index) => {
                      return (
                        <Link to="" key={index}>
                          {item}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="row appersin_main pt-3">
                <div className="col-6 pe-1">
                  {feed?.post
                    ?.slice(0, feed?.post?.length / 2)
                    .map((item, index) => {
                      return (
                        <Link className="appersin_imgs mb-2" to="">
                          <img src={item.image} alt="" />
                        </Link>
                      );
                    })}
                </div>
                <div className="col-6 ps-1">
                  {feed?.post
                    ?.slice(feed?.post?.length / 2, feed?.post?.length)
                    .map((item, index) => {
                      return (
                        <Link className="appersin_imgs mb-2" to="">
                          <img src={item.image} alt="" />
                        </Link>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Feed;
