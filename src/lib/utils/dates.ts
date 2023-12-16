// covert date to eg: April 1
// short month name
export const dateToMonthDay = (date: string) => {
  const d = new Date(date)
  const month = d
    .toLocaleString('default', { month: 'short', timeZone: 'UTC' })
    .slice(0, 3)
  const day = d.getUTCDate()
  return `${month} ${day}`
}

//covert day to eg: JUNE 07, 2023

export const dateToFullDate = (date: string) => {
  const d = new Date(date)
  const month = d
    .toLocaleString('default', { month: 'long', timeZone: 'UTC' })
    .toUpperCase()
  const day = d.getUTCDate()
  const year = d.getUTCFullYear()
  return `${month} ${day}, ${year}`
}
