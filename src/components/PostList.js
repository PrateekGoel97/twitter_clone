import React from "react";



class PostList extends React.Component{



    render(){

        const {post} = this.props;

        

        return (
            <div className="post">
                <div className="profile-pic">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profile-pic" />
                </div>


                <div className="post-right">

                    <div className="post-content">

                        <div className="post-content-top">
                                {post.userName}
                        </div>

                        <div className="post-content-lower">
                                {post.tweet}
                        </div>

                    </div>

                    <div className="post-symbols">

                        <div>
                        <i class="fi fi-rs-comment post-symbol"></i>
                        </div>
                        <div>
                        <i class="fi fi-rr-refresh post-symbol"></i>
                        </div>
                        <div>
                            <i class="fi fi-rs-heart post-symbol"></i>
                        </div>
                        <div>
                            <i class="fi fi-rr-upload post-symbol"></i>
                        </div>

                        
                    </div>

                </div>
                
            </div>
        )
    }

}

export default PostList;