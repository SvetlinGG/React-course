import { Link } from 'react-router';

export default function Navbar() {
  const links = [
    { label: "Home", href: "/" },
    { label: "UncontrolledForm", href: "/uncontrolled-form" },
    { label: "ControlledForm", href: "/controlled-form" },
    { label: "UnifiedControlledForm", href: "/unified-controlled-form" },
    { label: "UseRef", href: "/ref" },
    { label: "Timer", href: "/timer" },

  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to='/' className="text-xl font-bold text-gray-600">
          My App
        </Link>

        <ul className="flex items-center gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}