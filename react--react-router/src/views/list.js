import React, {Component} from 'react'
import {Link} from 'react-router'
import $ from 'jquery'

require('../assets/css/list.css')
import Mock from  '../assets/data/listData'

export default class List extends Component {
	constructor(props) {
		super(props)
		this.state = {
			header: {
				"unconfirmed_outstock": "",
				"confirmed_outstock": "", 
            	"canceled_outstock": ""
			},
			list: []
		}
	}
	componentDidMount() {
		this.getData('0')
	}
	getData(status) {
		var url = '';
		switch(status) {
			case '0':
				url ='order/waitList';
				break;
			case '1':
				url ='order/comfireList';
				break;
			case '2':
				url ='order/cancelList';
				break;
		}
		$.ajax({
			url: url,
			dataType: 'json',
			success: function(data) {
				data.status = status;
				this.setState(data)
			}.bind(this)
		})
	}
	render() {
		var data = this.state;
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
	}
}