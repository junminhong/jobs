import { Outlet, createRootRoute } from '@tanstack/react-router'
import { GITHUB_CONFIG } from '@/lib/config'
import { useI18n } from '@/contexts/I18nContext'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import bannerImg from '@/assets/images/banner.jpg'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const { t } = useI18n()

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="relative text-white py-16 shadow-lg overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bannerImg})` }}
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-end mb-4">
            <LanguageSwitcher />
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-3 drop-shadow-lg">{t.nav.title}</h1>
            <p className="text-lg mb-6 drop-shadow-md">{t.nav.subtitle}</p>
            <a
              href={`https://github.com/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/issues/new/choose`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-cyan-700 px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              ➕ {t.nav.postJob}
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10">
        <Outlet />
      </main>

      <footer className="bg-gradient-to-b from-white to-slate-50 border-t border-slate-200 py-12 mt-16">
        <div className="container mx-auto px-4">
          {/* Main Message */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              ✨ {t.footer.madeWith} ✨
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              {t.footer.tagline}
            </p>
          </div>

          {/* GitHub Badges */}
          <div className="flex justify-center gap-3 mb-6">
            <a
              href={`https://github.com/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/stargazers`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`https://img.shields.io/github/stars/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}?style=social`}
                alt="GitHub stars"
              />
            </a>
            <img
              src={`https://hits.sh/github.com/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}.svg?style=flat-square&label=views&color=0891b2&labelColor=64748b`}
              alt="Visitors"
            />
          </div>

          {/* Star Message */}
          <p className="text-center text-slate-600 mb-8">
            {t.footer.starMessage}
          </p>

          {/* Quick Links */}
          <div className="flex justify-center items-center gap-2 flex-wrap text-sm mb-6">
            <a
              href={`https://github.com/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/issues`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 hover:underline"
            >
              {t.footer.reportBug}
            </a>
            <span className="text-slate-400">•</span>
            <a
              href={`https://github.com/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/issues`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 hover:underline"
            >
              {t.footer.requestFeature}
            </a>
            <span className="text-slate-400">•</span>
            <a
              href={`https://github.com/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/issues/new/choose`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 hover:underline"
            >
              {t.footer.postJob}
            </a>
            <span className="text-slate-400">•</span>
            <a
              href={`https://github.com/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 hover:underline"
            >
              {t.footer.viewOnGitHub}
            </a>
          </div>

          {/* Powered By */}
          <p className="text-center text-sm text-slate-500">
            {t.footer.poweredBy}
          </p>
        </div>
      </footer>
    </div>
  )
}
