import Button from "../../Button"

type Props = {
  buttonText: string,
  onClick: () => void
}
export default function MenuButton({ buttonText, onClick }: Props) {
  return (
    <Button onClick={onClick}>{buttonText}</Button>
  )
}