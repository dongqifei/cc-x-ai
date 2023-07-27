'use client'
import type { FC } from 'react'
import React from 'react'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'
import { TrashIcon } from '@heroicons/react/24/outline'

import s from './style.module.css'
import Popover from '@/app/components/base/popover'

const PinIcon = (
  <svg className="shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.00012 9.99967L8.00012 14.6663M5.33346 4.87176V6.29217C5.33346 6.43085 5.33346 6.50019 5.31985 6.56652C5.30777 6.62536 5.2878 6.6823 5.26047 6.73579C5.22966 6.79608 5.18635 6.85023 5.09972 6.95852L4.0532 8.26667C3.60937 8.82145 3.38746 9.09884 3.38721 9.33229C3.38699 9.53532 3.4793 9.72738 3.63797 9.85404C3.82042 9.99967 4.17566 9.99967 4.88612 9.99967H11.1141C11.8246 9.99967 12.1798 9.99967 12.3623 9.85404C12.5209 9.72738 12.6133 9.53532 12.613 9.33229C12.6128 9.09884 12.3909 8.82145 11.947 8.26667L10.9005 6.95852C10.8139 6.85023 10.7706 6.79608 10.7398 6.73579C10.7125 6.6823 10.6925 6.62536 10.6804 6.56652C10.6668 6.50019 10.6668 6.43085 10.6668 6.29217V4.87176C10.6668 4.79501 10.6668 4.75664 10.6711 4.71879C10.675 4.68517 10.6814 4.6519 10.6903 4.61925C10.7003 4.5825 10.7146 4.54687 10.7431 4.47561L11.415 2.79582C11.611 2.30577 11.709 2.06074 11.6682 1.86404C11.6324 1.69203 11.5302 1.54108 11.3838 1.44401C11.2163 1.33301 10.9524 1.33301 10.4246 1.33301H5.57563C5.04782 1.33301 4.78391 1.33301 4.61646 1.44401C4.47003 1.54108 4.36783 1.69203 4.33209 1.86404C4.29122 2.06074 4.38923 2.30577 4.58525 2.79583L5.25717 4.47561C5.28567 4.54687 5.29992 4.5825 5.30995 4.61925C5.31886 4.6519 5.32526 4.68517 5.32912 4.71879C5.33346 4.75664 5.33346 4.79501 5.33346 4.87176Z" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const EditIcon: FC<{ className?: string }> = ({ className }) => {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M14 11.9998L13.3332 12.7292C12.9796 13.1159 12.5001 13.3332 12.0001 13.3332C11.5001 13.3332 11.0205 13.1159 10.6669 12.7292C10.3128 12.3432 9.83332 12.1265 9.33345 12.1265C8.83359 12.1265 8.35409 12.3432 7.99998 12.7292M2 13.3332H3.11636C3.44248 13.3332 3.60554 13.3332 3.75899 13.2963C3.89504 13.2637 4.0251 13.2098 4.1444 13.1367C4.27895 13.0542 4.39425 12.9389 4.62486 12.7083L13 4.33316C13.5523 3.78087 13.5523 2.88544 13 2.33316C12.4477 1.78087 11.5523 1.78087 11 2.33316L2.62484 10.7083C2.39424 10.9389 2.27894 11.0542 2.19648 11.1888C2.12338 11.3081 2.0695 11.4381 2.03684 11.5742C2 11.7276 2 11.8907 2 12.2168V13.3332Z" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
}

export type IItemOperationProps = {
  className?: string
  isPinned: boolean
  isShowDelete: boolean
  togglePin: () => void
  onDelete: () => void
  onRename: () => void
}

const ItemOperation: FC<IItemOperationProps> = ({
  className,
  isPinned,
  isShowDelete,
  togglePin,
  onDelete,
  onRename,
}) => {
  const { t } = useTranslation()

  return (
    <Popover
      htmlContent={
        <div className='w-full py-1' onClick={(e) => {
          e.stopPropagation()
        }}>
          <div className={cn(s.actionItem, s.deleteActionItem, 'hover:bg-gray-50 group')} onClick={onRename} >
            <EditIcon className={cn(s.deleteActionItemChild, 'shrink-0 w-4 h-4 stroke-current text-gray-500 stroke-2')} />
            <span className={cn(s.actionName, s.deleteActionItemChild)}>{t('explore.sidebar.action.rename')}</span>
          </div>
          <div className={cn(s.actionItem, 'hover:bg-gray-50 group')} onClick={togglePin}>
            {PinIcon}
            <span className={s.actionName}>{isPinned ? t('explore.sidebar.action.unpin') : t('explore.sidebar.action.pin')}</span>
          </div>
          {isShowDelete && (
            <div className={cn(s.actionItem, s.deleteActionItem, 'hover:bg-gray-50 group')} onClick={onDelete} >
              <TrashIcon className={cn(s.deleteActionItemChild, 'shrink-0 w-4 h-4 stroke-current text-gray-500 stroke-2')} />
              <span className={cn(s.actionName, s.deleteActionItemChild)}>{t('explore.sidebar.action.delete')}</span>
            </div>
          )}

        </div>
      }
      trigger='click'
      position='br'
      btnElement={<div />}
      btnClassName={open => cn(className, s.btn, 'h-6 w-6 rounded-md border-none p-1', open && '!bg-gray-100 !shadow-none')}
      className={'!w-[120px] h-fit !z-20'}
    />
  )
}
export default React.memo(ItemOperation)
