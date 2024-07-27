
type Props = {
  items: string[],
}
export default function MenuDropdown({ items }: Props) {
  return (
    <div className="menu-dropdown">
      {items.map(
        (item: string) => (
          <div
            className="menu-item"
            key={item}
          >
            {item}
          </div>
        )
      )}
    </div>
  )
}