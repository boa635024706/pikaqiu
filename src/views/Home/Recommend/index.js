import React, { Component } from 'react';
import style from './index.module.scss';

class Recommend extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	datalist:[]
	  };
	}

	componentDidMount(){
		fetch("/v2/page?pageId=1&tabId=1&currentPage=1&pageSize=8&_=1554777811652").then(res=>res.json()).then(res=>{
			console.log(res.data.modules[0])
			this.setState({
				datalist:res.data.modules
			})
		})
	}
    render() {
  		return (
      		<div id={style.Recommend}>
        		<ul>	
        			<div>		 
						{this.state.datalist.length > 0 ?
							this.state.datalist[0].moduleContent.banners.map(item=>
								<img src={item.bannerImgSrc} key={item.id}/>) : null
						}					
      				</div>        					
        		</ul>
      		</div>
    	);
  	}
}

export default Recommend;
