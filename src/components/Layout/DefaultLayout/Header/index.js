import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

import styles from './Header.module.scss';
import { faMagnifyingGlass, faUserLarge } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h1>
                    <a href="/" className={cx('logo')}>
                        <img
                            src="https://s1.vnecdn.net/vnexpress/restruct/i/v636/v2_2019/pc/graphics/logo.svg"
                            alt="Bao VnExpress"
                        />
                    </a>
                </h1>
                <span className={cx('time-now')}>Thứ bảy, 13/8/2022</span>
                <div className={cx('right')}>
                    <a href="/tin-tuc-24h" className={cx('btn-24hqua')} title="Mới nhất">
                        <FontAwesomeIcon className={cx('icon24h')} icon={faClock} />
                        Mới nhất
                    </a>
                    <a href="https://e.vnexpress.net/" className={cx('evne')} title="VnExpress International">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpQMDeSzitCboC7Roxw11Mdfj4WGTr84bvjHhLHFv7HqYmfal1Ocq6RMkCX9NlvQ-fU4o&usqp=CAU"
                            alt="logo"
                        />
                        International
                    </a>
                    <form className={cx('serach')}>
                        <input type="text" placeholder="Tìm kiếm" />
                        <button className={cx('btn-search')}>
                            <FontAwesomeIcon className={cx('icon-serach')} icon={faMagnifyingGlass} />
                        </button>
                    </form>
                    <div className={cx('login')}>
                        <a href="/" title="Đặng nhập">
                            <FontAwesomeIcon className={cx('icon-login')} icon={faUserLarge} />
                            Đăng nhập
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
