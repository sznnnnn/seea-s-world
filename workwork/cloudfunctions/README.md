# 后端云函数文档

本文档详细说明了所有云函数的功能、参数和返回值。

## 设备管理相关云函数

### 1. getEquipments - 获取设备列表
- **功能**：获取所有设备的列表信息
- **入参**：无
- **返回值**：
  ```javascript
  [
    {
      _id: "设备ID",
      name: "设备名称",
      type: "设备类型",
      // ... 其他设备信息
    }
  ]
  ```
- **使用示例**：
  ```javascript
  const result = await wx.cloud.callFunction({
    name: 'getEquipments'
  });
  ```

### 2. addEquipment - 添加新设备
- **功能**：添加一个新的设备到数据库
- **入参**：
  ```javascript
  {
    name: "设备名称",
    type: "设备类型",
    // ... 其他设备信息
  }
  ```
- **返回值**：
  ```javascript
  {
    _id: "新创建的设备ID"
  }
  ```
- **使用示例**：
  ```javascript
  const result = await wx.cloud.callFunction({
    name: 'addEquipment',
    data: {
      name: "测试设备",
      type: "装载机"
    }
  });
  ```

### 3. updateEquipment - 更新设备信息
- **功能**：更新指定设备的信息
- **入参**：
  ```javascript
  {
    id: "设备ID",
    // 要更新的字段
    name: "新的设备名称",
    type: "新的设备类型"
  }
  ```
- **返回值**：
  ```javascript
  {
    updated: true,
    stats: { updated: 1 }
  }
  ```
- **使用示例**：
  ```javascript
  const result = await wx.cloud.callFunction({
    name: 'updateEquipment',
    data: {
      id: "设备ID",
      name: "新名称"
    }
  });
  ```

### 4. deleteEquipment - 删除设备
- **功能**：从数据库中删除指定的设备
- **入参**：
  ```javascript
  {
    id: "要删除的设备ID"
  }
  ```
- **返回值**：
  ```javascript
  {
    deleted: true,
    stats: { removed: 1 }
  }
  ```
- **使用示例**：
  ```javascript
  const result = await wx.cloud.callFunction({
    name: 'deleteEquipment',
    data: {
      id: "设备ID"
    }
  });
  ```

## 数据库集合结构

### equipments 集合 

### engineers 集合
```javascript
{
  _id: "工程师ID",          // 系统自动生成
  name: "工程师姓名",       // 字符串
  phone: "手机号",         // 字符串，用于验证身份
  level: "技师等级",       // 字符串：初级技师/中级技师
  type: "专业类型",        // 字符串：挖机/装机/电工/综合
  status: "状态",          // 字符串：在职/离职
  createTime: Date,        // 创建时间
  updateTime: Date         // 最后更新时间
}
```

### 5. verifyEngineer - 验证工程师身份
- **功能**：验证工程师手机号，确认是否为授权工程师
- **入参**：
  ```javascript
  {
    phone: "工程师手机号"
  }
  ```
- **返回值**：
  ```javascript
  {
    verified: true/false,    // 是否验证通过
    engineer: {              // 如果验证通过，返回工程师信息
      name: "工程师姓名",
      level: "技师等级",
      type: "专业类型"
    }
  }
  ```
- **使用示例**：
  ```javascript
  const result = await wx.cloud.callFunction({
    name: 'verifyEngineer',
    data: {
      phone: "13929620127"
    }
  });
  ```

## 初始工程师数据
```javascript
[
  {
    name: "张星",
    phone: "13929620127",
    level: "中级技师",
    type: "挖机"
  },
  {
    name: "古松",
    phone: "13535359565",
    level: "中级技师",
    type: "装机"
  },
  {
    name: "游咏锐",
    phone: "18350642423",
    level: "初级技师",
    type: "电工"
  },
  {
    name: "叶世湾",
    phone: "17819275852",
    level: "初级技师",
    type: "挖机"
  },
  {
    name: "邓少敏",
    phone: "13707998648",
    level: "初级技师",
    type: "装机综合"
  },
  {
    name: "杨豪",
    phone: "15591608769",
    level: "初级技师",
    type: "装机"
  },
  {
    name: "林泽权",
    phone: "15323665078",
    level: "初级技师",
    type: "挖机"
  },
  {
    name: "刘星",
    phone: "15679678528",
    level: "实习技师",
    type: "装挖"
  },
  {
    name: "李波",
    phone: "19083196293",
    level: "初级技师",
    type: "装机"
  },
  {
    name: "赖德福",
    phone: "18979933091",
    level: "初级技师",
    type: "综合"
  }
]
```

## 注意事项
1. 所有云函数都有完整的错误日志记录
2. 工程师手机号用于身份验证，需要严格保密
3. 数据库操作都有访问限制，确保数据安全
4. 工程师信息的修改需要管理员权限