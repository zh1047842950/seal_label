export const changeCommonData = async (state: any, payload: any) => {
  Object.assign(state, payload)
}
export const getPaginationData = async (state: any, payload: any) => {
  const {listData} = state
  state.listData = [...listData, ...payload]
  // state.tableData = payload
}
