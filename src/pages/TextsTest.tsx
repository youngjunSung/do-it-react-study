import * as D from '../data'

export function TextsTest() {
  return (
    <>
      <p className="break-words text-[1rem] bg-red-200 border-2 border-purple-600 border-solid text-blue-50 line-clamp-2">
        {D.randomParagraphs(2)}
      </p>
        <img src={D.randomAvatar()} alt="" />
    </>
  )
}
