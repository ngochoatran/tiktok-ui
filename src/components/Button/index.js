import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './Button.module.scss'

const cx = classNames.bind(styles);

function Button({ to, href, primary = false, outline = false, text = false, disabled = false, rounded = false, small = false, large = false, children, className, onClick }) {
    let Comp = 'button';
    const props = {
        onClick,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        text,
        disabled,
        rounded,
        small,
        large
    });

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
