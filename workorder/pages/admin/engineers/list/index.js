// pages/admin/engineers/list/index.js
const engineersData = require('../../../../data/engineers');

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
      { text: '电工', value: 'electrical' }
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
      engineers: engineersData.engineers
    });
  },

  // 搜索
  onSearch(e) {
    const searchValue = e.detail.toLowerCase();
    const filteredEngineers = engineersData.engineers.filter(eng => 
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
    const filteredEngineers = type ? engineersData.getEngineersByType(type) : engineersData.engineers;
    this.setData({
      type,
      engineers: filteredEngineers
    });
  },

  // 等级筛选
  onLevelChange(e) {
    const level = e.detail;
    const filteredEngineers = level ? engineersData.getEngineersByLevel(level) : engineersData.engineers;
    this.setData({
      level,
      engineers: filteredEngineers
    });
  },

  // 复制电话
  onCopyPhone(e) {
    const { phone } = e.currentTarget.dataset;
    wx.setClipboardData({
      data: phone,
      success: () => {
        wx.showToast({
          title: '电话已复制',
          icon: 'success'
        });
      }
    });
  },

  // 查看详情
  onViewDetail(e) {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/admin/engineers/detail/index?id=${id}`
    });
  },

  // 分配工单
  onAssignOrder(e) {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/admin/orders/create/index?engineerId=${id}`
    });
  }
});