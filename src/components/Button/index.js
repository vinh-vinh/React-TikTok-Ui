import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({
    to,
    href,
    disabled = false,
    primary = false,
    text = false,
    outline = false,
    large,
    small = false,
    rounded = false,
    children,
    className,

    onClick,

    passProps,

    leftIcon,
    rightIcon,
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    // Xóa sự kiện bắt đầu từ on và nó là 1 funtion thì xóa
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        text,
        small,
        large,
        rounded,
        disabled,
        leftIcon,
        rightIcon,
        [className]: className,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
