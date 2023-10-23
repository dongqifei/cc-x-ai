'use client'

import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import classNames from 'classnames'

type IconClassNameProps = {
  className?: string
}

const SelectedChatIcon = ({ className }: IconClassNameProps) => (
  <svg width="16" height="16" className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M8.00016 1.3335C4.31826 1.3335 1.3335 4.31826 1.3335 8.00016C1.3335 8.88571 1.50651 9.7325 1.8212 10.5074C1.84962 10.5773 1.86597 10.6178 1.87718 10.6476L1.88058 10.6568L1.88016 10.66C1.87683 10.6846 1.87131 10.7181 1.86064 10.7821L1.46212 13.1732C1.44424 13.2803 1.42423 13.4001 1.41638 13.5041C1.40782 13.6176 1.40484 13.7981 1.48665 13.9888C1.58779 14.2246 1.77569 14.4125 2.0115 14.5137C2.20224 14.5955 2.38274 14.5925 2.49619 14.5839C2.60025 14.5761 2.72006 14.5561 2.82715 14.5382L5.2182 14.1397C5.28222 14.129 5.31576 14.1235 5.34036 14.1202L5.34353 14.1197L5.35274 14.1231C5.38258 14.1344 5.42298 14.1507 5.49297 14.1791C6.26783 14.4938 7.11462 14.6668 8.00016 14.6668C11.6821 14.6668 14.6668 11.6821 14.6668 8.00016C14.6668 4.31826 11.6821 1.3335 8.00016 1.3335ZM4.00016 8.00016C4.00016 7.44788 4.44788 7.00016 5.00016 7.00016C5.55245 7.00016 6.00016 7.44788 6.00016 8.00016C6.00016 8.55245 5.55245 9.00016 5.00016 9.00016C4.44788 9.00016 4.00016 8.55245 4.00016 8.00016ZM7.00016 8.00016C7.00016 7.44788 7.44788 7.00016 8.00016 7.00016C8.55245 7.00016 9.00016 7.44788 9.00016 8.00016C9.00016 8.55245 8.55245 9.00016 8.00016 9.00016C7.44788 9.00016 7.00016 8.55245 7.00016 8.00016ZM11.0002 7.00016C10.4479 7.00016 10.0002 7.44788 10.0002 8.00016C10.0002 8.55245 10.4479 9.00016 11.0002 9.00016C11.5524 9.00016 12.0002 8.55245 12.0002 8.00016C12.0002 7.44788 11.5524 7.00016 11.0002 7.00016Z" fill="#FFFFFF" />
  </svg>
)

const ChatIcon = ({ className }: IconClassNameProps) => (
  <svg width="16" height="16" className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 8H5.00667M8 8H8.00667M11 8H11.0067M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 8.7981 2.15582 9.5598 2.43871 10.2563C2.49285 10.3897 2.51992 10.4563 2.532 10.5102C2.54381 10.5629 2.54813 10.6019 2.54814 10.6559C2.54814 10.7111 2.53812 10.7713 2.51807 10.8916L2.12275 13.2635C2.08135 13.5119 2.06065 13.6361 2.09917 13.7259C2.13289 13.8045 2.19552 13.8671 2.27412 13.9008C2.36393 13.9393 2.48812 13.9186 2.73651 13.8772L5.10843 13.4819C5.22872 13.4619 5.28887 13.4519 5.34409 13.4519C5.3981 13.4519 5.43711 13.4562 5.48981 13.468C5.54369 13.4801 5.61035 13.5072 5.74366 13.5613C6.4402 13.8442 7.2019 14 8 14ZM5.33333 8C5.33333 8.1841 5.1841 8.33333 5 8.33333C4.81591 8.33333 4.66667 8.1841 4.66667 8C4.66667 7.81591 4.81591 7.66667 5 7.66667C5.1841 7.66667 5.33333 7.81591 5.33333 8ZM8.33333 8C8.33333 8.1841 8.1841 8.33333 8 8.33333C7.81591 8.33333 7.66667 8.1841 7.66667 8C7.66667 7.81591 7.81591 7.66667 8 7.66667C8.1841 7.66667 8.33333 7.81591 8.33333 8ZM11.3333 8C11.3333 8.1841 11.1841 8.33333 11 8.33333C10.8159 8.33333 10.6667 8.1841 10.6667 8C10.6667 7.81591 10.8159 7.66667 11 7.66667C11.1841 7.66667 11.3333 7.81591 11.3333 8Z" stroke="#344054" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
)
type ExploreNavProps = {
  className?: string
}

const AIChatNav = ({
  className,
}: ExploreNavProps) => {
  const { t } = useTranslation()
  const selectedSegment = useSelectedLayoutSegment()
  const actived = selectedSegment === 'ai-chat'

  return (
    <Link href="/ai-chat/chat" className={classNames(
      className, 'group',
      // [Hekaiji 2023-10-23]: 调整导航栏选中的样式
      actived && 'bg-primary-600 shadow-md',
      actived ? 'text-white' : 'text-gray-500 hover:bg-gray-200',
    )}>
      {
        actived
          ? <SelectedChatIcon className='mr-2 w-4 h-4'/>
          : <ChatIcon className='mr-2 w-4 h-4'/>
      }
      {t('common.menus.aiChat')}
    </Link>
  )
}

export default AIChatNav
