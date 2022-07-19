type complete = String[];
type incomplete = String[];


interface storeType {
    complete: complete,
    imcomplete: incomplete,
}
export type {complete, incomplete}
export default storeType;