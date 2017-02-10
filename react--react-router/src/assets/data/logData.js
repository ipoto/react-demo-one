import Mock from 'mockjs'

export default (function() {
	Mock.mock(/order\/log/, {
		"customerinfo": {
			"o_order_no": "C316122993793116", 
			"o_status": "待确认",
			"store_name": "00000", 
        	"o_item_qty": "4", 
        	"customer": {
        		"name": '自由',
        		"mobile": '13258565856',
        		"addr": '观光大楼'
        	}
		}
	})
})()