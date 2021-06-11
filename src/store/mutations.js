export default {
  // 修改arr1
  setArr1(state, payload) {
    state.arr1 = payload
  },
  // 修改arr2
  setArr2(state, payload) {
    state.arr2 = payload
  },
  // 修改arr3
  setArr3(state, payload) {
    state.arr3 = payload
  },
  setTableFields(state, payload) {
    state.tableFields = payload
  },
  // 重名名字段
  renameField(state, payload) {
    const { tableFields } = state
    const { newColumn, oldColumn } = payload
    tableFields.map(item => {
      if (item.column_name === oldColumn) {
        item.column_name = newColumn
      }
    })
  }
  // 在拖拽开始的时候往arr里添加一个虚拟的元素, 来解决拖拽字段到字段区 字段不显示的问题
  // addVirtualNode(state, payload) {
  //   if(payload === 'shujubiao') {
  //     state.arr1.push('')
  //   }
  //   if(payload === 'other') {

  //   }
  // }
}