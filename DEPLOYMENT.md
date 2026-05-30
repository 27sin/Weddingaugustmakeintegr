# 🚀 Деплой на GitHub Pages

## Быстрый старт

### 1. Создайте репозиторий на GitHub
Создайте новый публичный репозиторий на GitHub (например, `wedding-invitation`)

### 2. Загрузите проект
```bash
git init
git add .
git commit -m "Свадебное приглашение"
git branch -M main
git remote add origin https://github.com/ВАШ-USERNAME/wedding-invitation.git
git push -u origin main
```

### 3. Включите GitHub Pages
1. Откройте ваш репозиторий на GitHub
2. Перейдите в **Settings** → **Pages**
3. В разделе **Source** выберите **GitHub Actions**

### 4. Настройте base path (важно!)

Откройте файл `vite.config.ts` и измените строку:

**Если ваш сайт будет на `https://username.github.io/wedding-invitation/`:**
```typescript
base: process.env.GITHUB_ACTIONS ? '/wedding-invitation/' : '/',
```

**Если у вас кастомный домен или сайт на `https://username.github.io/`:**
```typescript
base: process.env.GITHUB_ACTIONS ? '/' : '/',
```

### 5. Запушьте изменения (если меняли base)
```bash
git add vite.config.ts
git commit -m "Настройка base path"
git push
```

### 6. Готово! 🎉
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
