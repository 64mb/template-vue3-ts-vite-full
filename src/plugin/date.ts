import type { ElDatePicker } from 'element-plus'
import dayjs, { ConfigType, Dayjs } from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import objectSupport from 'dayjs/plugin/objectSupport'

import { LocaleType, useI18n } from '~/i18n'

dayjs.extend(localizedFormat)
dayjs.extend(objectSupport)

type DateParams = {
  seconds?: boolean
  milliseconds?: boolean
  withoutTime?: boolean
  onlyTime?: boolean
  strictTime?: boolean
  locale?: LocaleType
}

const format = (seed: ConfigType, params: DateParams = {}) => {
  const { i18n } = useI18n()

  if (seed == null) {
    return i18n.t('date.not_defined')
  }

  const { seconds, milliseconds, withoutTime, onlyTime, strictTime, locale } = params

  let temp: Dayjs | null = null
  if (typeof seed === 'number') {
    temp = dayjs(seed < 9999999999 ? seed * 1000 : seed)
  } else {
    temp = dayjs(seed)
  }

  if (locale) {
    temp = temp.locale(locale)
  }

  if (withoutTime) {
    return temp.format('L')
  }

  if (milliseconds) {
    return temp.format(`${onlyTime ? '' : 'L '}HH:mm:ss.SSS`)
  }

  const timeFormat = strictTime === false ? `LT${seconds ? 'S' : ''}` : `HH:mm${seconds ? ':ss' : ''}`

  return temp.format(`${onlyTime ? '' : 'L '}${timeFormat}`)
}

const shortcut = () => {
  const { i18n } = useI18n()

  return [
    {
      text: i18n.t('date.last_day'),
      onClick(picker: typeof ElDatePicker) {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24)
        picker.$emit('pick', [start, end])
      },
    },
    {
      text: i18n.t('date.last_three_days'),
      onClick(picker: typeof ElDatePicker) {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 3)
        picker.$emit('pick', [start, end])
      },
    },
    {
      text: i18n.t('date.last_week'),
      onClick(picker: typeof ElDatePicker) {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
        picker.$emit('pick', [start, end])
      },
    },
    {
      text: i18n.t('date.last_month'),
      onClick(picker: typeof ElDatePicker) {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
        picker.$emit('pick', [start, end])
      },
    },
    {
      text: i18n.t('date.last_three_month'),
      onClick(picker: typeof ElDatePicker) {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
        picker.$emit('pick', [start, end])
      },
    },
  ]
}

export const useDate = () => {
  return {
    format,
    shortcut,
  }
}
