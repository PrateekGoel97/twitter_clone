import React from "react";
import { data } from "../data";
import Trend from './Trend';

class Right extends React.Component{


    render(){
        return (
        <div className="right">
            

            <div className="right-top">

                <div className="right-input">

                    <img  className="search-icon" src="https://cdn-icons-png.flaticon.com/512/54/54481.png" />

                    <input type="text " placeholder="Search Twitter" />
                </div>

            </div>

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

export default Right;