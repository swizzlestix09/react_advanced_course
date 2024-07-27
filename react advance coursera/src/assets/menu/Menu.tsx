
import { ReactNode } from "react"

type Props = {
  children: ReactNode,
}

export default function Menu({ children }: Props) {
  /**
   * Note: leave the div className="menu" here and render
   * the children inside that div. Notice this component will become
   * significantly simpler by doing so 💡
   *
   * Also, notice our state will be broken after we make
   * these changes - that's okay! We'll fix it soon. In the meantime,
   * leave the useState() call and toggle() definitions alone. Your
   * new version won't be using them, but we'll come back to them
   * later.
   */

  return (
    <div className="menu">
      {children}
    </div>
  )
}


// # Compound Components Quiz

// 1. How would you explain the concept of compound components in React to someone who
//    only knows the very basics of React?
// making a set of components work together for keeping code clean and modular. Allows different parts of the component to be defined seperately but used together in a coordinated fashion. Like a sandwich:
// Bread - main wrapper / component that holds eberything together
//ingredients - child components that go inside parent / wrapper


// 2. What are some examples of HTML elements that work together to add functionality
//    or styling to each other?
// menus, inputs, ordered / unordered lits, select & option elements , table


// 3. How can compound components help you avoid having to drill props multiple levels
//    down?
// compounding component places all components being used on one page, destroying potential multiple levels of code that would create prop drilling - because they use the concept of children


// Instructor Answers:

// # Compound Components Quiz

// 1. How would you explain the concept of compound components in React to someone who
//    only knows the very basics of React?

// Components that work together to accomplish a greater objective than might make
// sense to try and accomplish with a single component alone.


// 2. What are some examples of HTML elements that work together to add functionality
//    or styling to each other?

// <ul> & <li>, <select> & <option>, <table> & all the other table elements


// 3. How can compound components help you avoid having to drill props multiple levels
//    down?

// Compound component "flatten" the heirarchy that I would otherwise need to pass
// props through. Since I need to provide the children to render, the parent-most
// component has direct access to those "grandchild" components, to which it can
// pass whatever props it needs to pass directly.