import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../redux/actions/list'

require('../assets/css/list.css')
import Mock from  '../assets/data/listData'

class List extends Component {
	constructor(props) {
		super(props)
	}
	componentWillMount() {
		this.getData('0')
	}
	getData(status) {
		var url = '';
		switch(status) {
			case '0':
				this.props.actions.getList('order/waitList', status);
				break;
			case '1':
				this.props.actions.getList('order/comfireList', status);
				break;
			case '2':
				this.props.actions.getList('order/cancelList', status);
				break;
		}
		
	}
	render() {
		var data = this.props.list;
		if (data) {
			return (
				<div>
					<ul className="hdtab mod-flex">
			    		<li className={data.status == 0 ? 'cell active' : 'cell'} onClick={this.getData.bind(this, '0')}>待确认 <span>{data.header.unconfirmed_outstock}</span></li>
			    		<li className={data.status == 1 ? 'cell active' : 'cell'} onClick={this.getData.bind(this, '1')}>已确认 <span>{data.header.confirmed_outstock}</span></li>
			    		<li className={data.status == 2 ? 'cell active' : 'cell'} onClick={this.getData.bind(this, '2')}>已取消 <span>{data.header.canceled_outstock}</span></li>
			    	</ul>
			    	<ul className="list">
						{
							data.list.map((item, i) => 
								<li key={i}>
						    		<Link to="detail">
						    			<p className="tit clearfix">单号：{item.io_order_no}<span className="pull-right">{item.io_date}</span></p> 
						    			<p className="linepart mod-flex"> <span className="cell ellipsis">客户：<i>{item.customer_name}</i></span><span className="last-cell">物流：<i>{item.is_delivery == 0 ? '需要物流' : '不需要物流'}</i></span></p>
						    			<p className="linepart mod-flex"> <span className="cell">仓库：<i>{item.outstock_storename}</i></span><span className="last-cell">数量：<i>{item.goods_num}件</i></span></p>
						    		</Link>
					    		</li>
							)
						}
			    	</ul>
				</div>
			)
		}else{
			return (
				<div>
					<p>正在加载...</p>
				</div>
			)
		}
	}
}

export default connect((state) => {
	return {
		list: state.listState.list
	}
}, (dispatch) => {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
})(List)