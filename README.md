# 📱 Automação Mobile Avançada - WebdriverIO & BDD - MyDemoApp

Este repositório contém um framework de automação mobile de alto nível para o aplicativo **MyDemoApp** da Sauce Labs. Ele utiliza **WebdriverIO** com **Cucumber** para uma abordagem BDD, implementando uma arquitetura escalável preparada para execuções locais e em nuvem (**Sauce Labs**).

---

## 📋 Funcionalidades Automatizadas

### 🛍️ Fluxo de Compra Parametrizado

* **BDD (Gherkin):** Cenários escritos em linguagem de negócio, permitindo testes legíveis e organizados.
* **Data-Driven (Scenario Outline):** Execução de testes em massa para diferentes produtos (Backpack, Yellow Backpack) usando tabelas de exemplos.
* **Gestos Customizados:** Implementação de **Scroll/Swipe** manual via `pointerActions` na `BasePage` para navegar por listas dinâmicas.

---

## 🛠️ Tecnologias Utilizadas

* **WebdriverIO (v9)** — Framework de automação.
* **Appium (v3)** — Servidor de automação mobile.
* **Cucumber Framework** — Suporte a BDD e Step Definitions.
* **Sauce Labs Service** — Integração nativa para execução em dispositivos reais ou emuladores na nuvem.
* **UiAutomator2** — Driver de interação para Android.

---

## 🏗️ Arquitetura do Projeto

O projeto utiliza o padrão **Page Object Model (POM)** com herança de classes:

* **BasePage:** Centraliza métodos comuns, como a lógica de rolagem da tela (`arrasta_para_cima`).
* **ProductsPage:** Mapeamento da vitrine de produtos e lógica de seleção por `index`.
* **ProductDetailPage:** Validações de preço, nome e ação de adicionar ao carrinho.
* **CartPage:** Validação final dos itens no carrinho de compras.

---

## 📁 Estrutura de Pastas

```text
├── features/
│   └── comprar_produto.feature   # Cenários em Gherkin
├── step-definitions/
│   └── compra.steps.js           # Orquestração entre BDD e Pages
├── pages/
│   ├── base.page.js              # Classe pai com métodos globais
│   ├── products.page.js          # Mapeamento da Home/Vitrine
│   ├── product_details.page.js   # Detalhes do item selecionado
│   └── cart.page.js              # Checkout e conferência
├── config/
│   ├── local.conf.js             # Configuração para emulador local
│   └── sauce.conf.js             # Configuração para nuvem (Sauce Labs)
├── package.json                  # Dependências e scripts de execução
└── README.md                     # Documentação

```

---

## 🚀 Como Executar o Projeto

1. **Instale as dependências:**
```bash
npm install

```


2. **Execução Local (Emulador):**
```bash
npm run wdio

```


3. **Execução em Nuvem (Sauce Labs):**
```bash
npm run sauce-emulator

```



---

## 💡 Diferenciais Técnicos

* **Hooks de Ciclo de Vida:** Uso de `After` hooks para resetar o estado do aplicativo (`terminateApp` / `activateApp`) entre os cenários, garantindo isolamento total dos testes sem perda de performance.
* **Seletores Inteligentes:** Uso de `UiSelector().instance(index)` para lidar com elementos repetidos na interface Android.
* **Cross-Environment:** Pronto para rodar em diferentes ambientes apenas alternando o arquivo de configuração.
