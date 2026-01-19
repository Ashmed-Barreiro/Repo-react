import { NavLink } from 'react-router-dom'

const linkBase = 'px-3 py-2 rounded-md text-sm font-semibold transition-colors'
const linkNormal = 'text-textBlack hover:text-primaryGreen'
const linkActive = 'bg-primaryGreen text-white'

export default function Header() {
  return (
    <div className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primaryGreen">HealthyBites</h1>

        <nav aria-label="Menú de navegació">
          <ul className="flex gap-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : linkNormal}`
                }
                end
              >
                Inici
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/receptes"
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : linkNormal}`
                }
              >
                Receptes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/media"
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : linkNormal}`
                }
              >
                Multimèdia
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
