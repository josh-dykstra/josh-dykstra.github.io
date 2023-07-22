import classnames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '../../styles/components/navigation.module.scss';

function isActiveRoute(currentRoute: string, targetRoute: string) {
  // Hacky logic that's certain to break :)
  if (targetRoute === '/') {
    return currentRoute === '/';
  }

  return currentRoute.includes(targetRoute);
}

interface NavLinkProps {
  children: string;
  href: string;
}

export function NavLink(props: NavLinkProps) {
  const router = useRouter();
  const { href, children } = props;

  return (
    <Link href={href}>
      <span
        className={classnames(
          styles.navLink,
          isActiveRoute(router.asPath, href) && styles.navLinkActive,
        )}
      >
        {children}
      </span>
    </Link>
  );
}

export default function Navigation() {
  return (
    <nav className={styles.container}>
      <NavLink href="/" key="/">Home</NavLink>
      <NavLink href="/posts" key="/posts">Posts</NavLink>
    </nav>
  );
}
