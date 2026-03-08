# Vue 3 + TypeScript + Vite + Tailwind

текстовая игра

git commit -am "" && git push

деплой проекта:
нужно создать файл .htaccess

вот с такими данными
```
RewriteEngine On
RewriteBase /one-more-chance/

RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [L]
```

и этот файлик заикнуть в папку dist после того как выполнил
npm run build

