
import { ReactNode } from "react";
import { IoPersonSharp } from "react-icons/io5"

/**
 * Challenge: Create a flexible Avatar component!
 *
 * Check the slides for notes on how the component
 * should be used.
 *
 * Each of the 3 different avatars should have a
 * wrapper div with the classes below:
 *
 * With image: `avatar`
 * With initials: `avatar avatar-letters`
 * Anonymous: `avatar avatar-icon`
 *
 * E.g. <Avatar>BZ</Avatar> should render
 * <div className="avatar avatar-letters">...</div>
 *
 * Check the hints.md file if you are really stuck.
 *
 * EXTRA CREDIT:
 * Randomize the background color of the non-image
 * avatars. Check the styles.css for some pre-written
 * color classes to add to the wrapper div.
 */
type Props = {
  children?: ReactNode,
  src?: string,
  alt?: string,
}

type Colors = 'navy' | 'pink' | 'red' | 'blue' | 'green'

const COLORS: Colors[] = ['navy', 'pink', 'red', 'blue', 'green']

export default function Avatar({ alt, src, children }: Props) {

  if (src) {
    return (
      <figure className={`avatar`} >
        <img src={src} alt={`${alt}`} />
      </figure >
    )
  } else {

    const selectedColor: Colors = COLORS.reduce((selected, item) => {
      return Math.random() < 1 / (COLORS.length) ? item : selected;
    }, COLORS[0]);

    return (
      <figure className={`avatar ${children && 'avatar-letters'} ${selectedColor} `} >
        {children ?? <IoPersonSharp />}
      </figure >
    )
  }
}