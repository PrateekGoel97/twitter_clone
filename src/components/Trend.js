import React from "react";


class Trend extends React.Component{

    

    render(){

        const {trend} = this.props;

        return(
            <div className="trend">

                    <div className="trend-text">
                        {trend.header}
                    </div>

                    <div className="trend-hashtag">
                        {trend.hashtag}
                    </div>

                    <div className="trend-text">
                        {trend.number}
                    </div>

                    <div className="trend-text">
                        {trend.bottom}
                    </div>
                
            </div>
        )

    }

}

export default Trend;