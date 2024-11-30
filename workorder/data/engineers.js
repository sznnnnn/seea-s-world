// 工程师数据
const engineers = [
  {
    id: 1,
    name: '张星',
    level: 'mid', // 中级技师
    type: 'excavator', // 挖机
    phone: '13929620127',
    status: 'free', // 空闲
    skills: ['液压系统', '发动机']
  },
  {
    id: 2,
    name: '古松',
    level: 'mid', // 中级技师
    type: 'loader', // 装载机
    phone: '13535359565',
    status: 'busy', // 忙碌
    skills: ['装载机整车维修']
  },
  {
    id: 3,
    name: '游咏锐',
    level: 'junior', // 初级技师
    type: 'electrical', // 电工
    phone: '18350642423',
    skills: ['装挖整车电路系统', '空调系统']
  },
  {
    id: 4,
    name: '叶世湾',
    level: 'junior', // 初级技师
    type: 'excavator', // 挖机
    phone: '17819275852',
    skills: ['挖机液压系统', '底盘件系统']
  },
  {
    id: 5,
    name: '邓少敏',
    level: 'junior', // 初级技师
    type: 'loader', // 装载机
    phone: '13707998648',
    skills: ['装载机整车维修', '发动机系统']
  },
  {
    id: 6,
    name: '杨豪',
    level: 'junior', // 初级技师
    type: 'loader', // 装载机
    phone: '15591608769',
    skills: ['装挖初级保养检修', '空调系统']
  },
  {
    id: 7,
    name: '林泽权',
    level: 'junior', // 初级技师
    type: 'excavator', // 挖机
    phone: '15323665078',
    skills: ['装挖初级保养检修', '破碎锤板块']
  },
  {
    id: 8,
    name: '刘星',
    level: 'trainee', // 实习技师
    type: 'loader', // 装载机
    phone: '15679678528',
    skills: ['装挖初级保养检修']
  },
  {
    id: 9,
    name: '李波',
    level: 'junior', // 初级技师
    type: 'loader', // 装载机
    phone: '19083196293',
    skills: ['装挖初级保养检修', '镗孔一体', '液压清洗过滤']
  },
  {
    id: 10,
    name: '赖德福',
    level: 'junior', // 初级技师
    type: 'loader', // 装载机
    phone: '18979933091',
    skills: ['综合性技术支持', '全方位顾问']
  }
];

// 根据技能等级获取工程师
function getEngineersByLevel(level) {
  return engineers.filter(eng => eng.level === level);
}

// 根据设备类型获取工程师
function getEngineersByType(type) {
  return engineers.filter(eng => eng.type === type);
}

module.exports = {
  engineers,
  getEngineersByLevel,
  getEngineersByType
}; 