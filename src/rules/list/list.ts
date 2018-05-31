export interface ListRuleProps {
  padding?: any
  margin?: any
  style?: any
}

export default ({
  style = "none",
  padding = 0,
  margin = 0
}: ListRuleProps = {}) => ({
  listStyle: style,
  padding,
  margin
})
