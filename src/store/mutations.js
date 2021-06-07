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
  // 在拖拽开始的时候往arr里添加一个虚拟的元素, 来解决拖拽字段到字段区 字段不显示的问题
  // addVirtualNode(state, payload) {
  //   if(payload === 'shujubiao') {
  //     state.arr1.push('')
  //   }
  //   if(payload === 'other') {

  //   }
  // }
}