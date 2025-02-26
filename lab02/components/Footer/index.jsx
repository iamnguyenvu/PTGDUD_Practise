import React from 'react'
import classNames from 'classnames/bind'
import styles from './Footer.module.scss'

const cx = classNames.bind(styles)

function Footer() {
  return (
    <>
      <div className={cx("wrapper")}>
        <div className={cx("container")}>
          <div className={cx("inner")}>
            <div className={cx()}></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer