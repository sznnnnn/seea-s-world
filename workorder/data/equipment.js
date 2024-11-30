// 设备类型枚举
export const EquipmentType = {
  EXCAVATOR: 'excavator',    // 挖掘机
  LOADER: 'loader',          // 装载机
  CRANE: 'crane',            // 起重机
  GENERAL: 'general'         // 通用设备
};

// 设备状态枚举
export const EquipmentStatus = {
  NORMAL: 'normal',          // 正常
  FAULT: 'fault',           // 故障
  MAINTENANCE: 'maintenance' // 维护中
};

// 设备数据
export const equipment = [
  {
    id: 1,
    model: 'PC200-8',
    type: EquipmentType.EXCAVATOR,
    manufacturer: '小松',
    purchaseDate: '2022-01-01',
    status: EquipmentStatus.NORMAL,
    lastMaintenance: '2024-02-15',
    nextMaintenance: '2024-05-15',
    specs: {
      power: '103kW',
      weight: '20.5t',
      bucket: '0.8m³'
    }
  },
  {
    id: 2,
    model: 'ZL50CN',
    type: EquipmentType.LOADER,
    manufacturer: '柳工',
    purchaseDate: '2022-03-15',
    status: EquipmentStatus.NORMAL,
    lastMaintenance: '2024-01-20',
    nextMaintenance: '2024-04-20',
    specs: {
      power: '162kW',
      weight: '17t',
      bucket: '3.0m³'
    }
  },
  {
    id: 3,
    model: 'QY25K5',
    type: EquipmentType.CRANE,
    manufacturer: '徐工',
    purchaseDate: '2022-06-20',
    status: EquipmentStatus.MAINTENANCE,
    lastMaintenance: '2024-03-01',
    nextMaintenance: '2024-06-01',
    specs: {
      power: '213kW',
      weight: '31t',
      maxLoad: '25t'
    }
  }
];

// 根据类型获取设备列表
export function getEquipmentByType(type) {
  return equipment.filter(equip => equip.type === type);
}

// 根据状态获取设备列表
export function getEquipmentByStatus(status) {
  return equipment.filter(equip => equip.status === status);
}

// 获取需要维护的设备列表
export function getMaintenanceEquipment() {
  const now = new Date();
  return equipment.filter(equip => {
    const nextMaintenance = new Date(equip.nextMaintenance);
    const diffDays = Math.ceil((nextMaintenance - now) / (1000 * 60 * 60 * 24));
    return diffDays <= 30; // 返回30天内需要维护的设备
  });
} 