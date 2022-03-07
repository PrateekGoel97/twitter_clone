import React from "react";
import { data } from "../data";
import Trend from './Trend';
import {connect} from 'react-redux';

class Right extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            results:[]
        }
    }

    handleChange = (e) =>{

     
        const input = e.target.value;
        const {posts} = this.props;

        if(e.target.value === ''){
            this.setState({
                results:[]
            })
            return;
        }
    

        const output = posts.filter((post) =>{

            if(post.tweet.indexOf(input) !== -1){
               return post;
            }
        })

        this.setState({
            results:output
        })


    }

   


    render(){

        const {results} = this.state;
        console.log(results);

        return (
        <div className="right">
            

            <div className="right-top">

                <div className="right-bottom-container">

                   <div className="right-input">
                        <img  
                        className="search-icon" 
                        src="https://cdn-icons-png.flaticon.com/512/54/54481.png" 
                        
                        />

                        <input type="text " 
                        placeholder="Search Twitter" 
                        onChange={this.handleChange} 
                        value={this.state.input}
                        />

                    </div>
                </div>

                
            </div>

            

            {
                        (results.length >0  && (
                            <div className="search-results">
                                            {
                                                results.map((result) =>{

                                                    return (
                                                        <div className="search-result">
                                                            <div className="result-name">
                                                                {result.userName}
                                                            </div>

                                                            <div>
                                                                {result.tweet}
                                                            </div>
                                                        </div>
                                                    )

                                                })
                                            }
                            </div>
                        ))
            }

            <div className="right-bottom">

                <div className="right-bottom-container">

                    <div className="right-bottom-header">
                        <div className="right-bottom-header-heading">
                            Trends for you
                        </div>

                        <div className="right-bottom-header-icon">
                        <i class="fi fi-rs-settings"></i>
                        </div>

                    </div>

                    <div className="trend-list">
                        {
                            data.map((trend) =>{
                                return <Trend trend={trend} />
                            })
                        }
                </div>

                </div>

                

            </div>
            



        </div>)
    }


}

function mapStateToProps(state){
    return {
        posts:state.posts
    }
}

export default connect(mapStateToProps)(Right);