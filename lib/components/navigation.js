import classnames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import styles from '../../styles/components/navigation.module.scss';

function isActiveRoute(currentRoute, targetRoute) {
  // Hacky logic that's certain to break :)
  if (targetRoute === '/') {
    return currentRoute === '/';
  }

  return currentRoute.includes(targetRoute);
}

function NavLink(props) {
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
      <NavLink href="/reading" key="/reading">Reading</NavLink>
    </nav>
  );
}

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};
