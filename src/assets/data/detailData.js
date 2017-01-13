import Mock from 'mockjs'

export default (function() {
	Mock.mock(/order\/detail/, {
        "o_order_no": "C316122993793116", 
        "io_date": "2016.12.29 17:09:06", 
        "io_confirm_date": "1970.01.01 08:00:00", 
        "io_cancel_date": "1970.01.01 08:00:00", 
        "operate_username": "", 
        "status_id": "0", 
        "o_status": "待确认", 
        "customer_name": "游客", 
        "is_delivery": 0, 
        "delivery_name": "需要物流", 
        "store_name": "00000", 
        "o_item_qty": "4", 
        "list": [
            {
                "imgUrl": "http://img1.3lian.com/2015/w20/3/d/1.jpg", 
                "item_no": "128", 
                "item_name": "清风连衣裙", 
                "skus": [
                    {
                        "spec": "红色-M", 
                        "item_sku": "12832783470", 
                        "item_qty": "1"
                    }, 
                    {
                        "spec": "红色-L", 
                        "item_sku": "12832783474", 
                        "item_qty": "1"
                    }, 
                    {
                        "spec": "红色-XL", 
                        "item_sku": "12832783476", 
                        "item_qty": "1"
                    }, 
                    {
                        "spec": "玫红-M", 
                        "item_sku": "12832653470", 
                        "item_qty": "1"
                    }
                ]
            },{
                "imgUrl": "http://pic.58pic.com/58pic/12/27/61/29Z58PICHsS.jpg", 
                "item_no": "128", 
                "item_name": "T恤", 
                "skus": [
                    {
                        "spec": "红色-M", 
                        "item_sku": "12832783470", 
                        "item_qty": "1"
                    }, 
                    {
                        "spec": "红色-L", 
                        "item_sku": "12832783474", 
                        "item_qty": "1"
                    }, 
                    {
                        "spec": "红色-XL", 
                        "item_sku": "12832783476", 
                        "item_qty": "1"
                    }, 
                    {
                        "spec": "玫红-M", 
                        "item_sku": "12832653470", 
                        "item_qty": "1"
                    }
                ]
            }
        ]
	})
})()