var html = require('choo/html')
var css = require('sheetify')
var choo = require('choo')

var speakerData = require('./speakers.json')
var date = {
  dayOfWeek: 'Tuesday',
  time: '7pm',
  date: 'March 16th'
}

css('tachyons')

css`
  .js-yellow { color: #f7df1e }
  .bg-js-yellow { background-color: #f7df1e }
`

var logo = css`
  :host {
    font-size: 4rem;
    text-shadow:
      -1px 1px black,
      -2px 2px black,
      -3px 3px black,
      -4px 4px black;
  }

  @media screen and (min-width: 60em) {
    :host {
      font-size: 12rem;
      text-shadow:
        -3px 3px black,
        -6px 6px black,
        -9px 9px black,
        -12px 12px black;
    }
  }
`

var app = choo()
app.route('/', mainView)
app.mount('body')

function mainView () {
  return html`
    <body class="sans-serif bg-js-yellow">
      ${nav()}
      <main class="ph4">
        ${speakers()}
        ${codeOfConduct()}
        ${sponsor()}
      </main>
      ${footer()}
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
      <h2 class="f2 f1-ns b ttu mt0 pt5">
        ${date.dayOfWeek} ${date.date}
        <br class="dn db-l"/>
        ${date.time} at
        <a href="https://goo.gl/maps/u6k4zWKcw5y" class="black link underline">
          co.up
        </a>
      </h2>
    </nav>
  `
}

function speakers () {
  return html`
    <section class="pt4 pt5-ns">
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
    <section class="mt4 mt5-ns">
      <div class="mw9 center cf">
        <section class="fn fl-l w-100 w-40-l pr4-l">
          <h2 class="f3 f1-ns lh-title fw9 mb3 mt0 pt3 bt bw2">
            We care about human beings
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

function sponsor () {
  return html`
    <section class="mt4 mt5-ns">
      <div class="mw9 center">
        <h2 class="f3 f1-ns lh-title fw9 mb3 mt0 pv3 bt bb bw2">
          Kindly sponsored by
          <a href="http://co-up.de/" class="black link underline">
            co.up coworking
          </a>
        </h2>
      </div>
    </section>
  `
}

function footer () {
  return html`
    <footer class="pa4 pv5-l cf">
      <div class="f5 lh-copy fl w-100">
        <div class="fl-ns w-100 w-20-l pr3-m pr4-l underline">
        <a href="http://twitter.com/berlinjs" class="black link dim b">
          We're on Twitter
        </a>
      </div>
      <div class="fl-ns w-100 w-20-l pr3-m pr4-l underline">
        <a href="http://www.meetup.com/Berlin-JS/" class="black link dim b">
          And on Meetup
        </a>
      </div>
      <div class="fl-ns w-100 w-20-l pr3-m pr4-l underline">
        <a href="https://berlinjs-slack.herokuapp.com/" class="black link dim b">
          We also have a Slack
        </a>
      </div>
      <div class="fl-ns w-100 w-20-l pr3-m pr4-l underline">
        <a href="http://groups.google.com/group/js-berlin" class="black link dim b">
          And a mailing list
        </a>
      </div>
    </footer>
  `
}
