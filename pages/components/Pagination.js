import { useBreadcrumbItem, useBreadcrumbs } from 'react-aria';
import React from 'react';


export function Breadcrumbs(props) {
  let { navProps } = useBreadcrumbs(props);
  let children = React.Children.toArray(props.children);

  return (
    <nav {...navProps}>
      <ol style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
        {children.map((child, i) =>
          React.cloneElement(child, { isCurrent: i === children.length - 1 })
        )}
      </ol>
    </nav>
  );
}

export function BreadcrumbItem(props) {
  let ref = React.useRef();
  let { itemProps } = useBreadcrumbItem({ ...props, elementType: 'span' }, ref);
  return (
    <li>
      <span
        {...itemProps}
        ref={ref}
        style={{
          color: props.isDisabled ? 'var(--gray)' : 'var(--blue)',
          textDecoration: props.isCurrent || props.isDisabled
            ? 'none'
            : 'underline',
          fontWeight: props.isCurrent ? 'bold' : null,
          cursor: props.isCurrent || props.isDisabled ? 'default' : 'pointer'
        }}
      >
        {props.children}
      </span>
      {!props.isCurrent &&
        <span aria-hidden="true" style={{ padding: '0 5px' }}>
        </span>}
    </li>
  );
}
