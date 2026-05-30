# 🚀 Деплой на GitHub Pages

## Быстрый старт

### 1. Создайте репозиторий на GitHub
Создайте новый публичный репозиторий на GitHub с именем `Weddingaugustmakeintegr`

### 2. Загрузите проект
```bash
git init
git add .
git commit -m "Свадебное приглашение"
git branch -M main
git remote add origin https://github.com/ВАШ-USERNAME/Weddingaugustmakeintegr.git
git push -u origin main
```

### 3. Включите GitHub Pages
1. Откройте ваш репозиторий на GitHub
2. Перейдите в **Settings** → **Pages**
3. В разделе **Source** выберите **GitHub Actions**

### 4. Base path уже настроен! ✅

В файле `vite.config.ts` уже указан правильный путь для репозитория `Weddingaugustmakeintegr`:
```typescript
base: process.env.GITHUB_ACTIONS ? '/Weddingaugustmakeintegr/' : '/',
```

Ваш сайт будет доступен по адресу: `https://ВАШ-USERNAME.github.io/Weddingaugustmakeintegr/`

### 5. Готово! 🎉
- Перейдите во вкладку **Actions** и дождитесь завершения деплоя
- Ваш сайт будет доступен по адресу, указанному в **Settings → Pages**

## Обновление сайта

Просто вносите изменения и пушьте в ветку `main`:
```bash
git add .
git commit -m "Описание изменений"
git push
```

Сайт автоматически обновится через 1-2 минуты.

## Кастомный домен (опционально)

1. В **Settings → Pages** укажите ваш домен
2. Настройте DNS записи у вашего регистратора домена
3. Измените `base: '/'` в `vite.config.ts`

## Локальная разработка

```bash
pnpm install
pnpm dev
```

Откройте http://localhost:5173
