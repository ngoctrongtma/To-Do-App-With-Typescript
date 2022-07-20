type complete = String[]
type incomplete = String[]

interface storeType {
    complete: complete
    incomplete: incomplete
}
export type { complete, incomplete }
export default storeType
