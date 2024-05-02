import { Link, Outlet, useParams } from 'react-router-dom'
import { cn } from '../../utils'
import {
  DimoNavigationState,
  NavigationPage,
  useDimoNav,
} from '../../router.config'
export default function Root() {
  const params = useParams() as DimoNavigationState
  const dimoNav = useDimoNav()
  const pages = Object.keys(dimoNav.pages) as NavigationPage[]
  return (
    <div className='flex flex-1 flex-col min-h-screen min-w-screen'>
      <header className='shrink-0 border-b border-border-primary bg-white'>
        <div className='mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8'>
          <div className='flex-none flex items-center space-x-3'>
            <Link to='/design-system/components' className='text-label1'>
              AWDS
            </Link>
            <div className='text-xs leading-5 font-semibold bg-slate-400/10 rounded-full py-1 px-3 flex items-center'>
              v3.3.2
            </div>
          </div>
          <div className='flex-1' />
          <div className='flex-none relative hidden lg:flex items-center ml-auto'>
            <ul className='flex-none flex items-center space-x-8 text-md font-bold'>
              {pages.map(page => (
                <li key={page}>
                  <Link to={`/design-system/${page}`}>
                    <span
                      className={cn('capitalize', {
                        'text-brand-primary': params.page === page,
                      })}
                    >
                      {page}
                    </span>
                  </Link>
                </li>
              ))}
              {/* <li>
                <Link to='/design-system/blog'>
                  <span>Blog</span>
                </Link>
              </li> */}
            </ul>
            <div className='flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800'>
              <Link to='#'>
                <span>
                  <svg
                    viewBox='0 0 24 24'
                    fill='none'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='w-6 h-6'
                  >
                    <path
                      d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                      className='stroke-slate-400 dark:stroke-slate-500'
                    ></path>
                    <path
                      d='M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836'
                      className='stroke-slate-400 dark:stroke-slate-500'
                    ></path>
                  </svg>
                </span>
              </Link>
              <Link
                to='#'
                className='ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300'
              >
                <span>
                  <span className='sr-only'>DDS on GitHub</span>
                  <svg
                    viewBox='0 0 16 16'
                    className='w-5 h-5'
                    fill='currentColor'
                    aria-hidden='true'
                  >
                    <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'></path>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <Outlet />
    </div>
  )
}
