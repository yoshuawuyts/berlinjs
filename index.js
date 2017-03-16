var html = require('choo/html')
var css = require('sheetify')
var choo = require('choo')

var speakerData = [
  {
    name: 'Morgan Roderick',
    uri: 'https://twitter.com/mrgnrdrck',
    title: 'Crafting lovely git narratives to enable software archaeology',
    description: 'In this talk, I will share practices, tips, and techniques that I have learned, which make my everyday life with git easier.'
  },
  {
    name: 'Mims H. Wright',
    uri: 'https://twitter.com/mimshwright',
    title: 'Mimstris: porting an arcade puzzle game to React / Redux',
    description: 'I thought it would be fun to build a tetris clone so I could make weird-shaped pieces with my 4 year-old. But what started out as an innocent game tutorial soon became a semi-obsessive crash course in modern front-end concepts. It also is quite fun to play! Come watch as I retell my journey from nothing to a 60-line package.json file.'
  },
  {
    name: 'Felix Jung',
    uri: 'https://twitter.com/feju',
    title: 'Upgrading to Webpack 2',
    description: 'Webpack is a module bundler for JavaScript applications. The final version 2.2 was released in January. It supports tree-shaking for smaller builds. What I learned when upgrading and optimizing an Angular 1.5 project from Webpack 1 to Webpack 2.'
  }
]

css('tachyons')
css`
  .js-yellow { color: #f7df1e }
  .bg-js-yellow { background-color: #f7df1e }
`

var logo = css`
  :host {
    font-size: 12rem;
    text-shadow:
      -3px 3px black,
      -6px 6px black,
      -9px 9px black,
      -12px 12px black;
  }
`

var app = choo()
app.route('/', mainView)
app.mount('body')

function mainView () {
  return html`
    <body class="sans-serif bg-js-yellow">
      ${nav()}
      <main class="pa4">
        <h2 class="f2 f1-ns b ttu mt0">
          Tuesday March 16th
          <br />
          7pm at co.up
        </h2>
        ${speakers()}
        ${codeOfConduct()}
      </main>
    </body>
  `
}

function nav () {
  return html`
    <nav class="pa4 flex flex-column">
      <h1 class="ttu mv0 pl2">
        <span class=${logo}>
          berlinjs
        </span>
      </h1>
    </nav>
  `
}

function speakers () {
  return html`
    <section class="tl mt4 mt6-ns">
      <div class="mw9 center">
        <h2 class="f3 f2-ns ttu b ma0 bb bw2">
          Featuring amazing speakers
        </h2>
        <section class="lh-copy">
          <div class="cf">
            ${speakerData.map(speaker)}
          </div>
        </section>
      </div>
    </section>
  `
  function speaker (data) {
    return html`
      <article class="pv2 fl w-100 w-third-l pr4-l">
        <h2 class="f4 f3-ns fw6 mb0">
          ${data.name}
        </h2>
        <p class="f5 f4-ns measure lh-copy mt0">
          ${data.description}
        </p>
      </article>
    `
  }
}

function codeOfConduct () {
  return html`
    <section class="tl mt4 mt5-ns">
      <div class="mw9 center">
        <section class="fn fl-l w-100 w-40-l pr4-l">
          <h2 class="f3 f1-ns lh-title fw9 mb3 mt0 pt3 bt bw2">
            We have a Code of Conduct
          </h2>
        </section>
        <section class="lh-copy f5 f4-ns fl mt0-l measure">
          Our goal is to have an awesome, inclusive and safe community meetup
          where people meet, hang out together, chat, listen to talks, exchange
          ideas and make new friends.

          <strong>
            Any harmful or discriminating behaviour
            will not be tolerated and results in the offending person being
            expelled from the meetup.
          </strong>

          For details on what kinds of behaviour are not tolerated and
          consequences for violating these rules, we refer to the
          <a href="http://rubyberlin.github.io/code-of-conduct" class="black link underline">
            Berlin Code of Conduct.
          </a>
        </section>
      </div>
    </section>
  `
}
