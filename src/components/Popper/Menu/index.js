import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };
    return (
        <Tippy
            delay={[0, 500]}
            placement="bottom-end"
            interactive
            render={(attrs) => (
                <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {/* Nó không nhận được ở đâu vì nó nằm trong phần header */}
            {/* <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
            </button> */}

            {children}
        </Tippy>
    );
}

export default Menu;
