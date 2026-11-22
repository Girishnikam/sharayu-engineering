import { Route, Routes } from 'react-router'
import '@fontsource/oswald/500.css'
import '@fontsource/oswald/600.css'
import '@fontsource/oswald/700.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/dancing-script/600.css'
import './styles/global.css'
import Layout from './components/layout/Layout'
import AboutPage from './pages/AboutPage'
import AreasPage from './pages/AreasPage'
import AssociationPage from './pages/AssociationPage'
import ClientsPage from './pages/ClientsPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import IndustriesPage from './pages/IndustriesPage'
import NotFoundPage from './pages/NotFoundPage'
import ProcessPage from './pages/ProcessPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import ServicesPage from './pages/ServicesPage'
import { notFoundRoute, routes } from './routes/routeMeta'

// Maps route ids from routeMeta.js to page components.
const pages = {
  home: HomePage,
  about: AboutPage,
  services: ServicesPage,
  service: ServiceDetailPage,
  process: ProcessPage,
  industries: IndustriesPage,
  clients: ClientsPage,
  association: AssociationPage,
  areas: AreasPage,
  contact: ContactPage,
  notFound: NotFoundPage,
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {[...routes, notFoundRoute].map(({ id, path }) => {
          const Page = pages[id]
          return path === '/' ? (
            <Route key={id} index element={<Page />} />
          ) : (
            <Route key={id} path={path} element={<Page />} />
          )
        })}
      </Route>
    </Routes>
  )
}
