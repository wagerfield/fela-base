export interface ListRuleOptions {
  padding?: any
  margin?: any
  style?: any
}

export default ({
  style = "none",
  padding = 0,
  margin = 0
}: ListRuleOptions = {}) => ({
  listStyle: style,
  padding,
  margin
})
