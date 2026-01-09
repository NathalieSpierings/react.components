import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { RouterProvider, createBrowserRouter, useNavigation } from 'react-router';
import { Avatar, ConfirmDialog, ConfirmDialogProvider, LayoutProvider, MainLayout, ScrollProvider, SidebarMenuPlacement, Toastr, ToastrProvider, useConfirmDialog, useLayoutContext, useToastr } from './components';
import { SidebarAccount } from './components/Page/Sidebar/SidebarAccount';
import { proxyPrefix } from './config';
import { ColorDefinitions, IconDefinitions, SizeDefinitions } from './lib/utils/definitions';
import { getInitialMenuItem, routes } from './pages/routes';
import SidebarDemo from './pages/SidebarDemo';


const queryClient = new QueryClient();


const TemplateSidebarAccountMenu = () => {


  const auth = {
    name: 'John Do',
  }

  const logout = () => {
    return console.info('Logged out!')
  }

  return (
    <SidebarAccount

      dropdownToggle={{
        prefix: (<Avatar size={SizeDefinitions.Small} icon={IconDefinitions.user} />),
        enableDropdownArrow: false
      }}
      dropdownHeader={{
        borderColor: ColorDefinitions.Surface,
        content: (
          <>
            <span>Welkom &nbsp;</span><strong>{auth ? auth.name : ''}</strong>
          </>
        )
      }}
      menuItems={[
        {
          content: 'Afmelden',
          prefix: (<svg><use xlinkHref="#svg_icon_power" /></svg>),
          onClick: logout
        }]}
    />
  )
}


const TemplateLayout = () => {

  const menuItems = [
    {
      id: 'home',
      title: 'Home',
      tooltip: 'Home',
      iconName: IconDefinitions.home,
      placement: SidebarMenuPlacement.Top,
      url: '/'
    },
    {
      id: 'demo',
      title: 'demo',
      tooltip: 'Demo',
      url: '/demo',
      iconName: IconDefinitions.themes,
      duotone: true,
      placement: SidebarMenuPlacement.Top,
      sidebar: <SidebarDemo />
    },
  ]

  const nav = useNavigation();
  const loading = nav.state === 'loading';
  const { pageTitle, breadcrumbItems } = useLayoutContext();

  return (
    <MainLayout
      loading={loading}
      accountMenu={<TemplateSidebarAccountMenu />}
      currentMenuItem={getInitialMenuItem(location.pathname)}
      pageTitle={pageTitle}
      breadcrumbItems={breadcrumbItems}
      menuItems={menuItems}
    />

  )
}



const TemplateToastr = () => {
  const { toasts, dequeue } = useToastr();

  return (
    <Toastr
      duration={15000}
      toasts={toasts}
      removeToastrItem={dequeue}
    />
  );
}

const TemplateConfimDialog = () => {
  const { items, dequeue } = useConfirmDialog();

  return (
    <ConfirmDialog
      confirmDialogs={items}
      removeConfirmDialog={dequeue}
    />
  );
}


export default function App() {

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <TemplateLayout />,
        children: routes,
      }
    ],
    { basename: proxyPrefix || undefined }
  );

  return (
    <QueryClientProvider client={queryClient}>
      <LayoutProvider>
        <ToastrProvider>
          <ConfirmDialogProvider>
            <ScrollProvider>
              <RouterProvider router={router} />
              <TemplateToastr />
              <TemplateConfimDialog />
            </ScrollProvider>
          </ConfirmDialogProvider>
        </ToastrProvider>
      </LayoutProvider>
    </QueryClientProvider >
  )
}
