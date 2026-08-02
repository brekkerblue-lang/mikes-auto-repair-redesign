import {
  LuPhone,
  LuMapPin,
  LuClock,
  LuMail,
  LuStar,
  LuArrowRight,
  LuMenu,
  LuX,
  LuWrench,
  LuShieldCheck,
  LuUsers,
  LuQuote,
  LuCheck,
  LuChevronDown,
  LuGauge,
  LuDisc,
  LuCog,
  LuCarFront,
  LuCalendarCheck2,
  LuSnowflake,
  LuDollarSign,
  LuMapPinned,
  LuAward,
} from 'react-icons/lu'

const registry = {
  phone: LuPhone,
  'map-pin': LuMapPin,
  clock: LuClock,
  mail: LuMail,
  star: LuStar,
  arrow: LuArrowRight,
  menu: LuMenu,
  x: LuX,
  wrench: LuWrench,
  shield: LuShieldCheck,
  users: LuUsers,
  quote: LuQuote,
  check: LuCheck,
  'chevron-down': LuChevronDown,
  gauge: LuGauge,
  disc: LuDisc,
  cog: LuCog,
  'car-front': LuCarFront,
  'calendar-check': LuCalendarCheck2,
  snowflake: LuSnowflake,
  'dollar-sign': LuDollarSign,
  'map-pinned': LuMapPinned,
  award: LuAward,
}

export function Icon({ name, className }) {
  const Cmp = registry[name]
  if (!Cmp) return null
  return <Cmp className={className} aria-hidden="true" />
}
