import { Props, RuleName, RuleDefaults } from "../types"

let defaults: RuleDefaults

export const setRuleDefaults = (ruleDefaults: RuleDefaults) =>
  (defaults = ruleDefaults)

export const getRuleDefaults = (name: RuleName) =>
  defaults ? defaults[name] : undefined

export const getRuleProps = <T extends Props>(
  name: RuleName,
  ruleDefaults?: T,
  ruleProps?: T
): T =>
  // tslint:disable-next-line
  Object.assign({}, ruleDefaults, getRuleDefaults(name), ruleProps)
