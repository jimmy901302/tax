// 所有物品数据
const itemData = [
    { code: "01010100", name: "奶粉", taxRate: "13%", basePrice: "200", unit: "千克" },
    { code: "01010200", name: "调味品", taxRate: "13%", basePrice: "200", unit: "千克" },
    { code: "01019900", name: "其他食品", taxRate: "13%", basePrice: "另行确定", unit: "件" },
    { code: "01020100", name: "茶", taxRate: "13%", basePrice: "200", unit: "千克" },
    { code: "01020200", name: "咖啡", taxRate: "13%", basePrice: "200", unit: "千克" },
    { code: "01029900", name: "其他饮料", taxRate: "13%", basePrice: "另行确定", unit: "千克" },
    { code: "01030100", name: "抗癌药品", taxRate: "3%", basePrice: "另行确定", unit: "件" },
    { code: "01030200", name: "罕见病药品", taxRate: "3%", basePrice: "另行确定", unit: "件" },
    { code: "01030300", name: "中药酒", taxRate: "13%", basePrice: "另行确定", unit: "瓶" },
    { code: "01039900", name: "其他药品", taxRate: "13%", basePrice: "另行确定", unit: "件" },
    { code: "02010100", name: "12度以下（不含12度）啤酒", taxRate: "50%", basePrice: "5", unit: "瓶" },
    { code: "02010200", name: "12度至22度（不含22度）啤酒", taxRate: "50%", basePrice: "10", unit: "瓶" },
    { code: "02020100", name: "12度以下（不含12度）葡萄酒", taxRate: "50%", basePrice: "100", unit: "瓶" },
    { code: "02020200", name: "12度至22度（不含22度）葡萄酒", taxRate: "50%", basePrice: "200", unit: "瓶" },
    { code: "02030000", name: "清酒", taxRate: "50%", basePrice: "另行确定", unit: "瓶" },
    { code: "02040000", name: "白兰地", taxRate: "50%", basePrice: "500", unit: "瓶" },
    { code: "02050000", name: "威士忌", taxRate: "50%", basePrice: "300", unit: "瓶" },
    { code: "02060000", name: "伏特加", taxRate: "50%", basePrice: "100", unit: "瓶" },
    { code: "02070000", name: "白酒", taxRate: "50%", basePrice: "300", unit: "瓶" },
    { code: "02990000", name: "其他酒", taxRate: "50%", basePrice: "另行确定", unit: "瓶" },
    { code: "03010000", name: "卷烟（不论是否加热）", taxRate: "50%", basePrice: "1", unit: "支" },
    { code: "03020000", name: "雪茄烟", taxRate: "50%", basePrice: "50", unit: "支" },
    { code: "03030000", name: "烟丝", taxRate: "50%", basePrice: "1", unit: "克" },
    { code: "03040000", name: "电子烟", taxRate: "50%", basePrice: "另行确定", unit: "个" },
    { code: "03990000", name: "其他烟", taxRate: "50%", basePrice: "另行确定", unit: "克" },
    { code: "04010100", name: "外衣", taxRate: "20%", basePrice: "300", unit: "件" },
    { code: "04010200", name: "外裤", taxRate: "20%", basePrice: "200", unit: "条" },
    { code: "04010300", name: "内衣裤", taxRate: "20%", basePrice: "100", unit: "条" },
    { code: "04010400", name: "衬衫、T恤衫", taxRate: "20%", basePrice: "200", unit: "件" },
    { code: "04019900", name: "其他衣着", taxRate: "20%", basePrice: "另行确定", unit: "件" },
    { code: "04020100", name: "帽子", taxRate: "20%", basePrice: "100", unit: "件" },
    { code: "04020200", name: "丝巾、头巾、围巾、领带", taxRate: "20%", basePrice: "100", unit: "条" },
    { code: "04020300", name: "腰带", taxRate: "20%", basePrice: "100", unit: "条" },
    { code: "04020400", name: "手套", taxRate: "20%", basePrice: "100", unit: "双" },
    { code: "04029900", name: "其他配饰", taxRate: "20%", basePrice: "另行确定", unit: "件" },
    { code: "04030100", name: "毛毯、被子、睡袋", taxRate: "20%", basePrice: "400", unit: "件" },
    { code: "04030200", name: "枕头、床单、被套、床罩", taxRate: "20%", basePrice: "100", unit: "条" },
    { code: "04030300", name: "地毯", taxRate: "20%", basePrice: "200", unit: "平方米" },
    { code: "04039900", name: "其他家纺用品", taxRate: "20%", basePrice: "另行确定", unit: "件" },
    { code: "04990000", name: "其他纺织品及其制成品", taxRate: "20%", basePrice: "另行确定", unit: "件" },
    { code: "05010100", name: "裘皮衣", taxRate: "20%", basePrice: "另行确定", unit: "件" },
    { code: "05010200", name: "皮衣", taxRate: "20%", basePrice: "2000", unit: "件" },
    { code: "05010300", name: "皮背心、皮裤、皮裙", taxRate: "20%", basePrice: "1000", unit: "件" },
    { code: "05019900", name: "其他皮革服装", taxRate: "20%", basePrice: "另行确定", unit: "件" },
    { code: "05020100", name: "皮带", taxRate: "20%", basePrice: "100", unit: "条" },
    { code: "05020200", name: "皮手套", taxRate: "20%", basePrice: "100", unit: "双" },
    { code: "05029900", name: "其他皮革配饰", taxRate: "20%", basePrice: "另行确定", unit: "件" },
    { code: "05990000", name: "其他皮革制品（箱包和鞋靴除外）", taxRate: "20%", basePrice: "另行确定", unit: "件" },
    { code: "06010100", name: "箱", taxRate: "20%", basePrice: "500", unit: "个" },
    { code: "06010200", name: "挎包、背包、提包", taxRate: "20%", basePrice: "另行确定", unit: "个" },
    { code: "06010300", name: "钱包、钥匙包、卡包", taxRate: "20%", basePrice: "100", unit: "个" },
    { code: "06019900", name: "其他箱包", taxRate: "20%", basePrice: "另行确定", unit: "个" },
    { code: "06020100", name: "皮鞋、皮靴", taxRate: "20%", basePrice: "300", unit: "双" },
    { code: "06020200", name: "运动鞋、休闲鞋", taxRate: "20%", basePrice: "200", unit: "双" },
    { code: "06029900", name: "其他鞋靴", taxRate: "20%", basePrice: "另行确定", unit: "双" },
    { code: "07010100", name: "高档手表（计税价格在人民币10000元及以上）", taxRate: "50%", basePrice: "另行确定", unit: "块" },
    { code: "07010210", name: "石英表（电子表）", taxRate: "20%", basePrice: "200", unit: "块" },
    { code: "07010220", name: "机械表", taxRate: "20%", basePrice: "500", unit: "块" },
    { code: "07010290", name: "其他表", taxRate: "20%", basePrice: "另行确定", unit: "块" },
    { code: "07020100", name: "座钟、挂钟、台钟", taxRate: "20%", basePrice: "200", unit: "个" },
    { code: "07029900", name: "其他钟", taxRate: "20%", basePrice: "另行确定", unit: "台" },
    { code: "07030000", name: "钟表配件、附件", taxRate: "20%", basePrice: "另行确定", unit: "件" },
    { code: "08010000", name: "金银", taxRate: "13%", basePrice: "另行确定", unit: "件" },
    { code: "08020100", name: "钻石及钻石首饰", taxRate: "20%", basePrice: "另行确定", unit: "件" },
    { code: "08020200", name: "贵重首饰及珠宝玉石", taxRate: "50%", basePrice: "另行确定", unit: "件" },
    { code: "08990000", name: "其他首饰", taxRate: "20%", basePrice: "另行确定", unit: "件" },
    { code: "09010100", name: "高档芳香类化妆品", taxRate: "50%", basePrice: "300", unit: "瓶" },
    { code: "09010200", name: "普通芳香类化妆品", taxRate: "20%", basePrice: "300", unit: "瓶" },
    { code: "09010300", name: "高档唇用化妆品", taxRate: "50%", basePrice: "150", unit: "支" },
    { code: "09010400", name: "普通唇用化妆品", taxRate: "20%", basePrice: "150", unit: "支" },
    { code: "09010500", name: "高档眼用化妆品", taxRate: "50%", basePrice: "100", unit: "支" },
    { code: "09010600", name: "普通眼用化妆品", taxRate: "20%", basePrice: "100", unit: "支" },
    { code: "09010700", name: "高档指（趾）甲化妆品", taxRate: "50%", basePrice: "20", unit: "支" },
    { code: "09010800", name: "普通指（趾）甲化妆品", taxRate: "20%", basePrice: "20", unit: "支" },
    { code: "09010900", name: "高档粉状化妆品", taxRate: "50%", basePrice: "200", unit: "盒" },
    { code: "09011000", name: "普通粉状化妆品", taxRate: "20%", basePrice: "200", unit: "盒" },
    { code: "09019910", name: "其他高档美容品化妆品、高档美容化妆品套装", taxRate: "50%", basePrice: "另行确定", unit: "件" },
    { code: "09019920", name: "其他普通美容品或化妆品、普通美容化妆品套装", taxRate: "20%", basePrice: "另行确定", unit: "件" },
    { code: "09020110", name: "洗面奶、洁面霜、卸妆水", taxRate: "20%", basePrice: "100", unit: "支" },
    { code: "09020190", name: "其他清洁用品、清洁品套装", taxRate: "20%", basePrice: "另行确定", unit: "件" },
    { code: "09020210", name: "高档涂抹式护肤品", taxRate: "50%", basePrice: "200", unit: "支" },
    { code: "09020220", name: "普通涂抹式护肤品", taxRate: "20%", basePrice: "200", unit: "支" },
    { code: "09020230", name: "高档片状护肤品", taxRate: "50%", basePrice: "另行确定", unit: "张" },
    { code: "09020240", name: "普通片状护肤品", taxRate: "20%", basePrice: "另行确定", unit: "张" },
    { code: "09020291", name: "其他高档护肤用品、高档护肤品套装", taxRate: "50%", basePrice: "另行确定", unit: "件" },
    { code: "09020292", name: "其他普通护肤用品、普通护肤品套装", taxRate: "20%", basePrice: "另行确定", unit: "件" },
    { code: "09020310", name: "洗发液、护发液", taxRate: "20%", basePrice: "30", unit: "支" },
    { code: "09020390", name: "其他护发用品、护发品套装", taxRate: "20%", basePrice: "另行确定", unit: "件" },
    { code: "09029900", name: "其他清洁护理品、清洁护理品套装", taxRate: "20%", basePrice: "另行确定", unit: "件" },
    { code: "10010100", name: "血糖计", taxRate: "13%", basePrice: "300", unit: "个" },
    { code: "10010200", name: "血糖试纸", taxRate: "13%", basePrice: "5", unit: "张" },
    { code: "10010300", name: "红外线耳探热针", taxRate: "13%", basePrice: "100", unit: "个" },
    { code: "10010400", name: "家用雾化机", taxRate: "20%", basePrice: "2000", unit: "台" },
    { code: "10010500", name: "电动血压计", taxRate: "13%", basePrice: "300", unit: "个" },
    { code: "10019900", name: "其他家用医疗器材", taxRate: "20%", basePrice: "另行确定", unit: "件" },
    { code: "10020100", name: "按摩床", taxRate: "20%", basePrice: "10000", unit: "张" },
    { code: "10020200", name: "按摩椅", taxRate: "20%", basePrice: "5000", unit: "张" },
    { code: "10029900", name: "其他家用保健器材", taxRate: "20%", basePrice: "另行确定", unit: "件" },
    { code: "10030100", name: "蒸汽仪", taxRate: "20%", basePrice: "200", unit: "台" },
    { code: "10030200", name: "喷雾器", taxRate: "20%", basePrice: "400", unit: "台" },
    { code: "10039900", name: "其他家用美容器材", taxRate: "20%", basePrice: "另行确定", unit: "台" },
    { code: "10990000", name: "家用医疗、保健、美容器材配件、附件", taxRate: "20%", basePrice: "另行确定", unit: "件" },
    { code: "11010100", name: "餐具/刀具", taxRate: "20%", basePrice: "20", unit: "个" },
    { code: "11010200", name: "炊具", taxRate: "20%", basePrice: "100", unit: "件" },
    { code: "11010300", name: "灶具", taxRate: "20%", basePrice: "1000", unit: "件" },
    { code: "11010400", name: "净水器", taxRate: "20%", basePrice: "500", unit: "个" },
    { code: "11010500", name: "净水器过滤芯", taxRate: "20%", basePrice: "200", unit: "个" },
    { code: "11011100", name: "电饭煲", taxRate: "20%", basePrice: "500", unit: "个" },
    { code: "11011200", name: "微波炉", taxRate: "20%", basePrice: "600", unit: "台" },
    { code: "11011300", name: "电磁炉", taxRate: "20%", basePrice: "800", unit: "台" },
    { code: "11011400", name: "抽油烟机", taxRate: "20%", basePrice: "1000", unit: "台" },
    { code: "11011500", name: "家用洗碗机", taxRate: "20%", basePrice: "1500", unit: "台" },
    { code: "11011600", name: "咖啡机", taxRate: "20%", basePrice: "4000", unit: "台" },
    { code: "11019900", name: "其他厨房用具", taxRate: "20%", basePrice: "另行确定", unit: "件" },
    { code: "11020100", name: "热水器", taxRate: "20%", basePrice: "1000", unit: "台" },
    { code: "11020200", name: "电吹风机", taxRate: "20%", basePrice: "200", unit: "个" },
    { code: "11020300", name: "电动剃须刀", taxRate: "20%", basePrice: "200", unit: "个" },
    { code: "11020400", name: "电动牙刷", taxRate: "20%", basePrice: "200", unit: "个" },
    { code: "11029900", name: "其他卫生间用具", taxRate: "20%", basePrice: "另行确定", unit: "件" },
    { code: "11990000", name: "厨卫用具配件、附件", taxRate: "20%", basePrice: "另行确定", unit: "件" },
    { code: "12010000", name: "实木家具", taxRate: "13%", basePrice: "另行确定", unit: "件" },
    { code: "12020000", name: "皮质家具", taxRate: "13%", basePrice: "另行确定", unit: "件" },
    { code: "12030000", name: "藤、竹质家具", taxRate: "13%", basePrice: "600", unit: "件" },
    { code: "12990000", name: "其他家具", taxRate: "13%", basePrice: "另行确定", unit: "件" },
    { code: "13010100", name: "增湿机、除湿机、增除湿一体机", taxRate: "20%", basePrice: "1500", unit: "台" },
    { code: "13010200", name: "空气清新机", taxRate: "20%", basePrice: "1000", unit: "台" },
    { code: "13010300", name: "灯具", taxRate: "20%", basePrice: "另行确定", unit: "台" },
    { code: "13010400", name: "吸尘器", taxRate: "20%", basePrice: "500", unit: "台" },
    { code: "13020100", name: "1匹及以下空调", taxRate: "20%", basePrice: "2000", unit: "台" },
    { code: "13020200", name: "1匹以上3匹以下（含3匹）空调", taxRate: "20%", basePrice: "5000", unit: "台" },
    { code: "13020300", name: "3匹以上空调", taxRate: "20%", basePrice: "另行确定", unit: "台" },
    { code: "13030100", name: "200公升及以下电冰箱、冰柜", taxRate: "20%", basePrice: "1500", unit: "台" },
    { code: "13030200", name: "201－500公升电冰箱、冰柜", taxRate: "20%", basePrice: "另行确定", unit: "台" },
    { code: "13030300", name: "501公升及以上电冰箱、冰柜", taxRate: "20%", basePrice: "另行确定", unit: "台" },
    { code: "13040100", name: "18瓶及以下红酒柜", taxRate: "20%", basePrice: "1500", unit: "台" },
    { code: "13040200", name: "19－120瓶红酒柜", taxRate: "20%", basePrice: "4000", unit: "台" },
    { code: "13040300", name: "121瓶及以上红酒柜", taxRate: "20%", basePrice: "另行确定", unit: "台" },
    { code: "13050110", name: "波轮式", taxRate: "20%", basePrice: "1000", unit: "台" },
    { code: "13050120", name: "滚筒式", taxRate: "20%", basePrice: "3000", unit: "台" },
    { code: "13050200", name: "干衣机/烘干机", taxRate: "20%", basePrice: "2000", unit: "台" },
    { code: "13060000", name: "电视机", taxRate: "20%", basePrice: "另行确定", unit: "台" },
    { code: "13090000", name: "其他家用电器", taxRate: "20%", basePrice: "另行确定", unit: "台" },
    { code: "13990000", name: "家用电器配件、附件", taxRate: "20%", basePrice: "另行确定", unit: "件" },
    { code: "14010110", name: "一体式数字照相机", taxRate: "13%", basePrice: "2000", unit: "台" },
    { code: "14010121", name: "可拆卸式数字照相机", taxRate: "13%", basePrice: "7000", unit: "套" },
    { code: "14010122", name: "可拆卸式数字照相机机身", taxRate: "13%", basePrice: "5000", unit: "台" },
    { code: "14010123", name: "可拆卸式数字照相机镜头", taxRate: "20%", basePrice: "2000", unit: "个" },
    { code: "14010210", name: "反光式胶片照相机", taxRate: "20%", basePrice: "5000", unit: "台" },
    { code: "14010220", name: "一次成像照相机", taxRate: "20%", basePrice: "1000", unit: "台" },
    { code: "14010290", name: "其他照相机", taxRate: "20%", basePrice: "另行确定", unit: "台" },
    { code: "14020100", name: "电视摄像机", taxRate: "13%", basePrice: "另行确定", unit: "台" },
    { code: "14020200", name: "视频摄录一体机", taxRate: "13%", basePrice: "4000", unit: "台" },
    { code: "14030100", name: "其他摄影（像）类信息技术产品", taxRate: "13%", basePrice: "另行确定", unit: "台" },
    { code: "14030200", name: "其他摄影（像）设备", taxRate: "20%", basePrice: "另行确定", unit: "台" },
    { code: "14040110", name: "256G及以下数码存储卡", taxRate: "13%", basePrice: "100", unit: "个" },
    { code: "14040120", name: "256G以上1T以下数码存储卡", taxRate: "13%", basePrice: "400", unit: "个" },
    { code: "14040130", name: "1T及以上数码存储卡", taxRate: "13%", basePrice: "另行确定", unit: "个" },
    { code: "14040200", name: "闪光灯", taxRate: "20%", basePrice: "500", unit: "个" },
    { code: "14040300", name: "支架", taxRate: "20%", basePrice: "300", unit: "个" },
    { code: "14040400", name: "胶卷", taxRate: "20%", basePrice: "30", unit: "个" },
    { code: "14049910", name: "其他信息技术类摄影（像）设备配件、附件", taxRate: "13%", basePrice: "另行确定", unit: "件" },
    { code: "14049920", name: "其他摄影（像）设备配件、附件", taxRate: "20%", basePrice: "另行确定", unit: "件" },
    { code: "15010100", name: "录音笔", taxRate: "13%", basePrice: "200", unit: "台" },
    { code: "15010200", name: "录音机", taxRate: "13%", basePrice: "200", unit: "台" },
    { code: "15010300", name: "收音机", taxRate: "13%", basePrice: "200", unit: "台" },
    { code: "15010400", name: "MP3播放器（音频多媒体播放器）", taxRate: "13%", basePrice: "100", unit: "台" },
    { code: "15010500", name: "MP4播放器（视频多媒体播放器）", taxRate: "13%", basePrice: "500", unit: "台" },
    { code: "15010600", name: "电唱机（含便携式激光唱机）", taxRate: "13%", basePrice: "500", unit: "台" },
    { code: "15010700", name: "录、放像机及激光视盘机（LD、VCD、DVD等）", taxRate: "13%", basePrice: "500", unit: "台" },
    { code: "15010800", name: "（单）功能座（功放、调谐、均衡等）", taxRate: "20%", basePrice: "1000", unit: "台" },
    { code: "15010900", name: "音箱", taxRate: "13%", basePrice: "1000", unit: "个" },
    { code: "15011000", name: "便携式收音、录音、激光唱盘一体机", taxRate: "13%", basePrice: "1000", unit: "台" },
    { code: "15019910", name: "其他影音类信息技术产品", taxRate: "13%", basePrice: "另行确定", unit: "台" },
    { code: "15019990", name: "其他影音设备", taxRate: "20%", basePrice: "另行确定", unit: "台" },
    { code: "15020100", name: "耳机及耳塞机", taxRate: "13%", basePrice: "50", unit: "副" },
    { code: "15020200", name: "磁盘", taxRate: "13%", basePrice: "30", unit: "盘" },
    { code: "15020300", name: "磁带", taxRate: "13%", basePrice: "50", unit: "盘" },
    { code: "15020400", name: "半导体媒体", taxRate: "13%", basePrice: "30", unit: "张" },
    { code: "15020510", name: "已录制唱片", taxRate: "20%", basePrice: "50", unit: "张" },
    { code: "15020520", name: "其他唱片", taxRate: "13%", basePrice: "50", unit: "张" },
    { code: "15020600", name: "光学媒体", taxRate: "13%", basePrice: "另行确定", unit: "张" },
    { code: "15029910", name: "其他影音类信息技术产品配件、附件", taxRate: "13%", basePrice: "另行确定", unit: "个" },
    { code: "15029990", name: "其他影音设备配件、附件", taxRate: "20%", basePrice: "另行确定", unit: "个" },
    { code: "16010100", name: "台式个人计算机主机", taxRate: "13%", basePrice: "2000", unit: "台" },
    { code: "16010200", name: "主机、显示器一体机", taxRate: "13%", basePrice: "3000", unit: "台" },
    { code: "16010310", name: "键盘式笔记本电脑", taxRate: "13%", basePrice: "2000", unit: "台" },
    { code: "16010320", name: "触屏式笔记本电脑", taxRate: "13%", basePrice: "另行确定", unit: "台" },
    { code: "16010410", name: "主板", taxRate: "13%", basePrice: "500", unit: "块" },
    { code: "16010420", name: "中央处理器（CPU）", taxRate: "13%", basePrice: "500", unit: "个" },
    { code: "16010431", name: "16G及以下内存条", taxRate: "13%", basePrice: "200", unit: "条" },
    { code: "16010432", name: "16G以上内存条", taxRate: "13%", basePrice: "300", unit: "条" },
    { code: "16010440", name: "功能卡", taxRate: "13%", basePrice: "300", unit: "块" },
    { code: "16010490", name: "其他计算机配件", taxRate: "13%", basePrice: "另行确定", unit: "块" },
    { code: "16019900", name: "其他计算机", taxRate: "13%", basePrice: "另行确定", unit: "台" },
    { code: "16020100", name: "鼠标", taxRate: "13%", basePrice: "50", unit: "个" },
    { code: "16020200", name: "键盘", taxRate: "13%", basePrice: "80", unit: "个" },
    { code: "16020300", name: "音箱", taxRate: "13%", basePrice: "50", unit: "个" },
    { code: "16020411", name: "22英寸及以下液晶显示器", taxRate: "13%", basePrice: "500", unit: "台" },
    { code: "16020412", name: "22英寸以上，27英寸及以下液晶显示器", taxRate: "13%", basePrice: "1000", unit: "台" },
    { code: "16020412", name: "22英寸以上，27英寸及以下液晶显示器", taxRate: "13%", basePrice: "1000", unit: "台" },
    { code: "16020413", name: "27英寸以上液晶显示器", taxRate: "13%", basePrice: "另行确定", unit: "台" },
    { code: "16020490", name: "其他显示器", taxRate: "13%", basePrice: "另行确定", unit: "台" },
    { code: "16020511", name: "黑白激光打印机", taxRate: "13%", basePrice: "1000", unit: "台" },
    { code: "16020512", name: "彩色激光打印机", taxRate: "13%", basePrice: "3000", unit: "台" },
    { code: "16020520", name: "喷墨打印机", taxRate: "13%", basePrice: "500", unit: "台" },
    { code: "16020530", name: "针式打印机", taxRate: "13%", basePrice: "1000", unit: "台" },
    { code: "16020541", name: "喷墨多功能一体打印机", taxRate: "13%", basePrice: "600", unit: "台" },
    { code: "16020542", name: "激光多功能一体打印机", taxRate: "13%", basePrice: "1500", unit: "台" },
    { code: "16020590", name: "其他打印机", taxRate: "13%", basePrice: "另行确定", unit: "台" },
    { code: "16020600", name: "扫描仪", taxRate: "13%", basePrice: "1000", unit: "台" },
    { code: "16020700", name: "视频投影仪", taxRate: "13%", basePrice: "另行确定", unit: "台" },
    { code: "16020810", name: "光盘驱动器", taxRate: "13%", basePrice: "100", unit: "台" },
    { code: "16020890", name: "其他驱动器", taxRate: "13%", basePrice: "另行确定", unit: "台" },
    { code: "16020911", name: "存储容量2T及以下硬盘/移动硬盘", taxRate: "13%", basePrice: "400", unit: "个" },
    { code: "16020912", name: "存储容量2T以上8T以下硬盘/移动硬盘", taxRate: "13%", basePrice: "800", unit: "个" },
    { code: "16020913", name: "存储容量8T及以上硬盘/移动硬盘", taxRate: "13%", basePrice: "另行确定", unit: "个" },
    { code: "16020920", name: "U盘", taxRate: "13%", basePrice: "50", unit: "个" },
    { code: "16020990", name: "其他存储器", taxRate: "13%", basePrice: "另行确定", unit: "个" },
    { code: "16029900", name: "其他计算机外围设备及配件、附件", taxRate: "13%", basePrice: "另行确定", unit: "台" },
    { code: "16030100", name: "固定电话机", taxRate: "13%", basePrice: "200", unit: "台" },
    { code: "16030210", name: "键盘式手持移动电话机", taxRate: "13%", basePrice: "500", unit: "台" },
    { code: "16030220", name: "触屏式手持移动电话机", taxRate: "13%", basePrice: "另行确定", unit: "台" },
    { code: "16030300", name: "电话传真机", taxRate: "13%", basePrice: "1000", unit: "台" },
    { code: "16030400", name: "可视电话机", taxRate: "13%", basePrice: "1000", unit: "台" },
    { code: "16030500", name: "其他电话机", taxRate: "13%", basePrice: "另行确定", unit: "台" },
    { code: "16039900", name: "电话机配件、附件", taxRate: "13%", basePrice: "另行确定", unit: "件" },
    { code: "16040100", name: "智能手环、智能手表", taxRate: "13%", basePrice: "另行确定", unit: "只" },
    { code: "16040200", name: "智能眼镜", taxRate: "13%", basePrice: "另行确定", unit: "副" },
    { code: "16040300", name: "智能头显", taxRate: "13%", basePrice: "另行确定", unit: "台" },
    { code: "16049900", name: "其他智能穿戴设备及其配件、附件", taxRate: "13%", basePrice: "另行确定", unit: "件" },
    { code: "16990000", name: "其他家用信息技术产品", taxRate: "13%", basePrice: "另行确定", unit: "台" },
    { code: "17010000", name: "图书、报刊、期刊等出版物", taxRate: "13%", basePrice: "另行确定", unit: "本" },
    { code: "17020000", name: "其他印刷品", taxRate: "13%", basePrice: "另行确定", unit: "张" },
    { code: "18010000", name: "幻灯片", taxRate: "13%", basePrice: "10", unit: "片" },
    { code: "18020000", name: "录音带", taxRate: "13%", basePrice: "10", unit: "盘" },
    { code: "18030000", name: "录像带", taxRate: "13%", basePrice: "50", unit: "盘" },
    { code: "18990000", name: "其他教育专用影视资料", taxRate: "13%", basePrice: "另行确定", unit: "件" },
    { code: "19010110", name: "电子计算器", taxRate: "13%", basePrice: "200", unit: "个" },
    { code: "19010120", name: "电子字典/记事簿", taxRate: "13%", basePrice: "300", unit: "个" },
    { code: "19010130", name: "电子书", taxRate: "13%", basePrice: "800", unit: "台" },
    { code: "19010190", name: "其他文具类信息技术用品", taxRate: "13%", basePrice: "另行确定", unit: "个" },
    { code: "19010210", name: "笔", taxRate: "20%", basePrice: "另行确定", unit: "支" },
    { code: "19010290", name: "其他文具用品", taxRate: "20%", basePrice: "另行确定", unit: "件" },
    { code: "19020110", name: "单脚滑行车、踏板车", taxRate: "13%", basePrice: "100", unit: "个" },
    { code: "19020190", name: "其他带轮玩具", taxRate: "13%", basePrice: "另行确定", unit: "个" },
    { code: "19020200", name: "玩偶", taxRate: "13%", basePrice: "100", unit: "个" },
    { code: "19020300", name: "缩小（按比例缩小）的模型及类似娱乐用模型", taxRate: "13%", basePrice: "300", unit: "套" },
    { code: "19020400", name: "智力玩具", taxRate: "13%", basePrice: "100", unit: "套" },
    { code: "19020500", name: "玩具乐器", taxRate: "13%", basePrice: "100", unit: "个" },
    { code: "19029900", name: "其他玩具", taxRate: "13%", basePrice: "另行确定", unit: "件" },
    { code: "19030110", name: "便携式游戏机", taxRate: "13%", basePrice: "另行确定", unit: "台" },
    { code: "19030120", name: "电脑游戏机", taxRate: "13%", basePrice: "2000", unit: "台" },
    { code: "19030130", name: "其他游戏机", taxRate: "13%", basePrice: "另行确定", unit: "台" },
    { code: "19030191", name: "游戏碟、盘、卡", taxRate: "13%", basePrice: "60", unit: "张" },
    { code: "19030192", name: "游戏机遥控器、控制器", taxRate: "13%", basePrice: "200", unit: "个" },
    { code: "19030199", name: "其他游戏机配件、附件", taxRate: "13%", basePrice: "另行确定", unit: "件" },
    { code: "19030210", name: "纸牌游戏用品", taxRate: "13%", basePrice: "50", unit: "套" },
    { code: "19030220", name: "棋类产品", taxRate: "13%", basePrice: "50", unit: "套" },
    { code: "19030290", name: "其他桌上或室内游戏用品", taxRate: "13%", basePrice: "另行确定", unit: "件" },
    { code: "19030900", name: "游戏品的配件、附件", taxRate: "13%", basePrice: "另行确定", unit: "件" },
    { code: "19040110", name: "节日装饰品", taxRate: "13%", basePrice: "30", unit: "件" },
    { code: "19040120", name: "圣诞节传统用品", taxRate: "13%", basePrice: "50", unit: "件" },
    { code: "19040130", name: "化装舞会及类似场合用品", taxRate: "13%", basePrice: "20", unit: "件" },
    { code: "19040190", name: "其他节日用品", taxRate: "13%", basePrice: "另行确定", unit: "件" },
    { code: "19040200", name: "魔术道具及嬉戏品", taxRate: "13%", basePrice: "另行确定", unit: "件" },
    { code: "19040900", name: "其他娱乐用品", taxRate: "13%", basePrice: "另行确定", unit: "件" },
    { code: "20010100", name: "中国邮票、小型张、纪念封", taxRate: "20%", basePrice: "另行确定", unit: "张" },
    { code: "20010200", name: "港澳台、外国邮票", taxRate: "20%", basePrice: "5", unit: "张" },
    { code: "20010300", name: "港澳台、外国小型张、纪念封", taxRate: "20%", basePrice: "10", unit: "张" },
    { code: "20020000", name: "艺术品、收藏品", taxRate: "20%", basePrice: "另行确定", unit: "件" },
    { code: "21010100", name: "三角钢琴", taxRate: "20%", basePrice: "90000", unit: "架" },
    { code: "21010200", name: "立式钢琴", taxRate: "20%", basePrice: "15000", unit: "架" },
    { code: "21010300", name: "电子钢琴", taxRate: "20%", basePrice: "5000", unit: "架" },
    { code: "21019900", name: "其他钢琴", taxRate: "20%", basePrice: "另行确定", unit: "架" },
    { code: "21020100", name: "49键以下电子琴", taxRate: "20%", basePrice: "800", unit: "台" },
    { code: "21020200", name: "49键及以上电子琴", taxRate: "20%", basePrice: "3000", unit: "台" },
    { code: "21030000", name: "萨克斯", taxRate: "20%", basePrice: "10000", unit: "把" },
    { code: "21040000", name: "电子吉他", taxRate: "20%", basePrice: "2000", unit: "把" },
    { code: "21050000", name: "数码小提琴", taxRate: "20%", basePrice: "5000", unit: "把" },
    { code: "21060000", name: "长、短笛", taxRate: "20%", basePrice: "5000", unit: "支" },
    { code: "21070000", name: "单簧管", taxRate: "20%", basePrice: "4000", unit: "支" },
    { code: "21080000", name: "双簧管", taxRate: "20%", basePrice: "10000", unit: "支" },
    { code: "21090000", name: "古筝", taxRate: "20%", basePrice: "2000", unit: "架" },
    { code: "21990000", name: "其他乐器", taxRate: "20%", basePrice: "另行确定", unit: "件" },
    { code: "22010100", name: "球杆", taxRate: "50%", basePrice: "1000", unit: "根" },
    { code: "22010200", name: "球", taxRate: "50%", basePrice: "20", unit: "个" },
    { code: "22019900", name: "其他高尔夫球具", taxRate: "50%", basePrice: "另行确定", unit: "件" },
    { code: "22020100", name: "网球拍", taxRate: "20%", basePrice: "500", unit: "个" },
    { code: "22020200", name: "羽毛球拍", taxRate: "20%", basePrice: "300", unit: "个" },
    { code: "22029900", name: "其他运动器具", taxRate: "20%", basePrice: "另行确定", unit: "件" },
    { code: "22030100", name: "跑步机", taxRate: "20%", basePrice: "2000", unit: "件" },
    { code: "22030200", name: "健身车", taxRate: "20%", basePrice: "1000", unit: "件" },
    { code: "22030300", name: "综合训练器", taxRate: "20%", basePrice: "3000", unit: "件" },
    { code: "22039900", name: "其他多功能健身器具", taxRate: "20%", basePrice: "另行确定", unit: "件" },
    { code: "22040000", name: "钓鱼用品", taxRate: "20%", basePrice: "另行确定", unit: "件" },
    { code: "22990000", name: "其他运动用品", taxRate: "20%", basePrice: "另行确定", unit: "件" },
    { code: "23010000", name: "自行车", taxRate: "20%", basePrice: "500", unit: "辆" },
    { code: "23020000", name: "三轮车", taxRate: "20%", basePrice: "500", unit: "辆" },
    { code: "23030000", name: "婴孩车", taxRate: "20%", basePrice: "200", unit: "辆" },
    { code: "23090000", name: "自行车配件、附件", taxRate: "20%", basePrice: "另行确定", unit: "件" },
    { code: "24010000", name: "无汞原电池、金属氢化物镍蓄电池、锂原电池、锂离子蓄电池、太阳能电池、燃料电池和全钒液流电池", taxRate: "20%", basePrice: "另行确定", unit: "件" },
    { code: "24990000", name: "其他电池", taxRate: "50%", basePrice: "另行确定", unit: "件" },
    { code: "25000000", name: "其他物品", taxRate: "20%", basePrice: "另行确定", unit: "件" }
];

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    const tableBody = document.getElementById('table-body');
    const selectAllCheckbox = document.getElementById('select-all');
    const filterRadios = document.querySelectorAll('input[name="filter"]');
    const searchInput = document.getElementById('search-input');
    const totalTaxElement = document.querySelector('.total-tax');
    const moreInfoBtn = document.getElementById('more-info-btn');

    // 更多信息弹窗功能
    moreInfoBtn.addEventListener('click', function(e) {
        e.preventDefault();
        alert(`邮递物品税款辅助计算器说明

1. 使用方法：
   - 在"单位数量"列输入您携带的物品数量
   - 在"实际购买单价"列输入您购买物品的实际价格
   - 系统将根据海关规定自动计算税款
   
2. 税款计算规则：
   - 以物品的完税价格乘以相应税率得出应纳税额
   - 完税价格：以海关总署定期公布的《中华人民共和国进境物品完税价格表》为准
   - 税率：根据物品类别适用不同税率

3. 注意事项：
   - 邮递物品应以合理自用数量为限
   - 实际税款以海关审定结果为准
   - 本计算器仅为辅助工具，不作为缴税依据

4. 支持的物品分类：
   - 包括食品、饮料、烟、酒、纺织品、皮革制品、箱包鞋靴、钟表、饰品、化妆品、
     家用医疗器材、厨卫用具、家具、家用电器、信息技术产品、印刷品等共25大类

如有疑问，请联系海关咨询窗口。`);
    });

    // 渲染表格数据
    function renderTable(data) {
        tableBody.innerHTML = '';
        data.forEach(item => {
            const row = document.createElement('tr');
            row.className = 'item-row';
            row.dataset.code = item.code;
            row.dataset.name = item.name;

            row.innerHTML = `
                <td><input type="checkbox" class="item-checkbox"></td>
                <td>${item.code}</td>
                <td>${item.name}</td>
                <td>${item.taxRate}</td>
                <td>${item.basePrice}</td>
                <td><input type="number" class="quantity-input" min="0" placeholder="请输入" value="0"> ${item.unit}</td>
                <td><input type="number" class="price-input" min="0" placeholder="请录入10位以内物品价格" value="0"></td>
                <td class="tax-amount">0.00</td>
            `;
            tableBody.appendChild(row);

            // 获取行内元素
            const checkbox = row.querySelector('.item-checkbox');
            const quantityInput = row.querySelector('.quantity-input');
            const priceInput = row.querySelector('.price-input');
            const taxAmountCell = row.querySelector('.tax-amount');
            // 核心：实时计算单行税款的函数（无延迟）
            function updateRowTax() {
                // 提取计算所需数据
                const taxRateStr = item.taxRate.replace('%', ''); // 移除百分号
                const taxRate = parseFloat(taxRateStr) / 100; // 税率转小数
                const quantity = parseFloat(quantityInput.value) || 0; // 数量
                const customPrice = parseFloat(priceInput.value) || 0; // 自定义价格
                const basePriceStr = item.basePrice === '另行确定' ? 0 : parseFloat(item.basePrice); // 基准价格

                // 确定计税价格：优先使用自定义价格，无则用基准价格
                const taxPrice = customPrice > 0 ? customPrice : basePriceStr;

                // 如果计税价格为0，税款直接为 0
                if (taxPrice === 0) {
                    taxAmountCell.textContent = '0.00';
                    return;
                }

                // 计算单行税款
                const rowTax = (taxPrice * quantity) * taxRate;
                // 立即更新单元格（保留 2 位小数）
                taxAmountCell.textContent = rowTax.toFixed(2);
            }
            // 绑定所有触发实时更新的事件（无延迟）
            // input事件：输入时实时触发
            quantityInput.addEventListener('input', updateRowTax);
            priceInput.addEventListener('input', updateRowTax);
            // change事件：勾选/取消勾选时触发
            checkbox.addEventListener('change', updateRowTax);
            // 失去焦点时也触发（防止输入异常）
            quantityInput.addEventListener('blur', updateRowTax);
            priceInput.addEventListener('blur', updateRowTax);
        });
    }

    // 初始化渲染表格
    renderTable(itemData);

    // 一键汇总：计算所有输入了数字的行（不论是否勾选）
    document.getElementById('calculate-btn').addEventListener('click', function() {
        let total = 0;
        // 遍历所有行，只要输入了数量或价格就计算
        document.querySelectorAll('.item-row').forEach(row => {
            const quantityInput = row.querySelector('.quantity-input');
            const priceInput = row.querySelector('.price-input');
            const taxAmountCell = row.querySelector('.tax-amount');

            const quantity = parseFloat(quantityInput.value) || 0;
            const customPrice = parseFloat(priceInput.value) || 0;

            // 只要有输入数量或价格，就参与计算
            if (quantity > 0 || customPrice > 0) {
                const taxAmount = parseFloat(taxAmountCell.textContent) || 0;
                total += taxAmount;
            }
        });
        // 更新总计显示
        totalTaxElement.textContent = `¥${total.toFixed(2)}`;
    });

    // 全选/全不选
    selectAllCheckbox.addEventListener('change', function() {
        const isChecked = selectAllCheckbox.checked;
        document.querySelectorAll('.item-checkbox').forEach(checkbox => checkbox.checked = isChecked);
    });

    // 搜索和筛选功能
    function highlightSearch() {
        const keyword = searchInput.value.toLowerCase().trim();
        document.querySelectorAll('.item-row').forEach(row => {
            const code = row.dataset.code.toLowerCase();
            const name = row.dataset.name.toLowerCase();
            // 只有在有关键词时才进行匹配判断，但不添加高亮
            const matchesSearch = keyword === '' || code.includes(keyword) || name.includes(keyword);

            // 筛选逻辑：根据筛选类型决定是否显示该行
            const filterType = document.querySelector('input[name="filter"]:checked').value;
            const isChecked = row.querySelector('.item-checkbox').checked;
            
            // 移除之前的opacity样式
            row.style.removeProperty('opacity');
            
            switch(filterType) {
                case 'selected':
                    // 只显示已勾选的行（且匹配搜索词）
                    row.style.display = isChecked && matchesSearch ? '' : 'none';
                    break;
                case 'unselected':
                    // 只显示未勾选的行（且匹配搜索词）
                    row.style.display = !isChecked && matchesSearch ? '' : 'none';
                    break;
                default: // all
                    // 显示所有行（但仍然应用搜索过滤）
                    row.style.display = matchesSearch ? '' : 'none';
                    break;
            }
        });
    }

    // 绑定搜索和筛选事件
    searchInput.addEventListener('input', highlightSearch);
    filterRadios.forEach(radio => radio.addEventListener('change', highlightSearch));
});