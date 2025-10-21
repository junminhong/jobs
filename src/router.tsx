import { createRouter as createTanStackRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

export function createRouter() {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '') || '/'

  const router = createTanStackRouter({
    routeTree,
    scrollRestoration: true,
    basepath: basePath,
  })

  return router
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}
