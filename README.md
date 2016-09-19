#Toggl Auto Public

A simple script to automatically turn toggl project to public mode (workspace wide)

## Usage

1. Clone, cd in the app repository.
  `git clone git@github.com:soixantecircuits/toggl-autopublic.git``
  `cd toggl-autopublic`

2. Install dependencies
  `npm i`

3. Configure
  `cp config/config.example.json config/config.json`
  `open config/config.json`

  > Go here: https://toggl.com/app/profile and replace the `xxxx` in `config/config.json` with the token you will find at the bottom of the page you've opened. 

4. Run
  `npm start`

## Information and recommandations 

You should use [avn](https://github.com/wbyoung/avn) coupled with [nvm](https://github.com/creationix/nvm) to benefit from the `.nvmrc` file.


