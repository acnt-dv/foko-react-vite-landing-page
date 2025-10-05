import {defineConfig, loadEnv} from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({mode}) => {
    // Load all env variables (no prefix filter) for this mode
    const env = loadEnv(mode, process.cwd(), '')

    // Default to production API if not provided
    const apiTarget = env.VITE_API_TARGET || 'https://api.fokostudio.com'

    const isDev = mode === 'development'

    return {
        plugins: [
            react(),
            tailwindcss(),
        ],
        // The Vite dev-server proxy is ONLY used locally. In production you must call the full API URL.
        server: {
            proxy: isDev
                ? {
                    '/api': {
                        target: apiTarget,
                        changeOrigin: true,
                        secure: true,
                        // keep the /api prefix
                        rewrite: (path) => path.replace(/^\/api/, '/api'),
                    },
                }
                : undefined,
            port: 3000,
            host: true,
        },
        define: {
            // Expose the resolved API base to client code at build time if needed
            __API_BASE__: JSON.stringify(env.VITE_API_BASE_URL || ''),
        },
    }
})
