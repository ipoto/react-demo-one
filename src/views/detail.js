import React, {Component} from 'react'
import {Link} from 'react-router'
import $ from 'jquery'

require('../assets/css/detail.css')
import Mock from '../assets/data/detailData'
export default class Detail extends Component {
	constructor(props) {
		super(props)
		this.state = {
	        "o_order_no": "", 
	        "io_date": "", 
	        "io_confirm_date": "", 
	        "io_cancel_date": "", 
	        "operate_username": "", 
	        "status_id": "", 
	        "o_status": "", 
	        "customer_name": "", 
	        "is_delivery": '', 
	        "delivery_name": "", 
	        "store_name": "", 
	        "o_item_qty": "", 
	        "list": []
		}
	}
	componentDidMount() {
		$.ajax({
			url: '/order/detail',
			dataType: 'json',
			success: function(data) {
				this.setState(data);
			}.bind(this)
		})
	}
	render() {
		var data = this.state;
		return (
			<div className="">
				<div className="order-info">
		            <h3><span className="state">{data.o_status}</span>单号:{data.o_order_no}</h3>
		            <p className="p1 pb25"><span><i>生成订单时间: </i>{data.io_date}</span></p>
		            <p className="p1 pb25"><span className="way"><i>物流: </i>{data.is_delivery == 0 ? '不需要物流' : '需要物流'}</span> <span><i>客户: </i>{data.customer_name}</span></p>
		        </div>
		        <h4 className="wl-total">{data.store_name}  总计{data.o_item_qty}件</h4>
		        <ul className="sku-list">
		        {
		        	data.list.map((item, key) => 
		        		<li key={key}>
			                <dl>
			                    <dt className="clearfix">
			                        <img className="detail-img" src={item.imgUrl} />
			                        <p className="num">{item.item_no}</p>
			                        <p className="title">{item.item_name}</p>
			                    </dt>
			                    {
			                    	item.skus.map((itemChild, i) => 
				                    	<dd key={i}>
					                        <h5>{itemChild.spec}　{itemChild.item_qty}件</h5>
					                        <p>{itemChild.item_sku}</p>
					                    </dd>
				                    )
			                	}
			                </dl>
			            </li>
		        	)
		        }
		        </ul>
		        <div className="mod-footer-nav-fixed">
		            <div className="mod-footer-nav">
		                <Link to="writeLog" className="mod-btn-blue waite-text">填写物流</Link>
		            </div>
	            </div>
			</div>
		)
	}
}