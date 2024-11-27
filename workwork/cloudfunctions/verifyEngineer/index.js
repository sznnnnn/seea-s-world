const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()

/**
 * 验证工程师手机号
 * @param {Object} event - 云函数调用参数
 * @param {string} event.phone - 工程师手机号
 */
exports.main = async (event, context) => {
  console.log('开始执行工程师验证云函数，手机号：', event.phone);
  
  try {
    // 查询工程师信息
    const { data } = await db.collection('engineers')
      .where({
        phone: event.phone,
        status: '在职'  // 只验证在职工程师
      })
      .get();
    
    console.log('查询结果：', data);
    
    // 如果找到工程师
    if (data && data.length > 0) {
      const engineer = data[0];
      console.log('工程师验证成功：', engineer.name);
      
      return {
        verified: true,
        engineer: {
          name: engineer.name,
          level: engineer.level,
          type: engineer.type
        }
      };
    }
    
    // 未找到工程师
    console.log('未找到对应工程师');
    return {
      verified: false,
      engineer: null
    };
    
  } catch (error) {
    console.error('工程师验证失败');
    console.error('错误详情：', error);
    throw error;
  }
}; 