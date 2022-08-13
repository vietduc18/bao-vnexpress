import classNames from 'classnames/bind';
import styles from './Section.module.scss';

const cx = classNames.bind(styles);

function Section() {
    return <section className={cx('section wrap-main-nav')}></section>;
}

export default Section;
