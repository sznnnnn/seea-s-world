// pages/admin/engineer-manage/index.js
import { 
  engineers, 
  getEngineersByType, 
  getEngineersByLevel 
} from '../../../data/engineers';

Page({
  data: {
    searchValue: '',
    type: '',
    level: '',
    engineers: [],
    typeOptions: [
      { text: '全部', value: '' },
      { text: '挖机', value: 'excavator' },
      { text: '装载机', value: 'loader' },
      { text: '电工', value: 'electrical' },
      { text: '通用', value: 'general' }
    ],
    levelOptions: [
      { text: '全部', value: '' },
      { text: '中级技师', value: 'mid' },
      { text: '初级技师', value: 'junior' },
      { text: '实习技师', value: 'trainee' }
    ]
  },

  onLoad() {
    this.setData({
      engineers: engineers
    });
  },

  // 搜索
  onSearch(e) {
    const searchValue = e.detail.toLowerCase();
    const filteredEngineers = engineers.filter(eng => 
      eng.name.includes(searchValue) || 
      eng.phone.includes(searchValue)
    );
    this.setData({
      searchValue,
      engineers: filteredEngineers
    });
  },

  // 类型筛选
  onTypeChange(e) {
    const type = e.detail;
    const filteredEngineers = type ? getEngineersByType(type) : engineers;
    this.setData({
      type,
      engineers: filteredEngineers
    });
  },

  // 等级筛选
  onLevelChange(e) {
    const level = e.detail;
    const filteredEngineers = level ? getEngineersByLevel(level) : engineers;
    this.setData({
      level,
      engineers: filteredEngineers
    });
  },

  // 拨打电话
  onCall(e) {
    const { phone } = e.currentTarget.dataset;
    wx.makePhoneCall({
      phoneNumber: phone
    });
  },

  // 分配工单
  onAssignOrder(e) {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/admin/order-create/index?engineerId=${id}`
    });
  }
});