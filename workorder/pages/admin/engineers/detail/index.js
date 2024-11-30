Page({
  data: {
    engineerId: '',
    engineer: null
  },

  onLoad(options) {
    const { id } = options;
    this.setData({ engineerId: id });
    this.loadEngineerDetail();
  },

  loadEngineerDetail() {
    const engineersData = require('../../../../data/engineers');
    const engineer = engineersData.engineers.find(e => e.id === parseInt(this.data.engineerId));
    if (engineer) {
      this.setData({ engineer });
    }
  }
}); 