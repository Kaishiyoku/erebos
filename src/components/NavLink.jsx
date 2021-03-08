import {Link} from '@reach/router';
import clsx from 'clsx';

const NavLink = (props) => (
    <Link
        {...props}
        getProps={({isCurrent}) => {
            return {
                className: clsx(props.className, {'border-blue-500': isCurrent, 'border-transparent': !isCurrent}),
            };
        }}
    />
);

export default NavLink;