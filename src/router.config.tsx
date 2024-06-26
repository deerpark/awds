import type { Router } from '@remix-run/router'
import {
  createBrowserRouter,
  /* Navigate,  */ DataRouteObject,
} from 'react-router-dom'
import { RootLayout, Error, Layout } from './components/layout'
import App from './App'
import { useState, useMemo } from 'react'

export const navigation = {
  docs: [],
  components: [
    {
      name: 'forms',
      href: '/design-system/components/forms',
      children: [
        {
          name: 'button',
          href: '/design-system/components/forms/button',
          children: [
            { name: 'solid', href: '#solid' },
            { name: 'outline', href: '#outline' },
            { name: 'ghost', href: '#ghost' },
            { name: 'group-solid', href: '#group-solid' },
            { name: 'group-outline', href: '#group-outline' },
            { name: 'ghost-icon-only', href: '#ghost-icon-only' },
          ],
        },
        { name: 'text', href: '/design-system/components/forms/text' },
        {
          name: 'select-box',
          href: '/design-system/components/forms/select-box',
        },
      ],
    },
    { name: 'lists', href: '/design-system/components/lists' },
    { name: 'data-display', href: '/design-system/components/data-display' },
    { name: 'headings', href: '/design-system/components/headings' },
    {
      name: 'application-shells',
      href: '/design-system/components/application-shells',
    },
    { name: 'feedback', href: '/design-system/components/feedback' },
    {
      name: 'navigation',
      href: '/design-system/components/navigation',
      children: [
        {
          name: 'navbars',
          href: '/design-system/components/navigation/navbars',
        },
        {
          name: 'pagination',
          href: '/design-system/components/navigation/pagination',
        },
        { name: 'tabs', href: '/design-system/components/navigation/tabs' },
      ],
    },
    { name: 'overlays', href: '/design-system/components/overlays' },
    { name: 'elements', href: '/design-system/components/elements' },
    { name: 'layout', href: '/design-system/components/layout' },
  ],
  template: [],
  example: [],
}

export const routes: DataRouteObject[] = [
  {
    path: '/', // 메인
    id: 'root',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        id: 'root-index',
        element: <App />,
      },
      {
        path: 'design-system', // design-system
        id: 'design-system',
        element: <Layout />,
        errorElement: <Error />,
        children: [
          /* {
            index: true,
            id: 'design-system-index',
            element: <Navigate to={`/design-system/components`} replace={true} />, // 리디렉션 : design-system/components
          }, */
          {
            path: ':page',
            id: 'page',
            element: <Layout.Sub />,
            errorElement: <Error />,
            children: [
              /* {
                index: true,
                id: 'components-index',
                element: <Navigate to={`/design-system/components/forms`} replace={true} />, // 리디렉션 : design-system/components/forms/button
              }, */
              {
                path: ':component',
                id: 'components-component',
                element: <Layout.Contents />,
                errorElement: <Error />,
                children: [
                  {
                    index: true,
                    id: 'components-index',
                    element: <Layout.SubContents />,
                  },
                  {
                    path: ':section',
                    id: 'components-forms-section',
                    element: <Layout.SubContents />,
                    errorElement: <Error />,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]

export const router: Router = createBrowserRouter(routes)

type NavigationType = typeof navigation
type NavigationPageObj = NavigationType[keyof NavigationType][number]
export type NavigationPage = keyof NavigationType
type NavigationComponent = NavigationPageObj['name']
type NavigationComponentObj = Extract<
  NavigationPageObj,
  { children: unknown }
>['children'][number]
type NavigationSection = NavigationComponentObj['name']
type NavigationSectionObject = Extract<
  NavigationComponentObj,
  { children: unknown }
>['children'][number]
type NavigationContentsHash = NavigationSectionObject['name']

export type DimoNavigationState = {
  page: NavigationPage
  component?: NavigationComponent
  section?: NavigationSection
  hash?: NavigationContentsHash
}

export function useDimoNav(
  params: DimoNavigationState = {
    page: 'components',
  }
) {
  const [dimoNav, setDimoNav] = useState<DimoNavigationState>(params)

  const { page, component, section, hash } = dimoNav

  /**
   * 컴포넌트 객체 목록 ex) [{forms},{lists}],
   */
  const pages = navigation

  /**
   * 컴포넌트 객체 목록 ex) [{forms},{lists}],
   */
  const components = useMemo(() => page && navigation[page], [page])

  /**
   * 컴포넌트 하위 섹션 객체 목록 ex) [{button},{text}],
   */
  const sections = useMemo(() => {
    const parent = components.find(c => c.name === component)
    return parent && 'children' in parent ? parent.children : undefined
  }, [components, component])

  /**
   * 컨텐츠 해시 객체 목록 ex) [{solid},{outline}],
   */
  const hashs = useMemo(() => {
    const parent = sections && sections.find(c => c.name === section)
    return parent && 'children' in parent ? parent.children : undefined
  }, [sections, section])

  /**
   * 현재 하이라이트 된 객체
   */
  const current = useMemo(() => {
    return {
      page: navigation[page],
      component: components && components.find(c => c.name === component),
      section: sections && sections.find(s => s.name === section),
      hash: hashs && hashs.find(h => h.name === hash),
    }
  }, [components, sections, hashs, page, component, section, hash])

  return {
    ...dimoNav,
    pages,
    components,
    sections,
    hashs,
    current,
    setDimoNav,
  }
}
