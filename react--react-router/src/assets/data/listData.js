import Mock from 'mockjs'

export default(function() {
	Mock.mock(/order\/waitList/, {
		"header": {
            "unconfirmed_outstock": "21587", 
            "confirmed_outstock": "211", 
            "canceled_outstock": "280"
        }, 
        "list": [
            {
                "io_order_no": "C317010428229159", 
                "customer_name": "游客", 
                "is_delivery": "0", 
                "outstock_storename": "00000", 
                "goods_num": "1", 
                "io_date": "1.04 19:23"
            }, 
            {
                "io_order_no": "C317010332590732", 
                "customer_name": "游客", 
                "is_delivery": "0", 
                "outstock_storename": "00000", 
                "goods_num": "1", 
                "io_date": "1.03 15:01"
            }, 
            {
                "io_order_no": "C316123093904835", 
                "customer_name": "游客", 
                "is_delivery": "0", 
                "outstock_storename": "00000", 
                "goods_num": "4", 
                "io_date": "12.30 15:00"
            }, 
            {
                "io_order_no": "C316123099917496", 
                "customer_name": "游客", 
                "is_delivery": "0", 
                "outstock_storename": "00000", 
                "goods_num": "12", 
                "io_date": "12.30 14:57"
            }, 
            {
                "io_order_no": "C316123024460999", 
                "customer_name": "游客", 
                "is_delivery": "0", 
                "outstock_storename": "00000", 
                "goods_num": "12", 
                "io_date": "12.30 14:55"
            }, 
            {
                "io_order_no": "C316123017260514", 
                "customer_name": "游客", 
                "is_delivery": "0", 
                "outstock_storename": "00000", 
                "goods_num": "720", 
                "io_date": "12.30 14:15"
            }, 
            {
                "io_order_no": "C316122915958731", 
                "customer_name": "游客", 
                "is_delivery": "0", 
                "outstock_storename": "00000", 
                "goods_num": "4", 
                "io_date": "12.29 17:38"
            }, 
            {
                "io_order_no": "C316122991826588", 
                "customer_name": "游客", 
                "is_delivery": "0", 
                "outstock_storename": "00000", 
                "goods_num": "4", 
                "io_date": "12.29 17:33"
            }, 
            {
                "io_order_no": "C316122914037903", 
                "customer_name": "游客", 
                "is_delivery": "0", 
                "outstock_storename": "00000", 
                "goods_num": "1", 
                "io_date": "12.29 17:27"
            }, 
            {
                "io_order_no": "C316122993793116", 
                "customer_name": "游客", 
                "is_delivery": "0", 
                "outstock_storename": "00000", 
                "goods_num": "4", 
                "io_date": "12.29 17:09"
            }, 
            {
                "io_order_no": "C316122948115740", 
                "customer_name": "游客", 
                "is_delivery": "0", 
                "outstock_storename": "00000", 
                "goods_num": "4", 
                "io_date": "12.29 17:05"
            }, 
            {
                "io_order_no": "C316122938596317", 
                "customer_name": "游客", 
                "is_delivery": "0", 
                "outstock_storename": "00000", 
                "goods_num": "3", 
                "io_date": "12.29 14:20"
            }
        ]
	})

	Mock.mock(/order\/comfireList/, {
		 "header": {
            "unconfirmed_outstock": "21587", 
            "confirmed_outstock": "211", 
            "canceled_outstock": "280"
        }, 
        "list": [
            {
                "io_order_no": "C317010429722057", 
                "customer_name": "阿苏", 
                "is_delivery": "0", 
                "outstock_storename": "00000", 
                "goods_num": "1", 
                "io_date": "1.04 19:25"
            }, 
            {
                "io_order_no": "C317010481225892", 
                "customer_name": "阿苏", 
                "is_delivery": "1", 
                "outstock_storename": "00000", 
                "goods_num": "1", 
                "io_date": "1.04 19:24"
            }, 
            {
                "io_order_no": "C316122292212422", 
                "customer_name": "阿狸猫强", 
                "is_delivery": "1", 
                "outstock_storename": "00000", 
                "goods_num": "1", 
                "io_date": "1.04 19:22"
            }, 
            {
                "io_order_no": "C316122227861404", 
                "customer_name": "阿孙11", 
                "is_delivery": "1", 
                "outstock_storename": "00000", 
                "goods_num": "6", 
                "io_date": "1.04 19:22"
            }, 
            {
                "io_order_no": "C316122238394113", 
                "customer_name": "阿苏11", 
                "is_delivery": "0", 
                "outstock_storename": "00000", 
                "goods_num": "24", 
                "io_date": "1.04 19:21"
            }, 
            {
                "io_order_no": "C316122225926120", 
                "customer_name": "阿舜ft", 
                "is_delivery": "1", 
                "outstock_storename": "00000", 
                "goods_num": "500", 
                "io_date": "1.04 19:20"
            }, 
            {
                "io_order_no": "C316120850148191", 
                "customer_name": "aaaaa不露脸", 
                "is_delivery": "1", 
                "outstock_storename": "00000", 
                "goods_num": "4", 
                "io_date": "1.04 19:19"
            }, 
            {
                "io_order_no": "C317010421578367", 
                "customer_name": "游客", 
                "is_delivery": "0", 
                "outstock_storename": "00000", 
                "goods_num": "3", 
                "io_date": "1.04 19:17"
            }, 
            {
                "io_order_no": "C316122332253342", 
                "customer_name": "布剪刀yyy", 
                "is_delivery": "0", 
                "outstock_storename": "00000", 
                "goods_num": "6", 
                "io_date": "1.04 19:17"
            }, 
            {
                "io_order_no": "C316123085133194", 
                "customer_name": "游客", 
                "is_delivery": "0", 
                "outstock_storename": "00000", 
                "goods_num": "1", 
                "io_date": "12.30 13:54"
            }, 
            {
                "io_order_no": "C316122831752211", 
                "customer_name": "游客", 
                "is_delivery": "0", 
                "outstock_storename": "00000", 
                "goods_num": "3", 
                "io_date": "12.28 17:29"
            }, 
            {
                "io_order_no": "C316122876428812", 
                "customer_name": "游客", 
                "is_delivery": "0", 
                "outstock_storename": "00000", 
                "goods_num": "1", 
                "io_date": "12.28 15:32"
            }, 
            {
                "io_order_no": "C316122870654441", 
                "customer_name": "游客", 
                "is_delivery": "0", 
                "outstock_storename": "00000", 
                "goods_num": "1", 
                "io_date": "12.28 15:27"
            }, 
            {
                "io_order_no": "C316122886026772", 
                "customer_name": "游客", 
                "is_delivery": "0", 
                "outstock_storename": "00000", 
                "goods_num": "1", 
                "io_date": "12.28 15:12"
            }, 
            {
                "io_order_no": "C316122887269842", 
                "customer_name": "游客", 
                "is_delivery": "0", 
                "outstock_storename": "00000", 
                "goods_num": "1", 
                "io_date": "12.28 14:30"
            } 
        ]
	})

	Mock.mock(/order\/cancelList/, {
		"header": {
            "unconfirmed_outstock": "21587", 
            "confirmed_outstock": "211", 
            "canceled_outstock": "280"
        }, 
        "list": [
            {
                "io_order_no": "C316122383348698", 
                "customer_name": "游客", 
                "is_delivery": "0", 
                "outstock_storename": "00000", 
                "goods_num": "12", 
                "io_date": "12.26 17:20"
            }, 
            {
                "io_order_no": "C316122398300553", 
                "customer_name": "游客", 
                "is_delivery": "0", 
                "outstock_storename": "00000", 
                "goods_num": "4", 
                "io_date": "12.26 14:20"
            }, 
            {
                "io_order_no": "C316122315004141", 
                "customer_name": "游客", 
                "is_delivery": "0", 
                "outstock_storename": "00000", 
                "goods_num": "6", 
                "io_date": "12.26 14:19"
            }, 
            {
                "io_order_no": "C316122336500543", 
                "customer_name": "游客", 
                "is_delivery": "0", 
                "outstock_storename": "00000", 
                "goods_num": "2", 
                "io_date": "12.26 09:56"
            }, 
            {
                "io_order_no": "C316122344196226", 
                "customer_name": "游客", 
                "is_delivery": "0", 
                "outstock_storename": "00000", 
                "goods_num": "12", 
                "io_date": "12.23 15:13"
            }, 
            {
                "io_order_no": "C316122391808195", 
                "customer_name": "游客", 
                "is_delivery": "0", 
                "outstock_storename": "00000", 
                "goods_num": "1", 
                "io_date": "12.23 14:02"
            }, 
            {
                "io_order_no": "C316122310138172", 
                "customer_name": "游客", 
                "is_delivery": "0", 
                "outstock_storename": "00000", 
                "goods_num": "1", 
                "io_date": "12.23 13:53"
            }, 
            {
                "io_order_no": "C316122363676218", 
                "customer_name": "游客", 
                "is_delivery": "0", 
                "outstock_storename": "00000", 
                "goods_num": "6", 
                "io_date": "12.23 10:32"
            }, 
            {
                "io_order_no": "C316122043184387", 
                "customer_name": "阿苏11", 
                "is_delivery": "0", 
                "outstock_storename": "00000", 
                "goods_num": "1", 
                "io_date": "12.20 17:13"
            }, 
            {
                "io_order_no": "C316122092093835", 
                "customer_name": "阿苏11", 
                "is_delivery": "0", 
                "outstock_storename": "00000", 
                "goods_num": "1", 
                "io_date": "12.20 16:21"
            }, 
            {
                "io_order_no": "C316122026212101", 
                "customer_name": "游客", 
                "is_delivery": "0", 
                "outstock_storename": "00000", 
                "goods_num": "19", 
                "io_date": "12.20 15:19"
            }, 
            {
                "io_order_no": "C316121920313042", 
                "customer_name": "游客", 
                "is_delivery": "0", 
                "outstock_storename": "00000", 
                "goods_num": "2", 
                "io_date": "12.19 17:11"
            }, 
            {
                "io_order_no": "C316121931119274", 
                "customer_name": "游客", 
                "is_delivery": "0", 
                "outstock_storename": "00000", 
                "goods_num": "4", 
                "io_date": "12.19 16:56"
            }
        ]
	})
})()