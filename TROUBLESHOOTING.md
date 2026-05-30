# 🔧 Решение проблем с деплоем

## Проблема: Сборка не начинается после push

### Шаг 1: Проверьте, что файл workflow запушен

Откройте ваш репозиторий на GitHub и проверьте:
```
https://github.com/ВАШ-USERNAME/Weddingaugustmakeintegr/tree/main/.github/workflows
```

Должен быть файл `deploy.yml`. Если его нет:

```bash
# Убедитесь, что файл добавлен в git
git status

# Если файл не добавлен:
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions workflow"
git push
```

### Шаг 2: Проверьте название ветки

Workflow запускается только при push в ветку **`main`**. Проверьте текущую ветку:

```bash
git branch
```

Если вы в другой ветке (например, `master`), нужно либо:

**Вариант A: Переименовать ветку**
```bash
git branch -M main
git push -u origin main
```

**Вариант B: Изменить workflow для другой ветки**

Отредактируйте `.github/workflows/deploy.yml`, строка 6:
```yaml
on:
  push:
    branches:
      - master  # Или ваше название ветки
```

### Шаг 3: Включите GitHub Actions

1. Откройте ваш репозиторий на GitHub
2. Перейдите в **Settings** → **Actions** → **General**
3. В разделе **Actions permissions** выберите:
   - ✅ **"Allow all actions and reusable workflows"**
4. В разделе **Workflow permissions** выберите:
   - ✅ **"Read and write permissions"**
5. Нажмите **Save**

### Шаг 4: Настройте GitHub Pages

1. **Settings** → **Pages**
2. **Source**: выберите **"GitHub Actions"** (не "Deploy from a branch")
3. Сохраните изменения

### Шаг 5: Запустите workflow вручную

1. Перейдите во вкладку **Actions** в вашем репозитории
2. Слева выберите **"Deploy to GitHub Pages"**
3. Справа нажмите **"Run workflow"** → **"Run workflow"**

Это должно запустить сборку вручную.

### Шаг 6: Проверьте логи ошибок

Если workflow запустился, но упал:

1. Перейдите в **Actions**
2. Кликните на неудачный workflow
3. Посмотрите логи ошибок в каждом шаге

## Частые ошибки

### Ошибка: "pnpm-lock.yaml not found"

Решение:
```bash
# Создайте lockfile
pnpm install

# Добавьте в git
git add pnpm-lock.yaml
git commit -m "Add pnpm lockfile"
git push
```

### Ошибка: "Permission denied"

1. **Settings** → **Actions** → **General**
2. **Workflow permissions** → выберите **"Read and write permissions"**
3. Перезапустите workflow

### Ошибка при сборке: "Command not found: vite"

Убедитесь, что в `package.json` есть скрипт build:
```json
"scripts": {
  "build": "vite build"
}
```

## Проверочный чеклист

- [ ] Файл `.github/workflows/deploy.yml` существует в репозитории
- [ ] Push сделан в ветку `main` (или ветку, указанную в workflow)
- [ ] GitHub Actions включены (Settings → Actions)
- [ ] Workflow permissions = "Read and write permissions"
- [ ] GitHub Pages Source = "GitHub Actions"
- [ ] Файл `pnpm-lock.yaml` запушен в репозиторий
- [ ] В `package.json` есть скрипт `"build": "vite build"`

## Всё ещё не работает?

Попробуйте альтернативный workflow. Создайте новый файл `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          
      - uses: pnpm/action-setup@v4
        with:
          version: 8
          
      - run: pnpm install
      - run: pnpm build
      
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - uses: actions/deploy-pages@v4
```

Замените файл и попробуйте снова.
