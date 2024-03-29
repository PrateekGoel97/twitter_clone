import React from "react";
import { addpost, fetchPosts } from "../actions/posts";
import PostList from './PostList';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";


class Posts extends React.Component{

    constructor(props){
        super(props);

        this.state={
            input:''
        }
    }


    componentDidMount(){
        this.props.dispatch(fetchPosts());
    }

    handleChange = (e) =>{


        this.setState({
            input:e.target.value
        })
    }

    handleClick = () =>{
        const {input} = this.state;

        const postobj = {};

        postobj.id = Date.now().toString(36) + Math.random().toString(36).substr(2);
        postobj.tweet = input;
        postobj.userName = 'Jolie Ferne';
        postobj.date = new Date();

        this.props.dispatch(addpost(postobj));
    }


    render(){


        const {posts} =  this.props;

        return (
        <div className="posts">

            <div className="post-top">

                <div className="profile-pic">
                <Link to="/profile" className="link">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profile-pic" />
                </Link>
                </div>

                <div className="post-text">
                    <textarea 
                    placeholder="What's happening?"
                    value={this.state.input}
                    onChange={this.handleChange}
                    />

                    <div className="post-icons">

                        <div className="post-icons-left">

                                <div>
                                <i class="fi fi-rr-picture post-icon"></i>
                                </div>

                                <div>
                                <i class="fi fi-rr-stats post-icon"></i>
                                </div>

                                <div>
                                <i class="fi fi-rs-calendar post-icon"></i>
                                </div>

                                <div>
                                <i class="fi fi-rs-marker post-icon"></i>
                                </div>
                        </div>

                        <div className="post-icons-right">
                            <button type="submit" onClick={this.handleClick}> Tweet</button>
                        </div>

                    </div>
                </div>

            </div>
            
            <div className="postlist">

                {
                    posts.map((post) =>{
                        return <PostList post={post} dispatch={this.props.dispatch}/>
                    })
                }
                
            </div>

        </div>
        )
    }


}

function mapStateToProps(state){
    return {
        posts:state.posts
    }
}

export default connect(mapStateToProps)(Posts);