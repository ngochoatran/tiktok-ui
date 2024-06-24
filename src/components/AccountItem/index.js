import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/4b85df94ddbc913a995d4d721e417580~c5_300x300.webp?lk3s=a5d48078&nonce=80849&refresh_token=cca6f5daa748856dd454fc4986d0d007&x-expires=1719381600&x-signature=UJ%2Fbst6v%2B9vYn4HtHcP3QPzCd7I%3D&shp=a5d48078&shcp=c1333099" alt="Hoaa" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;