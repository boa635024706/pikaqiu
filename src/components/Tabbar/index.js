import React,{Component} from 'react'
import {Link,NavLink} from 'react-router-dom'
import style from './index.module.scss'

class Tabbar extends Component{
	render(){
		return <div id={style.Tabbar}>
			<ul>
				<li><NavLink to="/Home" activeClassName={style.active} replace>首页</NavLink></li>
				<li><NavLink to="/List" activeClassName={style.active} replace>分类</NavLink></li>
				<li><NavLink to="/Shopcar" activeClassName={style.active} replace>购物车</NavLink></li>
				<li><NavLink to="/News" activeClassName={style.active} replace>消息</NavLink></li>
				<li><NavLink to="/Me" activeClassName={style.active} replace>我</NavLink></li>
			</ul>
		</div>
	}
}

export default Tabbar