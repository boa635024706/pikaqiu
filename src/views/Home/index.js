import React, { Component } from 'react';
import style from './index.module.scss'
import {Link,NavLink} from 'react-router-dom'
class Home extends Component {
  render() {
    return (
      <div id={style.Home}>
      	<div className={style.top}>
        	<h3>尖叫设计</h3>
        		<input type="text"/>
        </div>
     	<ul>
     		<li><NavLink to="/Home/Recommend" activeClassName={style.active} replace>推荐</NavLink></li>
     		<li><NavLink to="/Home/Furniture" activeClassName={style.active} replace>家具</NavLink></li>
     		<li><NavLink to="/Home/Furnishing" activeClassName={style.active} replace>家居</NavLink></li>
     		<li><NavLink to="/Home/Activity" activeClassName={style.active} replace>活动</NavLink></li>
     	</ul>
      	{this.props.children}        
      </div>
    );
  }
}

export default Home;
