# 🎓 PartiuIF

> Portal informativo PWA para apresentar os cursos técnicos do IFMS Campus Aquidauana a interessados em ingressar no Instituto Federal.

---

## 📋 Descrição

O **PartiuIF** é uma Progressive Web Application (PWA) desenvolvida em **React + Vite** como projeto avaliativo da disciplina **Construção de Páginas Web IV** do IFMS. A aplicação permite que visitantes conheçam os cursos técnicos oferecidos pelo Campus Aquidauana, favoritem cursos de interesse e acessem informações mesmo sem conexão à internet.

---

## ✅ Funcionalidades implementadas

- **Listagem de cursos** com cards interativos e animados
- **Busca em tempo real** por nome, área ou disciplina
- **Filtro por área** (Tecnologia, Agropecuária, Gestão etc.)
- **Página de detalhe** de cada curso com informações completas
- **Favoritar cursos** persistido via LocalStorage
- **Histórico de buscas** salvo no LocalStorage
- **Registro de cursos visitados** via LocalStorage
- **Toast de feedback** para ações do usuário
- **Toast de status** online/offline automático
- **Indicador de conexão** na navbar (bolinha verde/cinza)
- **Funcionamento offline** via Service Worker + LocalStorage
- **Navbar responsiva** com menu hamburguer no mobile
- **4 páginas**: Home, Cursos, Detalhe do Curso, Sobre o IFMS
- **PWA completa**: manifest, service worker, HTTPS-ready, instalável

---

## 🚀 Instruções de execução

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/partiu-if.git
cd partiu-if

# 2. Instale as dependências
npm install

# 3. Rode em modo desenvolvimento
npm run dev

# 4. Abra no navegador
# http://localhost:5173
```

### Build para produção (PWA completa)

```bash
npm run build
npm run preview
# http://localhost:4173


## 📁 Estrutura do projeto

```
partiu-if/
├── public/
│   └── icons/              # Ícones da PWA (todos os tamanhos)
├── src/
│   ├── components/
│   │   ├── layout/         # Componentes estruturais (Navbar, Footer, Layout)
│   │   └── ui/             # Componentes reutilizáveis (Button, Input, Toast, Badge, CourseCard, EmptyState)
│   ├── context/
│   │   └── AppContext.jsx  # Context global: toast + status online
│   ├── data/
│   │   └── courses.js      # Dados dos cursos do IFMS Aquidauana
│   ├── hooks/
│   │   ├── useFavorites.js # Hook para gerenciar favoritos
│   │   └── useOnlineStatus.js # Hook para detectar online/offline
│   ├── pages/
│   │   ├── Home.jsx        # Tela inicial com hero, stats e destaques
│   │   ├── Courses.jsx     # Listagem com busca e filtros
│   │   ├── CourseDetail.jsx # Detalhe do curso selecionado
│   │   └── About.jsx       # Sobre o IFMS
│   ├── utils/
│   │   └── localStorage.js # Funções de leitura/escrita no LocalStorage
│   ├── App.jsx             # Rotas principais
│   ├── main.jsx            # Ponto de entrada React
│   └── index.css           # Design tokens e reset global
├── vite.config.js          # Config Vite + plugin PWA (manifest + workbox)
├── index.html              # HTML base com meta tags PWA
└── README.md
```

---

## 🔄 Fluxo da aplicação

```
Usuário abre o app
       ↓
    Home (/)
  ┌────────────────────────────────────┐
  │  Hero, estatísticas, destaques     │
  │  Botão "Ver todos os cursos"       │
  └──────────────┬─────────────────────┘
                 ↓
         Cursos (/cursos)
  ┌─────────────────────────────────────┐
  │  Campo de busca + filtro por área   │
  │  Grid de CourseCards                │
  │  Click no card → salva no LS       │
  └──────────────┬──────────────────────┘
                 ↓
    Detalhe (/cursos/:id)
  ┌──────────────────────────────────────┐
  │  Infos completas do curso            │
  │  Botão favoritar (salva no LS)       │
  │  Link para processo seletivo         │
  └──────────────────────────────────────┘

Sempre disponível:
  • Navbar (links + indicador online/offline)
  • Toast (feedback de ações e mudança de conexão)
  • Página /sobre com história e valores do IFMS
```

**LocalStorage usado em:**
- `partiu_if_favorites` — IDs dos cursos favoritados
- `partiu_if_search_history` — Últimas 5 buscas realizadas
- `partiu_if_visited_courses` — Cursos já visitados

---

## 🏁 Considerações finais

### Dificuldades encontradas
- Configuração do `vite-plugin-pwa` para gerar o manifest e workbox corretamente
- Garantir que o Service Worker não entrasse em conflito com o modo de desenvolvimento do Vite
- Manter o estado dos favoritos sincronizado entre múltiplos componentes sem Redux (resolvido com hooks customizados + Context)
- Estilizar componentes PWA-friendly que funcionem bem tanto instalados quanto no browser

### Possíveis melhorias
- Adicionar página de favoritos dedicada
- Notificações push para novos processos seletivos
- Integração com API real do IFMS
- Mapa interativo dos campi do MS
- Modo de comparação entre cursos
- Animações de página com Framer Motion
- Testes unitários com Vitest + React Testing Library

*Projeto desenvolvido para a disciplina Construção de Páginas Web IV · IFMS · Prof.ª Milena Alegre*
