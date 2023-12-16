import { basehub as createClient } from 'basehub'

export const basehub = createClient({ next: { revalidate: 1 } })
