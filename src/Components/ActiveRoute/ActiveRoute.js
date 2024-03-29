import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function ActiveRoute({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{ borderBottom: match ? "2px solid #818382" : "none" } }
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default ActiveRoute;