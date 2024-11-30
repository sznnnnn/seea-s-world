export * from './engineers';
export * from './equipment';

// 统一的数据类型定义
export const DataType = {
  ENGINEER: 'engineer',
  EQUIPMENT: 'equipment',
  ORDER: 'order'
};

// 统一的状态类型定义
export const StatusType = {
  NORMAL: 'normal',
  FAULT: 'fault',
  MAINTENANCE: 'maintenance',
  FREE: 'free',
  BUSY: 'busy'
};

// 统一的设备类型定义
export const DeviceType = {
  EXCAVATOR: 'excavator',
  LOADER: 'loader',
  CRANE: 'crane',
  GENERAL: 'general'
};

// 统一的工单状态定义
export const OrderStatus = {
  PENDING: 'pending',       // 待分配
  ASSIGNED: 'assigned',     // 已分配
  PROCESSING: 'processing', // 处理中
  COMPLETED: 'completed',   // 已完成
  CANCELLED: 'cancelled'    // 已取消
}; 