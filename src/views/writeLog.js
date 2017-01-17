import React, {Component} from 'react'
import $ from 'jquery'
require('../assets/css/writeLog.css')
import Mock from '../assets/data/logData'

export default class Log extends Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		$.ajax({
			url: 'order/log',
			dataType: 'json',
			success: function(data) {
				data.cur = 0
				this.setState(data)
			}.bind(this)
		})
	}
	change(str, e) {
		var val = e.target.value
		if (str == 'no') {
			this.setState({no: val})
		}else if(str == 'express') {
			this.setState({express: val})
		}else{
			this.setState({fee: val.substring(0,6)})
		}
	}
	handleClick(str) {
		if (str == 'yes') {
			this.setState({
				cur: 1
			})

		}else{
			this.setState({
				cur: 0
			})
		}

	}
	submit() {
		var data = {
			express: this.state.express,
			no: this.state.no,
			fee: this.state.fee,
			cur: this.state.cur
		}
		console.log(data)
	}
	render() {
		var data = this.state;
		if (data) {
			return (
				<div className="log-wrap">
					<div className="black-block">
			            <div className="num-wrap clearfix">
			                <span className="icon-block"></span>
			                <span className="num-detail">单号:{data.customerinfo.o_order_no}</span>
			                <span className="num-state">{data.customerinfo.o_status}</span>
			            </div>
			            <div className="ware-wrap clearfix">
			                <span className="spec-title name-style">仓库: <span className="spec-text">{data.customerinfo.store_name}</span></span>
			                <span className="spec-title num-style">数量: <span className="spec-text">{data.customerinfo.o_item_qty}件</span></span>
			            </div>
			        </div>

			        <div className="black-block">
			            <span className="iconfont address-icon">&#xe62c;</span>
			            <div className="person-wrap clearfix">
			                <span className="spec-title spec-w">收件人:</span>
			                <span className="spec-text person-style">{data.customerinfo.customer.name}</span>
			                <span className="spec-text tel-style">{data.customerinfo.customer.mobile}</span>
			            </div>
			            <div className="address-wrap clearfix">
			                <span className="spec-title pull-left spec-w">收货地址:</span>
			                <span className="spec-text address-style">{data.customerinfo.customer.addr}</span>
			            </div>
			        </div>
					<ul className="ul-block">
			            <li className="clearfix J_li">
			                <span className="title">物流公司</span>  
			                <select name="" value={data.express} onChange={this.change.bind(this, 'express')} id="company">
			                    <option value="0" className="">不选择</option>
			                    <option value="1">a快递</option>
			                    <option value="2">b快递</option>
			                    <option value="3">c快递</option>
			                </select>
			                <span className="iconfont fa-arr-right item-right"></span>
			            </li>
			            <li className="clearfix">
			                <span className="title">物流单号</span>
			                <input type="text" value={data.no || ''} placeholder="请输入" onChange={this.change.bind(this, 'no')} />
			            </li>
			            <li className="clearfix">
			                <span className="title">运费(元)</span>
			                <input type="number" value={data.fee || ''} placeholder="请输入" onChange={this.change.bind(this, 'fee')} />
			            </li>
			            <li className="clearfix last">
			                <span className="title">是否到付</span>
			                <div className={data.cur == 1 ? "check-wrap cur" : "check-wrap"} onClick={this.handleClick.bind(this,'yes')}>
			                    <span className="iconfont check-icon"></span>是
			                </div>
			                <div className={data.cur != 1 ? "check-wrap cur" : "check-wrap"} onClick={this.handleClick.bind(this,'no')}>
			                    <span className="inconfont check-icon"></span>否
			                </div>
			            </li>
			        </ul>

			        <div className="mod-footer-nav-fixed">
				        <div className="mod-footer-nav" onClick={this.submit.bind(this)}>
				            <button className="mod-btn-blue">确认发出</button>
				        </div>
				    </div>
				</div>
			)
		}else{
			return (
				<div></div>
			)
		}
	}
}